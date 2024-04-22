import React from "react";

const Section4 = () => {
  return (
    <div className="py-6 md:py-10 bg-[#30304C]">
      <div className="bg-black text-white px-[1.2rem] lg:px-32 py-12 md:py-16 flex justify-around">
        <div className="">
          <h2 className="text-[#4FA2AE] font-semibold">Categories</h2>
          <p className="text-[36px] md:text-[48px] max-w-[440px] leading-[120%] mt-4 md:mt-6 ">
            Improve Your Daily Life
          </p>
          <div className="flex gap-4 md:gap-6 mt-4 md:mt-6">
            <span className="p-2 w-14 md:w-16 h-14 md:h-16 rounded-full bg-white text-black flex flex-col -gap-2 items-center justify-center">
              <p className="font-semibold leading-3">22</p>
              <p className="text-[11px]">Hours</p>
            </span>
            <span className="p-2 w-14 md:w-16 h-14 md:h-16 rounded-full bg-white text-black flex flex-col -gap-2 items-center justify-center">
              <p className="font-semibold leading-3">22</p>
              <p className="text-[11px]">Days</p>
            </span>
            <span className="p-2 w-14 md:w-16 h-14 md:h-16 rounded-full bg-white text-black flex flex-col -gap-2 items-center justify-center">
              <p className="font-semibold leading-3">22</p>
              <p className="text-[11px]">Minutes</p>
            </span>
            <span className="p-2 w-14 md:w-16 h-14 md:h-16 rounded-full bg-white text-black flex flex-col -gap-2 items-center justify-center">
              <p className="font-semibold leading-3">22</p>
              <p className="text-[11px]">Seconds</p>
            </span>
          </div>
          <div className="flex mt-6 md:mt-8">
            <button className="text-white bg-[#4FA2AE] text-[14px] md:text-[16px] flex justify-center items-center py-2 md:py-2.5 px-5 md:px-6 rounded-sm whitespace-nowrap">
              Buy Now!
            </button>
          </div>
        </div>
        <div className="relative hidden md:flex">
          <img
            src="/Images/book.png"
            alt="#"
            className="w-[15rem] h-[22rem] relative z-10"
          />
        </div>
      </div>
    </div>
  );
};

export default Section4;
