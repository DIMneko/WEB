import Image from "next/image";
import Not_Image from "../img/image.png";
import "./scss/post.scss";


export default async function PostPage({ params }: { params: { postId: string } }) {
  
  const postId = params.postId;
  const post_res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/Blog/${postId}`).then((res) => res.json());

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
