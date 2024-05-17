import Image from "next/image";
import React from "react";

const Section2 = () => {
  return (
    <section className="px-[1.2rem] md:px-[4rem] pb-6 pt-8 md:pt-14 md:pb-8 bg-[#30304C]">
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
        <div className="bg-black text-white px-3 sm:px-5 py-8 sm:pb-6 justify-center items-center lg:items-start gap-5 flex lg:flex-col sm:h-[19rem] lg:h-[38rem] lg:w-1/2">
          <Image
            src="/Images/s1.png"
            alt="#"
            width={350}
            height={350}
            className="mx-auto hidden lg:flex"
          />
          <Image
            src="/Images/s1.png"
            alt="#"
            width={200}
            height={200}
            className="mx-auto hidden sm:flex lg:hidden"
          />
          <Image
            src="/Images/s1.png"
            alt="#"
            width={110}
            height={110}
            className="mx-auto flex sm:hidden"
          />
          <span className="">
            <h3 className="font-semibold text-[20px] md:text-[24px] leading-[24px]">
              Cosmic Bliss Necklace
            </h3>
            <p className="text-[14px] leading-[21px] mt-2 md:mt-4">
              Elegant pendant reflecting the beauty of the cosmos
            </p>
            <p className="text-[14.5px] md:text-[16px underline mt-2 md:mt-4">
              Shop Now
            </p>
          </span>
        </div>
        <div className="lg:w-2/3 flex flex-col gap-3 md:gap-5 text-white">
          <div className="lg:h-1/2 bg-black flex flex-row-reverse pl-5 md:px-5 py-5 md:py-2 items-center lg:items-end">
            <Image
              src="/Images/s2.png"
              alt="#"
              width={300}
              height={300}
              className="mx-auto hidden sm:flex"
            />
            <Image
              src="/Images/s2.png"
              alt="#"
              width={160}
              height={160}
              className="mx-auto flex sm:hidden"
            />
            <span className="lg:mb-5">
              <h3 className="font-semibold text-[20px] md:text-[24px] leading-[24px]">
                Astro Keyring Set
              </h3>
              <p className="text-[14px] leading-[21px] mt-2 md:mt-4">
                Three keyrings representing earth, air, and fire elements
              </p>
              <p className="text-[14.5px] md:text-[16px underline mt-2 md:mt-4">
                Shop Now
              </p>
            </span>
          </div>
          <div className="h-1/2 flex gap-3 md:gap-5 sm:flex-row">
            <div className="w-1/2 bg-black p-5 justify-around flex flex-col">
              <Image
                src="/Images/s3.png"
                alt="#"
                width={200}
                height={200}
                className="mx-auto"
              />
              <span className=" m">
                <h3 className="font-semibold text-[20px] md:text-[24px] leading-[24px]">
                  Starlight Anklet
                </h3>
                <p className="text-[14px] leading-[21px] mt-2 md:mt-4">
                  Shining celestial elegance.
                </p>
                <p className="text-[14.5px] md:text-[16px] underline mt-2 md:mt-4">
                  Shop Now
                </p>
              </span>
            </div>
            <div className="w-1/2 bg-black p-5 justify-around  flex flex-col">
              <span>
                <Image
                  src="/Images/s4.png"
                  alt="#"
                  width={130}
                  height={130}
                  className="mx-auto hidden sm:flex"
                />
                <Image
                  src="/Images/s4.png"
                  alt="#"
                  width={80}
                  height={80}
                  className="mx-auto flex md:hidden"
                />
              </span>

              <span className=" mt-2">
                <h3 className="font-semibold text-[20px] md:text-[24px] leading-[24px]">
                  Galaxy Keychain
                </h3>
                <p className="text-[14px] leading-[21px] mt-2 md:mt-4">
                  Portable cosmic charm.
                </p>
                <p className="text-[14.5px] md:text-[16px underline mt-2 md:mt-4">
                  Shop Now
                </p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
