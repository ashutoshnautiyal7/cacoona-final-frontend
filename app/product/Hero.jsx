"use client";
import React, { useRef, useState } from "react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { FaEye } from "react-icons/fa";

const images = [
  "/Images/b1.png",
  "/Images/b2.png",
  "/Images/b3.png",
  "/Images/b4.png",
];

const Hero = () => {
  const [mainImageIndex, setMainImageIndex] = useState(0);
  const handleClickPrev = () => {
    setMainImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  const handleClickNext = () => {
    setMainImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const [value, setValue] = useState(1);
  const increment = () => {
    setValue(value + 1);
  };
  const decrement = () => {
    setValue(value - 1 >= 0 ? value - 1 : 0);
  };

  return (
    <section className="bg-[#30304C] pt-10 px-[1.2rem] md:px-[2.5rem]">
      <div className="flex gap-10 items-center">
        <div className="min-w-[49rem] flex gap-6">
          <div className="flex flex-col gap-5">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className="w-[8rem] h-[10rem] cursor-pointer"
                onClick={() => setMainImageIndex(index)}
              />
            ))}
          </div>
          <div className="relative w-[40rem] h-[45rem] rounded-xl bg-white justify-center items-center flex">
            <img
              src={images[mainImageIndex]}
              alt={`Main Image ${mainImageIndex + 1}`}
              className="w-[26rem] h-[30rem]"
            />
            <img
              src="/Images/half-left.png"
              alt="Left Arrow"
              className="absolute left-5 w-14 h-8 cursor-pointer"
              onClick={handleClickPrev}
            />
            <img
              src="/Images/half-right.png"
              alt="Right Arrow"
              className="absolute right-5 w-14 h-8 cursor-pointer"
              onClick={handleClickNext}
            />
          </div>
        </div>
        <div className="text-white">
          <h1 className="text-[50px] font-bold leading-[110%]">
            Chesper Journal
          </h1>
          <h2 className="text-[30px] leading-[130%] mt-4">
            Unleash Your Inner Potential
          </h2>
          <div className="mt-3">
            <span className="text-[#4FA2AE] text-[36px] leading-[40px] font-semibold">
              $23.00
            </span>
            <span className="mx-2 text-gray-500 text-[24px] leading-[32px] font-semibold">
              /
            </span>
            <span className="text-gray-500 line-through text-[24px] leading-[32px] font-semibold">
              $34.00
            </span>
          </div>
          <div className="mt-3.5 flex">
            <Stack spacing={1}>
              <Rating
                name="half-rating-read"
                value={4}
                precision={0.5}
                readOnly
                // size="small"
              />
            </Stack>
            <span className="text-white ml-2yy md:ml-4 underline">
              32 reviews
            </span>
          </div>
          <div className="flex flex-col gap-3 mt-8">
            <span>Founder: Annastacia Robinnson</span>
            <span>More From - Cacoona</span>
            <div className="flex gap-3">
              <p>Material</p>
              <p>:</p>
              <button className="py-2.5 w-[8rem] border hover:bg-white hover:text-black">
                Hardcore
              </button>
              <button className="py-2.5 w-[8rem] border hover:bg-white hover:text-black">
                Online
              </button>
            </div>
          </div>
          <div className="mt-6 leading-[28.8px]">
            <p>
              Experience the tactile pleasure of penning down your thoughts and
              dreams in our beautifully crafted hardcover journal. Made with
              premium materials and featuring thoughtful prompts and
              inspirational quotes, the Chesper Hardcover Journal is your
              trusted companion on the path to self-discovery.
            </p>
          </div>
          <div className="flex flex-col gap-5 mt-8">
            <span className="flex items-center gap-3">
              <FaEye />
              People are viewing this right now
            </span>
            <span className="font-semibold">Let us know abour your query!</span>
          </div>
          <div className="mt-10 flex gap-8">
            <div className="number-input border w-[140px] py-2 px-4 flex ">
              <button onClick={decrement} className="text-[20px]">
                -
              </button>
              <input
                type="text"
                value={value}
                readOnly
                className="outline-none bg-transparent max-w-[85px] text-center"
              />
              <button onClick={increment} className="text-[20px]">
                +
              </button>
            </div>
            <button className="w-full bg-[#4FA2AE] text-white font-semibold">
              BUY NOW
            </button>
          </div>
        </div>
      </div>
      <div className="mt-14">
        <div className="h-[1px] w-full bg-white"></div>
      </div>
    </section>
  );
};

export default Hero;
