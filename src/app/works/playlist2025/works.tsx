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

export default function Works() {
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
              nameJa="プレイリスト2025"
              nameEn="PLAYLIST2025"
              nameJaNode={<>プレイリスト 2025</>}
              nameEnNode={
                <>
                  PLAYLIST
                  <br />
                  2025
                </>
              }
              imageSrc="/playlist2025.webp"
              imageWidth={1000}
              imageHeight={1000}
              what="音楽サブスクリプション用プレイリストカバー"
              why={
                <>
                  普段利用している音楽サブスクリプションのプレイリストカバーは自動で作成されるが、手を動かしてデザインの練習をする一環で、自分で手作りして設定したいと思ったことが制作のきっかけ。
                </>
              }
              how={
                <>
                  日本流行色協会（JAFCA）が発表した2025年の色、
                  空の青と海のエメラルドグリーンが溶け合う水平線の色、「ホライゾングリーン」を選択し、
                  ポップなイラストを背景に敷くことでリラックス感を表現しました。
                </>
              }
              role="Visual Design"
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
