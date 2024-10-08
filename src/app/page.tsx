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
      <header>
        <nav>
          <ul>
            <li>
              <Link href={"/"} className={clsx(roboto.className)}>
                TH
              </Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link href={"/"} className={clsx(roboto.className)}>
                Home
              </Link>
            </li>
            <li>
              <Link href={"/#about"} className={clsx(roboto.className)}>
                About
              </Link>
            </li>
            <li>
              <Link href={"/#works"} className={clsx(roboto.className)}>
                Works
              </Link>
            </li>
            <li>
              <Link href={"/#contact"} className={clsx(roboto.className)}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
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
            <Link href={"https://github.com/thasegawakaihatsu"} target="_brank">
              <FaGithub />
            </Link>
            <Link href={"mailto:hasegawatatsuya206@gmail.com"} target="_brank">
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
    </>
  );
}
