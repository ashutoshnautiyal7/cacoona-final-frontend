// src={data.images[mainImageIndex].url}

"use client";
import React, { useRef, useState } from "react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { FaEye } from "react-icons/fa";
import axios from "axios";
import { Button } from "../../components/ui/button";
import { useSession, signIn, signOut } from "next-auth/react";
import { ThreeCircles } from "react-loader-spinner";
import { useRouter } from "next/navigation";
import useCart from "@/hooks/use-cart";

const Hero = ({ data }) => {
  const [material, setMaterial] = useState("hardcover");
  const [selectedMaterial, setSelectedMaterial] = useState("hardcover");
  console.log("the data in the hero is ", data);

  const router = useRouter();

  const cart = useCart();

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
      const res = await axios.post("https://admin.cacoona.com/api/checkout", {
        productData,
        email,
      });

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
      const res = await axios.post("https://admin.cacoona.com/api/checkout", {
        productData,
        email,
      });

      window.location = res.data.url;
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <section className="bg-[#30304C] pt-7 md:pt-10 px-[1.2rem] md:px-[2.5rem]">
      <div className="flex gap-10 flex-col xl:flex-row  justify-center items-center xl:items-start">
        <div className="lg:min-w-[49rem] flex flex-col-reverse md:flex-row gap-5 sm:gap-8 md:gap-4 lg:gap-6 ">
          <div className="flex md:flex-col gap-4 lg:gap-5 justify-center">
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
            {/* add to card and book now button for small device */}
            <span className="flex md:hidden gap-4 w-full mt-6">
              {isCheckoutLoading ? (
                <ThreeCircles height="30" width="100" color="#000" />
              ) : data.category === "BOOKS" ? (
                <button
                  onClick={() => {
                    session ? handleBuyNowBook() : router.push("/login");
                  }}
                  className="w-full bg-[#4FA2AE] text-white px-6 font-semibold text-[14px] md:text-[16px] py-3 rounded-md"
                >
                  BUY NOW
                </button>
              ) : (
                <>
                  <button
                    onClick={() => {
                      session ? handleBuyNow() : router.push("/login");
                    }}
                    className="w-full bg-[#4FA2AE] text-white px-6 font-semibold text-[14px] md:text-[16px] py-3 rounded-md"
                  >
                    BUY NOW
                  </button>
                  <button
                    onClick={(event) => {
                      if (!email) {
                        toast.error("Please login to add to cart");
                        return;
                      }
                      event.stopPropagation();
                      const productData = {
                        id: data.id,
                        imageSrc: data.images[0].url,
                        productName: data.name,
                        currentPrice: data.currentPrice,
                        originalPrice: data.originalPrice,
                        quantity: value,
                        category: data.category,
                      };
                      cart.addItem(productData, email);
                    }}
                    className={`w-full  bg-[#4FA2AE] text-white px-6 font-semibold text-[14px] md:text-[16px] rounded-md`}
                  >
                    Add To Cart
                  </button>
                </>
              )}
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
                  onClick={() => {
                    setMaterial("hardcover");
                    setSelectedMaterial("hardcover");
                  }}
                  className={`px-4 py-2 md:py-2.5 w-[6.2rem] md:w-[8rem] border text-[14px] md:text-[16px] transition-colors duration-200 ${
                    selectedMaterial === "hardcover"
                      ? "bg-white text-black"
                      : "hover:bg-white hover:text-black"
                  }`}
                >
                  Hardcover
                </button>
                <button
                  onClick={() => {
                    setMaterial("online");
                    setSelectedMaterial("online");
                  }}
                  className={`px-4 py-2 md:py-2.5 w-[6.2rem] md:w-[8rem] border text-[14px] md:text-[16px] transition-colors duration-200 ${
                    selectedMaterial === "online"
                      ? "bg-white text-black"
                      : "hover:bg-white hover:text-black"
                  }`}
                >
                  Online
                </button>
              </div>
            </div>
          ) : (
            <></>
          )}
          <div className="mt-7 md:mt-6 leading-[28.8px]">
            <p className="whitespace-pre-wrap">
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
            <div className="number-input border w-[125px] md:w-[140px] py-2 px-4 flex rounded-md">
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

            {/* add to card and book now button for large device */}
            <div className="hidden md:flex gap-8 w-full">
              {isCheckoutLoading ? (
                <ThreeCircles height="30" width="100" color="#000" />
              ) : data.category === "BOOKS" ? (
                <button
                  onClick={() => {
                    session ? handleBuyNowBook() : router.push("/login");
                  }}
                  className="w-full bg-[#4FA2AE] text-white px-6 font-semibold text-[14px] md:text-[16px] rounded-md"
                >
                  BUY NOW
                </button>
              ) : (
                <>
                  <button
                    onClick={() => {
                      session ? handleBuyNow() : router.push("/login");
                    }}
                    className="w-full bg-[#4FA2AE] text-white px-6 font-semibold text-[14px] md:text-[16px] rounded-md"
                  >
                    BUY NOW
                  </button>
                  <button
                    onClick={(event) => {
                      if (!email) {
                        toast.error("Please login to add to cart");
                        return;
                      }
                      event.stopPropagation();
                      const productData = {
                        id: data.id,
                        imageSrc: data.images[0].url,
                        productName: data.name,
                        currentPrice: data.currentPrice,
                        originalPrice: data.originalPrice,
                        quantity: value,
                        category: data.category,
                      };
                      cart.addItem(productData, email);
                    }}
                    className={`w-full  bg-[#4FA2AE] text-white px-6 font-semibold text-[14px] md:text-[16px] rounded-md`}
                  >
                    Add To Cart
                  </button>
                </>
              )}
            </div>
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
