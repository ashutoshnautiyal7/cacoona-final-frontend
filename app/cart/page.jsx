import Footer2 from "@/components/Footer/Footer2";
import Navbar from "@/components/Navbar/Navbar";
import CartComponent from "@/components/cart/cart-component";
import { Suspense } from "react";


const Page = () => {
  return (
    <div className="">
      <Navbar/>
      <Suspense fallback={<div>Loading...</div>}>
        <CartComponent />
      </Suspense>
      <Footer2/>
    </div>

  );
}

export default Page;  
