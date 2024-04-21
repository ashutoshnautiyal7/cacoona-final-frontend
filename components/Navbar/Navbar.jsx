"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import { FaRegHeart } from "react-icons/fa";
import {
  MdOutlineShoppingCart,
  MdKeyboardArrowUp,
  MdKeyboardArrowDown,
} from "react-icons/md";
import { FiUser } from "react-icons/fi";
import { IoSearchOutline } from "react-icons/io5";
import Link from "next/link";

const Navbar = () => {
  const [dropdown1Open, setDropdown1Open] = useState(false);
  const [dropdown2Open, setDropdown2Open] = useState(false);
  const [dropdown3Open, setDropdown3Open] = useState(false);

  const toggleDropdown1 = () => {
    setDropdown1Open(!dropdown1Open);
  };

  const toggleDropdown2 = () => {
    setDropdown2Open(!dropdown2Open);
  };

  const toggleDropdown3 = () => {
    setDropdown3Open(!dropdown3Open);
  };

  return (
    <>
      <section className="bg-[#FFEECD] text-[11.5px] md:text-[14px] hidden md:flex gap-4 md:gap-10 items-center justify-center px-6 py-1.5 md:p-2.5 text-center leading-4">
        <p className="font-semibold ">
          Summer Sale For All Accessories And Express Delivery - OFF 10%!{" "}
          <b className="ml-2 md:ml-5">Shop Now</b>
        </p>
      </section>
      <section className="px-[1.5rem] md:px-[2.5rem] xl:px-[7.5rem] py-5 flex flex-col justify-between bg-[#30304C] text-white">
        <div className="flex justify-between items-center">
          <Image
            src="/Images/logo.png"
            alt="#"
            width={120}
            height={80}
            className="object-fit hidden md:flex"
          />
          <Image
            src="/Images/logo.png"
            alt="#"
            width={90}
            height={70}
            className="object-fit flex md:hidden"
          />
          {/* input for large device */}
          <div className="w-[45rem] text-[12px] md:text-[14px] hidden md:flex relative mx-10">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="w-full py-2.5 px-4 pr-12 rounded-lg outline-none text-black"
            />
            <IoSearchOutline className="w-6 h-6 text-black absolute top-2 right-4 cursor-pointer" />
          </div>
          <div className="flex gap-4 md:gap-10 text-[10px] items-center">
            <span className="flex flex-col items-center justify-center">
              <FaRegHeart className="w-5 md:w-6 h-5 md:h-6 mb-1" />
              WISHLIST
            </span>
            <span className="flex flex-col items-center justify-center relative">
              <MdOutlineShoppingCart className="w-5 md:w-6 h-5 md:h-6 mb-1" />
              CART
              <div className="absolute text-[12px] md:text-[13px] -top-1 md:-top-1.5 -right-0 md:-right-0.5 bg-[#4FA2AE] text-white w-[14px] md:w-[18px] h-[14px] md:h-[18px] flex items-center justify-center rounded-full font-semibold">
                2
              </div>
            </span>
            <span
              className="flex flex-col items-center justify-center relative"
              onMouseEnter={toggleDropdown3}
              onMouseLeave={toggleDropdown3}
            >
              <FiUser className="w-5 md:w-6 h-5 md:h-6 mb-1" />
              ACCOUNT
              {/* Dropdown */}
              {dropdown3Open && (
                <>
                  <div className="absolute top-full right-0 h-1.5 w-52"></div>
                  <div className="absolute top-full right-0 bg-[#4FA2AE] text-white p-3 flex flex-col gap-2 text-[16px] w-[15rem] justify-center font-normal mt-1.5 shadow-md rounded-sm z-50">
                    <span>Item 1</span>
                    <span>Item 2</span>
                    <span>Item 3</span>
                  </div>
                </>
              )}
            </span>
          </div>
        </div>
        {/* input for small device */}
        <div>
          <div className="mt-4 text-[13px] md:text-[14px] flex md:hidden relative">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="w-full p-1.5 md:py-2.5 px-4 pr-12 rounded-lg outline-none text-black"
            />
            <IoSearchOutline className="w-4 md:w-6 h-4 md:h-6 text-black absolute top-2 right-4 cursor-pointer" />
          </div>
        </div>
        <div className="hidden md:flex gap-5 lg:gap-10 xl:gap-16 mt-4 text-[14px] lg:text-[16px] font-light justify-center items-center w-full">
          <span
            className="flex items-center relative"
            onMouseEnter={toggleDropdown1}
            onMouseLeave={toggleDropdown1}
          >
            Shop by Category
            {dropdown1Open ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
            {/* Dropdown */}
            {dropdown1Open && (
              <>
                <div className="absolute top-full left-0 h-1.5 w-52"></div>
                <div className="absolute top-full left-0 bg-[#4FA2AE] text-white p-3 flex flex-col gap-2 text-[14px] lg:text-[16px] w-[15rem] justify-center font-normal mt-1.5 shadow-md rounded-sm z-50">
                  <span>Celestial Necklaces</span>
                  <span>Astrology Bracelets</span>
                  <span>Elemental Earrings</span>
                  <span>Cosmic Rings</span>
                  <span>Astrology Keychains</span>
                  <span>Pendants</span>
                  <span>Astrology Gift Sets</span>
                </div>
              </>
            )}
          </span>
          <span>New Arrivals</span>
          <span
            className="flex items-center relative"
            onMouseEnter={toggleDropdown2}
            onMouseLeave={toggleDropdown2}
          >
            Latest Collections
            {dropdown2Open ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
            {/* Dropdown */}
            {dropdown2Open && (
              <>
                <div className="absolute top-full left-0 h-1.5 w-52"></div>
                <div className="absolute top-full left-0 bg-[#4FA2AE] text-white p-3 flex flex-col gap-2 text-[14px] lg:text-[16px] w-[15rem] justify-center font-normal mt-1.5 shadow-md rounded-sm z-50">
                  <span>Item 1</span>
                  <span>Item 2</span>
                  <span>Item 3</span>
                </div>
              </>
            )}
          </span>
          <span>Best Selling Products</span>
          <span>More At Cacoona</span>
        </div>
      </section>
    </>
  );
};

export default Navbar;
