"use client";
import Wishlist from "@/components/wishlist/Wishlist";
import { useState, useEffect } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Navbar from "@/components/Navbar/Navbar";
import Footer2 from "@/components/Footer/Footer2";

export default function ClientWishlist() {
  const [users, setUsers] = useState(null);
  const { data: session, status } = useSession();
  const email = session?.user.email;

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("/api/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        });
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    if (email) {
      fetchUsers();
    }
  }, [email, users]);

  if (!users) {
    return <div>Loading...</div>;
  }

  console.log("the final data is ", users);

  return (
    <main>
      <Navbar />

      <div className="bg-[#30304C] py-6 md:py-12 px-[1.2rem] md:px-[2.5rem] xl:px-[8rem]">
        <Wishlist users={users} />
      </div>

      <Footer2 />
    </main>
  );
}
