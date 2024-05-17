import Footer2 from "@/components/Footer/Footer2";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";
import Hero from "./Hero";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";

const page = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Section1 />
      <Section2 />
      <Section3 />
      <Footer2 />
    </main>
  );
};

export default page;
