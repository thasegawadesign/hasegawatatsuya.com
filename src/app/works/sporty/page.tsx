"use client";

import { glassBox } from "@/app/about/page.css";
import { header, main } from "@/app/page.css";
import { isOpenHamburgerMenuAtom } from "@/atoms/isOpenHamburgerMenuAtom";
import AudioPlayer from "@/components/audio/audioPlayer";
import BackToIndex from "@/components/backToIndex/backToIndex";
import Footer from "@/components/footer/footer";
import Glass from "@/components/glass/glass";
import HamburgerMenu from "@/components/hamburgerMenu/hamburgerMenu";
import MobileNav from "@/components/mobileNav/mobileNav";
import Nav from "@/components/nav/nav";
import Object1 from "@/components/object/object1";
import Object2 from "@/components/object/object2";
import Object3 from "@/components/object/object3";
import TextCircle from "@/components/textCircle/textCircle";
import WorksInfo from "@/components/works/worksInfo";
import useSmoothScroll from "@/hooks/useSmoothScroll";
import clsx from "clsx";
import { useAtomValue } from "jotai";

export default function Sporty() {
  const isOpenHamburgerMenu = useAtomValue(isOpenHamburgerMenuAtom);

  useSmoothScroll();

  return (
    <>
      <div className={clsx(glassBox)}>
        <Glass>
          <header className={clsx(header)}>
            <Nav />
            <HamburgerMenu />
            {isOpenHamburgerMenu && <MobileNav />}
            <AudioPlayer />
            <TextCircle />
          </header>
          <main className={clsx(main)}>
            <WorksInfo
              nameJa="ビジュアル - スポーティ"
              nameEn="Sporty"
              imageSrc="/sporty.webp"
              imageWidth={1920}
              imageHeight={1080}
              what="力強さのあるスポーティなビジュアル"
              why={<>レタッチの練習で制作しました。</>}
              how={
                <>
                  ディザ合成でテキストにノイズを加え、動きのあるイメージを表現しました。
                  <br />
                  疾走感を出すために斜めの動きを意識しました。
                </>
              }
              role="Retouch"
              date="2025年1月"
            />
          </main>
          <Footer />
        </Glass>
        <BackToIndex />
      </div>
      <Object1 />
      <Object2 />
      <Object3 />
    </>
  );
}
