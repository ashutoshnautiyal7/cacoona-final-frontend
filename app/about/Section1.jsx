"use client";
import Image from "next/image";
import React, { useState } from "react";
import { LuDot } from "react-icons/lu";

const Section1 = () => {
  const [expanded1, setExpanded1] = useState(true);
  const [expanded2, setExpanded2] = useState(false);
  const [expanded3, setExpanded3] = useState(false);

  const toggleExpanded1 = () => {
    setExpanded1(!expanded1);
  };
  const toggleExpanded2 = () => {
    setExpanded2(!expanded2);
  };
  const toggleExpanded3 = () => {
    setExpanded3(!expanded3);
  };
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
        <div className="">
          <div className="flex justify-between items-center mt-8 md:mt-10">
            <h3 className="text-[28px] md:text-[36px] leading-10">
              Annastacia Robinson
            </h3>
            <button
              className={`border border-black  text-[14px] md:text-[16px] px-6 py-2 rounded-3xl min-w-fit ${
                expanded1 ? "bg-black text-white " : "bg-white text-black"
              }`}
              onClick={toggleExpanded1}
            >
              {expanded1 ? "View Less" : "View More"}
            </button>
          </div>
          <div
            className={`mb-6 md:mb-8 testimonial-content mt-6 md:mt-4 flex flex-col lg:flex-row text-[17px] md:text-[20px] leading-[200%] gap-5 md:gap-10 ${
              expanded1 ? "expand" : "collapse"
            }`}
          >
            <img src="/Images/lady.jpeg" className="w-[30rem] bg-white" />
            <p>
              I am Annastacia Robinson, creator of Cacoona and Chesper by
              Cacoona, embarked on a journey of self-discovery and healing from
              past struggles. Despite facing numerous challenges, particularly
              as a black woman born in Miami, Florida in 1987, she has
              persevered with therapy in her youth and now finds solace and
              motivation in her rediscovery journey with Chesper. Through
              discipline and a positive spirit, she continues to grow as an
              individual, drawing inspiration from various cultures and
              embracing different forms of self-discovery
            </p>
          </div>
        </div>
        <div className="border-black border-t">
          <div className="flex justify-between items-center mt-8 md:mt-10">
            <h3 className="text-[28px] md:text-[36px] leading-10">Mission</h3>
            <button
              className={`border border-black  text-[14px] md:text-[16px] px-6 py-2 rounded-3xl min-w-fit ${
                expanded2 ? "bg-black text-white " : "bg-white text-black"
              }`}
              onClick={toggleExpanded2}
            >
              {expanded2 ? "View Less" : "View More"}
            </button>
          </div>
          <div
            className={`testimonial-content mt-6 md:mt-4 mb-6 md:mb-8 flex flex-col lg:flex-row text-[17px] md:text-[20px] leading-[200%] gap-5 md:gap-10 ${
              expanded2 ? "expand" : "collapse"
            }`}
          >
            <img src="/Images/lady.jpeg" className="w-[30rem] bg-white" />
            <p>
              I am Annastacia Robinson, creator of Cacoona and Chesper by
              Cacoona, embarked on a journey of self-discovery and healing from
              past struggles. Despite facing numerous challenges, particularly
              as a black woman born in Miami, Florida in 1987, she has
              persevered with therapy in her youth and now finds solace and
              motivation in her rediscovery journey with Chesper. Through
              discipline and a positive spirit, she continues to grow as an
              individual, drawing inspiration from various cultures and
              embracing different forms of self-discovery
            </p>
          </div>
        </div>
        <div className="border-black border-t">
          <div className="flex justify-between items-center mt-8 md:mt-10">
            <h3 className="text-[28px] md:text-[36px] leading-10">Vision</h3>
            <button
              className={`border border-black  text-[14px] md:text-[16px] px-6 py-2 rounded-3xl min-w-fit ${
                expanded3 ? "bg-black text-white " : "bg-white text-black"
              }`}
              onClick={toggleExpanded3}
            >
              {expanded2 ? "View Less" : "View More"}
            </button>
          </div>
          <div
            className={`testimonial-content mt-6 md:mt-4 flex flex-col lg:flex-row text-[17px] md:text-[20px] leading-[200%] gap-5 md:gap-10 ${
              expanded3 ? "expand" : "collapse"
            }`}
          >
            <img src="/Images/lady.jpeg" className="w-[30rem] bg-white" />
            <p>
              I am Annastacia Robinson, creator of Cacoona and Chesper by
              Cacoona, embarked on a journey of self-discovery and healing from
              past struggles. Despite facing numerous challenges, particularly
              as a black woman born in Miami, Florida in 1987, she has
              persevered with therapy in her youth and now finds solace and
              motivation in her rediscovery journey with Chesper. Through
              discipline and a positive spirit, she continues to grow as an
              individual, drawing inspiration from various cultures and
              embracing different forms of self-discovery
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;
