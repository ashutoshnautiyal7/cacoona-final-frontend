import Link from "next/link";
import BookDownloadPage from "../../../components/ui/book-pdf";
import { redirect } from "next/navigation";

const Page = ({ params }) => {
  return (
    <div>
      <BookDownloadPage orderId={params.orderId} />
      <Link
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        href={`https://res.cloudinary.com/dtfz1aqwq/image/upload/v1719948127/gaohsu56wpsgkmonbs0b.pdf`}
        target="_blank"
        rel="noopener noreferrer"
        download
      >
        Download PDF
      </Link>
    </div>
  );
};

export default Page;
