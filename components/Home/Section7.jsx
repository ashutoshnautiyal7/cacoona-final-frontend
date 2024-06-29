"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Section7 = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <section className="px-[1.2rem] md:px-[2.5rem] lg:px-[6rem] pb-6 pt-8 md:pt-14 md:pb-8 bg-[#30304C]">
      <div className="flex justify-end ">
        <Image
          src="/Images/up-arrow.png"
          alt="#"
          width={40}
          height={40}
          className="cursor-pointer"
          onClick={scrollToTop}
        />
      </div>
    </section>
  );
};

export default Section7;
