import Footer2 from "@/components/Footer/Footer2";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";
import Hero from "./Hero";
import Description from "./Description";
import Review from "./Review";

const page = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Description/>
      <Review/>
      <Footer2 />
    </main>
  );
};

export default page;
