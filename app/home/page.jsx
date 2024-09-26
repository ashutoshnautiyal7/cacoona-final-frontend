import Footer2 from "@/components/Footer/Footer2";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";
import db from "../../lib/db";

import Hero from "@/components/Home/Hero";
import Section1 from "@/components/Home/Section1";
import Section2 from "@/components/Home/Section2";
import Section3 from "@/components/Home/Section3";
import Section4 from "@/components/Home/Section4";
import Section6 from "@/components/Home/Section6";
import Section7 from "@/components/Home/Section7";

export const dynamic = "force-dynamic";

const page = async () => {
  const products = await db.product.findMany({
    include: {
      images: true,
    },
  });

  const timer = await db.saleTimer.findMany();
  return (
    <main>
      <Navbar />
      <Hero />
      <Section1 productList={products} timer={timer} />
      <Section2 />
      <Section3 productList={products} />
      <Section4 timer={timer} />
      <Section6 />
      <Section7 />
      <Footer2 />
    </main>
  );
};

export default page;
