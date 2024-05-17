import React from "react";

const Section5 = () => {
  return (
    <section className="px-[1.2rem] md:px-[4rem] pt-10 pb-14 md:pt-20 md:pb-20 flex  justify-between items-center bg-[#FFEECD]  relative">
      <div className="flex justify-between flex-1 gap-5 items-start ">
        <div className="text-center">
          <div className="flex flex-col ">
            <h2 className="font-semibold text-[42px] md:text-[52px] xl:text-[64px] leading-[140%] md:leading-[120.7%] mt-6">
              Start Your Journey Today
            </h2>
          </div>
          <p className="text-[16px] md:text-[20px]  leading-[180%]  mt-6 md:mt-10">
            Take the first step towards a deeper understanding of yourself and
            the world around you with Chesper.
          </p>
          <p className="text-[16px] md:text-[20px]  leading-[180%]  mt-3 md:mt-4">
            Whether you're embarking on a new chapter of your life or seeking
            clarity in times of uncertainty, let Chesper be your trusted guide
            on the path to self-discovery
          </p>
          <button className="bg-[#4fa2ae] text-[14px] md:text-[18px] px-7 py-2 rounded-lg mt-6 md:mt-10 font-bold">
            Buy Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Section5;
