import { NextResponse } from "next/server"
import prisma from "@/lib/db";


export async function PATCH (
    req,
) {
    try {

     const {updatedItems, email} = await req.json();

     console.log("email in api", email)

    if (!email) {
      return new NextResponse("Email id is required", { status: 400 });
    }


    const updatedCart = await prisma.cart.upsert({
      where: { email },
      update: { items: updatedItems },
      create: { email, items: updatedItems },
    });

  
    return NextResponse.json(updatedCart);
  } catch (error) {
    console.log('[CART_UPDATE]', error);
    return new NextResponse("Internal error", { status: 500 });
  }

}
