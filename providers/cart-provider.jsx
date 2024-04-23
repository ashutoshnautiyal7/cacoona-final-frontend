"use client";

import { CartProvider as USCProvider } from "use-shopping-cart";
const CartProvider = ({children}) => {
  return (
    <USCProvider
      mode="payment"
      cartMode="client-only"
      stripe={process.env.NEXT_PUBLIC_STRIPE_KEY}
      successUrl="https://commerce-next-yt.vercel.app/stripe/success"
      cancelUrl="https://commerce-next-yt.vercel.app/stripe/error"
      currency="USD"
      billingAddressCollection={false}
      shouldPersist={true}
      language="en-US"
    >
      {children}
    </USCProvider>
  );
}
export default CartProvider;