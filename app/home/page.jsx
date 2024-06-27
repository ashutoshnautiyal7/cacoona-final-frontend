import Footer2 from "@/components/Footer/Footer2";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";
import Hero from "./Hero";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";

const page = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      {/* <Section5 /> */}
      <Footer2 />
    </main>
  );
};

export default page;
