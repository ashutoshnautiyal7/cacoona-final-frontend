import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaXTwitter,
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaLinkedinIn,
  FaLinkedin,
} from "react-icons/fa6";
const Footer2 = () => {
  return (
    <>
      <section className="px-[2rem] sm:px-[1.2rem] md:px-[3rem] flex flex-col gap-4 lg:flex-row text-[#FAFAFA] lg:gap-8 justify-around lg:justify-between xl:justify-around items-center bg-black py-[3rem] w-full">
        <div className="flex flex-col sm:flex-row w-full gap-7 justify-around">
          <div className="flex items-center lg:items-start flex-col">
            <Link href="/">
              <Image src="/Images/logo4.png" alt="#" width={180} height={90} />
            </Link>
            <p className="max-w-[35rem] lg:max-w-[22rem] leading-[28px] md:leading-[28px] mt-2 text-center lg:text-start">
              Unleash Your Creativity and Rediscover Yourself with Our
              Thoughtfully Crafted Journals
            </p>
          </div>
          <div className="flex flex-col gap-2 md:gap-3">
            <h2 className="text-[16px] md:text-[20px] font-bold mb-1 md:mb-2">
              Support
            </h2>
            <p className="text-[16px]">
              <a href="tel:+1 7542810741">+1 7542810741</a>
              <br />
              Po box 101853 Fort Lauderdale fl 33310.
            </p>
            <a href="mailto:chespersupport@cacoona.com">
              chespersupport@cacoona.com
            </a>
            <a href="tel:+1 7542810741">+1 7542810741</a>
          </div>
        </div>
        {/* for large device */}
        <div className="hidden sm:flex flex-col sm:flex-row mt-8 lg:mt-0 justify-around lg:justify-between xl:justify-around text-[14px] md:text-[16px] w-full">
          <div className="flex flex-col gap-2 md:gap-3">
            <h2 className="text-[16px] md:text-[20px] font-bold mb-1 md:mb-2">
              Account
            </h2>
            <Link href="/login">Login / Register</Link>
            <Link href="/cart">Cart</Link>
            <Link href="/wishlist">Wishlist</Link>
            <Link href="/home">Shop</Link>
          </div>
          <div className="flex flex-col gap-2 md:gap-3">
            <h2 className="text-[16px] md:text-[20px] font-bold mb-1 md:mb-2">
              Quick Links
            </h2>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms Of Use</Link>
            <Link href="/about">About</Link>
          </div>
          <div className="flex flex-col gap-2 md:gap-3">
            <h2 className="text-[16px] md:text-[20px] font-bold mb-1 md:mb-2">
              Social Media
            </h2>
            <Link href="https://www.instagram.com/_cacoona">
              <FaInstagram className="w-5 h-5" />
            </Link>
            <Link href="https://www.tiktok.com/@_cacoona">
              <FaTiktok className="w-5 h-5" />
            </Link>
            {/* <Link href="/x.com">
              <FaXTwitter className="w-5 h-5" />
            </Link>
            <Link href="/linkedin.com">
              <FaLinkedin className="w-5 h-5" />
            </Link> */}
          </div>
        </div>
        {/* for small device */}
        <div className="flex sm:hidden flex-col sm:flex-row mt-4 lg:mt-0  text-[14px] md:text-[16px] w-full">
          <div className="flex gap-12">
            <div className="flex flex-col gap-2 md:gap-3">
              <h2 className="text-[16px] md:text-[20px] font-bold mb-1 md:mb-2">
                Account
              </h2>
              {/* <Link href="/">My Account</Link> */}
              <Link href="/login">Login / Register</Link>
              <Link href="/cart">Cart</Link>
              <Link href="/wishlist">Wishlist</Link>
              <Link href="/home">Shop</Link>
            </div>
            <div className="flex flex-col gap-2 md:gap-3">
              <h2 className="text-[16px] md:text-[20px] font-bold mb-1 md:mb-2">
                Quick Links
              </h2>
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/terms">Terms Of Use</Link>
              {/* <Link href="/">FAQ</Link> */}
              <Link href="/about">About</Link>
            </div>
          </div>
          <div className="flex flex-col gap-2 md:gap-3 mt-6 lg:mt-0">
            <h2 className="text-[16px] md:text-[20px] font-bold mb-1 md:mb-2">
              Social Media
            </h2>
            <Link href="/">
              <FaFacebook className="w-4 h-4" />
            </Link>
            <Link href="/">
              <FaInstagram className="w-4 h-4" />
            </Link>
            <Link href="/">
              <FaXTwitter className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
      <section className="px-[1.2rem] md:px-[4rem] bg-black flex justify-center items-center border-t-[0.2px] border-[#343434] text-[#343434] py-[0.8rem] text-center">
        @Copyright 2024 all rights reserved by Cacoona
      </section>
    </>
  );
};

export default Footer2;
