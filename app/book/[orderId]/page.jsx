import { getSession } from "next-auth/react";
import BookDownloadPage from "../../../components/ui/book-pdf";

const Page = async({params}) => {

    const session = await getSession();
    const email = session?.user?.email;

    if(!session) {
        return <div>Not authenticated</div>
    }
    

    return ( <div>
        
       <BookDownloadPage orderId={params.orderId} email={email}/>
    </div> );
}
 
export default Page;