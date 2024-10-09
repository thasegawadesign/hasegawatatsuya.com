import {
  aboutSection,
  circle,
  circlePath,
  circleSvg,
  circleText,
  contactSection,
  copyRight,
  description,
  emailIcon,
  emailLink,
  footer,
  glass,
  header,
  line,
  logo,
  nameMainVisual,
  nav,
  navLink,
  navLinkBox,
  object1,
  object2,
  object3,
  profileContent,
  profileImage,
  profileLinkBox,
  profileLinkIcon,
  profileMore,
  profileName,
  profileOccupation,
  profileSection,
  profileTextBox,
  sectionHeading,
  worksBox,
  worksCategory,
  worksItem,
  worksLink,
  worksName,
  worksSection,
  worksTextBox,
  worksUnderDevelopment,
  worksUnderDevelopmentItem,
} from "@/styles/styles.css";
import clsx from "clsx";
import { Cormorant, Roboto } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const cormorant = Cormorant({
  subsets: ["latin"],
  weight: "500",
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
          <h1 className={clsx(cormorant.className, nameMainVisual)}>
            Tatsuya <br />
            Hasegawa
          </h1>
          <div className={clsx(line)}></div>
          <section id="about" className={clsx(aboutSection)}>
            <h2 className={clsx(roboto.className, sectionHeading)}>About</h2>
            <p className={clsx(description)}>
              クリエイティブエンジニア 長谷川 達也のポートフォリオサイトです。
              <br />
              実際に触れることのできるフロントエンドを開発することに喜びを感じます。
              <br />
              書いたコードが画面に反映される感動を学習を始めて以来ずっと持ち続けています。
            </p>
            <section className={profileSection}>
              <div className={clsx(profileContent)}>
                <div className={clsx(profileTextBox)}>
                  <h3 className={clsx(roboto.className, profileName)}>
                    Tatsuya Hasegawa
                  </h3>
                  <p className={clsx(roboto.className, profileOccupation)}>
                    Creative Developer
                  </p>
                </div>
                <div className={clsx(profileLinkBox)}>
                  <Link
                    href={"https://github.com/thasegawakaihatsu"}
                    target="_brank"
                  >
                    <FaGithub className={clsx(profileLinkIcon)} />
                  </Link>
                  <Link
                    href={"mailto:hasegawatatsuya206@gmail.com"}
                    target="_brank"
                  >
                    <IoMdMail className={clsx(profileLinkIcon)} />
                  </Link>
                </div>
                <Link
                  href={"/"}
                  className={clsx(roboto.className, profileMore)}
                >
                  More
                </Link>
              </div>
              <Image
                src={"/photo.webp"}
                width={200}
                height={300}
                alt="長谷川達也"
                className={profileImage}
              />
            </section>
          </section>
          <section id="works" className={clsx(worksSection)}>
            <h2 className={clsx(roboto.className, sectionHeading)}>Works</h2>
            <div className={clsx(worksBox)}>
              <section className={clsx(worksItem)}>
                <div className={clsx(worksTextBox)}>
                  <h3 className={clsx(worksName)}>一問一答メーカー</h3>
                  <p className={clsx(worksCategory)}>Webアプリ</p>
                </div>
                <Link
                  href={"https://question-and-answer.gojiyuuniotorikudasai.com"}
                  className={clsx(worksLink)}
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
              <section className={clsx(worksItem)}>
                <div className={clsx(worksTextBox)}>
                  <h3 className={clsx(worksName)}>ステメモ</h3>
                  <p className={clsx(worksCategory)}>Webアプリ</p>
                </div>
                <Link
                  href={"https://sutememo.gojiyuuniotorikudasai.com"}
                  className={clsx(worksLink)}
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
              <section className={clsx(worksUnderDevelopmentItem)}>
                <h3 className={clsx(roboto.className, worksUnderDevelopment)}>
                  under development...
                </h3>
              </section>
            </div>
          </section>
          <section id="contact" className={clsx(contactSection)}>
            <h2 className={clsx(roboto.className, sectionHeading)}>Contact</h2>
            <Link
              href={"mailto:hasegawatatsuya206@gmail.com"}
              className={clsx(emailLink)}
            >
              <IoMdMail className={clsx(emailIcon)} />
              <span className={clsx(roboto.className)}>
                hasegawatatsuya206@gmail.com
              </span>
            </Link>
          </section>
        </main>
        <footer className={clsx(footer)}>
          <p>
            <small className={clsx(roboto.className, copyRight)}>
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
