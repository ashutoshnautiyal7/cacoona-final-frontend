import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <>
      <section className="px-[1.2rem] md:px-[4rem] md:pt-2 lg:pt-5 pb-20 flex lg:gap-12 justify-between bg-[#30304C] text-white relative">
        <div className="hidden lg:inline">
          <img src="/Images/book.png" alt="#" className="w-[30rem]" />
        </div>
        <div className="flex justify-between flex-1 gap-5 items-start ">
          <div className="max-w-[100%] lg:max-w-[35rem] xl:max-w-[45rem]">
            <div className="flex flex-col lg:items-end">
              <h1 className="font-bold text-[55px] md:text-[100px] xl:text-[150px] leading-[140%] md:leading-[120.7%] mt-6">
                CHESPER
              </h1>

              <h2 className="font-bold -mt-2.5 md:-mt-6 flex items-center text-[14px] md:text-[16px] gap-2 ml-2 lg:ml-0">
                by{" "}
                <b className="text-[20px] md:text-[32px] font-bold">CACOONA</b>
              </h2>
            </div>
            <p className="text-[16px] md:text-[20px]  leading-[180%] md:leading-[200%] text-[#D9D9D9] mt-6 md:mt-16">
              A Chesper is your paper chest. It's where you can be free to
              imagine and record your story, outline your journey and display
              your inner youth.
            </p>
            <Link
              href={"/category/books"}
              className="bg-[#4fa2ae] text-[14px] md:text-[20px] px-7 py-2 rounded-lg text-white mt-6 md:mt-16"
            >
              Buy Now
            </Link>
          </div>
        </div>
        {/* <div className="absolute bottom-0 right-0 w-full h-0 lg:h-20 bg-[#FFEECD]"></div> */}
      </section>
    </>
  );
};

export default Hero;
