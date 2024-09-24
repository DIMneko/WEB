import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";

import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

// import Image from "next/image";
import Typography from "@mui/material/Typography";

import "@/app/Blog/scss/blog.scss";
import Not_Image from "@/app/Blog/img/image.png";


export const dynamicParams = true


interface PostProp {
  id: number;
  title: {
    rendered: string;
  };
  content:{
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
}

export default async function Blog_page() {
  
  const ENDPOINT = "http://mneko0904.cloudfree.jp/owner/books/wp-json/wp/v2/posts"


  const res = await fetch(ENDPOINT, {
    cache: "no-store",
  });
  // console.log(`res: ${res.status}`);
  const posts = await res.json();
  // console.log(`posts: ${posts}`);

  return (
    <>

      <ul className="news_area">
        {posts.map((post: PostProp) => (
          <Card className="post_archive" key={post.id}>
            <CardActionArea>
              <a href={`${process.env.NEXT_PUBLIC_BASE_URL}/Blog/${post.id}`}>
                <CardMedia
                  component="img"
                  height="140"
                  image={Not_Image.src}
                  alt="NotImage"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {post.title.rendered}
                  </Typography>
                  <div
                    dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                  />
                </CardContent>
              </a>
            </CardActionArea>
          </Card>
        ))}
      </ul>
    </>
  );
}
