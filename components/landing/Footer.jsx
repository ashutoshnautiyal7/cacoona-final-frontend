import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <section className="px-[1.2rem] md:px-[4rem] flex flex-col text-[#898989] justify-center items-center bg-[#1C1C1C] py-[2.5rem]">
        <Image src="/Images/logo.png" alt="#" width={130} height={90} />
        <p className="max-w-[35rem] text-center leading-[28px] md:leading-[33px] mt-[1.8rem]">
          Unleash Your Creativity and Rediscover Yourself with Our Thoughtfully
          Crafted Journals
        </p>
      </section>
      <section className="px-[1.2rem] md:px-[4rem] bg-black flex justify-center items-center text-[#CBCBCB] py-[0.8rem] text-center">
        @Copyright 2024 all rights reserved by Cacoona
      </section>
    </>
  );
};

export default Footer;
