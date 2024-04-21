import Footer from "@/components/Footer/Footer";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MdKeyboardArrowDown } from "react-icons/md";

const page = () => {
  return (
    <main>
      <section className="px-[1.2rem] md:px-[4rem] py-16  items-center bg-[#30304C] text-white flex justify-center relative">
        <div className="absolute opacity-15 hidden md:inline">
          <Image src="/Images/login.png" alt="#" width={620} height={500} />
        </div>
        <div className="w-full flex justify-center flex-col items-center relative">
          <h1 className="text-[32px] font-medium mb-8 md:mb-[3.8rem] text-center leading-[120%] md:leading-0">
            TELL US ABOUT YOURSELF
          </h1>
          <form action="" className="w-full text-[14px]">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5  w-full">
              <div className="flex flex-col flex-1 gap-3">
                <label htmlFor="text">Full Name</label>
                <input
                  type="text"
                  placeholder="Enter your Full Name"
                  required
                  className="text-[#333333] p-2.5 border border-[#C4C4C4] rounded-lg outline-none bg-white w-full"
                />
              </div>
              <div className="flex flex-col flex-1 gap-3">
                <label htmlFor="text">Place of Birth</label>
                <input
                  type="text"
                  placeholder="Enter your Place of Birth"
                  required
                  className="text-[#333333] p-2.5 border border-[#C4C4C4] rounded-lg outline-none bg-white w-full"
                />
              </div>
              <div className="flex flex-col flex-1 gap-3 relative">
                <label htmlFor="gender">Gender</label>
                <div className="relative">
                  <select
                    id="gender"
                    required
                    className="text-[#333333] p-2.5 pr-10 border border-[#C4C4C4] rounded-lg outline-none bg-white w-full appearance-none"
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <MdKeyboardArrowDown className="text-black h-5 w-5" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col flex-1 gap-3 relative">
                <label htmlFor="gender">Zodiac Sign</label>
                <div className="relative">
                  <select
                    id="gender"
                    required
                    className="text-[#333333] p-2.5 pr-10 border border-[#C4C4C4] rounded-lg outline-none bg-white w-full appearance-none"
                  >
                    <option value="male">Select your Astrology Sign</option>
                    <option value="female">op1</option>
                    <option value="other">op2</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <MdKeyboardArrowDown className="text-black h-5 w-5" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col flex-1 gap-3">
                <label htmlFor="dob">Date of Birth</label>
                <input
                  type="date"
                  placeholder="Enter your Birth Date"
                  required
                  className="text-[#333333] p-2.5 border border-[#C4C4C4] rounded-lg outline-none bg-white w-full"
                />
              </div>
              <div className="flex flex-col flex-1 gap-3 relative">
                <label htmlFor="gender">Gender</label>
                <div className="relative">
                  <select
                    id="gender"
                    required
                    className="text-[#333333] p-2.5 pr-10 border border-[#C4C4C4] rounded-lg outline-none bg-white w-full appearance-none"
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <MdKeyboardArrowDown className="text-black h-5 w-5" />
                  </div>
                </div>
              </div>
            </div>
            <h2 className="text-[24px] font-medium mt-12 mb-6">
              FEW OF YOUR FAVORITIES
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5  w-full">
              <div className="flex flex-col flex-1 gap-3">
                <label htmlFor="text">Hobby</label>
                <input
                  type="text"
                  placeholder="Enter your Hobby"
                  required
                  className="text-[#333333] p-2.5 border border-[#C4C4C4] rounded-lg outline-none bg-white w-full"
                />
              </div>
              <div className="flex flex-col flex-1 gap-3">
                <label htmlFor="text">Team Sport</label>
                <input
                  type="text"
                  placeholder="Enter your favourite team sport"
                  required
                  className="text-[#333333] p-2.5 border border-[#C4C4C4] rounded-lg outline-none bg-white w-full"
                />
              </div>
              <div className="flex flex-col flex-1 gap-3">
                <label htmlFor="text">Color</label>
                <input
                  type="text"
                  placeholder="Enter your favourite color"
                  required
                  className="text-[#333333] p-2.5 border border-[#C4C4C4] rounded-lg outline-none bg-white w-full"
                />
              </div>
              <div className="flex flex-col flex-1 gap-3">
                <label htmlFor="text">Food</label>
                <input
                  type="text"
                  placeholder="Enter your favourite food"
                  required
                  className="text-[#333333] p-2.5 border border-[#C4C4C4] rounded-lg outline-none bg-white w-full"
                />
              </div>
              <div className="flex flex-col flex-1 gap-3">
                <label htmlFor="text">Movie</label>
                <input
                  type="text"
                  placeholder="Enter your favourite movie"
                  required
                  className="text-[#333333] p-2.5 border border-[#C4C4C4] rounded-lg outline-none bg-white w-full"
                />
              </div>
              <div className="flex flex-col flex-1 gap-3">
                <label htmlFor="text">Holiday Place</label>
                <input
                  type="text"
                  placeholder="Enter your favourite holiday place"
                  required
                  className="text-[#333333] p-2.5 border border-[#C4C4C4] rounded-lg outline-none bg-white w-full"
                />
              </div>
            </div>
            <div className="flex justify-center">
          <button className="bg-[#4FA2AE] w-[10rem] p-3 rounded-xl mt-10 md:mt-12 ">
            Submit
          </button>
        </div>
          </form>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default page;
