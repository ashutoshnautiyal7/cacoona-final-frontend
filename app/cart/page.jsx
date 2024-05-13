import CartComponent from "@/components/cart/cart-component";
import { Suspense } from "react";


const Page = () => {
  return (  
    <Suspense fallback={<div>Loading...</div>}>
      <CartComponent />
    </Suspense>
    );
}
 
export default Page;  
