import "@/app/Blog/scss/blog.scss";
import Link from "next/link";

interface PostProp {
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

async function getPosts() {
  const ENDPOINT = "http://mneko0904.cloudfree.jp/owner/books/wp-json/wp/v2/posts"
  const res = await fetch(ENDPOINT,{
    cache: "no-store",
  })
  const data = await res.json()
  return data
}


export default async function Blog_page() {
  const posts = await getPosts()
  return (
    <>
    {posts.map((post:PostProp)=>(
      <div key={post.id}>
        <h3>{post.title.rendered}</h3>
        <Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/Blog/${post.id}`}>もっと見る</Link>
      </div>
    ))}
    </>
  );
}

