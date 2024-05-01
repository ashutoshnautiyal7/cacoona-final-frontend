"use client";

import React from "react";
import { useSession } from "next-auth/react";
import Category from "../category/Category";

const Wishlist = ({ users }) => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (!session) {
    // User is not logged in
    return <div>Please sign in to view your wishlist.</div>;
  }

  const email = session.user.email;

  const filterData = users.filter((user) => user.email === email);

  const products = filterData[0].products;

  return (
    <>
      <Category productList={products} />
    </>
  );
};

export default Wishlist;
