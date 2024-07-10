import Footer2 from "@/components/Footer/Footer2";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";

import prisma from "@/lib/db";
import Link from "next/link";
import Category from "@/components/category/Category";
export const dynamic = "force-dynamic";

const page = async () => {
  const productList = await prisma.product.findMany({
    include: {
      images: true,
    },
  });
  return (
    <main>
      <Navbar />
      <div className="bg-[#30304C] py-6 md:py-12 px-[1.2rem] md:px-[2.5rem] xl:px-[8rem]">
        <Category productList={productList} />
      </div>
      <Footer2 />
    </main>
  );
};

export default page;
