"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
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
    <div className="relative">
      <Slider {...settings}>
        <div className="bg-gray-500 h-[26rem] w-[200px]">1</div>
        <div className="bg-gray-300 h-[26rem] w-[200px]">2 </div>
        <div className="bg-gray-300 h-[26rem] w-[200px]">3 </div>
      </Slider>
      <div className="absolute top-[40%] ml-16 text-[48px] text-white font-semibold">
        <h2>Up to 10% off Voucher</h2>
        <p className="text-[16px]">Shop Now</p>
      </div>
    </div>
  );
};

export default Hero;
