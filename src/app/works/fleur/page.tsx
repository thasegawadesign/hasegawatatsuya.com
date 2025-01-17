"use client";

import { glassBox } from "@/app/about/page.css";
import { header, main } from "@/app/page.css";
import {
  fleurHeadingEn,
  fleurHeadingHgroup,
  fleurHeadingJa,
  fleurImage,
  worksDd,
  worksDl,
  worksDlItem,
  worksDt,
  worksLink,
  worksRole,
} from "@/app/works/fleur/page.css";
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
import useSmoothScroll from "@/hooks/useSmoothScroll";
import { gsapAnimation } from "@/utils/gsap";
import clsx from "clsx";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useAtomValue } from "jotai";
import { Cormorant, Roboto } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

const cormorant = Cormorant({
  subsets: ["latin"],
  weight: ["500", "600"],
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400"],
});

export default function Fleur() {
  const hgroupRef = useRef(null);
  const worksWhatRef = useRef(null);
  const worksWhyRef = useRef(null);
  const worksHowRef = useRef(null);
  const worksRoleRef = useRef(null);
  const worksTimeRef = useRef(null);
  const worksURLRef = useRef(null);

  const isOpenHamburgerMenu = useAtomValue(isOpenHamburgerMenuAtom);

  useSmoothScroll();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsapAnimation.inview(hgroupRef);
    gsapAnimation.inview(worksWhatRef);
    gsapAnimation.inview(worksWhyRef);
    gsapAnimation.inview(worksHowRef);
    gsapAnimation.inview(worksRoleRef);
    gsapAnimation.inview(worksTimeRef);
    gsapAnimation.inview(worksURLRef);
  }, []);

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
            <Image
              src={"/fleur-website-screen-shot.webp"}
              width={2640}
              height={1520}
              alt="架空マカロン専門店フルール"
              className={clsx(fleurImage)}
              priority
            />
            <hgroup ref={hgroupRef} className={clsx(fleurHeadingHgroup)}>
              <h1 className={clsx(cormorant.className, fleurHeadingEn)}>
                Fleur
              </h1>
              <p className={clsx(fleurHeadingJa)}>
                架空マカロン専門店
                <br />
                フルール
              </p>
            </hgroup>
            <dl className={clsx(worksDl)}>
              <div ref={worksWhatRef} className={clsx(worksDlItem)}>
                <dt className={clsx(roboto.className, worksDt)}>What :</dt>
                <dd className={clsx(worksDd)}>
                  見た目が美しいスイーツが好きで、健康志向な人のための架空マカロン専門店フルールのブランドサイト。
                </dd>
              </div>
              <div ref={worksWhyRef} className={clsx(worksDlItem)}>
                <dt className={clsx(roboto.className, worksDt)}>Why :</dt>
                <dd className={clsx(worksDd)}>
                  トレンドに敏感な特定のターゲット層を想定したWebサイト制作を経験してみたいと思い、制作しました。
                  <br />
                  口にするものには特別感を求める健康志向な人に届けるために、グルテンフリー・美しいビジュアル・清潔感をキーワードにしました。
                </dd>
              </div>
              <div ref={worksHowRef} className={clsx(worksDlItem)}>
                <dt className={clsx(roboto.className, worksDt)}>How :</dt>
                <dd className={clsx(worksDd)}>
                  職人の技が輝く仕上げの美しいマカロンを際立たせるためにシンプルで清潔感のある白基調のデザインに仕上げました。
                  <br />
                  「フルール」はフランス語で花という意味で、花のように小さくてかわいいマカロンを看板商品としていることから意味を拝借してブランド名を決めました。
                  <br />
                  ビジュアルデザインにおいてはモチーフを使用できないかと考え、ブランド名の由来である花の装飾を施しました。また、マカロンの丸みをセクションの背景の造形に活用しました。
                  <br />
                  実装面では、操作可能な要素には控えめなインタラクションを設計して細部を作り込みました。
                </dd>
              </div>
              <div ref={worksRoleRef} className={clsx(worksDlItem)}>
                <dt className={clsx(roboto.className, worksDt)}>Role :</dt>
                <dd className={clsx(cormorant.className, worksRole)}>
                  Web Design,
                  <br />
                  Frontend Development
                </dd>
              </div>
              <div ref={worksTimeRef} className={clsx(worksDlItem)}>
                <dt className={clsx(roboto.className, worksDt)}>Time :</dt>
                <dd className={clsx(worksDd)}>
                  制作にかかった時間はデザイン14時間、コーディング14時間、合計で28時間でした。
                </dd>
              </div>
              <div ref={worksURLRef} className={clsx(worksDlItem)}>
                <dt className={clsx(roboto.className, worksDt)}>URL :</dt>
                <dd className={clsx(worksDd)}>
                  <Link
                    href={"https://fleur-website.vercel.app/"}
                    target="_blank"
                    className={clsx(worksLink)}
                  >
                    https://fleur-website.vercel.app/
                  </Link>
                </dd>
              </div>
            </dl>
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
