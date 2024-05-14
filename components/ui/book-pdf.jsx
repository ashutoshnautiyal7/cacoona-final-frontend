import prisma from "@/lib/db";
import { Category } from "@prisma/client";
import BookForm from "../form/page";

const BookDownloadPage = async ({ orderId }) => {
  const isValidOrder = await prisma.order.findFirst({
    where: {
      id: orderId,
      isPaid: true,
      orderItems: {
        some: {
          product: {
            category: Category.BOOKS,
          },
        },
      },
    },
  });

  if (!isValidOrder) {
    return <div>Invalid Order or you didnt paid</div>;
  }
  return (
    <div>
      <BookForm />
      Download your book here {orderId}
    </div>
  );
};

export default BookDownloadPage;
