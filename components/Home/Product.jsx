import React, { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import Link from "next/link";
import AddToBag from "../ui/AddToBag";
import { Button } from "../ui/button";
import useCart from "@/hooks/use-cart";
import { useEffect } from "react";

import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

const Product = ({
  email,
  Id,
  imageSrc,
  productName,
  currentPrice,
  originalPrice,
  discount,
  rating,
  totalRatings,
  category,
}) => {
  const [showButton, setShowButton] = useState(false);

  // const { data: session, status } = useSession();
  const router = useRouter();

  const cart = useCart();

  const handleWishlistToggle = async (productId) => {
    try {
      await fetch("/api/wishlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, productId }),
      })
        .then((response) => response.text())
        .then((data) => {
          toast.success(data);
          console.log("Response body:", data);
        });

      router.refresh();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-w-[14rem] md:min-w-[17rem]">
      <div
        className="relative"
        onMouseEnter={() => setShowButton(true)}
        onMouseLeave={() => setShowButton(false)}
      >
        <Link href={`/product/${Id}`}>
          <img
            src={imageSrc}
            alt=""
            className="w-[14rem] md:w-[17rem] h-[13.5rem] md:h-[16rem] rounded-md"
          />
        </Link>
        {discount && (
          <span className="px-3.5 py-1.5 rounded-md text-white text-[12px] bg-[#4FA2AE] absolute top-3 left-3">
            {discount}
          </span>
        )}
        <span
          className="px-2 py-2 rounded-full text-white text-[12px] bg-[#4FA2AE] absolute top-3 right-3 cursor-pointer"
          onClick={(e) => {
            e.stopPropagation();
            handleWishlistToggle(Id);
          }}
        >
          <FaRegHeart className="h-4 w-4" />
        </span>
        <Button
          onClick={(event) => {
            if (!email) {
              toast.error("Please login to add to cart");
              return;
            }
            event.stopPropagation();
            const productData = {
              id: Id,
              imageSrc,
              productName,
              currentPrice,
              originalPrice,
              discount,
              rating,
              totalRatings,
              quantity: 1,
              category,


            };
            cart.addItem(productData, email);
          }}
          className={`bg-[#4FA2AE] w-full h-10 absolute bottom-0 text-white flex justify-center items-center transition-opacity duration-300 rounded-b-md opacity-0 hover:opacity-100`}
        >
          Add To Cart
        </Button>
      </div>

      <div className="font-medium mt-4 text-[14px] md:text-[16px] max-w-[14rem] md:max-w-[17rem]">
        <h3 className="text-white leading-[140%]">{productName}</h3>
        <div className="mt-0.5 md:mt-1">
          <span className="text-[#4FA2AE]">$ {currentPrice}</span>
          {originalPrice && (
            <span className="text-gray-500 line-through ml-4">
              $ {originalPrice}
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
            <span className="text-gray-500 ml-2yy md:ml-4">
              ({totalRatings})
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Product;
