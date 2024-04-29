"use client";
import { useSession, signIn, signOut } from "next-auth/react";

import Footer from "@/components/Footer/Footer";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (session) {
    // User is logged in, render session details
    return (
      <div>
        <p>Logged in as {session.user.email}</p>
        {/* Render additional session details as needed */}
        <button onClick={() => signOut()}>Sign Out</button>
      </div>
    );
  }

  // User is not logged in, render login form
  return (
    <div className="flex flex-col">
      <button onClick={() => signIn()}>Sign In with creds</button>
      <button onClick={() => signIn("google")}>Sign In with google</button>
      <button onClick={() => signOut()}>Sign Out</button>
      {/* Add additional login form fields as needed */}
    </div>
  );
};

export default page;
