"use client";
import React, { useRef, useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import Stack from "@mui/material/Stack";
import Rating from "@mui/material/Rating";

const testimonials = [
  {
    id: 1,
    content:
      "Cacoone has become my go-to for buying books! The prices are unbeatable, and I find the accessories I need for my home office. Highly recommend for great deals!",
    author: "David L.",
    rating: 5,
  },
  {
    id: 1,
    content:
      "I love shopping on Cacoone! They have a fantastic range of books at super low prices, and the accessories are always top-notch quality. Fast shipping, too!",
    author: "Tom cruise",
    rating: 5,
  },
  {
    id: 1,
    content:
      "Cacoone is the best place for budget-friendly books and cool accessories. I’ve saved so much money here and the delivery is always quick. Highly recommend it!",
    author: "Emilia clarke",
    rating: 5,
  },
];

const Section4 = () => {
  const [slidesToShowValue, setSlidesToShowValue] = useState(3);
  const sliderRef = useRef();
  const settings = {
    arrows: false,
    dots: false,
    infinite: false,
    slidesToScroll: 1,
    slidesToShow: slidesToShowValue,
    speed: 500,
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1200) {
        setSlidesToShowValue(3); // For extra large screens
      } else if (window.innerWidth >= 992) {
        setSlidesToShowValue(2); // For large screens
      } else if (window.innerWidth >= 768) {
        setSlidesToShowValue(2); // For medium screens
      } else {
        setSlidesToShowValue(1); // For smaller screens
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const nextSlide = () => {
    sliderRef.current.slickNext();
  };

  const prevSlide = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <section className="px-[1.2rem] md:px-[4rem] pb-8 pt-[6rem] md:pt-[10rem] md:pb-20 bg-[#30304C] text-white relative">
      <div
        className="absolute top-0 right-0 w-full h-[5.5rem] lg:h-[12rem] bg-[#FFEECD]"
        style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
      ></div>
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-[36px] md:text-[48px] font-bold ">
          Hear From Our Customers
        </h2>
        <p className="text-[24px] md:text-[30px] max-w-[586px] mt-3 leading-[160%] md:text-center">
          Discover the Impact of Chesper: Stories of Transformation and
          Empowerment
        </p>
      </div>
      <div className="w-full mt-10 md:mt-14 px-2">
        <Slider {...settings} ref={sliderRef} className="">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="md:px-3">
              <div className="bg-[#FFF1DB] p-6 rounded-lg">
                <span className="flex gap-1">
                  <img
                    src="/Images/tilt-bar2.png"
                    alt="#"
                    className="w-[1.3rem] h-[2.5rem]"
                  />
                  <img
                    src="/Images/tilt-bar2.png"
                    alt="#"
                    className="w-[1.3rem] h-[2.5rem]"
                  />
                </span>
                <p className="text-[15px] text-black mt-5 leading-[180%]">
                  {testimonial.content}
                </p>
                <div className="mt-2.5 flex flex-wrap gap-2 items-center justify-between">
                  <div className="flex text-black items-center gap-3 md:gap-4 font-bold text-[18px] md:text-[20px]">
                    <h3>{testimonial.author}</h3>
                  </div>
                  <Stack spacing={1}>
                    <Rating
                      value={testimonial.rating}
                      precision={0.5}
                      readOnly
                    />
                  </Stack>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <div className="flex mt-8 md:mt-12 gap-6 md:gap-8 justify-center text-white  mx-auto">
          <button onClick={prevSlide}>
            <MdKeyboardArrowLeft className="w-10 h-10 bg-[#4FA2AE] rounded-sm" />
          </button>
          <button onClick={nextSlide}>
            <MdKeyboardArrowRight className="w-10 h-10 bg-[#4FA2AE] rounded-sm" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Section4;
