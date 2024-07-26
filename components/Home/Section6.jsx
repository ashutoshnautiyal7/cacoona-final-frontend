"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Section6 = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <section className="px-[1.2rem] md:px-[2.5rem] lg:px-[6rem] pb-6 pt-8 md:pt-14 md:pb-4 bg-[#30304C]">
      <div className="flex items-center gap-4">
        <div className="bg-[#4FA2AE] h-9 w-5 rounded-sm"></div>
        <h2 className="text-[#4FA2AE] text-[14px] md:text-[16px] font-semibold ">
          Our Products Featured
        </h2>
      </div>
      <div className="mt-4 text-white flex gap-6 md:gap-20 items-start md:items-end justify-between">
        <div className="flex flex-col lg:flex-row lg:items-end gap-2 lg:gap-20">
          <h3 className="font-semibold text-[30px] md:text-[36px] leading-[120%]">
            Sneak Peek of Our Latest Expansions
          </h3>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-3 md:gap-5 mt-6 md:mt-12">
        <div className="bg-black text-white px-5 sm:px-5 py-8 sm:pb-6 justify-around items-center lg:items-start gap-5 flex flex-col sm:flex-row lg:flex-col sm:h-[19rem] lg:h-[39rem] lg:w-1/2">
          <Image
            src="/Images/s11.png"
            alt="#"
            width={450}
            height={450}
            className="mx-auto hidden lg:flex"
          />
          <Image
            src="/Images/s11.png"
            alt="#"
            width={200}
            height={200}
            className="mx-auto hidden sm:flex lg:hidden"
          />
          <Image
            src="/Images/s11.png"
            alt="#"
            width={110}
            height={110}
            className="mx-auto flex sm:hidden"
          />
          <Link href={"product/669118087382c19c94833fe6"} className="">
            <h3 className="font-semibold text-[20px] md:text-[24px] leading-[24px]">
              MAGNIFYING GLASS/NECKLACE
            </h3>
            <p className="text-[14px] leading-[21px] mt-2 md:mt-4">
              Excellent for any occasion, pretty convenient Comes by color or by
              dozen assorted
            </p>
            <p className="text-[14.5px] md:text-[16px underline mt-2 md:mt-4">
              Shop Now
            </p>
          </Link>
        </div>
        <div className="lg:w-2/3 flex flex-col gap-3 md:gap-5 text-white">
          <div className="lg:h-1/2 bg-black flex flex-col sm:flex-row-reverse px-5 md:px-5 py-5 md:py-0 items-center lg:items-end">
            <Image
              src="/Images/s22.png"
              alt="#"
              width={300}
              height={300}
              className="mx-auto hidden sm:flex"
            />
            <Image
              src="/Images/s22.png"
              alt="#"
              width={160}
              height={160}
              className="mx-auto flex sm:hidden"
            />
            <Link href={"/product/669114937737d3388d8394e9"} className="lg:mb-5">
              <h3 className="font-semibold text-[20px] md:text-[24px] leading-[24px]">
                Celestial Fidget Spinning Ring
              </h3>
              <p className="text-[14px] leading-[21px] mt-2 md:mt-4">
                This out-of-this-world Celestial Fidget Ring is here to give you
                the heavenly stress relief you need! Boasting a sleek and
                stylish spinning ring design, this accessory offers a unique
                spin on traditional anxiety relief.
              </p>
              <p className="text-[14.5px] md:text-[16px underline mt-2 md:mt-4">
                Shop Now
              </p>
            </Link>
          </div>
          <div className="lg:h-1/2 bg-black flex flex-col sm:flex-row-reverse px-5 md:px-5 py-5 md:py-0 items-center lg:items-end">
            <Image
              src="/Images/s33.png"
              alt="#"
              width={300}
              height={300}
              className="mx-auto hidden sm:flex"
            />
            <Image
              src="/Images/s33.png"
              alt="#"
              width={160}
              height={160}
              className="mx-auto flex sm:hidden"
            />
            <Link href={"/product/669113e17737d3388d8394e7"} className="lg:mb-5">
              <h3 className="font-semibold text-[20px] md:text-[24px] leading-[24px]">
                Eight Planets Natural Stone Beaded Bracelet
              </h3>
              {/* <p className="text-[14px] leading-[21px] mt-2 md:mt-4">
                Three keyrings representing earth, air, and fire elements
              </p> */}
              <p className="text-[14.5px] md:text-[16px underline mt-2 md:mt-4">
                Shop Now
              </p>
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-16 md:mt-24 flex flex-col md:flex-row gap-8 justify-around md:items-start">
        <div className="text-white flex md:flex-col items-center justify-center gap-4 md:gap-0">
          <Image
            src="/Images/sl1.png"
            alt="#"
            width={60}
            height={60}
            className="bg-[#4FA2AE] rounded-full p-2 hidden md:flex"
          />
          <Image
            src="/Images/sl1.png"
            alt="#"
            width={50}
            height={50}
            className="bg-[#4FA2AE] rounded-full p-2 flex md:hidden"
          />
          <div className="flex flex-col text-start md:text-center">
            <span className="font-semibold text-[18px] md:text-[20px] md:mt-6 leading-[130%]">
              FREE AND FAST DELIVERY
            </span>
            <span className="text-[14px] mt-1 md:mt-2">
              Free delivery for all orders over $140
            </span>
          </div>
        </div>
        <div className="text-white flex md:flex-col items-center justify-center gap-4 md:gap-0 -ml-4">
          <Image
            src="/Images/sl2.png"
            alt="#"
            width={60}
            height={60}
            className="bg-[#4FA2AE] rounded-full p-2 hidden md:flex"
          />
          <Image
            src="/Images/sl2.png"
            alt="#"
            width={50}
            height={50}
            className="bg-[#4FA2AE] rounded-full p-2 flex md:hidden"
          />
          <div className="flex flex-col text-start md:text-center">
            <span className="font-semibold text-[18px] md:text-[20px] md:mt-6 leading-[130%]">
              24/7 CUSTOMER SERVICE
            </span>
            <span className="text-[14px] mt-1 md:mt-2">
              Friendly 24/7 customer support
            </span>
          </div>
        </div>
        <div className="text-white flex md:flex-col items-center justify-center gap-4 md:gap-0 -ml-1.5">
          <Image
            src="/Images/sl3.png"
            alt="#"
            width={60}
            height={60}
            className="bg-[#4FA2AE] rounded-full p-2 hidden md:flex"
          />
          <Image
            src="/Images/sl3.png"
            alt="#"
            width={50}
            height={50}
            className="bg-[#4FA2AE] rounded-full p-2 flex md:hidden"
          />
          <div className="flex flex-col text-start md:text-center">
            <span className="font-semibold text-[18px] md:text-[20px] md:mt-6 leading-[130%]">
              MONEY BACK GUARANTEE
            </span>
            <span className="text-[14px] mt-1 md:mt-2">
              We reurn money within 30 days
            </span>
          </div>
        </div>
      </div>
      {/* <div className="flex justify-end mt-8 md:mt-16">
        <Image
          src="/Images/up-arrow.png"
          alt="#"
          width={40}
          height={40}
          className="cursor-pointer"
          onClick={scrollToTop}
        />
      </div> */}
    </section>
  );
};

export default Section6;
