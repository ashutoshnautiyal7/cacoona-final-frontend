"use client";

import React from "react";
import { useSession } from "next-auth/react";
import Category from "../category/Category";

const Wishlist = ({ users }) => {
  const products = users[0].wishlist;

  console.log("the products are ", products);

  const formattedProds = products.map((prod) => prod.product);

  return <Category productList={formattedProds} />;
};

export default Wishlist;
