import prisma from "@/lib/db";
import { useSession } from "next-auth/react";

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
        {params.orderId}
    </div> );
}
 
export default Page;