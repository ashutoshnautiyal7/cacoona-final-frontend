import prisma from "@/lib/db";
import { useSession } from "next-auth/react";
import { MdKeyboardArrowDown } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";
import BookForm from "@/components/form/page";

const Page = async ({ params }) => {
  const isValidOrder = await prisma.order.findUnique({
    where: {
      id: params.orderId,
    },
  });

  if (!isValidOrder) {
    return <div>Invalid Order</div>;
  }

  return (
    <div>
      {params.orderId}
      <BookForm />
    </div>
  );
};

export default Page;
