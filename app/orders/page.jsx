import prisma from "@/lib/db";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import MyOrders from "@/components/ui/MyOrderPage";


const Page = async() => {
    const session = await getServerSession(authOptions);
    const email = session?.user?.email;
    const myOrders = await prisma.order.findMany({
        where: {
            email,
        },
        include: {
            orderItems: {
                include: {
                    product: true,
                },
            },
        },
    });
    
      console.log("my orders", myOrders);
    return ( 
        <div>
            <MyOrders orders={myOrders} />
        </div>
     );
}
 
export default Page;