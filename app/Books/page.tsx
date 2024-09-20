import "./scss/Books.scss";


interface BooksProp {
  id: number;
  title: {
    rendered:string;
  };
}

export default async function Books() {
  const data = await fetch(
    "http://mneko0904.cloudfree.jp/owner/books/wp-json/wp/v2/posts?per_page=6",
  );
  const posts = await data.json();

  return (
    <>
      <p>
        外部記事から備忘録用の記事を取得し、100件までのページネーションを作成することが目標
      </p>
      <p>
        リンクは外部に飛ばすのではなく、Blogと同様にページ番号をフォルダを作り、1ページごとの記事内容をfetchしていく
      </p>
      <section className="books_archive">
        {posts.map((v:BooksProp) => {
          return (
            <li key={v.id}>
              <a href={`/Books/${v.id}`}>{v.title.rendered}</a>
            </li>
          );
        })}
      </section>
    </>
  );
}
