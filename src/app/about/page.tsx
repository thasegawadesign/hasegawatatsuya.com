"use client";

import { isOpenHamburgerMenuAtom } from "@/atoms/isOpenHamburgerMenuAtom";
import AudioButton from "@/components/audio/audioButton";
import Footer from "@/components/footer/footer";
import Glass from "@/components/glass/glass";
import HamburgerMenu from "@/components/hamburgerMenu/hamburgerMenu";
import MobileNav from "@/components/mobileNav/mobileNav";
import Nav from "@/components/nav/nav";
import { header } from "@/styles/styles.css";
import clsx from "clsx";
import { useAtomValue } from "jotai";
import Image from "next/image";

export default function About() {
  const isOpenHamburgerMenu = useAtomValue(isOpenHamburgerMenuAtom);

  return (
    <Glass>
      <header className={clsx(header)}>
        <Nav />
        <HamburgerMenu />
        {isOpenHamburgerMenu && <MobileNav />}
        <AudioButton />
      </header>
      <main>
        <h1>
          <span>ハセガワ タツヤ</span>
          <span>Tatsuya Hasegawa</span>
        </h1>
        <Image src={"/photo.webp"} width={400} height={600} alt="長谷川達也" />
      </main>
      <Footer />
    </Glass>
  );
}
