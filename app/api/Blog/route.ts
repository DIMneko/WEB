import { NextResponse } from 'next/server';

export async function GET() {
    try {
      const res = await fetch(`${process.env.BOOKS_BASE_URL}`);
      
      if (!res.ok) {
        throw new Error('Failed to fetch posts');
      }
      
      const posts = await res.json();
      return NextResponse.json(posts);
      
    } catch (error) {
      console.error('Error fetching posts:', error);
      return NextResponse.json(
        { message: 'Failed to fetch posts' },
        { status: 500 }
      );
    }
  }