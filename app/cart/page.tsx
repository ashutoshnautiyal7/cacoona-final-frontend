
import { Button } from "@/components/ui/button"
import Link from "next/link"

const  CartComponent = () => {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8">
        <div className="space-y-6">
          <div className="grid grid-cols-[80px_1fr_1fr_1fr] items-center gap-4 border-b pb-4">
            <div>
              <img
                alt="Product Image"
                className="rounded-md"
                height={80}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "80/80",
                  objectFit: "cover",
                }}
                width={80}
              />
            </div>
            <div>
              <h3 className="font-medium">Acme Headphones</h3>
              <p className="text-gray-500 dark:text-gray-400">Noise-cancelling, wireless</p>
            </div>
            <div className="text-right">
              <p className="font-medium">$99.99</p>
            </div>
            <div className="flex items-center justify-end gap-2">
              <Button size="icon" variant="outline">
                <MinusIcon className="h-4 w-4" />
              </Button>
              <span>1</span>
              <Button size="icon" variant="outline">
                <PlusIcon className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-[80px_1fr_1fr_1fr] items-center gap-4 border-b pb-4">
            <div>
              <img
                alt="Product Image"
                className="rounded-md"
                height={80}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "80/80",
                  objectFit: "cover",
                }}
                width={80}
              />
            </div>
            <div>
              <h3 className="font-medium">Acme Backpack</h3>
              <p className="text-gray-500 dark:text-gray-400">Durable, water-resistant</p>
            </div>
            <div className="text-right">
              <p className="font-medium">$49.99</p>
            </div>
            <div className="flex items-center justify-end gap-2">
              <Button size="icon" variant="outline">
                <MinusIcon className="h-4 w-4" />
              </Button>
              <span>1</span>
              <Button size="icon" variant="outline">
                <PlusIcon className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 space-y-4">
          <div className="flex items-center justify-between">
            <p>Subtotal</p>
            <p className="font-medium">$149.98</p>
          </div>
          <div className="flex items-center justify-between">
            <p>Shipping</p>
            <p className="font-medium">$5.00</p>
          </div>
          <div className="flex items-center justify-between">
            <p>Total</p>
            <p className="font-medium text-primary">$154.98</p>
          </div>
          <Button className="w-full">Proceed to Checkout</Button>
          <Link
            className="inline-block text-center text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            href="#"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  )
}

function MinusIcon(props) {
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
      <path d="M5 12h14" />
    </svg>
  )
}


function PlusIcon(props) {
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
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  )
}

export default CartComponent