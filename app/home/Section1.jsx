import Link from "next/link";
import React from "react";

const Section1 = () => {
  return (
    <section className="px-[1.2rem] md:px-[4rem] pt-10 pb-14 md:pt-20 md:pb-20 flex lg:gap-10 xl:gap-20 justify-between items-center bg-[#FFEECD]  relative">
      <div className="hidden lg:inline">
        {/* <img src="/Images/human2.png" alt="#" className="w-[32rem]" /> */}
      </div>
      <div className="flex justify-between flex-1 gap-5 items-start ">
        <div className="max-w-[100%] lg:max-w-[35rem] xl:max-w-[45rem]">
          <div className="flex flex-col lg:items-end mb-5 md:mb-10 lg:mb-0">
            <h2 className="font-bold text-[28px] md:text-[36px] leading-[140%] md:leading-[120.7%] mt-6">
              Your Companion on the Path to Self-Discovery
            </h2>
          </div>
          <div className="inline lg:hidden">
            <img src="/Images/human2.png" alt="#" className="w-[28rem]" />
          </div>
          <p className="text-[16px] md:text-[20px] leading-[180%] md:leading-[200%] mt-6 md:mt-10">
            A Chesper is your paper chest. It's where you can be free to imagine
            and record your story, outline your journey and display your inner
            youth.
          </p>
          <button className="bg-[#4fa2ae] text-[14px] md:text-[18px] px-7 py-2 rounded-lg mt-6 md:mt-10 font-medium">
            <Link href="product/668ffc70fa8c7742224a05c1">Explore Now</Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Section1;
