import BookDownloadPage from "../../../components/ui/book-pdf";

const Page = ({params}) => {

const Page = async({params}) => {

    const isValidOrder = await prisma.order.findUnique({
        where: {
            id: params.orderId,
        }
    })

    if(!isValidOrder) {
        return <div>Invalid Order</div>
    }

    return ( <div>
        
       <BookDownloadPage orderId={params.orderId} />
    </div> );
}
 
export default Page;
