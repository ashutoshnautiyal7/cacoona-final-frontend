import { NextResponse } from 'next/server';
import prisma from "@/lib/db"


export async function PUT(request, { params }) {

    try {
      
    
        const {email,  title, content, images } = await request.json();
        const { postId } = params;


        const user = await prisma.user.findUnique({
            where: {
              email
            }
        })
      
        if(!user){
            return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
        }


        const post = await prisma.post.findFirst({
          where: {
            id: postId,
            userId: user.id,
          },
        });
    
        if (!post) {
          return NextResponse.json({ message: "Post not found" }, { status: 404 });
        }
    
        const updatedPost = await prisma.post.update({
          where: {
            id: postId,
          },
          data: {
            title,
            content,
            images,
          },
        });
    
        return NextResponse.json({ message: "Post updated successfully!", data: updatedPost });
      } catch (error) {
        console.error("[UPDATE_POST]", error);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
      }
}

export async function DELETE(request, { params }) {
    try {
    
      const { email } = await request.json();  // Extract email from request body
      const { postId } = params;

      const user = await prisma.user.findUnique({
          where: {
              email
          }
      });

      if (!user) {
          return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
      }

  
      const post = await prisma.post.findFirst({
        where: {
          id: postId,
          userId: user.id,
        },
      });
  
      if (!post) {
        return NextResponse.json({ message: "Post not found" }, { status: 404 });
      }
  
      await prisma.comment.deleteMany({
        where: {
          postId,
        },
      });
  
      await prisma.like.deleteMany({
        where: {
          postId,
        },
      });
  
      await prisma.post.delete({
        where: {
          id: postId,
        },
      });
  
      return NextResponse.json({ message: "Post deleted successfully!" });
    } catch (error) {
      console.error("[DELETE_POST]", error);
      return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
  }