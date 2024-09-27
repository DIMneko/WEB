"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

import { M_menus } from "./m_menus";
// import DefaultImage from "@/app/assets/image/sample006.png";
import "./scss/m_header.scss";

export default function M_Heder_BG() {
  const pathname = usePathname();
  const Fullpath = `${process.env.NEXT_PUBLIC_BASE_URL}${pathname}`;

  // 一致するメニューある項目を取得
  const currentMenu = M_menus.find((menu) => menu.link === Fullpath);

  return (
    <section>
      {currentMenu ? (
        <div className="header_bg ">
          <figure>
            <Image
              src={currentMenu.URL}
              alt={currentMenu.label}
              width={1000}
              height={1000}
            />
          </figure>
        </div>
      ) : (<div className="h-[200px]"></div>)}
      {currentMenu ? <h3>{currentMenu.label}</h3> : <></>}
    </section>
  );
}
