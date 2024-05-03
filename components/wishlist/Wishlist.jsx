"use client";

import React from "react";
import { useSession } from "next-auth/react";
import Category from "../category/Category";

const Wishlist = ({ users }) => {
  const { data: session, status } = useSession();

  console.log("the session is ", session);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (!session) {
    // User is not logged in
    return (
      <div className=" text-white">Please sign in to view your wishlist.</div>
    );
  }

  const email = session.user.email;

  const filterData = users.filter((user) => user.email === email);

  const products = filterData[0].wishlist;

  console.log("the products are ", products);

  const formattedProds = products.map((prod) => prod.product);
  console.log("format ", formattedProds);

  return <Category productList={formattedProds} />;
};

export default Wishlist;
