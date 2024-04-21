import React, { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

const Product = ({
  imageSrc,
  productName,
  currentPrice,
  originalPrice,
  discount,
  rating,
  totalRatings,
}) => {
  const [showButton, setShowButton] = useState(false);

  return (
    <div className="min-w-[14rem] md:min-w-[17rem]">
      <div
        className="relative"
        onMouseEnter={() => setShowButton(true)}
        onMouseLeave={() => setShowButton(false)}
      >
        <img src={imageSrc} alt="" className="w-[14rem] md:w-[17rem] h-[13.5rem] md:h-[16rem] rounded-md" />
        {discount && (
          <span className="px-3.5 py-1.5 rounded-md text-white text-[12px] bg-[#4FA2AE] absolute top-3 left-3">
            {discount}
          </span>
        )}
        <span className="px-2 py-2 rounded-full text-white text-[12px] bg-[#4FA2AE] absolute top-3 right-3">
          <FaRegHeart className="h-4 w-4" />
        </span>
        <button
          className={`bg-[#4FA2AE] w-full h-10 absolute bottom-0 text-white flex justify-center items-center transition-opacity duration-300 rounded-b-md ${
            showButton ? "opacity-100" : "opacity-0"
          }`}
        >
          Add to Cart
        </button>
      </div>

      <div className="font-medium mt-4 text-[14px] md:text-[16px]">
        <h3 className="text-white">{productName}</h3>
        <div className="mt-0.5 md:mt-1">
          <span className="text-[#4FA2AE]">{currentPrice}</span>
          {originalPrice && (
            <span className="text-gray-500 line-through ml-4">
              {originalPrice}
            </span>
          )}
        </div>
        {totalRatings && (
          <div className="md:mt-1 flex items-center">
            <Stack spacing={1}>
              <Rating
                name="half-rating-read"
                value={rating}
                precision={0.5}
                readOnly
                size="small"
              />
            </Stack>
            <span className="text-gray-500 ml-2yy md:ml-4">({totalRatings})</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Product;
