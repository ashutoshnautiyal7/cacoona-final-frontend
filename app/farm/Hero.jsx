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
            <p>Connect by Cacoona</p>
          </span>
          <h1 className="font-black text-[42px] md:text-[52px] xl:text-[64px] leading-[140%] md:leading-[120.7%] mt-6 mb-10 lg:mb-0">
            Embark on a Journey with Cacoona Connect
          </h1>
          <div className="inline lg:hidden">
            <Image
              src="/Images/farm-banner.png"
              alt="#"
              width={400}
              height={400}
            />
          </div>
          <p className="text-[16px] md:text-[22px] leading-[240%] md:leading-[45px]  mt-6 text-[#D9D9D9]">
            Dive into the world of cacoona by connecting with other connectors.
            Share your creations Uplift us with your journey and bond with your
            fellow connectors via Facebook, Instagram, Twitter, and X
          </p>
          <button className="bg-[#FFEECD] px-5 py-2 rounded-lg text-black text-[15px] md:text-[18px] mt-6 md:mt-16 flex items-center gap-1">
            <Link href={"/profile"}>Let's connect</Link>
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
