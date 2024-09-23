import Image from "next/image";
import Not_Image from "../img/image.png";
import "../scss/blog.scss";

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

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const slug = params.slug;
  const post_res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/Blog/${slug}`,
  ).then((res) => res.json());

  return (
    <>
      <article className="post_page">
        <div className="inner_post" key={post_res.id}>
          <div className="eye_top">
            <Image className="eye_catch" src={Not_Image} alt="画像なし" />
            <h2>{post_res.title.rendered}</h2>
          </div>
          <div
            className="post_content"
            dangerouslySetInnerHTML={{ __html: post_res.content.rendered }}
          />
        </div>
      </article>
    </>
  );
}
