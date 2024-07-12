"use client";

import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import Navbar from "@/components/Navbar/Navbar";

const Page = () => {
  const { data: session, status } = useSession();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [editingNote, setEditingNote] = useState(null);

  useEffect(() => {
    const fetchUserAndNotes = async () => {
      if (status === "authenticated" && session?.user?.email) {
        try {
          // Fetch user data
          const userResponse = await fetch("/api/users", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: session.user.email }),
          });
          const userData = await userResponse.json();
          setUser(userData[0]);

          // Fetch notes
          const notesResponse = await fetch(
            `/api/notes?email=${encodeURIComponent(session.user.email)}`
          );
          const notesData = await notesResponse.json();
          setNotes(notesData);
        } catch (error) {
          console.error("Error fetching data:", error);
        } finally {
          setLoading(false);
        }
      } else if (status !== "loading") {
        setLoading(false);
      }
    };

    fetchUserAndNotes();
  }, [session, status]);

  const addNote = async () => {
    if (!newNote.trim()) return;
    try {
      const response = await fetch("/api/notes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: session.user.email, content: newNote }),
      });
      const addedNote = await response.json();
      setNotes([addedNote, ...notes]);
      setNewNote("");
    } catch (error) {
      console.error("Error adding note:", error);
    }
  };

  const updateNote = async (id, content) => {
    try {
      const response = await fetch(`/api/notes/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: session.user.email, content }),
      });
      const updatedNote = await response.json();
      setNotes(notes.map((note) => (note.id === id ? updatedNote : note)));
      setEditingNote(null);
    } catch (error) {
      console.error("Error updating note:", error);
    }
  };

  const deleteNote = async (id) => {
    try {
      await fetch(
        `/api/notes/${id}?email=${encodeURIComponent(session.user.email)}`,
        {
          method: "DELETE",
        }
      );
      setNotes(notes.filter((note) => note.id !== id));
    } catch (error) {
      console.error("Error deleting note:", error);
    }
  };

  if (status === "loading" || loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  if (!session) {
    return (
      <>
        <Navbar />
        <div className="flex justify-center items-center h-screen">
          Please sign in to view this page.
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Profile</h1>
        {user && (
          <div className="mb-6">
            <p className="text-lg">
              {" "}
              <b> Name:</b> {user.name}
            </p>
            <p className="text-lg">
              <b> Email:</b> {user.email}
            </p>
            {/* Add other user details here */}
          </div>
        )}

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Add New Note</h2>
          <div className="flex">
            <input
              type="text"
              value={newNote}
              onChange={(e) => setNewNote(e.target.value)}
              className="flex-grow mr-2 p-2 border rounded"
              placeholder="Enter your note"
            />
            <button
              onClick={addNote}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Add Note
            </button>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Your Notes</h2>
          {notes.map((note) => (
            <div key={note.id} className="bg-gray-100 p-4 rounded mb-2">
              {editingNote === note.id ? (
                <div className="flex">
                  <input
                    type="text"
                    value={note.content}
                    onChange={(e) =>
                      setNotes(
                        notes.map((n) =>
                          n.id === note.id
                            ? { ...n, content: e.target.value }
                            : n
                        )
                      )
                    }
                    className="flex-grow mr-2 p-2 border rounded"
                  />
                  <button
                    onClick={() => updateNote(note.id, note.content)}
                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mr-2"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setEditingNote(null)}
                    className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <div className="flex justify-between items-center">
                  <p>{note.content}</p>
                  <div>
                    <button
                      onClick={() => setEditingNote(note.id)}
                      className="text-blue-500 hover:text-blue-600 mr-2"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteNote(note.id)}
                      className="text-red-500 hover:text-red-600"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Page;
