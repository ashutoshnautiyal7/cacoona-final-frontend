import React from "react";
import Orders from "@/components/orders/Orders";
import prisma from "@/lib/db";
import Navbar from "@/components/Navbar/Navbar";

const page = async () => {
  const orders = await prisma.user.findMany({
    include: {
      order: {
        include: {
          orderItems: {
            include: {
              product: true,
            },
          },
        },
      },
    },
  });
  return (
    <>
      <Navbar />
      <Orders orders={orders} />;
    </>
  );
};

export default page;
