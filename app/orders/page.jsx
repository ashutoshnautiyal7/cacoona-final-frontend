import prisma from "@/lib/db";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import MyOrders from "@/components/ui/MyOrderPage";
import { redirect } from "next/navigation";


const Page = async() => {
    const session = await getServerSession(authOptions);
    const email = session?.user?.email;
    console.log("email", email )
    const myOrders = await prisma.order.findMany({
        where: {
            userEmail: email,
        },
        include: {
            orderItems: {
                include: {
                    product: true,
                },
            },
        },
    });
    
    return ( 
        <div>
            <MyOrders orders={myOrders} />
        </div>
     );
}
 
export default Page;