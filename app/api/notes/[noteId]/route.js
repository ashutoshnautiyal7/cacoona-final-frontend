import { NextResponse } from 'next/server';
import db from '@/lib/db';

async function getNoteAndCheckPermission(noteId, email) {
  const user = await db.user.findUnique({
    where: { email },
  });

  if (!user) {
    return { error: 'User not found', status: 404 };
  }

  const note = await db.note.findUnique({
    where: { id: noteId },
  });

  if (!note || note.userId !== user.id) {
    return { error: 'Note not found', status: 404 };
  }

  return { note, user };
}

export async function GET(request, { params }) {
  const { searchParams } = new URL(request.url);
  const email = searchParams.get('email');
  const { noteId } = params;

  if (!email) {
    return NextResponse.json({ error: 'Email is required' }, { status: 400 });
  }

  try {
    const result = await getNoteAndCheckPermission(noteId, email);
    if (result.error) {
      return NextResponse.json({ error: result.error }, { status: result.status });
    }

    return NextResponse.json(result.note);
  } catch (error) {
    console.error('Failed to fetch note:', error);
    return NextResponse.json({ error: 'Failed to fetch note' }, { status: 500 });
  }
}

export async function PUT(request, { params }) {
  const { noteId } = params;
  const body = await request.json();
  const { email, content } = body;

  if (!email || !content) {
    return NextResponse.json({ error: 'Email and content are required' }, { status: 400 });
  }

  try {
    const result = await getNoteAndCheckPermission(noteId, email);
    if (result.error) {
      return NextResponse.json({ error: result.error }, { status: result.status });
    }

    const updatedNote = await db.note.update({
      where: { id: noteId },
      data: { content },
    });

    return NextResponse.json(updatedNote);
  } catch (error) {
    console.error('Failed to update note:', error);
    return NextResponse.json({ error: 'Failed to update note' }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  const { searchParams } = new URL(request.url);
  const email = searchParams.get('email');
  const { noteId } = params;

  if (!email) {
    return NextResponse.json({ error: 'Email is required' }, { status: 400 });
  }

  try {
    const result = await getNoteAndCheckPermission(noteId, email);
    if (result.error) {
      return NextResponse.json({ error: result.error }, { status: result.status });
    }

    await db.note.delete({
      where: { id: noteId },
    });

    return NextResponse.json({ message: 'Note deleted successfully' });
  } catch (error) {
    console.error('Failed to delete note:', error);
    return NextResponse.json({ error: 'Failed to delete note' }, { status: 500 });
  }
}