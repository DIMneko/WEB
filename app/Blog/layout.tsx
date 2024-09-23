import React from "react";

import "./scss/blog.scss";
import { SideMenus } from "./SideMenus";

// Generate Params from top down
interface testProp {
  id: number;
}
export async function generateStaticParams() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/Blog`,
      {
        cache: "no-store",
      },
    );
    if (!response.ok) {
      throw new Error("[Layout]: Failed to fetch posts");
    }

    const posts = await response.json();

    return posts.map((post: testProp) => ({
      slug: post.id.toString(),
    }));
  } catch (error) {
    console.error("[Layout]Error fetching posts:", error);
    return [];
  }
}


// レイアウト設定
const SettingsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="layout_flex">
      <div className="Side_area">
        <ul>
          {SideMenus.map((value, index) => {
            return (
              <li key={index}>
                <a href={value.href}>
                  {value.icon}
                  {value.name}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="Text_area">{children}</div>
    </main>
  );
};

export default SettingsLayout;
