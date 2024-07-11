import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  CardTitle,
  CardHeader,
  CardContent,
  Card,
  CardFooter,
} from "@/components/ui/card";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";
import { Separator } from "@/components/ui/separator";

export default function OrderPage({ order }) {
  let totalPrice = 0;
  let subTotalPrice = 0;
  order.orderItems.forEach((orderItem) => {
    totalPrice += orderItem.product.currentPrice;
  });
  order.orderItems.forEach((orderItem) => {
    subTotalPrice += orderItem.product.originalPrice;
  });

  console.log(order);

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
        <div className="flex flex-col md:grid md:grid-cols-6 gap-6">
          <div className="md:col-span-4 lg:col-span-3 xl:col-span-4 flex flex-col gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Products</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[80px] hidden md:table-cell">
                        Image
                      </TableHead>
                      <TableHead className="max-w-[150px]">Name</TableHead>
                      <TableHead>Quantity</TableHead>
                      <TableHead>Total</TableHead>
                      <TableHead />
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {order.orderItems.map((item, index) => (
                      <TableRow key={index}>
                        <TableCell className="hidden md:table-cell">
                          <img
                            alt="Product image"
                            className="aspect-square rounded-md object-cover"
                            height="64"
                            src={item.product.images[0].url}
                            width="64"
                          />
                        </TableCell>
                        <TableCell className="font-medium">
                          {item.product.name}
                        </TableCell>
                        <TableCell>{item.quantity}</TableCell>
                        <TableCell className="hidden md:table-cell">
                          <Button size="icon" variant="outline">
                            <TrashIcon className="h-4 w-4" />
                            <span className="sr-only">Delete</span>
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Payment</CardTitle>
                {order.isPaid ? (
                  <span className="text-green-500">Paid</span>
                ) : (
                  <span className="text-red-500">Not paid</span>
                )}
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="flex items-center">
                  <div>Subtotal</div>
                  <div className="ml-auto">${subTotalPrice}</div>
                </div>
                <div className="flex items-center">
                  <div>Discount</div>
                  <div className="ml-auto">-${subTotalPrice - totalPrice}</div>
                </div>
                <Separator />
                <div className="flex items-center font-medium">
                  <div>Total</div>
                  <div className="ml-auto">${totalPrice}</div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="md:col-span-2 lg:col-span-3 xl:col-span-2 flex flex-col gap-6">
            <Card>
              <div>
                <CardHeader className="flex flex-row items-center space-y-0">
                  <CardTitle>Customer</CardTitle>
                </CardHeader>
                <CardContent className="text-sm">
                  <div className="grid gap-1">
                    <span className="text-md ml-1">
                      {order.address.split(",")[0].trim()}
                    </span>
                  </div>
                </CardContent>
              </div>
              <Separator />
              <div>
                <CardHeader>
                  <CardTitle>Contact information</CardTitle>
                </CardHeader>
                <CardContent className="text-sm">
                  <div className="grid gap-1">
                    <Link className="text-blue-600" href="#">
                      {order.userEmail}
                    </Link>
                    <div className="text-gray-500 dark:text-gray-400">
                      {order.phone}
                    </div>
                  </div>
                </CardContent>
              </div>
              <Separator />
              <div>
                <CardHeader>
                  <CardTitle>Shipping address</CardTitle>
                </CardHeader>
                <CardContent className="text-sm">{order.address}</CardContent>
              </div>
              <Separator />
              <div>
                <CardHeader>
                  <CardTitle>Billing address</CardTitle>
                </CardHeader>
                <CardContent className="text-sm">
                  Same as shipping address
                </CardContent>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}

function ChevronLeftIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

function ChevronRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

function Package2Icon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
      <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
      <path d="M12 3v6" />
    </svg>
  );
}

function TrashIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </svg>
  );
}
