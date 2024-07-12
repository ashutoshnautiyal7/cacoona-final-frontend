import Link from "next/link";
import BookDownloadPage from "../../../components/ui/book-pdf";
import { redirect } from "next/navigation";

const Page = ({ params }) => {
  return (
    <div>
      <BookDownloadPage orderId={params.orderId} />
    </div>
  );
};

export default Page;
