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
    fullName: "",
    placeOfBirth: "",
    gender: "",
    zodiacSign: "",
    dateOfBirth: "",
    timeOfBirth: "",
    interests: "",
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
                <label htmlFor="fullName">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Enter your Full Name"
                  required
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="text-[#333333] p-2.5 border border-[#C4C4C4] rounded-lg outline-none bg-white w-full"
                />
              </div>
              <div className="flex flex-col flex-1 gap-3">
                <label htmlFor="placeOfBirth">Place of Birth</label>
                <input
                  type="text"
                  name="placeOfBirth"
                  placeholder="Enter your Place of Birth"
                  required
                  value={formData.placeOfBirth}
                  onChange={handleInputChange}
                  className="text-[#333333] p-2.5 border border-[#C4C4C4] rounded-lg outline-none bg-white w-full"
                />
              </div>
              <div className="flex flex-col flex-1 gap-3 relative">
                <label htmlFor="gender">Gender</label>
                <div className="relative">
                  <select
                    id="gender"
                    name="gender"
                    required
                    value={formData.gender}
                    onChange={handleInputChange}
                    className="text-[#333333] p-2.5 pr-10 border border-[#C4C4C4] rounded-lg outline-none bg-white w-full appearance-none"
                  >
                    <option value="">Select Gender</option>
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
                <label htmlFor="zodiacSign">Zodiac Sign</label>
                <div className="relative">
                  <select
                    id="zodiacSign"
                    name="zodiacSign"
                    required
                    value={formData.zodiacSign}
                    onChange={handleInputChange}
                    className="text-[#333333] p-2.5 pr-10 border border-[#C4C4C4] rounded-lg outline-none bg-white w-full appearance-none"
                  >
                    <option value="">Select your Zodiac Sign</option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <MdKeyboardArrowDown className="text-black h-5 w-5" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col flex-1 gap-3">
                <label htmlFor="dateOfBirth">Date of Birth</label>
                <input
                  type="date"
                  name="dateOfBirth"
                  placeholder="Enter your Birth Date"
                  required
                  max={maxD}
                  value={formData.dateOfBirth}
                  onChange={handleInputChange}
                  className="text-[#333333] p-2.5 border border-[#C4C4C4] rounded-lg outline-none bg-white w-full"
                />
              </div>
              <div className="flex flex-col flex-1 gap-3">
                <label htmlFor="timeOfBirth">Time of Birth</label>
                <input
                  type="time"
                  name="timeOfBirth"
                  placeholder="Enter your Birth Time"
                  required
                  value={formData.timeOfBirth}
                  onChange={handleInputChange}
                  className="text-[#333333] p-2.5 border border-[#C4C4C4] rounded-lg outline-none bg-white w-full"
                />
              </div>
              <div className="flex flex-col flex-1 gap-3">
                <label htmlFor="interests">Interests</label>
                <input
                  type="text"
                  name="interests"
                  placeholder="Interests"
                  required
                  value={formData.interests}
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
