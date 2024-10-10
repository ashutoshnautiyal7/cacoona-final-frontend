import Link from "next/link";
import BookDownloadPage from "../../../components/ui/book-pdf";
import Image from "next/image";
import prisma from "@/lib/db";
import { includes } from "lodash";

const Page = async ({ params }) => {
  console.log("The order >  id is ", params.orderId);

  const orderId = params.orderId;

  const orderWithProductDetails = await prisma.order.findUnique({
    where: { id: orderId },
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

  const productId = orderWithProductDetails.orderItems[0].productId;
  const img = orderWithProductDetails.orderItems[0].product.images[0].url;
  const name = orderWithProductDetails.orderItems[0].product.name;
  const des = orderWithProductDetails.orderItems[0].product.description;

  console.log(
    "order with the product details is  ",
    orderWithProductDetails.orderItems[0].product
  );

  let cards = [];

  // a few of my fav
  if (productId === "6706c664b19a8367e04dfe5c") {
    cards = [
      {
        title: name,
        image: img,
        description: des.substring(0, 80) + "..",
        buttonText: "Download Now",
        link: "https://asset.cloudinary.com/do3h4idyc/9d520d63852cf2b86be3a8ebe56b9b45",
      },
      {
        title: "Instant Notes",
        image: "/Images/notes.jpg",
        description:
          "Turn inspiration into action with Instant Notes - quick, easy, and always ready.",
        buttonText: "Get Started",
        link: "/profile",
      },
      {
        title: "",
        image: "/Images/community.webp",
        description: "Get connected to others via Cacoona community.",
        buttonText: "Explore",
        link: "/community",
      },
    ];
  }

  // milestones
  if (productId === "6706ccaf6b43e64bde2e93a2") {
    cards = [
      {
        title: name,
        image: img,
        description: des.substring(0, 80) + "..",
        buttonText: "Download Now",
        link: "https://asset.cloudinary.com/do3h4idyc/a6eaa9804ae709f3754aef167fb23de3",
      },
      {
        title: "Instant Notes",
        image: "/Images/notes.jpg",
        description:
          "Turn inspiration into action with Instant Notes - quick, easy, and always ready.",
        buttonText: "Get Started",
        link: "/profile",
      },
      {
        title: "",
        image: "/Images/community.webp",
        description: "Get connected to others via Cacoona community.",
        buttonText: "Explore",
        link: "/community",
      },
    ];
  }

  // 3 c
  if (productId === "6706cc4d6b43e64bde2e93a0") {
    cards = [
      {
        title: name,
        image: img,
        description: des.substring(0, 80) + "..",
        buttonText: "Download Now",
        link: "https://asset.cloudinary.com/do3h4idyc/431ab58ccc81e3ddb7553db97fbdcc62",
      },
      {
        title: "Instant Notes",
        image: "/Images/notes.jpg",
        description:
          "Turn inspiration into action with Instant Notes - quick, easy, and always ready.",
        buttonText: "Get Started",
        link: "/profile",
      },
      {
        title: "",
        image: "/Images/community.webp",
        description: "Get connected to others via Cacoona community.",
        buttonText: "Explore",
        link: "/community",
      },
    ];
  }

  // 369
  if (productId === "6706cbde6b43e64bde2e939e") {
    cards = [
      {
        title: name,
        image: img,
        description: des.substring(0, 80) + "..",
        buttonText: "Download Now",
        link: "https://asset.cloudinary.com/do3h4idyc/aa6a740213af793fb35ab7ecd85640a9",
      },
      {
        title: "Instant Notes",
        image: "/Images/notes.jpg",
        description:
          "Turn inspiration into action with Instant Notes - quick, easy, and always ready.",
        buttonText: "Get Started",
        link: "/profile",
      },
      {
        title: "",
        image: "/Images/community.webp",
        description: "Get connected to others via Cacoona community.",
        buttonText: "Explore",
        link: "/community",
      },
    ];
  }

  // cacoona blank
  if (productId === "6706cb536b43e64bde2e939c") {
    cards = [
      {
        title: name,
        image: img,
        description: des.substring(0, 80) + "..",
        buttonText: "Download Now",
        link: "https://asset.cloudinary.com/do3h4idyc/4dd6a4d9515a063b8ace9f45cf591fdc",
      },
      {
        title: "Instant Notes",
        image: "/Images/notes.jpg",
        description:
          "Turn inspiration into action with Instant Notes - quick, easy, and always ready.",
        buttonText: "Get Started",
        link: "/profile",
      },
      {
        title: "",
        image: "/Images/community.webp",
        description: "Get connected to others via Cacoona community.",
        buttonText: "Explore",
        link: "/community",
      },
    ];
  }
  // brother why change
  if (productId === "6706ca736b43e64bde2e9399") {
    cards = [
      {
        title: name,
        image: img,
        description: des.substring(0, 80) + "..",
        buttonText: "Download Now",
        link: "https://asset.cloudinary.com/do3h4idyc/a9a795defeb88c92bb625c0ef1a06415",
      },
      {
        title: "Instant Notes",
        image: "/Images/notes.jpg",
        description:
          "Turn inspiration into action with Instant Notes - quick, easy, and always ready.",
        buttonText: "Get Started",
        link: "/profile",
      },
      {
        title: "",
        image: "/Images/community.webp",
        description: "Get connected to others via Cacoona community.",
        buttonText: "Explore",
        link: "/community",
      },
    ];
  }

  // e book
  if (productId === "66ea8e382206abf4f92cb3da") {
    cards = [
      {
        title: "Chesper By cacoona",
        image: "/Images/ches.jpg",
        description:
          "Get instant access to expert insights – download your copy of the ebook today!",
        buttonText: "Download Now",
        link: "https://res.cloudinary.com/dtfz1aqwq/image/upload/v1719948127/gaohsu56wpsgkmonbs0b.pdf",
      },
      {
        title: "Preview form",
        image: "/Images/form.jpg",
        description:
          "Curious about what's inside? Complete our preview form for an exclusive look.",
        buttonText: "Explore",
        link: `/bookdownload/${params.orderId}`,
      },
      {
        title: "Instant Notes",
        image: "/Images/notes.jpg",
        description:
          "Turn inspiration into action with Instant Notes - quick, easy, and always ready.",
        buttonText: "Get Started",
        link: "/profile",
      },
      {
        title: "",
        image: "/Images/community.webp",
        description: "Get connected to others via Cacoona community.",
        buttonText: "Explore",
        link: "/community",
      },
    ];
  }

  return (
    <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 p-8">
      {cards.map((card, index) => (
        <div
          key={index}
          className="max-w-sm rounded overflow-hidden shadow-lg bg-white flex flex-col"
        >
          <div className="relative h-56 w-full">
            <Image
              src={card.image}
              alt={card.title}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="px-6 py-4 flex-grow">
            <div className="font-bold text-xl mb-2">{card.title}</div>
            <p className="text-gray-700 text-base">{card.description}</p>
          </div>
          <div className="px-6 pt-4 pb-6">
            <Link
              href={`${card.link}`}
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              {card.buttonText}
            </Link>
          </div>
        </div>
      ))}
    </div>
    // <div>
    //   <BookDownloadPage orderId={params.orderId} />
    // </div>
  );
};

export default Page;
