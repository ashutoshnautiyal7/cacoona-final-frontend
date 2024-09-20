import Orders from "@/components/orders/Orders";
import { Prisma } from "@prisma/client";
import React from "react";

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
  console.log("the orders are ", orders[0].order[2].orderItems);
  return <Orders orders={orders} />;
};

export default page;
