import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export  async function GET(req, res) {
   const query = await req.nextUrl.searchParams.get("query");

   console.log("query", query)

  try {
    // Search for products based on the query
    const products = await prisma.product.findMany({
      where: {
        OR: [
          { name: { contains: query, mode: 'insensitive' } },
          { description: { contains: query, mode: 'insensitive' } },
          // Add more search criteria if needed
        ],
      },
      include: {
        images: true,
      },
    });

    return NextResponse.json(products);
  } catch (error) {
    console.error("error in api is", error);
    return new NextResponse("Failed to fetch products", { status: 500 });
  }
}