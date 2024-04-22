"use client";
import React, { useRef } from "react";
import Product from "./Product";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

const items = [
  { imageSrc: "/Images/c1.png", text: "Charms" },
  { imageSrc: "/Images/c2.png", text: "Pendants" },
  { imageSrc: "/Images/c3.png", text: "Bracelets" },
  { imageSrc: "/Images/c4.png", text: "Rings" },
  { imageSrc: "/Images/c5.png", text: "Earrings" },
  { imageSrc: "/Images/c6.png", text: "Gifts" },
];

const Section2 = () => {
  const scrollContainerRef = useRef(null);
  const handleScrollRight = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = 500;
      const currentPosition = container.scrollLeft;
      const targetPosition = currentPosition + scrollAmount;
      container.scrollTo({
        left: targetPosition,
        behavior: "smooth",
      });
    }
  };
  const handleScrollLeft = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = 500;
      const currentPosition = container.scrollLeft;
      const targetPosition = currentPosition - scrollAmount;
      container.scrollTo({
        left: targetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="px-[1.2rem] md:px-[2.5rem] lg:px-[8rem] py-6 md:py-10 bg-[#30304C]">
      <div className="flex items-center gap-4">
        <div className="bg-[#4FA2AE] h-9 w-5 rounded-sm"></div>
        <h2 className="text-[#4FA2AE] text-[14px] md:text-[16px] font-semibold">
          Categories
        </h2>
      </div>
      <div className="mt-5 text-white flex gap-6 md:gap-20 items-start md:items-end justify-between">
        <div className="flex flex-col lg:flex-row lg:items-end gap-2 lg:gap-20">
          <h3 className="font-semibold text-[30px] md:text-[36px] leading-[120%]">
            Browse By Category
          </h3>
        </div>

        <div className="flex mt-2 md:mt-0">
          <button className="md:px-2  " onClick={handleScrollLeft}>
            {" "}
            <BsFillArrowLeftCircleFill className="h-6 md:h-8 w-6 md:w-8" />
          </button>
          <button className="px-2 md:px-2" onClick={handleScrollRight}>
            {" "}
            <BsFillArrowRightCircleFill className="h-6 md:h-8 w-6 md:w-8" />
          </button>
        </div>
      </div>
      <div
        className="mt-6 md:mt-10 flex overflow-x-scroll no-scrollbar gap-5 md:gap-9"
        style={{ scrollbarWidth: "none" }}
        ref={scrollContainerRef}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center border h-[8rem] md:h-[10rem] min-w-[8rem] md:min-w-[11rem] rounded-md text-white overflow-hidden transition-all duration-300 hover:bg-[#4FA2AE]"
          >
            <img src={item.imageSrc} alt={item.text} className="w-9 h-12" />
            <span>{item.text}</span>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8 md:mt-12">
        <button className="text-white bg-[#4FA2AE] text-[14px] md:text-[16px] flex justify-center items-center py-2 md:py-2.5 px-6 md:px-10 rounded-sm">
          View All Products
        </button>
      </div>
    </section>
  );
};

export default Section2;
