import db from '../../../lib/db'
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { email, productId } = await request.json();

    if (!email) {
      return new NextResponse('SignIn to add items to wishlist', { status: 401 });
    }
 
    const existingWishlist = await db.wishlist.findUnique({
      where: {
        userEmail_productId: {
          userEmail : email,
          productId,
        },
      },
    });

    if (existingWishlist) {
      // If the wishlist item exists, remove it
      await db.wishlist.delete({
        where: {
          id: existingWishlist.id,
        },
      });
      return new NextResponse('Product removed from wishlist', { status: 200 });
    } else {
      // If the wishlist item doesn't exist, create it
      await db.wishlist.create({
        data: {
          userEmail: email,
          productId,
        },
      });
      return new NextResponse('Product added to wishlist', { status: 200 });
    }
  } catch (error) {
    console.error(error);
    return new NextResponse('Internal server error', { status: 500 });
  }
}