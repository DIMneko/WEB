import Image from "next/image";
import Not_Image from "../img/image.png";
import "./scss/post.scss";

const RestAPI = "https://hikaricreative.fool.jp/wp-json/wp/v2/posts";

// 静的生成
export async function generateStaticParams() {
  const posts = await fetch(RestAPI).then((res) => res.json());
  return posts.map((post) => ({
    postId: String(post.id),
  }));
}

export default async function PostPage({
  params,
}: {
  params: { postId: string };
}) {
  const { postId } = params;

  const post_res = await fetch(`${RestAPI}/${postId}`, {
    method: "GET",
    cache: "no-cache",
  }).then((res) => res.json());

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
