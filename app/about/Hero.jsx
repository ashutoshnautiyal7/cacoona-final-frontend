import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="px-[1.2rem] md:px-[4rem] pt-6 pb-14 flex flex-col justify-between bg-[#30304C] text-white">
      <h1 className="font-bold text-[42px] md:text-[52px] xl:text-[64px] leading-[140%] md:leading-[120.7%] lg:mt-3">
        What is a Chesper and Cacoona you ask…
      </h1>
      <div className="flex justify-between flex-1 gap-5 items-start mt-6">
        <div className="max-w-[100%] lg:max-w-[35rem] xl:max-w-[45rem]">
          <p className="text-[20px]  leading-[160%] md:leading-[35px] text-[#D9D9D9]">
            What is a Chesper and Cacoona you ask… Well, A Chesper is your
            personal chest. It's where you can be free to imagine and record
            your story, outline your journey and display your inner youth. Good
            things and positive thoughts stays in your chesper about you.
            There's always room for growth within you but to do so you must
            relinquish your burdens, anger and fears and there are specific
            pages for those moments. Your Chesper is a safe for your secrets and
            deep reflections. Cacoona is the conscience and core connector for
            the Charm you are. It's my pleasure to introduce you to Cacoona to
            rediscover and reconnect yourself to you. There is no right or wrong
            way to discover yourself but I know there is one thing truly needed
            and that's curiosity. Are you ready to be curious and creative from
            your core!
          </p>
        </div>
        <div className="hidden lg:inline -mt-16 -mr-16">
          <Image src="/Images/bn1.png" alt="#" width={750} height={750} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
