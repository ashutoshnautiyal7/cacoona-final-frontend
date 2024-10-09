"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import useCart from "@/hooks/use-cart";
import axios from "axios";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useSearchParams } from "next/navigation";
import { useSession } from "next-auth/react";
import { ThreeCircles } from "react-loader-spinner";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Suspense } from "react";
import Image from "next/image";
import { MdOutlineKeyboardArrowUp, MdOutlineKeyboardArrowDown } from "react-icons/md";

const CartComponent = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { items, clearCart, incrementQuantity, decrementQuantity, loadCart } = useCart();
  const { data: session } = useSession();
  const [isCheckoutLoading, setIsCheckoutLoading] = useState(false);
  const email = session?.user?.email;

  useEffect(() => {
    if (searchParams.get("isBook")) {
      clearCart(email);
      router.push("/");
      toast.success("Download book");
    }
    if (searchParams.get("success")) {
      clearCart(email);
      toast.success("Payment complete");
    }
    if (searchParams.get("cancelled")) {
      toast.error("Payment cancelled");
    }
  }, [searchParams, clearCart, email]);

  useEffect(() => {
    if (session) {
      const email = session.user.email;
      loadCart(email);
    }
  }, [session, loadCart]);

  const total = () => {
    let subtotal = 0;
    items.forEach((item) => {
      subtotal += item.currentPrice * item.quantity;
    });
    return subtotal.toFixed(2);
  };

  const onCheckout = async () => {
    try {
      setIsCheckoutLoading(true);
      const productData = items.map((item) => ({
        id: item.id,
        quantity: item.quantity,
      }));

      const res = await axios.post(
        "https://cacoona-admin.vercel.app/api/checkout",
        {
          productData,
          email
        }
      );

      window.location = res.data.url;
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div className="bg-[#30304C] py-6 md:py-12 px-[1.2rem] md:px-[2.5rem] xl:px-[8rem] min-h-screen text-white">
      <div className="flex gap-2 text-[15px] md:text-[16px]">
        <Link href="/" className="text-gray-400">
          Home
        </Link>
        <span className="text-white">/</span>
        <Link href="/cart" className="text-white">
          Cart
        </Link>
      </div>
      <div className="my-12 bg-white flex flex-col gap-8">
        <div className="grid grid-cols-3 md:grid-cols-4 bg-[#4FA2AE] py-5 px-4 md:px-14 gap-4 md:gap-8">
          <span>Product</span>
          {/* <span>Price</span> */}
          <span>Quantity</span>
          <span>Sub Total</span>
        </div>
        <div className="flex flex-col gap-8">
          {items.map((item) => (
            <div className="grid grid-cols-3 md:grid-cols-4 bg-[#4FA2AE] py-3 px-4 md:px-14 gap-4 md:gap-8 items-center" key={item.id}>
              <span className="flex flex-col md:flex-row gap-2 items-center">
                <img
                  alt="Product Image"
                  className="rounded-sm"
                  height={40}
                  src={item.imageSrc || "/placeholder.svg"}
                  style={{
                    aspectRatio: "80/80",
                    objectFit: "cover",
                  }}
                  width={40}
                />
                <h3 className="leading-[130%] md:ml-3">{item.productName}</h3>
              </span>
              <span className="hidden md:flex">${item.currentPrice.toFixed(2)}</span>
              <span>
                <span className="border border-black rounded-md w-fit py-1.5 px-4 flex items-center gap-4">
                  {item.quantity}
                  <span className="flex flex-col">
                    <MdOutlineKeyboardArrowUp onClick={() => incrementQuantity(item.id, email)} className="cursor-pointer" />
                    <MdOutlineKeyboardArrowDown onClick={() => decrementQuantity(item.id, email)} className="cursor-pointer" />
                  </span>
                </span>
              </span>
              <span >${(item.currentPrice * item.quantity).toFixed(2)}</span>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-3 md:grid-cols-4 bg-[#4FA2AE] py-5 px-14 gap-8">
          <span></span>
          <span className="hidden md:flex"></span>
          <span>Grand Total</span>
          <span>${total()}</span>
        </div>
        <div className="my-8 md:my-12 flex justify-center">
          {isCheckoutLoading ? (
            <div className="flex items-center justify-center">
              <ThreeCircles height="30" width="100" color="#000" />
            </div>
          ) : (
            <Button
              className="text-white bg-[#4FA2AE] text-[14px] md:text-[16px] flex justify-center items-center py-2 md:py-6 px-6 md:px-10 rounded-sm"
              onClick={() => onCheckout()}
            >
              Proceed to Checkout
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

function MinusIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
    </svg>
  );
}

function PlusIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}

export default CartComponent;
