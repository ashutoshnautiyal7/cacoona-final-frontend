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
            category: Category.Book_Online,
          },
        },
      },
    },
  });

  if (!isValidOrder) {
    return <div>This form is online valid for online purchase of the book</div>;
  }
  return (
    <div>
      <BookForm />
    </div>
  );
};

export default BookDownloadPage;
