import Footer2 from "@/components/Footer/Footer2";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";
import Hero from "./Hero";
import Section1 from "./Section1";
import Section6 from "@/components/Home/Section6";
import Section3 from "./Section3";

const page = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      {/* <Section1 />
      <Section6 />
      <Section3 /> */}
      <Footer2 />
    </main>
  );
};

export default page;
