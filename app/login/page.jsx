"use client";
import { useSession, signIn, signOut } from "next-auth/react";

import React from "react";

const LoginPage = () => {
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
      {/* Add additional login form fields as needed */}
    </div>
  );
};

export default LoginPage;
