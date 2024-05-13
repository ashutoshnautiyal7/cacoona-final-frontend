import BookDownloadPage from "../../../components/ui/book-pdf";

const Page = ({params}) => {

    // const {data: session, status } =  useSession();
    // console.log("session", session)
    // const email = session?.user?.email;

    // if(status === "loading") {
    //     return <div>Not authenticated</div>
    // }
    

    return ( <div>
        
       <BookDownloadPage orderId={params.orderId} />
    </div> );
}
 
export default Page;