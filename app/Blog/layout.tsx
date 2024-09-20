import React from "react";

import "./scss/blog.scss";
import {SideMenus} from "./SideMenus"


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
