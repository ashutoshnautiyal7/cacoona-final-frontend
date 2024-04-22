"use client";
import Product from "@/components/Home/Product";
import React, { useRef } from "react";
// import Product from "./Product";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

const productList = [
  {
    id: 1,
    imageSrc: "/Images/p1.png",
    productName: "Starry Night Keychain",
    currentPrice: "$12.99",
    originalPrice: "$19.49",
    discount: "-40%",
    rating: 4.5,
    totalRatings: 88,
  },
  {
    id: 1,
    imageSrc: "/Images/p1.png",
    productName: "Starry Night Keychain",
    currentPrice: "$12.99",
    originalPrice: "$19.49",
    discount: "-40%",
    rating: 4.5,
    totalRatings: 88,
  },
  {
    id: 1,
    imageSrc: "/Images/p1.png",
    productName: "Starry Night Keychain",
    currentPrice: "$12.99",
    originalPrice: "$19.49",
    discount: "-40%",
    rating: 4.5,
    totalRatings: 88,
  },
  {
    id: 1,
    imageSrc: "/Images/p1.png",
    productName: "Starry Night Keychain",
    currentPrice: "$12.99",
    originalPrice: "$19.49",
    discount: "-40%",
    rating: 4.5,
    totalRatings: 88,
  },
  {
    id: 1,
    imageSrc: "/Images/p1.png",
    productName: "Starry Night Keychain",
    currentPrice: "$12.99",
    originalPrice: "$19.49",
    discount: "-40%",
    rating: 4.5,
    totalRatings: 88,
  },
  {
    id: 1,
    imageSrc: "/Images/p1.png",
    productName: "Starry Night Keychain",
    currentPrice: "$12.99",
    originalPrice: "$19.49",
    discount: "-40%",
    rating: 4.5,
    totalRatings: 88,
  },
  {
    id: 1,
    imageSrc: "/Images/p1.png",
    productName: "Starry Night Keychain",
    currentPrice: "$12.99",
    originalPrice: "$19.49",
    discount: "-40%",
    rating: 4.5,
    totalRatings: 88,
  },
];

const AllProduct = () => {
  const scrollContainerRef = useRef(null);
  const handleScrollRight = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = 500;
      const currentPosition = container.scrollLeft;
      const targetPosition = currentPosition + scrollAmount;
      container.scrollTo({
        left: targetPosition,
        behavior: "smooth",
      });
    }
  };
  const handleScrollLeft = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = 500;
      const currentPosition = container.scrollLeft;
      const targetPosition = currentPosition - scrollAmount;
      container.scrollTo({
        left: targetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="px-[1.2rem] md:px-[2.5rem] py-9 md:py-14 bg-[#30304C]">
      <div className="flex items-center gap-4">
        <div className="bg-[#4FA2AE] h-9 w-5 rounded-sm"></div>
        <h2 className="text-[#4FA2AE] text-[14px] md:text-[16px] font-semibold">
          This Month
        </h2>
      </div>
      <div className="mt-4 text-white flex md:gap-20 items-start md:items-end justify-between">
        <div className="flex flex-col lg:flex-row lg:items-end gap-2 lg:gap-20">
          <h3 className="font-semibold text-[30px] md:text-[36px] leading-[120%]">
            Best Selling Products
          </h3>
        </div>
        <div className="flex justify-center">
          <button className="text-white bg-[#4FA2AE] text-[14px] md:text-[16px] flex justify-center items-center py-2 md:py-2.5 px-5 md:px-6 rounded-sm whitespace-nowrap">
            View All
          </button>
        </div>
        {/* <div className="flex mt-2 md:mt-0">
            <button className="md:px-2  " onClick={handleScrollLeft}>
              {" "}
              <BsFillArrowLeftCircleFill className="h-6 md:h-8 w-6 md:w-8" />
            </button>
            <button className="px-2 md:px-2" onClick={handleScrollRight}>
              {" "}
              <BsFillArrowRightCircleFill className="h-6 md:h-8 w-6 md:w-8" />
            </button>
          </div> */}
      </div>
      <div
        className="mt-6 md:mt-10 flex overflow-x-scroll no-scrollbar gap-10"
        style={{ scrollbarWidth: "none" }}
        ref={scrollContainerRef}
      >
        {productList.map((product) => (
          <Product
            key={product.id}
            imageSrc={product.imageSrc}
            productName={product.productName}
            currentPrice={product.currentPrice}
            originalPrice={product.originalPrice}
            discount={product.discount}
            rating={product.rating}
            totalRatings={product.totalRatings}
          />
        ))}
      </div>
    </section>
  );
};

export default AllProduct;
