import Link from "next/link";
import BookDownloadPage from "../../../components/ui/book-pdf";
import { redirect } from "next/navigation";

const Page = ({ params }) => {
  // const {data: session, status } =  useSession();
  // console.log("session", session)
  // const email = session?.user?.email;

  // if(status === "loading") {
  //     return <div>Not authenticated</div>
  // }

  return (
    <div>
      <BookDownloadPage orderId={params.orderId} />
      <Link
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        href={
          "https://res.cloudinary.com/dtfz1aqwq/image/upload/v1715709946/DATABASE-MANAGEMENT-SYSTEM-Question-Paper-21-22_flakus.pdf"
        }
      >
        Download PDF
      </Link>
    </div>
  );
};

export default Page;
