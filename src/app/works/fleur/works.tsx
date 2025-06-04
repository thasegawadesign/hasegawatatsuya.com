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
              nameJa="架空マカロン専門店『フルール』"
              nameEn="Fleur"
              nameJaNode={
                <>
                  架空マカロン専門店
                  <br />
                  『フルール』
                </>
              }
              imageSrc="/fleur-website-screen-shot.webp"
              imageWidth={1920}
              imageHeight={1080}
              what="健康志向で美しいスイーツを愛する人のための架空マカロン専門店『フルール』のブランドサイト"
              why={
                <>
                  食品をテーマにしたWebサイトの制作に関心を持つようになりました。
                  <br />
                  口にするものに特別なこだわりを持つ、健康志向の方に向けて、
                  「グルテンフリー」「美しさ」「清潔感」をキーワードに展開したいと考えています。
                </>
              }
              how={
                <>
                  職人の技が光る、美しく仕上げられたマカロンを引き立たせるため、シンプルで清潔感のある白を基調としたデザインに仕上げました。
                  <br />
                  ブランド名の「フルール」は、フランス語で“花”を意味し、小さくて愛らしいマカロンのイメージにぴったりだと感じて命名しました。
                  <br />
                  ビジュアルデザインでは、ブランド名の由来にちなんで花のモチーフをさりげなく装飾に取り入れ、マカロンの丸みをセクションの造形に活用することで、統一感とやわらかさを表現しました。
                  <br />
                  技術面では、操作可能な要素にはミニマルなインタラクションを実装することで、細部まで丁寧に作り込みました。
                </>
              }
              role={
                <>
                  Web Design,
                  <br />
                  Frontend Development
                </>
              }
              date="2024年11月"
              URL="https://www.fleur.vegetstudios.com/"
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
