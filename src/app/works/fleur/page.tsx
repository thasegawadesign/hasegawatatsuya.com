"use client";

import { header, main } from "@/app/page.css";
import { isOpenHamburgerMenuAtom } from "@/atoms/isOpenHamburgerMenuAtom";
import AudioPlayer from "@/components/audio/audioPlayer";
import Footer from "@/components/footer/footer";
import Glass from "@/components/glass/glass";
import HamburgerMenu from "@/components/hamburgerMenu/hamburgerMenu";
import MobileNav from "@/components/mobileNav/mobileNav";
import Nav from "@/components/nav/nav";
import Object1 from "@/components/object/object1";
import Object2 from "@/components/object/object2";
import Object3 from "@/components/object/object3";
import TextCircle from "@/components/textCircle/textCircle";
import clsx from "clsx";
import { useAtomValue } from "jotai";

export default function Fleur() {
  const isOpenHamburgerMenu = useAtomValue(isOpenHamburgerMenuAtom);

  return (
    <>
      <Glass>
        <header className={clsx(header)}>
          <Nav />
          <HamburgerMenu />
          {isOpenHamburgerMenu && <MobileNav />}
          <AudioPlayer />
          <TextCircle />
        </header>
        <main className={clsx(main)}></main>
        <Footer />
      </Glass>
      <Object1 />
      <Object2 />
      <Object3 />
    </>
  );
}
