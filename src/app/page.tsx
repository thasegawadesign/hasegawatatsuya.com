import {
  circle,
  circlePath,
  circleSvg,
  circleText,
  glass,
  header,
  logo,
  nav,
  navLink,
  navLinkBox,
  object1,
  object2,
  object3,
} from "@/styles/styles.css";
import clsx from "clsx";
import { Cormorant, Roboto } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const cormorant = Cormorant({
  subsets: ["latin"],
  weight: "600",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400"],
});

export default function Home() {
  return (
    <>
      <div className={clsx(glass)}>
        <header className={clsx(header)}>
          <nav className={clsx(nav)}>
            <ul>
              <li>
                <Link href={"/"} className={clsx(roboto.className, logo)}>
                  TH
                </Link>
              </li>
            </ul>
            <ul className={clsx(navLinkBox)}>
              <li>
                <Link href={"/"} className={clsx(roboto.className, navLink)}>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href={"/#about"}
                  className={clsx(roboto.className, navLink)}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href={"/#works"}
                  className={clsx(roboto.className, navLink)}
                >
                  Works
                </Link>
              </li>
              <li>
                <Link
                  href={"/#contact"}
                  className={clsx(roboto.className, navLink)}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          <div className={clsx(circle)}>
            <svg viewBox="0 0 100 100" className={clsx(circleSvg)}>
              <path
                d="M 0,50 a 50,50 0 1,1 0,1 z"
                id="circle"
                className={clsx(circlePath)}
              />
              <text className={clsx(roboto.className, circleText)}>
                <textPath xlinkHref="#circle">
                  Thank you for visting. Thank you for visting. Thank you for
                  visting.
                </textPath>
              </text>
            </svg>
          </div>
        </header>
        <main>
          <h1 className={clsx(cormorant.className)}>Tatsuya Hasegawa</h1>
          <section id="about">
            <h2 className={clsx(roboto.className)}>About</h2>
            <p>
              フロントエンドエンジニア 長谷川 達也のポートフォリオサイトです。
              実際に触れることのできるフロントエンドを開発することに喜びを感じます。
              書いたコードが画面に反映される感動を学習を始めて以来ずっと持ち続けています。
            </p>
            <section>
              <h3 className={clsx(roboto.className)}>Tatsuya Hasegawa</h3>
              <p className={clsx(roboto.className)}>Front-end Developer</p>
              <Link
                href={"https://github.com/thasegawakaihatsu"}
                target="_brank"
              >
                <FaGithub />
              </Link>
              <Link
                href={"mailto:hasegawatatsuya206@gmail.com"}
                target="_brank"
              >
                <IoMdMail />
              </Link>
              <Link href={"/"} className={clsx(roboto.className)}>
                More
              </Link>
              <Image
                src={"/photo.webp"}
                width={200}
                height={300}
                alt="長谷川達也"
              />
            </section>
          </section>
          <section id="works">
            <h2 className={clsx(roboto.className)}>Works</h2>
            <section>
              <h3>一問一答メーカー</h3>
              <p>Webアプリ</p>
              <Link
                href={"https://question-and-answer.gojiyuuniotorikudasai.com"}
                target="_blank"
              >
                <Image
                  src={"/icons/question-and-answer-icon.png"}
                  width={160}
                  height={160}
                  alt="一問一答メーカーのアイコン"
                />
              </Link>
            </section>
            <section>
              <h3>ステメモ</h3>
              <p>Webアプリ</p>
              <Link
                href={"https://sutememo.gojiyuuniotorikudasai.com"}
                target="_blank"
              >
                <Image
                  src={"/icons/sutememo-icon.png"}
                  width={160}
                  height={160}
                  alt="ステメモのアイコン"
                />
              </Link>
            </section>
            <section>
              <h3 className={clsx(roboto.className)}>under development...</h3>
            </section>
          </section>
          <section id="contact">
            <h2 className={clsx(roboto.className)}>Contact</h2>
            <Link href={"mailto:hasegawatatsuya206@gmail.com"}>
              <IoMdMail />
              <span className={clsx(roboto.className)}>
                hasegawatatsuya206@gmail.com
              </span>
            </Link>
          </section>
        </main>
        <footer>
          <p>
            <small className={clsx(roboto.className)}>
              © 2024 Tatsuya Hasegawa
            </small>
          </p>
        </footer>
      </div>
      <div className={clsx(object1)}></div>
      <div className={clsx(object2)}></div>
      <div className={clsx(object3)}></div>
    </>
  );
}
