import { NextResponse } from 'next/server';
import prisma from "@/lib/db"



export async function POST(request) {
    try {
      
  
      const { email ,postId, content } = await request.json();
  
      const user = await prisma.user.findUnique({
        where: {
          email
        }
      })
  
      if(!user){
        return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
      }

        // Check if the post exists
          const post = await prisma.post.findUnique({
            where: {
              id: postId,
            },
          });
    
          if (!post) {
            return NextResponse.json({ message: "Post not found !"}, { status: 404 });
          }
    
          // Create the comment
          const comment = await prisma.comment.create({
            data: {
              content,
              postId,
              userId: user.id,
            },
          });

  
      
        return NextResponse.json({ message: "comment created successfully!", data: comment }, { status: 201 });
    } catch (error) {
      console.error("[CREATE_POST]", error);
      return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
}


export async function DELETE(request) {
    try {
    
      const { email, commentId } = await request.json();  // Extract email from request body
    

      const user = await prisma.user.findUnique({
          where: {
              email
          }
      });

      if (!user) {
          return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
      }

  
       // Check if the comment exists and if the user is the owner
       const comment = await prisma.comment.findFirst({
        where: {
          id: commentId,
          userId: user.id,
        },
      });
  
      if (!comment) {
        return NextResponse.json({ message: "comment not found" }, { status: 404 });
      }
  
      await prisma.comment.delete({
        where: {
          id: commentId,
        },
      });
  
      return NextResponse.json({ message: "comment deleted successfully!" },{status: 200});
    } catch (error) {
      console.error("[DELETE_POST]", error);
      return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
  }
