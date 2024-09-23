import Image from "next/image";
import Not_Image from "../img/image.png";
import "./scss/post.scss";

interface PostPageProp {
  id: number;
}



// 静的生成
export async function generateStaticParams() {
  try {
    const posts = await fetch(`${process.env.BOOKS_BASE_URL}`).then((res) => res.json())

    return posts.map((post: PostPageProp) => ({
      postId: String(post.id),
    }));


  } catch (error) {
    console.error("Error fetching posts", error);
    return [];
  }
}

console.log(await generateStaticParams() )

export default async function PostPage({
  params,
}: {
  params: { postId: string };
}) {
  const { postId } = params;

  const post_res = await fetch(`${process.env.BOOKS_BASE_URL}/${postId}`).then((res) => res.json());

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
