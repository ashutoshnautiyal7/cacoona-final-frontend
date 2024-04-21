import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer2 = () => {
  return (
    <>
      <section className="px-[2rem] sm:px-[1.2rem] md:px-[3rem] flex flex-col gap-4 lg:flex-row text-[#FAFAFA] lg:gap-8 justify-around lg:justify-between xl:justify-around items-center bg-black py-[3rem] w-full">
        <div className="flex flex-col sm:flex-row w-full gap-7 justify-around">
          <div className="flex flex-col gap-2 md:gap-3">
            <h2 className="text-[20px] md:text-[24px] font-bold mb-1 md:mb-2">
              Cacoona
            </h2>
            <p className="text-[16px] md:text-[20px]">Subscribe</p>
            <p className="text-[14px] md:text-[16px]">
              Get 10% off your first order
            </p>
            <div className="relative w-fit">
              <input
                type="email"
                placeholder="Enter your email"
                required
                className="text-[#B5B5B5] p-2 border border-white outline-none bg-transparent text-[14px] md:text-[16px]"
              />
              <Image
                src="/Images/right-arrow.png"
                alt="#"
                width={20}
                height={20}
                className="object-fit absolute right-2 top-2.5"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 md:gap-3">
            <h2 className="text-[16px] md:text-[20px] font-bold mb-1 md:mb-2">
              Support
            </h2>
            <p className="text-[16px]">
              111 XXXX AAAA, BBBB,
              <br /> AS 1515, USA.
            </p>
            <a href="mailto:chespersupport@cacoona.com">
              chespersupport@cacoona.com
            </a>
            <a href="tel:+18888899999">+1-88888-99999</a>
          </div>
        </div>
        {/* for large device */}
        <div className="hidden sm:flex flex-col sm:flex-row mt-8 lg:mt-0 justify-around lg:justify-between xl:justify-around text-[14px] md:text-[16px] w-full">
          <div className="flex flex-col gap-2 md:gap-3">
            <h2 className="text-[16px] md:text-[20px] font-bold mb-1 md:mb-2">
              Account
            </h2>
            <Link href="/">My Account</Link>
            <Link href="/">Login / Register</Link>
            <Link href="/">Cart</Link>
            <Link href="/">Wishlist</Link>
            <Link href="/">Shop</Link>
          </div>
          <div className="flex flex-col gap-2 md:gap-3">
            <h2 className="text-[16px] md:text-[20px] font-bold mb-1 md:mb-2">
              Quick Links
            </h2>
            <Link href="/">Privacy Policy</Link>
            <Link href="/">Terms Of Use</Link>
            <Link href="/">FAQ</Link>
            <Link href="/">Contact</Link>
          </div>
          <div className="flex flex-col gap-2 md:gap-3">
            <h2 className="text-[16px] md:text-[20px] font-bold mb-1 md:mb-2">
              Social Media
            </h2>
            <Link href="/">Facebook</Link>
            <Link href="/">Instagram</Link>
            <Link href="/">X</Link>
          </div>
        </div>
        {/* for small device */}
        <div className="flex sm:hidden flex-col sm:flex-row mt-4 lg:mt-0  text-[14px] md:text-[16px] w-full">
          <div className="flex gap-12">
            <div className="flex flex-col gap-2 md:gap-3">
              <h2 className="text-[16px] md:text-[20px] font-bold mb-1 md:mb-2">
                Account
              </h2>
              <Link href="/">My Account</Link>
              <Link href="/">Login / Register</Link>
              <Link href="/">Cart</Link>
              <Link href="/">Wishlist</Link>
              <Link href="/">Shop</Link>
            </div>
            <div className="flex flex-col gap-2 md:gap-3">
              <h2 className="text-[16px] md:text-[20px] font-bold mb-1 md:mb-2">
                Quick Links
              </h2>
              <Link href="/">Privacy Policy</Link>
              <Link href="/">Terms Of Use</Link>
              <Link href="/">FAQ</Link>
              <Link href="/">Contact</Link>
            </div>
          </div>
          <div className="flex flex-col gap-2 md:gap-3 mt-6 lg:mt-0">
            <h2 className="text-[16px] md:text-[20px] font-bold mb-1 md:mb-2">
              Social Media
            </h2>
            <Link href="/">Facebook</Link>
            <Link href="/">Instagram</Link>
            <Link href="/">X</Link>
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
