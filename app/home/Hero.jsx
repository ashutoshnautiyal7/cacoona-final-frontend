import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const Hero = () => {
  return (
    <>
      <section className="px-[1.2rem] md:px-[4rem] md:pt-2 lg:pt-5 pb-[7rem] flex lg:gap-12 justify-between bg-[#30304C] text-white relative">
        <div className="hidden lg:inline">
          <img src="/Images/book.png" alt="#" className="w-[30rem]" />
        </div>
        <div className="flex justify-between flex-1 gap-5 items-start">
          <div className="max-w-[100%] lg:max-w-[35rem] xl:max-w-[45rem]">
            <div className="flex flex-col lg:items-end mb-3 lg:mb-0">
              <h1 className="font-bold text-[55px] md:text-[100px] xl:text-[150px] leading-[140%] md:leading-[120.7%] mt-6">
                CHESPER
              </h1>
              <h2 className="font-bold -mt-2.5 md:-mt-6 flex items-center text-[14px] md:text-[16px] gap-2 ml-2 lg:ml-0">
                by{" "}
                <b className="text-[20px] md:text-[32px] font-bold">CACOONA</b>
              </h2>
            </div>
            <div className="inline lg:hidden">
              <img src="/Images/book.png" alt="#" className="w-[25rem]" />
            </div>
            <p className="text-[16px] md:text-[20px] leading-[180%] md:leading-[200%] text-[#D9D9D9] mt-6  mb-6 md:mb-10">
              A Chesper is your paper chest. It's where you can be free to
              imagine and record your story, outline your journey and display
              your inner youth.
            </p>
            <Link
              href={"product/668ffc70fa8c7742224a05c1"}
              className="bg-[#4fa2ae] flex items-center gap-1.5 w-fit text-[14px] md:text-[20px] px-7 py-2 rounded-lg text-white mt-6 md:mt-16"
            >
              Buy Now
              <GoArrowUpRight className="h-4 md:h-5 w-4 md:w-5" />
            </Link>
          </div>
        </div>
        <div
          className="absolute bottom-0 right-0 w-full h-[5.5rem] md:h-[11rem] bg-[#4fa2ae]"
          style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%)" }}
        ></div>
        <div
          className="absolute bottom-0 right-0 w-full h-[4rem] md:h-[8rem] bg-[#FFEECD]"
          style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%)" }}
        ></div>
      </section>
    </>
  );
};

export default Hero;
