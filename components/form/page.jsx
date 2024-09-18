"use client";

import Footer from "@/components/Footer/Footer";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useRouter } from "next/navigation";

const BookForm = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    hobbies: "",
    workbest: "",
    bestwith: "",
    encouraged: "",
    about: "",
    lasttime: "",
    methodof: "",
    believe: "",
  });

  const handleInputChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission with formData
    console.log(formData);
    const formDataQuery = JSON.stringify(formData);
    router.push(`/book/preview?data=${formDataQuery}`);
    // router.push(`/book/preview`, { props: { formData } });
  };

  const maxD = new Date().toISOString().split("T")[0];

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
          <form onSubmit={handleSubmit} className="w-full text-[14px]">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5  w-full">
              <div className="flex flex-col flex-1 gap-3">
                <label htmlFor="hobbies">Hobbies / Interests</label>
                <input
                  type="text"
                  name="hobbies"
                  placeholder="Enter your Hobies / Interests"
                  required
                  value={formData.hobbies}
                  onChange={handleInputChange}
                  className="text-[#333333] p-2.5 border border-[#C4C4C4] rounded-lg outline-none bg-white w-full"
                />
              </div>
              <div className="flex flex-col flex-1 gap-3">
                <label htmlFor="workbest">I WORK BEST WHEN: </label>
                <input
                  type="text"
                  name="workbest"
                  placeholder="WORK BEST WHEN:"
                  required
                  value={formData.workbest}
                  onChange={handleInputChange}
                  className="text-[#333333] p-2.5 border border-[#C4C4C4] rounded-lg outline-none bg-white w-full"
                />
              </div>
              <div className="flex flex-col flex-1 gap-3">
                <label htmlFor="bestwith">I WORK MY BEST WITH: </label>
                <input
                  type="text"
                  name="bestwith"
                  placeholder="WORK MY BEST WITH"
                  required
                  value={formData.bestwith}
                  onChange={handleInputChange}
                  className="text-[#333333] p-2.5 border border-[#C4C4C4] rounded-lg outline-none bg-white w-full"
                />
              </div>
              <div className="flex flex-col flex-1 gap-3">
                <label htmlFor="encouraged">I AM MOST ENCOURAGED BY:</label>
                <input
                  type="text"
                  name="encouraged"
                  placeholder="MOST ENCOURAGED BY:"
                  required
                  value={formData.encouraged}
                  onChange={handleInputChange}
                  className="text-[#333333] p-2.5 border border-[#C4C4C4] rounded-lg outline-none bg-white w-full"
                />
              </div>
              <div className="flex flex-col flex-1 gap-3">
                <label htmlFor="about">MORE ABOUT ME:</label>
                <input
                  type="text"
                  name="about"
                  placeholder="ABOUT"
                  required
                  value={formData.about}
                  onChange={handleInputChange}
                  className="text-[#333333] p-2.5 border border-[#C4C4C4] rounded-lg outline-none bg-white w-full"
                />
              </div>
              <div className="flex flex-col flex-1 gap-3">
                <label htmlFor="lasttime">
                  Can you remember the last time you learned something new about
                  yourself?
                </label>
                <input
                  type="text"
                  name="lasttime"
                  placeholder="something new about
                  yourself?"
                  required
                  value={formData.lasttime}
                  onChange={handleInputChange}
                  className="text-[#333333] p-2.5 border border-[#C4C4C4] rounded-lg outline-none bg-white w-full"
                />
              </div>
              <div className="flex flex-col flex-1 gap-3">
                <label htmlFor="methodof">
                  What is your preferred method of learning? Auditory, Visual,
                  or Kinesthetic (Observing and Doing)
                </label>
                <input
                  type="text"
                  name="methodof"
                  placeholder="preferred method of learning"
                  required
                  value={formData.methodof}
                  onChange={handleInputChange}
                  className="text-[#333333] p-2.5 border border-[#C4C4C4] rounded-lg outline-none bg-white w-full"
                />
              </div>
              <div className="flex flex-col flex-1 gap-3">
                <label htmlFor="believe">
                  What do you believe about yourself?
                </label>
                <input
                  type="text"
                  name="believe"
                  placeholder="believe about yourself"
                  required
                  value={formData.believe}
                  onChange={handleInputChange}
                  className="text-[#333333] p-2.5 border border-[#C4C4C4] rounded-lg outline-none bg-white w-full"
                />
              </div>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-[#4FA2AE] w-[10rem] p-3 rounded-xl mt-10 md:mt-12 "
              >
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

export default BookForm;
