import Footer2 from "@/components/Footer/Footer2";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";
import db from "../../lib/db";

import Wishlist from "../../components/wishlist/Wishlist";

const page = async () => {
  const users = await db.user.findMany({
    select: {
      email: true,
      wishlist: {
        select: {
          product: {
            include: {
              images: true,
            },
          },
        },
      },
    },
  });

  console.log("the users data is ", users);
  // console.log("the wishlist data is ", users[0].wishlist);

  return (
    <main>
      <Navbar />

      <Wishlist users={users} />

      <Footer2 />
    </main>
  );
};

export default page;
