import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Topbar = ({ user, onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query);
  };

  return (
    <div className="flex w-full items-center justify-between py-5">
      <div className="w-full flex gap-2 justify-center md:gap-5 items-center ">
        <div className="bg-white flex gap-1 h-fit w-full justify-center items-center py-1 md:py-2 px-2 md:px-5 rounded-md md:rounded-xl">
          <div className="relative w-[18px] h-[14px] md:w-[20px] md:h-[20px]">
            <Image alt="image" fill={true} src={"/search.png"}></Image>
          </div>
          <input
            className="w-full outline-none text-black text-xs md:text-base placeholder:text-xs md:placeholder:text-sm placeholder:text-black placeholder:font-light"
            placeholder="Search"
            value={searchQuery}
            onChange={handleSearch}
          ></input>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
