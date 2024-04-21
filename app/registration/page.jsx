import Footer from "@/components/Footer/Footer";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <main>
      <section className="px-[1.2rem] md:px-[4rem] h-screen items-center bg-[#30304C] text-white flex justify-around">
        <div className=" flex flex-col items-center w-full md:w-fit">
          <h1 className="text-[32px] font-medium">Create an account</h1>
          <p className="text-[#B5B5B5] text-[14px] mt-2 mb-3">
            Register to Begin Your Path to Personal Growth
          </p>
          <form
            action=""
            className="flex flex-col gap-3 mt-5 text-[14px] w-full"
          >
            <label htmlFor="email">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              required
              className="text-[#B5B5B5] p-3 border border-[#C4C4C4] rounded-lg outline-none bg-transparent w-full md:w-[18rem] lg:w-[25rem]"
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              required
              className="text-[#B5B5B5] p-3 border border-[#C4C4C4] rounded-lg outline-none bg-transparent w-full md:w-[18rem] lg:w-[25rem]"
            />
            <label htmlFor="email" className="mt-2">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              required
              className="text-[#B5B5B5] p-3 border border-[#C4C4C4] rounded-lg outline-none bg-transparent w-full md:w-[18rem] lg:w-[25rem]"
            />
            <button className="bg-[#4FA2AE] w-full p-3 rounded-xl mt-4">
              Create Account
            </button>
            <button className="bg-white text-black font-semibold w-full p-3 rounded-xl flex items-center gap-6 justify-center mt-1">
              <Image src="/Images/google.png" alt="#" width={25} height={25} />
              Sign in with Google
            </button>
          </form>
          <Link href="/registration" className="mt-2">
            <b className="text-[12px] font-medium text-[#AFAFAF]">
              Don’t have an account?
            </b>
            <b className="text-[12px] font-medium text-[#4FA2AE]">
              {" "}
              Sign up for free!
            </b>
          </Link>
        </div>
        <div className="hidden md:inline">
          <Image src="/Images/login.png" alt="#" width={620} height={500} />
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default page;
