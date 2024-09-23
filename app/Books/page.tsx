import "./scss/Books.scss";

interface BooksProp {
  id: number;
  title: {
    rendered: string;
  };
}

export default async function Books() {
  const res = await fetch(`${process.env.BOOKS_BASE_URL}`, {
    cache: "no-store",
  });
  console.log(`res: ${res.status}`);
  const posts = await res.json();
  console.log(`posts: ${posts}`);

  return (
    <>
      <p>
        外部記事から備忘録用
        の記事を取得し、100件までのページネーションを作成することが目標
      </p>
      <p>
        リンクは外部に飛ばすのではなく、Blogと同様にページ番号をフォルダを作り、1ページごとの記事内容をfetchしていく
      </p>
      <section className="books_archive">
        {posts.map((v: BooksProp) => {
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
