import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const Hero = () => {
  return (
    <section className="px-[1.2rem] md:px-[4rem] py-6 flex flex-col justify-between bg-[#30304C] text-white">
      <div className="flex justify-between flex-1 gap-5 mt-3 items-center xl:items-start">
        <div className="max-w-[100%] lg:max-w-[35rem] xl:max-w-[50rem]">
          <span className="text-[#FFEECD] flex items-center gap-4">
            <span className="w-[4.6rem] md:w-[6rem] h-[2px] bg-[#FFEECD]"></span>
            <p>Farm by Cacoona</p>
          </span>
          <h1 className="font-black text-[42px] md:text-[52px] xl:text-[64px] leading-[140%] md:leading-[120.7%] mt-6">
            Embark on a Journey with Cacoona Farm
          </h1>
          <p className="text-[16px] md:text-[22px] leading-[240%] md:leading-[45px]  mt-6 text-[#D9D9D9]">
            Be the First to Witness Our Evolution: Gain Insider Access to Our
            Creative Process and Product Development, Ensuring You're Always at
            the Forefront of the Cacoona Experience
          </p>
          <button className="bg-[#FFEECD] px-5 py-2 rounded-lg text-black text-[15px] md:text-[18px] mt-6 md:mt-16 flex items-center gap-1">
            <Link href={"/"}>Get Started</Link>
            <GoArrowUpRight className="h-4 md:h-5 w-4 md:w-5" />
          </button>
        </div>
        <div className="hidden lg:inline">
          <Image
            src="/Images/farm-banner.png"
            alt="#"
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
