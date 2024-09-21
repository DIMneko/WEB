"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";


import { M_menus } from "./m_menus";
import DefaultImage from "@/app/assets/image/sample006.png";
import "./scss/m_header.scss";

export default function M_Heder_BG() {
  const pathname = usePathname();

  // 一致するメニューある項目を取得
  const currentMenu = M_menus.find((menu) => menu.link === pathname);

  return (
    <div className="header_bg ">
      {currentMenu ? (
        <figure>
          <Image
            src={currentMenu.URL}
            alt={currentMenu.label}
            width={1000}
            height={1000}
          />
        </figure>
      ) : (
        <figure>
          <Image
            src={DefaultImage}
            alt="DefaultImage"
            width={1000}
            height={1000}
          />
        </figure>
      )}

      {currentMenu ? <h3>{currentMenu.label}</h3> : <h3>Menu not Found</h3>}
    </div>
  );
}
