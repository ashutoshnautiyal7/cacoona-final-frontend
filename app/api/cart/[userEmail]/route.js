import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  try {
    const email = params.userEmail;

    console.log("email in api", email);

    if (!email) {
      return new NextResponse("userEmail is required", { status: 400 });
    }

    const cart = await prisma.cart.findFirst({ where: { email } });

    if (!cart) {
      const newCart = await prisma.cart.create({
        data: {
          email,
          items: [],
        },
      });
      return NextResponse.json(newCart);
    }

    return NextResponse.json(cart);
  } catch (error) {
    console.log("[GET_CART]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
