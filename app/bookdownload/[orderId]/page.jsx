import React from "react";
import BookDownloadPage from "../../../components/ui/book-pdf";

const page = ({ params }) => {
  return (
    <div>
      <BookDownloadPage orderId={params.orderId} />
    </div>
  );
};
export default page;
