import { NextResponse } from 'next/server';
import prisma from "@/lib/db"



export async function POST(request) {
    try {
      
  
      const { email ,postId } = await request.json();
  
      const user = await prisma.user.findUnique({
        where: {
          email
        }
      })
  
      if(!user){
        return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
      }

       // Check if the user has already liked the post
        const existingLike = await prisma.like.findFirst({
            where: {
            postId,
            userId: user.id,
            },
        });

        if (existingLike) {
            // User has already liked the post, so we'll unlike it
            await prisma.like.delete({
              where: {
                id: existingLike.id,
              },
            });
      
            // Decrement the like count for the post
            const updatedPost = await prisma.post.update({
              where: {
                id: postId,
              },
              data: {
                likeCount: {
                  decrement: 1,
                },
              },
            });
      
            return NextResponse.json({ message: "Post unliked successfully!", data: updatedPost }, { status: 200 });
        }

        // Use an atomic update operation to create the like and increment the likeCount
        const updatedPost = await prisma.post.update({
            where: {
                id: postId,
            },
            data: {
                likes: {
                    create: {
                        userId: user.id,
                    },
                },
                likeCount: {
                    increment: 1,
                },
            },
            include: {
                likes: true,
            },
        });
  
      
        return NextResponse.json({ message: "Post liked successfully!", data: updatedPost }, { status: 201 });
    } catch (error) {
      console.error("[CREATE_POST]", error);
      return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
}