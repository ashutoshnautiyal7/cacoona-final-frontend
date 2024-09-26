"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FiArrowRight } from "react-icons/fi";
import Link from "next/link";

const Hero = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          bottom: "20px",
          textAlign: "center",
          width: "100%",
        }}
      >
        <ul style={{ margin: "0" }}> {dots} </ul>
      </div>
    ),
  };
  return (
    <div className="relative overflow-hidden">
      <Slider {...settings}>
        <img
          src="/Images/banner1.png"
          alt="#"
          className="h-[14rem] md:h-[26rem] bg-gray-400"
        />
        <img
          src="/Images/banner1.png"
          alt="#"
          className="h-[14rem] md:h-[26rem] bg-gray-400"
        />
        <img
          src="/Images/banner1.png"
          alt="#"
          className="h-[14rem] md:h-[26rem] bg-gray-400"
        />
      </Slider>
      <div className="absolute top-[26%] ml-4 md:ml-16 text-[25px] md:text-[48px]  font-semibold ">
        <span className=" flex items-center mt-4 md:mt-6 gap-2 ml-1">
          <Link href={"/product"} className="text-[20px] border-b border-black">
            Shop Now
          </Link>
          <FiArrowRight className="h-5 md:h-6 w-5 md:w-6" />
        </span>
      </div>
    </div>
  );
};

export default Hero;
