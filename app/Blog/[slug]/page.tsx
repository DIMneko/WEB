// app/Blog/[slug]/page.tsx
import React from 'react';

interface Post {
    id: number;
    title: {
      rendered: string;
    };
    content:{
      rendered: string;
    };
    excerpt: {
      rendered: string;
    };
}

export async function generateStaticParams() {

    try {

        const res = await fetch(`${process.env.BOOKS_BASE_URL}`);
        if(!res.ok){
            console.error("Static: fetch Error")
        }
        const posts: Post[] = await res.json();
      
        // 各ポストのスラッグを持つオブジェクトの配列を返す
        return posts.map((post) => ({
          slug: String(post.id), // スラッグを指定
        }));

    } catch (error){
        console.error("Static params:",error);
        return [];
    }


}


interface BlogPostProps {
params: {
    slug: string;
};
}
  
const BlogPost: React.FC<BlogPostProps> = async ({ params }) => {
    const post = await fetch(`${process.env.BOOKS_BASE_URL}/${params.slug}`);
    const data: Post = await post.json();
  
    return (
      <div>
        <h1>{data.title.rendered}</h1>
        <p>{data.content.rendered}</p>
      </div>
    );
  };
  
  export default BlogPost;

