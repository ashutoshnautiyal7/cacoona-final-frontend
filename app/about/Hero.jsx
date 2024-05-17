import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="px-[1.2rem] md:px-[4rem] pt-6 pb-14 flex flex-col justify-between bg-[#30304C] text-white">
      <h1 className="font-bold text-[42px] md:text-[50px] xl:text-[60px] leading-[140%] md:leading-[120.7%] mt-6">
        Discover Cacoona: Your Insight into Our Story
      </h1>
      <div className="flex justify-between flex-1 gap-5 items-start mt-6">
        <div className="max-w-[100%] lg:max-w-[35rem] xl:max-w-[45rem]">
          <p className="text-[20px] md:text-[26px] xl:text-[32px]  leading-[180%] md:leading-[140%]   text-[#D9D9D9]">
            At Cacoona, we believe in the power of self-discovery to transform
            lives. Our mission is simple yet profound: to provide individuals
            with the tools and resources they need to embark on their own
            journey of exploration, empowerment, and transformation
          </p>
        </div>
        <div className="hidden lg:inline">
          <Image
            src="/Images/about-banner.png"
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
