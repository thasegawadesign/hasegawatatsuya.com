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
              imageSrc="/playlist2025-mockup.webp"
              imageWidth={4000}
              imageHeight={3000}
              what="音楽配信サービスプレイリストカバーアート"
              why={
                <>
                  私が利用している音楽配信サービスでは、プレイリストカバーアートは自動で生成されますが、せっかくなら自分でデザインしてみようと思ったのが、制作のきっかけです。
                </>
              }
              how={
                <>
                  日本流行色協会（JAFCA）が発表した2025年のテーマカラーである『ホライゾングリーン』—空の青と海のエメラルドグリーンが溶け合う水平線のような色—を採用し、
                  背景にはポップなイラストをあしらうことで、心地よいリラックス感を表現しました。
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
