import Image from "next/image";
import Link from "next/link";

import NotImage from "@/app/Gallery/img/not_image.png";
import "@/app/Blog/scss/blog.scss";
import "@/app/Books/scss/Books.scss";

interface PostProp {
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

async function getPosts() {
  const ENDPOINT =
    "https://hikaricreative.fool.jp/wp-json/wp/v2/posts?per_page=9";
  const res = await fetch(ENDPOINT, {
    cache: "force-cache",
  });
  const data = await res.json();
  return data;
}

// async function getImage() {
//   const posts = await getPosts();
//   while()

//   const IMAGEPOINT =
//     `http://mneko0904.cloudfree.jp/owner/books/wp-json/wp/v2/media/${id}`

// }

export default async function Book_page() {
  const posts = await getPosts();
  let i: number = 0;
  const DEMO = "https://hikaricreative.fool.jp/wp-json/wp/v2/media";

  const imageBOX: string[] = [];

  while (i < posts.length) {
    const media_res = await fetch(`${DEMO}/${posts[i].featured_media}`);
    if (!media_res.ok) {
      imageBOX.push(NotImage.src);
    } else {
      const media_data = await media_res.json();
      imageBOX.push(media_data.source_url);
    }
    i += 1;
  }
  console.log(imageBOX);

  return (
    <div className="books_achive">
      {posts.map((post: PostProp, index: number) => (
        <article key={post.id}>
          <figure>
            <Image
              src={imageBOX[index]}
              width={1000}
              height={300}
              loading="lazy"
              alt="test"
            />
            <figcaption>{post.title.rendered}</figcaption>
          </figure>
          <Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/Books/${post.id}`}>
            もっと見る
          </Link>
        </article>
      ))}
    </div>
  );
}
