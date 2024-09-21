import Image from "next/image";
import Not_Image from "../img/image.png";
import "./scss/post.scss";


// interface PostPageProp {
//   id: number;
//   title: {
//     rendered:string;
//   };
//   excerpt: {
//     rendered:string;
//   };
// }


export default async function PostPage({
  params,
}: {
  params: { postId: string };
}) {
  const data = await fetch(
    `https://hikaricreative.fool.jp/wp-json/wp/v2/posts/${params.postId}`,
  );
  const post = await data.json();

  return (
    <>
      <p>postIdページになります。ID: {params.postId}</p>

      <article className="post_page">
        <div className="inner_post" key={post.id}>
          <div className="eye_top">
            <Image className="eye_catch" src={Not_Image} alt="画像なし" />
            <h2>{post.title.rendered}</h2>
          </div>
          <div
            className="post_content"
            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
          />
        </div>
      </article>
    </>
  );
}
