import Footer2 from "@/components/Footer/Footer2";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";
import Hero from "./Hero";
import Section2 from "@/components/landing/Section2";
import Section1 from "./Section1";

const page = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Section1 />
      <Section2 />
      <Footer2 />
    </main>
  );
};

export default page;
