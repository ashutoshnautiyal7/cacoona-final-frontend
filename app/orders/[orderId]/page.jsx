import OrderPage from "./orderPage";
import prisma from "@/lib/db";

const Page = async ({ params }) => {
    const orders = await prisma.order.findUnique({
        where: {
            id: params.orderId
        },
        include: {
            orderItems: {
                include: {
                    product: {
                        include: {
                            images: true,
                        },
                    },
                },
            },
        },
    });

    return (
        <div className="flex-col">
            <div className="flex-1 space-y-4 p-8 pt-6">
                <OrderPage order={orders} />
            </div>
        </div>
    );
};

export default Page;
