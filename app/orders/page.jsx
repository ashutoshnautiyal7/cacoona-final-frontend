// import React, { useState, useEffect } from "react";
// import { useSession } from "next-auth/react";

import React from "react";

const page = () => {
  // const { data: session, status } = useSession();
  // const [orders, setOrders] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);
  // //

  // console.log("the orders are ", orders);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Your Orders</h1>

      <p>You have no orders yet.</p>
    </div>
  );
};

export default page;

{
  /* <div className="space-y-4">
Here are your orders
{/* <OrderPage orders={orders} /> */
}
{
  /* {orders.map((order) => (
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
))} */
}
// </div> */}
