import db from '../../../lib/db';

export async function GET(request) {
 

  try {
    const products = await db.product.findMany({
      include: {
        images: true,
      },
    });

    console.log("the products after hitting  the endpoint : " , products);

    return new Response(JSON.stringify(products), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error(error);
    return new Response('Failed to fetch products', { status: 500 });
  }
}