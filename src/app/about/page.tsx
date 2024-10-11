"use client";

import { aboutHero, nameBox, nameEn, nameJa } from "@/app/about/about.css";
import { isOpenHamburgerMenuAtom } from "@/atoms/isOpenHamburgerMenuAtom";
import AudioButton from "@/components/audio/audioButton";
import Footer from "@/components/footer/footer";
import Glass from "@/components/glass/glass";
import HamburgerMenu from "@/components/hamburgerMenu/hamburgerMenu";
import MobileNav from "@/components/mobileNav/mobileNav";
import Nav from "@/components/nav/nav";
import TextCircle from "@/components/textCircle/textCircle";
import { header } from "@/styles/styles.css";
import clsx from "clsx";
import { useAtomValue } from "jotai";
import { Cormorant, Noto_Serif_JP } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const notoSerifJP = Noto_Serif_JP({
  subsets: ["latin"],
  weight: "400",
});

const cormorant = Cormorant({
  subsets: ["latin"],
  weight: "400",
});

export default function About() {
  const isOpenHamburgerMenu = useAtomValue(isOpenHamburgerMenuAtom);

  return (
    <Glass>
      <header className={clsx(header)}>
        <Nav />
        <HamburgerMenu />
        {isOpenHamburgerMenu && <MobileNav />}
        <AudioButton />
        <TextCircle />
      </header>
      <main>
        <div className={clsx(aboutHero)}>
          <h1 className={nameBox}>
            <span className={clsx(notoSerifJP.className, nameJa)}>
              ハセガワ タツヤ
            </span>
            <span className={clsx(cormorant.className, nameEn)}>
              Tatsuya Hasegawa
            </span>
          </h1>
          <Image
            src={"/photo.webp"}
            width={320}
            height={480}
            alt="長谷川達也"
            view-transition-name={"photo"}
          />
        </div>
        <Link href={"https://github.com/thasegawakaihatsu"} target="_brank">
          <FaGithub />
        </Link>
        <Link href={"mailto:hasegawatatsuya206@gmail.com"} target="_brank">
          <IoMdMail />
        </Link>
        <p>
          Web Design,
          <br />
          Frontend Development
        </p>
        <p>
          2001年生まれ、ECCコンピュータ専門学校中退。
          <br />
          趣味は散歩とランニング。
          <br />
          Webの豊かな表現を身につけるために
          <br />
          日々学習に取り組んでいます。
        </p>
        <Link href={"/"}>Back to Index</Link>
      </main>
      <Footer />
    </Glass>
  );
}
