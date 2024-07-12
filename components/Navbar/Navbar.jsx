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
import { Fade as Hamburger } from "hamburger-react";

// Add styles directly in the same file
const styles = `
  .no-scroll {
    overflow: hidden;
  }
`;

// Append styles to the head of the document
if (typeof document !== "undefined") {
  const styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);
}

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  const closeSidebar = () => {
    setOpen(false);
  };

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

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isOpen]);

  return (
    <>
      <section className="px-[1.5rem] md:px-[2.5rem] xl:px-[7.5rem] pt-1 pb-5 flex flex-col justify-between bg-[#30304C] text-white">
        <div className="flex justify-between items-center">
          <Link href="/">
            <img
              src="/Images/logo4.png"
              alt="#"
              className="w-[7rem] md:w-[8rem] xl:w-[10rem]"
            />
          </Link>

          {/* for large device  */}
          <div className="flex-1 hidden md:flex mx-10 xl:mx-32 ">
            <SearchBar />
          </div>

          <div className="flex gap-3 md:gap-10 text-[10px] items-center">
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
                    <Link href="/profile" className="flex items-center gap-2">
                      <FiUser className="w-5 md:w-5 h-5 md:h-5 " />
                      Manage My Account
                    </Link>
                    <Link href="/orders" className="flex items-center gap-2">
                      <FiShoppingBag className="w-5 md:w-5 h-5 md:h-5 " />
                      My Order
                    </Link>
                    {/* <Link href="/" className="flex items-center gap-2">
                      <MdOutlineCancel className="w-5 md:w-5 h-5 md:h-5 " />
                      My Cancellations
                    </Link> */}

                    {session ? (
                      <Link href="/login" className="flex items-center gap-2">
                        <TbLogout2 className="w-5 md:w-5 h-5 md:h-5 " />
                        Logout
                      </Link>
                    ) : (
                      <Link href="/login" className="flex items-center gap-2">
                        <TbLogout2 className="w-5 md:w-5 h-5 md:h-5 " />
                        LogIn
                      </Link>
                    )}
                  </div>
                </>
              )}
            </span>
            <span className="flex md:hidden -ml-3 -mr-3">
              <Hamburger toggled={isOpen} toggle={setOpen} size={18} />
            </span>
          </div>
        </div>

        {/* for small device */}
        <div className="flex md:hidden mt-2 flex-1">
          <SearchBar />
        </div>

        <div className="hidden md:flex gap-5 lg:gap-10 xl:gap-16 text-[14px] lg:text-[16px] font-light justify-center items-center w-full cursor-pointer">
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
                  {/* <Link href={"/category/charms"}>Charms</Link>
                  <Link href={"/category/earrings"}>Elemental Earrings</Link>
                  <Link href={"/category/rings"}>Cosmic Rings</Link>
                  <Link href={"/category/gifts"}>Gifts</Link>
                  <Link href={"/category/pendants"}>Pendants</Link>
                  <Link href={"/category/bracelets"}>Bracelets</Link> */}
                  <Link href={"/category/accessories"}>
                    Chesper Accessories
                  </Link>
                  <Link href={"/category/collection"}>
                    Celestial Collection
                  </Link>
                </div>
              </>
            )}
          </span>
          <Link href={"/home"}>Home</Link>
          <Link href={"/farm"} className="flex items-center relative">
            Cacoona Connect
          </Link>
          <Link href={"/about"}> About Us</Link>
          <span>More At Cacoona</span>
        </div>
      </section>
      <section>
        {/* Sidebar */}
        <div
          className={`sidebar ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } fixed bg-[#1F1F3A] h-screen w-[50vw] shadow-2xl text-white text-[14px] transition-transform duration-500 ease-in-out z-50 -mt-[1px]`}
        >
          <div className="flex flex-col gap-6 px-[1.5rem] pt-[2rem]">
            <span>Shop by Category</span>
            <ul className="flex flex-col gap-3.5 list-disc pl-6 -mt-1">
              {/* <Link href={"/category/charms"}>
                <li>Charms</li>
              </Link>
              <Link href={"/category/earrings"}>
                <li>Elemental Earrings</li>
              </Link>
              <Link href={"/category/rings"}>
                <li>Cosmic Rings</li>
              </Link>
              <Link href={"/category/gifts"}>
                <li>Gifts</li>
              </Link>
              <Link href={"/category/pendants"}>
                <li>Pendants</li>
              </Link>
              <Link href={"/category/bracelets"}>
                <li>Bracelets</li>
              </Link> */}
              <Link href={"/category/chesper-accessories"}>
                Chesper Accessories
              </Link>
              <Link href={"/category/celestial-collection"}>
                Celestial Collection
              </Link>
            </ul>
            <Link href={"/home"}>Home</Link>
            <Link href={"/farm"} className="flex items-center relative">
              Cacoona Connect
            </Link>
            <Link href={"/about"}> About Us</Link>
            <span>More At Cacoona</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
