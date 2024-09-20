import "../scss/Books.scss";

// generateStaticParams を追加
export async function generateStaticParams() {
  // 本の ID リストを取得するために API を呼び出します
  const res = await fetch(`http://mneko0904.cloudfree.jp/owner/books/wp-json/wp/v2/posts`);
  const books = await res.json();

  // 静的に生成する本の ID リストを返す
  return books.map((book: { id: string }) => ({
    bookId: book.id,
  }));
}



export default async function BookPage({
  params,
}: {
  params: { bookId: string };
}) {
  const data = await fetch(
    `http://mneko0904.cloudfree.jp/owner/books/wp-json/wp/v2/posts/${params.bookId}`,
  );
  const book = await data.json();

  return (
    <div className="book_page">

      <article className="book_inner">
        <div className="inner_post" key={book.id}>
          <h2>{book.title.rendered}</h2>

          <div
            className="post_content"
            dangerouslySetInnerHTML={{ __html: book.content.rendered }}
          />
        </div>
      </article>
    </div>
  );
}



