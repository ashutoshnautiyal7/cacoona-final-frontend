import React from "react";
import Orders from "@/components/orders/Orders";
import prisma from "@/lib/db";

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
  return <Orders orders={orders} />;
};

export default page;
