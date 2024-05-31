"use client";
import React, { use, useEffect } from "react";
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
import { FiShoppingBag } from "react-icons/fi";
import { TbLogout2 } from "react-icons/tb";
import { MdOutlineCancel } from "react-icons/md";
import Link from "next/link";
import useCart from "@/hooks/use-cart";
import { Button } from "../ui/button";
import { useSession } from "next-auth/react";
import SearchBar from "../ui/search-bar";
const Navbar = () => {
  const { loadCart, items } = useCart();

  const { data: session, status } = useSession();

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

  useEffect(() => {
    if (session) {
      const email = session.user.email;
      loadCart(email);
    }
  }, [session, loadCart]);

  return (
    <>
      <section className="bg-[#FFEECD] text-[11.5px] md:text-[14px] hidden md:flex gap-4 md:gap-10 items-center justify-center px-6 py-1.5 md:p-2.5 text-center leading-4">
        <p className="font-semibold ">
          Summer Sale For All Accessories And Express Delivery - OFF 10%!{" "}
          <b className="ml-2 md:ml-5">Shop Now</b>
        </p>
      </section>
      <section className="px-[1.5rem] md:px-[2.5rem] xl:px-[7.5rem] pt-3 md:pt-0 pb-6 flex flex-col justify-between bg-[#30304C] text-white">
        <div className="flex justify-between items-center">
          <Link href="/">
            <img
              src="/Images/logo2.png"
              alt="#"
              // width={120}
              // height={80}
              className="w-[4rem] md:w-[7rem]"
            />
          </Link>

          {/* for large device  */}
          <div className="flex-1 hidden md:flex mx-10 xl:mx-32 ">
            <SearchBar />
          </div>


          <div className="flex gap-4 md:gap-10 text-[10px] items-center">
            <Link href={"/wishlist"}>
              <span className="flex flex-col items-center justify-center cursor-pointer">
                <FaRegHeart className="w-5 md:w-6 h-5 md:h-6 mb-1" />
                WISHLIST
              </span>
            </Link>
            <Link
              href={"/cart"}
              className="flex flex-col items-center justify-center relative cursor-pointer"
            >
              <MdOutlineShoppingCart className="w-5 md:w-6 h-5 md:h-6 mb-1" />
              CART
              <div className="absolute text-[12px] md:text-[13px] -top-1 md:-top-1.5 -right-0 md:-right-0.5 bg-[#4FA2AE] text-white w-[14px] md:w-[18px] h-[14px] md:h-[18px] flex items-center justify-center rounded-full font-semibold">
                {items?.length}
              </div>
            </Link>
            <span
              className="flex flex-col items-center justify-center relative cursor-pointer"
              onMouseEnter={toggleDropdown3}
              onMouseLeave={toggleDropdown3}
            >
              <FiUser className="w-5 md:w-6 h-5 md:h-6 mb-1" />
              ACCOUNT
              {/* Dropdown */}
              {dropdown3Open && (
                <>
                  <div className="absolute top-full right-0 h-1.5 w-52"></div>
                  <div className="absolute top-full right-0 bg-[#4FA2AE] text-white p-4 flex flex-col gap-2 text-[14px] w-[15rem] justify-center font-normal mt-1.5 shadow-md rounded-sm z-50">
                    <Link href="/" className="flex items-center gap-2">
                      <FiUser className="w-5 md:w-5 h-5 md:h-5 " />
                      Manage My Account
                    </Link>
                    <Link href="/" className="flex items-center gap-2">
                      <FiShoppingBag className="w-5 md:w-5 h-5 md:h-5 " />
                      My Order
                    </Link>
                    <Link href="/" className="flex items-center gap-2">
                      <MdOutlineCancel className="w-5 md:w-5 h-5 md:h-5 " />
                      My Cancellations
                    </Link>
                    <Link href="/" className="flex items-center gap-2">
                      <TbLogout2 className="w-5 md:w-5 h-5 md:h-5 " />
                      Logout
                    </Link>
                  </div>
                </>
              )}
            </span>
          </div>
        </div>
        
        {/* for small device */}
        <div className="flex md:hidden mt-2 flex-1">
          <SearchBar />
        </div>

        <div className="hidden md:flex gap-5 lg:gap-10 xl:gap-16 -mt-2 text-[14px] lg:text-[16px] font-light justify-center items-center w-full">
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
                <div className="absolute top-full left-0 bg-[#4FA2AE] text-white p-4 flex flex-col gap-2 text-[14px] lg:text-[16px] w-[15rem] justify-center font-normal mt-1.5 shadow-md rounded-sm z-50">
                  <Link href={"/category/charms"}>Charms</Link>
                  <Link href={"/category/earrings"}>Elemental Earrings</Link>
                  <Link href={"/category/rings"}>Cosmic Rings</Link>
                  <Link href={"/category/gifts"}>Astrology Keychains</Link>
                  <Link href={"/category/pendants"}>Pendants</Link>
                </div>
              </>
            )}
          </span>
          <Link href={"/home"}>Home</Link>
          <Link href={"/farm"} className="flex items-center relative">
            Cacoona Farm
          </Link>
          <Link href={"/about"}> About Us</Link>
          <span>More At Cacoona</span>
        </div>
      </section>
    </>
  );
};

export default Navbar;
