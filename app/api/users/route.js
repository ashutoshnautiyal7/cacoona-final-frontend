import db from '../../../lib/db';

export async function POST(request) {
  const body = await request.json();
  const { email } = body;

  try {
    const users = await db.user.findMany({
      where: { email },
      select: {
        email: true,
        wishlist: {
          select: {
            product: {
              include: {
                images: true,
              },
            },
          },
        },
      },
    });

    return new Response(JSON.stringify(users), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error(error);
    return new Response('Failed to fetch users', { status: 500 });
  }
}