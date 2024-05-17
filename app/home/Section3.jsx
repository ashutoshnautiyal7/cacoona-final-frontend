import React from "react";

function Section3() {
  return (
    <section className="px-[1.2rem] md:px-[4rem] pt-10 pb-14 md:pt-20 md:pb-20 flex  justify-between items-center bg-[#FFEECD]  relative">
      <div className="hidden lg:inline">
        <img src="/Images/book2.png" alt="#" className="w-[38rem]" />
      </div>
      <div className="flex justify-between flex-1 gap-5 items-start ">
        <div className="max-w-[100%] lg:max-w-[35rem] xl:max-w-[45rem]">
          <div className="flex flex-col ">
            <h2 className="font-bold text-[28px] md:text-[36px] leading-[140%] md:leading-[120.7%] mt-6">
              Your Path to Self-Discovery
            </h2>
          </div>
          <p className="text-[16px] md:text-[20px]  leading-[180%]  mt-6 md:mt-10">
            Unveil the transformative power of journaling with Chesper, your
            trusted companion on the journey of self-discovery. Crafted with
            care and designed with intention, Chesper is more than just a
            journal – it's your personal sanctuary for reflection, growth, and
            empowerment
          </p>
          <button className="bg-[#4fa2ae] text-[14px] md:text-[18px] px-7 py-2 rounded-lg mt-6 md:mt-10 font-bold">
            Explore Now
          </button>
        </div>
      </div>
    </section>
  );
}

export default Section3;
