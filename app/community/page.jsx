"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useSession } from "next-auth/react";
import Topbar from "@/components/topbar/Topbar";
import LeftSection from "@/components/leftsection/LeftSection";

const page = () => {
  const router = useRouter();
  const [user, setUser] = useState("");
  const [size, setSize] = useState(0);
  const [loading, setLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [posts, setPosts] = useState([]);

  const { data: session } = useSession();

  const email = session?.user?.email;
  console.log("the email is ", email);

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3000/api/get_user?email=${encodeURIComponent(
            email
          )}`
        );
        const data = res.data;

        setUser(data[0]);
      } catch (err) {
        console.log("Some error occurred fetching user data", err);
      }
    };

    if (email) {
      getUser();
    }
  }, [email]);

  useEffect(() => {
    const getPosts = async () => {
      try {
        setLoading(true);
        const res = await axios.get(
          "http://localhost:3000/api/posts?page=" + currentPage
        );
        const data = res.data.posts;

        console.log("the data is ", data);
        setSize(res.data.size);
        setPosts(data);
        setFilteredPosts(data);
        setLoading(false);
      } catch (err) {
        setLoading(false);
      }
    };
    getPosts();
  }, [currentPage]);

  console.log("the user is ", user);
  console.log("the posts are  ", posts);

  const onSearch = (query) => {
    if (query.trim() === "") {
      setFilteredPosts(posts);
    } else {
      const filtered = posts.filter(
        (post) =>
          post.title.toLowerCase().includes(query.toLowerCase()) ||
          post.content.toLowerCase().includes(query.toLowerCase()) ||
          (post.user && post.user.toLowerCase().includes(query.toLowerCase()))
      );
      setFilteredPosts(filtered);
    }
  };

  return (
    <div className="w-full">
      <div className="w-full md:px-0">
        <div className="md:w-10/12 mx-auto px-2 flex flex-col justify-center items-center my-5">
          <div className="w-full md:w-[65%]">
            <Topbar onSearch={onSearch} user={user} />
            <LeftSection
              loading={loading}
              user={user}
              posts={filteredPosts}
              size={size}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
