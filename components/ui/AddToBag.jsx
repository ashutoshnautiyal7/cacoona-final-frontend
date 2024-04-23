"use client";

import { Button } from "@/components/ui/button";
import useCart from "@/hooks/use-cart";
import { useShoppingCart } from "use-shopping-cart";



export default function AddToBag({
    id,
    imageSrc,
    productName,
    currentPrice,
    originalPrice,
    discount,
    rating,
    totalRatings

}) {
  console.log("Add to bag from original", id)
  const Product = {
  prodcutId: id,
  imageSrc,
  productName,
  price: currentPrice,
  originalPrice,
  discount ,
  rating,
  totalRatings,
}

    const cart = useCart()
  return (
    <Button
      onClick={(event) => {
        event.stopPropagation()
        cart.addItem(Product)
      }}
      className={`bg-[#4FA2AE] w-full h-10 absolute bottom-0 text-white flex justify-center items-center transition-opacity duration-300 rounded-b-md opacity-0 hover:opacity-100`}
    >
      Add To Cart
    </Button>
  );
}