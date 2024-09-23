import "../scss/Books.scss";


interface BookPageProp {
    id: number;
  }
  

const RestAPI = `${process.env.BOOKS_BASE_URL}`;

// 静的生成
export async function generateStaticParams() {

    try {
        const response = await fetch(RestAPI);

        if (!response.ok){
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const posts = await response.json();

        return posts.map((post:BookPageProp) => ({
            bookId: String(post.id),
        }));


    } catch (error) {
        console.error('Error fetching posts', error );
        return [];
    }
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
