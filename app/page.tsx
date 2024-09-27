

interface PostProp {
  id: number;
  title: string;
  content: string;
  createddata: Date;
}
async function getPosts() {
  const ENDPOINT = `${process.env.NEXT_PUBLIC_BASE_URL}/api/supabase`;
  const res = await fetch(ENDPOINT, {
    cache: "force-cache",
  });
  const data = await res.json();
  return data.posts;
}

export default async function Home() {

  const posts = await getPosts();

  return (
    <main className="box-border py-12">
      <h2 className="py-8 mx-auto w-[800px] text-center">HOME部分の内容は、ログイン後のダッシュボード画面から追加できるようにしたい。</h2>
      {posts.map((post: PostProp) => (
        <div key={post.id} className="w-[600px] mx-auto flex gap-4 py-2">
          <p>{post.title}</p>
        </div>
      ))}
    </main>
    );
}
