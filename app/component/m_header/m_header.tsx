"use client"; // この行を追加
// クライアント側で実行するコードが含まれる場合
// 今回はボタン操作が含まれている。


import MenuIcon from "@mui/icons-material/Menu";


import Image from "next/image";

import "./scss/m_header.scss";
import { M_menus } from "./m_menus";
import ImageDefault from "@/app/assets/image/sample006.png"

interface MHeaderProp {
  site_title: string;
}

const M_Header = ({ site_title }: MHeaderProp) => {
  // ----------------------------
  //   独自関数 / 定義
  // ----------------------------
  console.log(`${process.env.NEXT_PUBLIC_BASE_URL}/Books/`)
  let flug = true;
  const Timer = 1000;
  const body =
    typeof document !== "undefined" ? document.querySelector("body") : null;

  // スクロールイベント無効関数
  function NOTScroll(elment: Event) {
    elment.preventDefault();
  }
  const OnClickEvent = () => {
    console.log("Button was clicked!");

    if (flug) {
      // 連続ボタン押し無効フラグ
      flug = false;

      if (body) {
        body.classList.toggle("active");
        body.classList.add("set");
        // 格納メニュー表示中のスクロールイベント無効
        const scroll_lock = body.classList.contains("active");
        if (!scroll_lock) {
          // console.log('lock')
          window.removeEventListener("touchmove", NOTScroll);
          window.removeEventListener("wheel", NOTScroll);
        } else {
          // console.log('None')
          window.addEventListener("touchmove", NOTScroll, { passive: false });
          window.addEventListener("wheel", NOTScroll, { passive: false });
        }

        // 連続ボタン押し無効フラグ解除
        setTimeout(() => {
          // console.log('連続処理防止解除');
          flug = true;
        }, Timer);
      }
    }
  };

  // マウスカーソルが入った要素番号
  const HoverLinkIn = (id: string) => {
    const Motion = [{ opacity: 0 }, { opacity: 1 }];
    const Timing: KeyframeAnimationOptions = {
      duration: 1000,
      fill: "forwards",
    };

    //指定したエリアの要素の追加・削除を行う
    const target_area = document.querySelector(".image_area");

    if (target_area) {
      // image要素の作成
      const new_image = document.createElement("img");
      new_image.src = id;
      target_area.appendChild(new_image);
      new_image.animate(Motion, Timing);
    } else {
      console.error("not Target");
    }
  };
  // マウスカーソルが外れた要素番号
  // const HoverLinkOut = () => {
  //   const Motion = [
  //     {opacity: 1 },
  //     {opacity: 0 },
  //   ]
  //   const Timing = {
  //     duration: 1000,
  //     fill: "forwards"
  //   }
  //   const fade_img = document.querySelector(".image_area img + img");
  //   const fade_anime = test_img?.animate(Motion,Timing);
  //   fade_anime.finished.then(()=>{
  //     fade_img.remove();
  //   });
  // };

  return (
    <>
      <header className="Mneko_header">
        <div className="Mneko_inner">
          <h2>
            <a href="/">{site_title}</a>
          </h2>

          <p>
            <a href="/auth/login">login</a>
          </p>
          <button onClick={OnClickEvent}>
            <MenuIcon />
          </button>
          <div className="hide_menu">
            <div className="inner">
              <div className="image_area">
                <Image src={ImageDefault} alt="初期画像" />
              </div>
              <ul>
                {M_menus.map((value, key) => {
                  return (
                    <li key={key}>
                      <a
                        href={value.link}
                        onMouseEnter={() => {
                          HoverLinkIn(value.URL);
                        }}
                        // onMouseLeave={() => {
                        //   HoverLinkOut(value.URL);
                        // }}
                      >
                        {value.icon}
                        {value.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
              <nav className="company_access">
                <dl>
                  <dt>電話</dt>
                  <dd>080-xxxx-xxxx</dd>
                </dl>
                <dl>
                  <dt>住所</dt>
                  <dd>鹿児島県鹿児島市xxx町xx番地</dd>
                </dl>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
export default M_Header;
