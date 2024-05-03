import Footer from "@/components/landing/Footer";
import Hero from "@/components/landing/Hero";
import Section1 from "@/components/landing/Section1";
import Section2 from "@/components/landing/Section2";

import React from "react";

const page = () => {
  return (
    <div>
      <Hero />
      <Section1 />
      <Section2 />
      <Footer />
    </div>
  );
};

export default page;
