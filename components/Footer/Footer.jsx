import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <section className="px-[1.2rem] md:px-[4rem] flex flex-col lg:flex-row text-[#898989] justify-around items-center bg-[#1C1C1C] py-[3rem]">
        <div className="flex items-center lg:items-start flex-col">
          <Image src="/Images/logo.png" alt="#" width={130} height={90} />
          <p className="max-w-[35rem] lg:max-w-[22rem] leading-[28px] md:leading-[28px] mt-[1rem] text-center lg:text-start">
            Unleash Your Creativity and Rediscover Yourself with Our
            Thoughtfully Crafted Journals
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-8 md:gap-20 lg:gap-8 xl:gap-32 mr-2 xl:mr-10 mt-8 lg:mt-0">
          <div className="flex gap-8 md:gap-20 lg:gap-8 xl:gap-32">
            <div className="flex flex-col gap-2 md:gap-3">
              <h2 className="text-[16px] font-bold mb-1 md:mb-2">
                Quick Actions
              </h2>
              <Link href="/home">Home</Link>
              <Link href="/product">Product</Link>
              <Link href="/about">About</Link>
            </div>
            <div className="flex flex-col gap-2 md:gap-3">
              <h2 className="text-[16px] font-bold mb-1 md:mb-2">
                Social Media
              </h2>
              <Link href="/">Facebook</Link>
              <Link href="/">Instagram</Link>
              <Link href="/">X</Link>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="text-[16px] font-bold mb-2">Contacts</h2>
            <Link href="mailto:chespersupport@cacoona.com">
              chespersupport@cacoona.com
            </Link>
            <Link href="mailto:customersupport@chesper.com">
              customersupport@chesper.com
            </Link>
          </div>
        </div>
      </section>
      <section className="px-[1.2rem] md:px-[4rem] bg-black flex justify-center items-center text-[#CBCBCB] py-[0.8rem] text-center">
        @Copyright 2024 all rights reserved by Cacoona
      </section>
    </>
  );
};

export default Footer;
