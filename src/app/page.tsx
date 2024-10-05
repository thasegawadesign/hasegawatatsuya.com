import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

export default function Home() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/#about"}>About</Link>
            </li>
            <li>
              <Link href={"/#works"}>Works</Link>
            </li>
            <li>
              <Link href={"/#contact"}>Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <h1>Tatsuya Hasegawa</h1>
        <section id="about">
          <h2>About</h2>
          <p>
            フロントエンドエンジニア 長谷川 達也のポートフォリオサイトです。
            実際に触れることのできるフロントエンドを開発することに喜びを感じます。
            書いたコードが画面に反映される感動を学習を始めて以来ずっと持ち続けています。
          </p>
          <section>
            <h3>Tatsuya Hasegawa</h3>
            <p>Front-end Developer</p>
            <Link href={"https://github.com/thasegawakaihatsu"} target="_brank">
              <FaGithub />
            </Link>
            <Link href={"mailto:hasegawatatsuya206@gmail.com"} target="_brank">
              <IoMdMail />
            </Link>
            <Link href={"/"}>More</Link>
          </section>
        </section>
        <section id="works">
          <h2>Works</h2>
          <section>
            <h3>一問一答メーカー</h3>
            <p>Webアプリ</p>
            <Image
              src={"/icons/question-and-answer-icon.png"}
              width={160}
              height={160}
              alt="一問一答メーカーのアイコン"
            />
          </section>
          <section>
            <h3>ステメモ</h3>
            <p>Webアプリ</p>
            <Image
              src={"/icons/sutememo-icon.png"}
              width={160}
              height={160}
              alt="ステメモのアイコン"
            />
          </section>
          <section>
            <h3>under development...</h3>
          </section>
        </section>
        <section id="contact">
          <h2>Contact</h2>
          <Link href={"mailto:hasegawatatsuya206@gmail.com"}>
            <IoMdMail />
            <span>hasegawatatsuya206@gmail.com</span>
          </Link>
        </section>
      </main>
      <footer>
        <p>
          <small>© 2024 Tatsuya Hasegawa</small>
        </p>
      </footer>
    </>
  );
}
