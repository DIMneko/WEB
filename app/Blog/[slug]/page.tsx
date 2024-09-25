// app/Blog/[slug]/page.tsx
import React from "react";

const ENDPOINT =
  "http://mneko0904.cloudfree.jp/owner/books/wp-json/wp/v2/posts";

  
interface Post {
  id: number;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
}

interface BlogPostProps {
  params: {
    slug: string;
  };
}

const BlogPost: React.FC<BlogPostProps> = async ({ params }) => {
  const post = await fetch(`${ENDPOINT}/${params.slug}`);
  const data: Post = await post.json();

  return (
    <div className="book_page">
      <article className="book_inner">
        <div className="inner_post">
          <h2>{data.title.rendered}</h2>
          <div
            className="post_content"
            dangerouslySetInnerHTML={{ __html: data.content.rendered }}
          />
        </div>
      </article>
    </div>
  );
};

export default BlogPost;

export async function generateStaticParams() {
  try {
    const res = await fetch(ENDPOINT, {
      cache: "force-cache",
    });
    if (!res.ok) {
      console.error("Static: fetch Error");
    }
    const posts: Post[] = await res.json();

    // 各ポストのスラッグを持つオブジェクトの配列を返す
    return posts.map((post) => ({
      slug: String(post.id), // スラッグを指定
    }));
  } catch (error) {
    console.error("Static params:", error);
    return [];
  }
}
