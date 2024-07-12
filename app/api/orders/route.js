import { NextResponse } from 'next/server';
import db from '@/lib/db';

export async function POST(request) {
  const body = await request.json();
  const { email } = body;

  if (!email) {
    return NextResponse.json({ error: 'Email is required' }, { status: 400 });
  }

  try {


    const orders = await db.order.findMany({
      where: {
          userEmail: email,
      },
      include: {
          orderItems: {
              include: {
                  product: true,
              },
          },
      },
  });

    if (!orders) {
      return NextResponse.json({ error: 'No orders not found' }, { status: 404 });
    }

    return NextResponse.json(orders);
  } catch (error) {
    console.error('Failed to fetch orders:', error);
    return NextResponse.json({ error: 'Failed to fetch orders' }, { status: 500 });
  }
}