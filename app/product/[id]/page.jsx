import Footer2 from "@/components/Footer/Footer2";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";
import Hero from "../Hero";
import Description from "../Description";
import AllProduct from "../AllProduct";

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

  console.log("the prodcts data is ", data);

  return (
    <main>
      <Navbar />
      <Hero data={data} />
      <Description />
      <AllProduct />
      <Footer2 />
    </main>
  );
};

export default page;
