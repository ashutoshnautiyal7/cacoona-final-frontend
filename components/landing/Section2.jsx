import React from "react";
import Image from "next/image";
import Link from "next/link";

const Section2 = () => {
  return (
    <section className="px-[1.2rem] md:px-[4rem] py-[5rem] md:py-[7rem] bg-[#30304C] text-white">
      <h2 className="text-[42px] md:text-[52px] xl:text-[64px] leading-[140%] md:leading-[120.7%] font-semibold">
        What we offer?
      </h2>
      <div className="flex flex-col lg:flex-row gap-10 xl:gap-52 bg-gradient-to-r from-[#B15A43] to-[#30304C] p-10 mt-[3rem] rounded-tl-[4rem] md:rounded-tl-[5rem]">
        <Image src="/Images/lp1.png" alt="#" width={400} height={400} />
        <div className="flex flex-col items-start justify-center">
          <h3 className="font-semibold text-[22px] md:text-[32px]">
            Chesper by Cacoona
          </h3>
          <p className="text-[18px] md:text-[20px] leading-[160%] mt-2">
            A Chesper is your paper chest. It&apos;s where you can be free to
            imagine and record your story, outline your journey and display your
            inner youth. Only good things and positive thoughts go into your
            chesper about you. There&apos;s always room for growth within you
            but to do so you must relinquish your burdens, anger and fears and
            there are specific pages for those moments. Your Chesper is a safe
            for your secrets and deep reflections.
          </p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-10 xl:gap-52 bg-gradient-to-r from-[#30304C] to-[#CDB575] p-10 mt-[3rem] rounded-tr-[4rem] md:rounded-tr-[5rem]">
        <Image
          src="/Images/lp2.png"
          alt="#"
          width={400}
          height={400}
          className="inline lg:hidden"
        />

        <div className="flex flex-col items-start justify-center">
          <h3 className="font-semibold text-[22px] md:text-[32px]">
            Cacoona Craft
          </h3>
          <p className="text-[18px] md:text-[20px] leading-[160%] mt-2">
            A little piece of cacoona just for you! Explore our printable sheets
            and be one of the first to order the hard copy before its released.
          </p>
        </div>
        <Image
          src="/Images/lp2.png"
          alt="#"
          width={400}
          height={400}
          className="hidden lg:inline"
        />
      </div>
      <div className="flex flex-col lg:flex-row gap-10 xl:gap-52 bg-gradient-to-r from-[#4FA2AE] to-[#30304C] p-10 mt-[3rem] rounded-tl-[4rem] md:rounded-tl-[5rem]">
        <Image src="/Images/lp3.png" alt="#" width={400} height={400} />
        <Link
          href={"/community"}
          className="flex flex-col items-start justify-center"
        >
          <h3 className="font-semibold text-[22px] md:text-[32px]">
            Cacoona Connect
          </h3>
          <p className="text-[18px] md:text-[20px] leading-[160%] mt-2">
            Dive into the world of cacoona by connecting with others Share your
            creations Uplift us with your journey and bond with your fellow
            connectors.
          </p>
        </Link>
      </div>
    </section>
  );
};

export default Section2;
