import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="px-[1.2rem] md:px-[4rem] pt-6 pb-14 flex flex-col justify-between bg-[#30304C] text-white">
      <h1 className="font-bold text-[42px] md:text-[52px] xl:text-[64px] leading-[140%] md:leading-[120.7%] lg:mt-3">
        What is a Chesper and Cacoona you ask…
      </h1>
      <div className=" flex flex-col-reverse md:flex-row justify-between flex-1 gap-5 items-start mt-6">
        <div className="max-w-[100%] lg:max-w-[35rem] xl:max-w-[45rem]">
          <p className="text-[20px]  leading-[160%] md:leading-[35px] text-[#D9D9D9]">
            Welcome to Cacoona a creative sanctuary dedicated to fostering
            self-discovery and personal growth through thoughtfully crafted
            Chesper. Chesper, Our flagship product, serves as a private haven
            for individuals to express their thoughts, feelings, and aspirations
            without judgment. Chesper creates a new outlook on journaling and
            features insightful prompts like Cacoona Clipcuts, which focus on
            cultivating a positive mindset. We empower users to explore their
            inner worlds and unlock hidden potential. We believe in the
            transformative power of journaling, offering a space where
            creativity flourishes and connections deepen. Committed to quality
            and affordability, Cacoona also provides a diverse range of single
            sheets to start your journey. Are you ready to be curious and
            creative from your core! Join us in celebrating the art of
            self-expression and discover your path with Cacoona!
          </p>
        </div>
        <div className=" lg:inline ">
          <Image src="/3.png" alt="#" width={400} height={500} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
