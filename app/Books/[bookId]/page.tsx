import "../scss/Books.scss";

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
      <p>postIdページになります。ID: {params.bookId}</p>

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
