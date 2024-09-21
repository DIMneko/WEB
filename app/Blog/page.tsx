import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";

import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

// import Image from "next/image";
import Typography from "@mui/material/Typography";

import "./scss/blog.scss";
import Not_Image from "./img/image.png";

interface PostProp {
  id: number;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
}

const Blog_page = async () => {
  const data = await fetch(
    "https://hikaricreative.fool.jp/wp-json/wp/v2/posts?per_page=9&orderby=date",
  );
  const posts = await data.json();

  return (
    <>
      <div className="coment_type">
        <p>RestAPIを使ったブログ表示に挑戦。 </p>
        <p>また、各ページまでも同様に再現する(目標)</p>
      </div>

      <ul className="news_area">
        {posts.map((post: PostProp) => (
          <Card className="post_archive" key={post.id}>
            <CardActionArea>
              <a href={`/Blog/${post.id}`}>
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

                  {/* 抜粋内容のみ取得 */}
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
};

export default Blog_page;
