import Footer2 from "@/components/Footer/Footer2";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";

import prisma from "@/lib/db";
import Link from "next/link";
import Category from "@/components/category/Category";

const page = async ({ params }) => {
  console.log("the category is ", params.category);
  const cat =
    params.category.substring(0, 1).toUpperCase() +
    params.category.substring(1);

  const productList = await prisma.product.findMany({
    where: {
      category: cat,
    },
    include: {
      images: true,
    },
  });

  console.log("the category data is ", productList);

  return (
    <main>
      <Navbar />
      <div className="bg-[#30304C] py-6 md:py-12 px-[1.2rem] md:px-[2.5rem] xl:px-[8rem]">
        <div className="flex gap-2 text-[15px] md:text-[16px]">
          <Link href="/" className="text-gray-400">
            Home
          </Link>
          <span className="text-white">/</span>
          <Link href="/#category" className="text-white">
            Category
          </Link>
          <span className="text-white">/</span>
          <Link href="#" className="text-white capitalize">
            {params.category}
          </Link>
        </div>
        <Category productList={productList} />
      </div>
      <Footer2 />
    </main>
  );
};

export default page;
