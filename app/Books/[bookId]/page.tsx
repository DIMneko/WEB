// import "../scss/Books.scss";

// interface BookProp {
//   id: number;
//   title: {
//     rendered: string;
//   };
//   content: {
//     rendered: string;
//   };
// }

// // 静的に生成する本の ID リストを取得
// export async function generateStaticParams() {
//   const response = await fetch(`http://mneko0904.cloudfree.jp/owner/books/wp-json/wp/v2/posts`);
  
//   if (!response.ok) {
//     throw new Error('Failed to fetch books');
//   }

//   const booksData: BookProp[] = await response.json();

//   return booksData.map((book) => ({
//     bookId: String(book.id),
//   }));
// }

// export default async function BookPage({ params }: { params: { bookId: string } }) {
//   const { bookId } = params;

//   // bookIdを使って本の詳細を取得
//   const response = await fetch(`http://mneko0904.cloudfree.jp/owner/books/wp-json/wp/v2/posts/${bookId}`);

//   if (!response.ok) {
//     throw new Error('Failed to fetch book details');
//   }

//   const bookData: BookProp = await response.json();

//   return (
//     <div className="book_page">
//       <article className="book_inner">
//         <div className="inner_post">
//           <h2>{bookData.title.rendered}</h2>
//           <div
//             className="post_content"
//             dangerouslySetInnerHTML={{ __html: bookData.content.rendered }}
//           />
//         </div>
//       </article>
//     </div>
//   );
// }