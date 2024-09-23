import { NextResponse } from "next/server";

// Generate Params from top down
interface testProp {
  id: number;
}
export async function generateStaticParams() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/Blog`,
    );
    if (!response.ok) {
      throw new Error("Failed to fetch posts");
    }

    const posts = await response.json();

    return posts.map((post: testProp) => ({
      slug: String(post.id),
    }));
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}

export async function GET(
  request: Request,
  { params }: { params: { slug: string } },
) {
  const slug = params.slug;
  try {
    const res = await fetch(`${process.env.BOOKS_BASE_URL}/${slug}`);
    if (!res.ok) {
      throw new Error("Failed to fetch posts");
    }
    const posts = await res.json();
    return NextResponse.json(posts);
  } catch (error) {
    console.error("Error fetching posts:", error);
    return NextResponse.json(
      { message: "Failed to fetch posts" },
      { status: 500 },
    );
  }
}
