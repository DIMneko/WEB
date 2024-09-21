import "../scss/Books.scss";


interface BookPageProp {
    id: number;
  }
  

const RestAPI = "http://mneko0904.cloudfree.jp/owner/books/wp-json/wp/v2/posts";

// 静的生成
export async function generateStaticParams() {
  const posts = await fetch(RestAPI).then((res) => res.json());
  return posts.map((post:BookPageProp) => ({
    bookId: String(post.id),
  }));
}


export default async function BookPage({
  params,
}: {
  params: { bookId: string };
}) {
  const { bookId } = params;
  console.log(bookId);

  const book_res = await fetch(`${RestAPI}/${bookId}`, {
    method: "GET",
    cache: "no-cache",
  }).then((res) => res.json());

  return (
    <div className="book_page">
      <article className="book_inner">
        <div className="inner_post">
          <h2>{book_res.title.rendered}</h2>
          <div
            className="post_content"
            dangerouslySetInnerHTML={{ __html: book_res.content.rendered }}
          />
        </div>
      </article>
    </div>
  );
}
