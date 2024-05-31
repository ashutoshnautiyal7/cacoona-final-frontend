import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa6";

const Section1 = () => {
  return (
    <section className="px-[1.2rem] md:px-[4rem] pt-6 pb-8 md:pb-16 md:pt-16  flex flex-col justify-between bg-[#30304C] text-white">
      <div className=" flex justify-between items-center">
        <div className="max-w-[100%] lg:max-w-[35rem] xl:max-w-[50rem]">
          <h1 className="font-bold text-[42px] md:text-[52px] xl:text-[64px] leading-[140%] md:leading-[120.7%] mt-6">
            Discover Farm by Cacoona
          </h1>
          <p className="text-[16px] md:text-[22px] leading-[190%] md:leading-[180%]  mt-6 text-[#D9D9D9]">
            Welcome to Cacoona, where we are driven by a passion for celestial
            beauty and a commitment to crafting exquisite creations inspired by
            the wonders of the cosmos. Our mission is to bring the magic of the
            universe into your everyday life, allowing you to experience the
            enchantment of the stars and planets through our unique designs
          </p>
        </div>
        <Image src="/Images/moon.png" alt="#" width={400} height={400} className="hidden lg:inline" />
      </div>
      <div className="flex flex-col md:flex-row gap-8 justify-between mt-12 md:mt-[7rem]">
        <div className="bg-gradient-to-t from-[rgba(79,162,174,0.25)] to-[rgba(255,241,219,0.25)] md:max-w-[310px] px-5 md:px-6 py-6 md:py-8 rounded-xl">
          <FaStar className="w-4 md:w-5 h-4 md:h-5" />
          <h3 className="font-bold mt-3 md:mt-4 text-[18px] md:text-[20px]">
            Exclusive Previews
          </h3>
          <p className="mt-1.5 md:mt-2 text-[15px] md:text-[16px]">
            Be among the first to explore our latest creations with exclusive previews. Immerse yourself in the celestial splendor defining Cacoona
          </p>
        </div>
        <div className="bg-gradient-to-t from-[rgba(79,162,174,0.25)] to-[rgba(255,241,219,0.25)] md:max-w-[310px] px-5 md:px-6 py-6 md:py-8 rounded-xl">
          <FaStar className="w-4 md:w-5 h-4 md:h-5" />
          <h3 className="font-bold mt-3 md:mt-4 text-[18px] md:text-[20px]">
            Community Engagement
          </h3>
          <p className="mt-1.5 md:mt-2 text-[15px] md:text-[16px]">
            Join our vibrant community, connect with fellow enthusiasts, and share your thoughts. Let's explore the wonders of the universe together
          </p>
        </div><div className="bg-gradient-to-t from-[rgba(79,162,174,0.25)] to-[rgba(255,241,219,0.25)] md:max-w-[310px] px-5 md:px-6 py-6 md:py-8 rounded-xl">
          <FaStar className="w-4 md:w-5 h-4 md:h-5" />
          <h3 className="font-bold mt-3 md:mt-4 text-[18px] md:text-[20px]">
            Testimonials
          </h3>
          <p className="mt-1.5 md:mt-2 text-[15px] md:text-[16px]">
            Discover why Cacoona has captured hearts worldwide. Hear from satisfied customers and influencers who've experienced our celestial-inspired designs firsthand
          </p>
        </div>


      </div>
    </section>
  );
};

export default Section1;