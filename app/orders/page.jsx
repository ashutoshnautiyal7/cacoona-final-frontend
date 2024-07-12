"use client";

import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";

const OrderPage = () => {
  const { data: session, status } = useSession();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      if (status === "authenticated" && session?.user?.email) {
        try {
          const response = await fetch("/api/orders", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: session.user.email }),
          });

          if (!response.ok) {
            throw new Error("Failed to fetch orders");
          }

          const data = await response.json();
          setOrders(data);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      } else if (status !== "loading") {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [session, status]);

  if (status === "loading" || loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  if (!session) {
    return (
      <div className="flex justify-center items-center h-screen">
        Please sign in to view your orders.
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen text-red-500">
        Error: {error}
      </div>
    );
  }

  console.log("the orders are ", orders);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Your Orders</h1>
      {orders.length === 0 ? (
        <p>You have no orders yet.</p>
      ) : (
        <div className="space-y-4">
          Here are your orders
          {/* <OrderPage orders={orders} /> */}
          {/* {orders.map((order) => (
            <div key={order.id} className="border p-4 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-2">
                Order ID: {order.id}
              </h2>
              <p className="mb-2">
                Date: {new Date(order.createdAt).toLocaleDateString()}
              </p>
              <p className="mb-2">Status: {order.status}</p>
              <h3 className="text-lg font-semibold mb-2">Items:</h3>
              <ul className="list-disc list-inside">
                {order.items.map((item, index) => (
                  <li key={index} className="mb-1">
                    {item.product.name} - Quantity: {item.quantity} - Price: $
                    {item.price.toFixed(2)}
                  </li>
                ))}
              </ul>
              <p className="mt-2 font-semibold">
                Total: ${order.total.toFixed(2)}
              </p>
            </div>
          ))} */}
        </div>
      )}
    </div>
  );
};

export default OrderPage;
