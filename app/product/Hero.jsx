// src={data.images[mainImageIndex].url}

"use client";
import React, { useRef, useState } from "react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { FaEye } from "react-icons/fa";
import axios from "axios";
import { useSession, signIn, signOut } from "next-auth/react";
import { ThreeCircles } from "react-loader-spinner";

const Hero = ({ data }) => {
  const [material, setMaterial] = useState("hardcover");
  console.log("the data in the hero is ", data);

  const { data: session, status } = useSession();

  const email = session?.user.email;

  console.log("the email in the hero is ", email);

  const [mainImageIndex, setMainImageIndex] = useState(0);
  const [isCheckoutLoading, setIsCheckoutLoading] = useState(false);
  const handleClickPrev = () => {
    setMainImageIndex((prevIndex) =>
      prevIndex === 0 ? data.images.length - 1 : prevIndex - 1
    );
  };
  const handleClickNext = () => {
    setMainImageIndex((prevIndex) =>
      prevIndex === data.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const [value, setValue] = useState(1);
  const increment = () => {
    setValue(value + 1);
  };
  const decrement = () => {
    setValue(value - 1 >= 0 ? value - 1 : 0);
  };

  const handleBuyNow = async () => {
    try {
      setIsCheckoutLoading(true);
      const productData = [
        {
          id: data.id,
          quantity: value,
        },
      ];
      const res = await axios.post(
        "https://cacoona-admin.vercel.app/api/checkout",
        {
          productData,
          email,
        }
      );

      window.location = res.data.url;
    } catch (error) {
      console.log("error", error);
    }
  };
  const handleBuyNowBook = async () => {
    try {
      setIsCheckoutLoading(true);
      const productData = [
        {
          id: data.id,
          quantity: value,
          material: material,
        },
      ];
      const res = await axios.post(
        "https://cacoona-admin.vercel.app/api/checkout",
        {
          productData,
          email,
        }
      );

      window.location = res.data.url;
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <section className="bg-[#30304C] pt-7 md:pt-10 px-[1.2rem] md:px-[2.5rem]">
      <div className="flex gap-10 flex-col xl:flex-row  justify-center items-center xl:items-start">
        <div className="lg:min-w-[49rem] flex flex-col-reverse md:flex-row gap-5 sm:gap-8 md:gap-4 lg:gap-6 ">
          <div className="flex md:flex-col gap-4 lg:gap-5 justify-around">
            {data.images.map((image, index) => (
              <img
                key={index}
                src={image.url}
                alt={`Thumbnail ${index + 1}`}
                className="w-[4rem] sm:w-[7rem] lg:w-[8rem] sm:h-[9rem] lg:h-[10rem] cursor-pointer"
                onClick={() => setMainImageIndex(index)}
              />
            ))}
          </div>
          <div className="relative w-[19rem] sm:w-[35rem] lg:w-[40rem] h-[23rem] sm:h-[40rem] lg:h-[45rem] rounded-lg md:rounded-xl bg-white justify-center items-center flex">
            <img
              src={data.images[mainImageIndex].url}
              alt={`Main Image ${mainImageIndex + 1}`}
              className="sm:w-[26rem] sm:h-[30rem]"
            />
            <img
              src="/Images/half-left.png"
              alt="Left Arrow"
              className="absolute left-1.5 sm:left-2.5 lg:left-5 w-5 sm:w-14 h-3.5 sm:h-8 cursor-pointer"
              onClick={handleClickPrev}
            />
            <img
              src="/Images/half-right.png"
              alt="Right Arrow"
              className="absolute right-1.5 sm:right-2.5 lg:right-5 w-5 sm:w-14 h-3.5 sm:h-8 cursor-pointer"
              onClick={handleClickNext}
            />
          </div>
        </div>
        <div className="text-white max-w-[43.5rem] lg:max-w-[49rem]">
          <h1 className="text-[40px] md:text-[50px] font-bold leading-[110%]">
            {data.name}
          </h1>
          <h2 className="text-[24px] md:text-[30px] leading-[130%] mt-2.5 md:mt-4">
            {data.category}
          </h2>
          <div className="mt-2 md:mt-3">
            <span className="text-[#4FA2AE] text-[26px] md:text-[36px] leading-[40px] font-semibold">
              ${data.currentPrice}
            </span>
            <span className="mx-2 text-gray-500 text-[24px] leading-[32px] font-semibold">
              /
            </span>
            <span className="text-gray-500 line-through text-[24px] leading-[32px] font-semibold">
              ${data.originalPrice}
            </span>
          </div>
          <div className="mt-1.5 md:mt-3.5 flex">
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

          {data.category === "BOOKS" ? (
            <div className="flex flex-col gap-2 md:gap-3 mt-5 md:mt-8">
              <span>Founder: {data.author || "unknown"}</span>
              <span>More From - Cacoona</span>
              <div className="flex gap-3">
                <p>Material</p>
                <p>:</p>
                <button
                  onClick={() => setMaterial("hardcover")}
                  className="px-4 py-2 md:py-2.5 md:w-[8rem] border hover:bg-white hover:text-black text-[14px] md:text-[16px]"
                >
                  Hardcore
                </button>
                <button
                  onClick={() => setMaterial("online")}
                  className="px-4 py-2 md:py-2.5 md:w-[8rem] border hover:bg-white hover:text-black text-[14px] md:text-[16px]"
                >
                  Online
                </button>
              </div>
            </div>
          ) : (
            <></>
          )}
          <div className="mt-5 md:mt-6 leading-[28.8px]">
            <p>
              {data.description.substr(0, 300) || "Here comes the description "}
            </p>
          </div>
          {/* <div className="flex flex-col gap-3 md:gap-5 mt-6 md:mt-8">
            <span className="flex items-center gap-3">
              <FaEye />
              People are viewing this right now
            </span>
            <span className="font-semibold">Let us know abour your query!</span>
          </div> */}
          <div className="mt-8 md:mt-10 flex gap-8">
            <div className="number-input border w-[140px] py-2 px-4 flex ">
              <button onClick={decrement} className="text-[20px]">
                -
              </button>
              <input
                type="text"
                value={value}
                readOnly
                className="outline-none bg-transparent max-w-[70px] md:max-w-[85px] text-center text-[14px] md:text-[16px]"
              />
              <button onClick={increment} className="text-[20px]">
                +
              </button>
            </div>
            { isCheckoutLoading ?  <ThreeCircles   height="30"
                width="100" color="#000" /> :
            
            data.category === "BOOKS" ? (
              <button
                onClick={() => handleBuyNowBook()}
                className="w-full bg-[#4FA2AE] text-white font-semibold text-[14px] md:text-[16px]"
              >
                BUY NOW
              </button>
            ) : (
              <button
                onClick={() => handleBuyNow()}
                className="w-full bg-[#4FA2AE] text-white font-semibold text-[14px] md:text-[16px]"
              >
                BUY NOW
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="mt-10 md:mt-14">
        <div className="h-[1px] w-full bg-white"></div>
      </div>
    </section>
  );
};

export default Hero;
