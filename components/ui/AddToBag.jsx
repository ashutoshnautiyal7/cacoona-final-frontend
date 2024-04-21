"use client";

import { Button } from "@/components/ui/button";
import { useShoppingCart } from "use-shopping-cart";



export default function AddToBag({
    imageSrc,
    productName,
    currentPrice,
    originalPrice,
    discount,
    rating,
    totalRatings

}) {
  const { addItem, handleCartClick } = useShoppingCart();
  const Product = ({
  imageSrc,
  productName,
  price: currentPrice,
  originalPrice,
  discount ,
  rating,
  totalRatings,
})
  return (
    <Button
      onClick={() => {
        addItem(Product), handleCartClick();
      }}
      className={`bg-[#4FA2AE] w-full h-10 absolute bottom-0 text-white flex justify-center items-center transition-opacity duration-300 rounded-b-md opacity-0 hover:opacity-100`}
    >
      Add To Cart
    </Button>
  );
}