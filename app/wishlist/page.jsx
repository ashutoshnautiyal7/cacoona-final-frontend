import Footer2 from "@/components/Footer/Footer2";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";
import db from "../../lib/db";

import Wishlist from "../../components/wishlist/Wishlist";

const page = async () => {
  const users = await db.user.findMany({
    include: {
      products: {
        include: {
          images: true,
        },
      },
    },
  });
  return (
    <main>
      <Navbar />

      <Wishlist users={users} />

      <Footer2 />
    </main>
  );
};

export default page;
