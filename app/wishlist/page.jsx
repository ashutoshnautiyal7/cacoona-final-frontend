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

      <div className="bg-[#30304C] py-6 md:py-12 px-[1.2rem] md:px-[2.5rem] xl:px-[8rem]">
        <Wishlist users={users} />
      </div>

      <Footer2 />
    </main>
  );
};

export default page;
