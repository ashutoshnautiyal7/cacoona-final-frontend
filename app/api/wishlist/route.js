// app/api/wishlist/route.js

import db from '../../../lib/db'
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { email, productId } = await request.json();

    if (!email) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const existingUser = await db.user.findUnique({
      where: {
        email: email,
      },
      include: {
        products: true, // Include user's products to check for existing wishlist items
      },
    });

    if (!existingUser) {
      return new NextResponse('User not found', { status: 404 });
    }

    const isProductConnected = existingUser.products.some(
      (product) => product.id === productId
    );

    if (isProductConnected) {
      // If the product is already connected, remove it
      await db.user.update({
        where: { email },
        data: {
          products: {
            disconnect: {
              id: productId,
            },
          },
        },
      });
      return new NextResponse('Product removed from wishlist', { status: 200 });
    } else {
      // If the product is not in the wishlist, add it
      await db.user.update({
        where: { email: email },
        data: {
          products: {
            connect: {
              id: productId,
            },
          },
        },
      });
      return new NextResponse('Product added to wishlist', { status: 200 });
    }
  } catch (error) {
    console.error(error);
    return new NextResponse('Internal server error', { status: 500 });
  }
}
