"use client";

import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import axios from "axios";
import { ThreeCircles } from "react-loader-spinner";
import Navbar from "@/components/Navbar/Navbar";
import Link from "next/link";

const Orders = ({ orders }) => {
  const { data: session, status } = useSession();
  // const router = useRouter();
  const [user, setUser] = useState("");
  const [userloading, setUserLoading] = useState(true);

  const email = session?.user?.email;
  console.log("the email is ", email);

  useEffect(() => {
    const getUser = async () => {
      if (status === "authenticated" && session?.user?.email) {
        try {
          const res = await axios.get(
            `https://cacoona.com/api/get_user?email=${encodeURIComponent(
              email
            )}`
          );
          const data = res.data;

          setUser(data[0]);
        } catch (err) {
          console.log("Some error occurred fetching user data", err);
        } finally {
          setUserLoading(false);
        }
      } else if (status !== "loading") {
        setUserLoading(false);
      }
    };

    getUser();
  }, [session, status]);

  if (status === "loading" || userloading) {
    return (
      <div className="flex items-center justify-center">
        <ThreeCircles height="30" width="100" color="#000" />
      </div>
    );
  }

  if (!session) {
    return (
      <>
        <Navbar />
        <div className="flex justify-center items-center h-screen">
          Please sign in to view this page.
          <Link href={"/login"}>Sign In</Link>
        </div>
      </>
    );
  }

  const userOrders = orders.filter((item) => item.email === email);

  console.log("the users  orders are ", userOrders);
  return (
    <div>
      {userOrders[0].order
        .filter((order) => order.orderItems.length > 0)
        .map((order) => (
          <div key={order.id} className="border p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">Order ID: {order.id}</h2>
            <p className="mb-2">
              Date: {new Date(order.createdAt).toLocaleDateString()}
            </p>
            <p className="mb-2">
              Status: {order.isPaid ? <span>yes</span> : <span>no</span>}
            </p>
            <h3 className="text-lg font-semibold mb-2">Items:</h3>
            <ul className="list-disc list-inside">
              {order.orderItems.map((item, index) => (
                <Link key={index} href={`/product/${item.productId}`}>
                  <li className="mb-1">{item.product.name}</li>
                </Link>
              ))}
            </ul>
            {/* <p className="mt-2 font-semibold">Total: ${order.total.toFixed(2)}</p> */}
          </div>
          // <p>Hey</p>
        ))
        .reverse()}
    </div>
  );
};

export default Orders;
