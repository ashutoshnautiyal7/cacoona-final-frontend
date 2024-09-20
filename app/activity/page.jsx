import Navbar from "@/components/Navbar/Navbar";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  const cards = [
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
  return (
    <>
      <Navbar />

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
    </>
  );
};

export default page;