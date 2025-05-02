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

export default function Fleur() {
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
              nameJa="架空マカロン専門店フルール"
              nameEn="Fleur"
              nameJaNode={
                <>
                  架空マカロン専門店
                  <br />
                  フルール
                </>
              }
              imageSrc="/fleur-website-screen-shot.webp"
              imageWidth={2640}
              imageHeight={1520}
              what="ビジュアルが美しいスイーツが好きで、健康志向な人のための架空マカロン専門店フルールのブランドサイト"
              why={
                <>
                  トレンドに敏感な特定のターゲット層を想定したWebサイト制作を経験してみたいと思い、制作しました。
                  <br />
                  口にするものには特別感を求める健康志向な人に届けるために、グルテンフリー・美しいビジュアル・清潔感をデザインのキーワードにしました。
                </>
              }
              how={
                <>
                  職人の技が輝く仕上げの美しいマカロンを際立たせるためにシンプルで清潔感のある白基調のデザインに仕上げました。
                  <br />
                  「フルール」はフランス語で花という意味で、花のように小さくてかわいいマカロンを看板商品としていることから命名しました。
                  <br />
                  ビジュアルデザインにおいてはモチーフを使用できないかと考え、ブランド名の由来である花の装飾を施しました。また、マカロンの丸みをセクションの背景の造形に活用しました。
                  <br />
                  実装面では、操作可能な要素には控えめなインタラクションを設計して細部を作り込みました。
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
              URL="https://fleur-website.vercel.app/"
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
