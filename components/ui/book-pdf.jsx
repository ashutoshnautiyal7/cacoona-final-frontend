
import prisma from "@/lib/db"

const BookDownloadPage = async({email, orderId}) => {
    console.log("email", email)

    const isValidOrder = await prisma.order.findFirst({
        where: {
            userEmail: email,
            id: orderId,
            isPaid: true
        }
    })

    if(!isValidOrder) {
        return <div>Invalid Order or you didnt paid</div>
    }
    return ( 
        <div>
            Download your book here {orderId}
        </div>
     );
}
 
export default BookDownloadPage;