"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
      <div className="absolute top-[36%] ml-4 md:ml-16 text-[25px] md:text-[48px]  font-semibold ">
        <h2 className="">Up to 10% off Voucher</h2>
        <p className="text-[20px]">Shop Now</p>
      </div>
    </div>
  );
};

export default Hero;
