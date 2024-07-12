import Footer2 from "@/components/Footer/Footer2";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";
import Hero from "../Hero";
import Description from "../Description";
import AllProduct from "../AllProduct";
import prisma from "@/lib/db";
import Section3 from "@/components/Home/Section3";

export const dynamic = "force-dynamic";

const page = async ({ params }) => {
  console.log("the id is ", params.id);

  const data = await prisma.product.findUnique({
    where: {
      id: params.id,
    },
    include: {
      images: true,
    },
  });

  const products = await prisma.product.findMany({
    include: {
      images: true,
    },
  });

  console.log("the prodcts data is ", data);

  return (
    <main>
      <Navbar />
      <Hero data={data} />
      <Description des={data.detailedDescription} />
      <Section3 productList={products} />
      <Footer2 />
    </main>
  );
};

export default page;
