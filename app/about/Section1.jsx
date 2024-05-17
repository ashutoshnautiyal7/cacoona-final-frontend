import Image from "next/image";
import React from "react";
import { LuDot } from "react-icons/lu";

const Section1 = () => {
  return (
    <section className="px-[1.2rem] md:px-[4rem] py-16  flex flex-col xl:flex-row gap-10 justify-between items-start bg-[#FFEECD] ">
      <div className="border border-black rounded-3xl px-6 py-1.5 flex min-w-[9rem] items-center">
        <LuDot className="w-8 h-8 -ml-3 -mr-1" />
        About Us
      </div>
      <div className="">
        <h2 className="font-bold text-[42px] md:text-[52px] xl:text-[64px] leading-[140%] md:leading-[110%] -mt-2.5">
          From self-reflection to self-creation, a sanctuary for imagination and
          growth
        </h2>
        <div className="flex justify-between items-center mt-8 md:mt-10 ">
          <h3 className="text-[28px] md:text-[36px] leading-10">
            Annastacia Robinson
          </h3>
          <button className="border bg-black text-white text-[14px] md:text-[16px] px-6 py-2 rounded-3xl min-w-fit">
            View less
          </button>
        </div>
        <div className="mt-6 md:mt-4 flex flex-col lg:flex-row text-[17px] md:text-[20px] leading-[200%] gap-5 md:gap-10">
          <img src="/Images/human.png" className="w-[30rem] bg-white" />
          <p>
            I am Annastacia Robinson, creator of Cacoona and Chesper by Cacoona,
            embarked on a journey of self-discovery and healing from past
            struggles. Despite facing numerous challenges, particularly as a
            black woman born in Miami, Florida in 1987, she has persevered with
            therapy in her youth and now finds solace and motivation in her
            rediscovery journey with Chesper. Through discipline and a positive
            spirit, she continues to grow as an individual, drawing inspiration
            from various cultures and embracing different forms of
            self-discovery
          </p>
        </div>
        <div className="border-black border-t py-6 md:py-8 flex justify-between items-center mt-10 md:mt-14">
          <span className="text-[26px] md:text-[36px]">Mission</span>
          <button className="border border-black bg-white  text-[14px] md:text-[16px] px-6 py-2 rounded-3xl">
            View less
          </button>
        </div>
        <div className="border-black border-t pt-6 md:pt-8 flex justify-between items-center ">
          <span className="text-[26px] md:text-[36px]">Vision</span>
          <button className="border border-black bg-white text-[14px] md:text-[16px] px-6 py-2 rounded-3xl">
            View less
          </button>
        </div>
      </div>
    </section>
  );
};

export default Section1;
