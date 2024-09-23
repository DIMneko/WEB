import { NextResponse } from 'next/server';

export async function GET(request: Request,
    { params }: { params: { slug: string } }
) {
    const slug = params.slug
    try {
        const res = await fetch(`${process.env.BOOKS_BASE_URL}/${slug}`)
        if (!res.ok) {
            throw new Error('Failed to fetch posts');
        }
        const posts = await res.json();
        return NextResponse.json(posts);

    } catch (error){
        console.error('Error fetching posts:', error);
        return NextResponse.json(
          { message: 'Failed to fetch posts' },
          { status: 500 }
        );
    }
}