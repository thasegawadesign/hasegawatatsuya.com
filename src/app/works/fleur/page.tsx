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
import Image from "next/image";
import Link from "next/link";

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
        <main className={clsx(main)}>
          <Image
            src={"/fleur-website-screen-shot.webp"}
            width={2640}
            height={1500}
            alt="架空マカロン専門店フルール"
          />
          <hgroup>
            <h1>Fleur</h1>
            <p>
              架空マカロン専門店
              <br />
              フルール
            </p>
          </hgroup>
          <dl>
            <dt>What :</dt>
            <dd>
              見た目が美しいスイーツが好きで、健康志向な人のためのマカロン専門店。
            </dd>
            <dt>Why :</dt>
            <dd>
              トレンドに敏感な特定のターゲット層を想定したWebサイト制作を経験してみたいと思い、制作しました。
              <br />
              口にするものには特別感を求める健康志向な人に届けるために、グルテンフリー・美しいビジュアル・清潔感をキーワードにしました。
            </dd>
            <dt>How :</dt>
            <dd>
              職人の技が輝く仕上げの美しいマカロンを際立たせるためにシンプルで清潔感のある白基調のデザインに仕上げました。
              <br />
              「フルール」はフランス語で花という意味で、花のように小さくてかわいいマカロンを看板商品としていることから意味を拝借してブランド名を決めました。
              <br />
              ビジュアルデザインにおいてはモチーフを使用できないかと考え、ブランド名の由来である花の装飾を施しました。また、マカロンの丸みをセクションの背景の造形に活用しました。
              <br />
              実装面では、操作可能な要素には控えめなインタラクションを設計して細部を作り込みました。
            </dd>
            <dt>Role :</dt>
            <dd>
              Web Design,
              <br />
              Frontend Development
            </dd>
            <dt>Time :</dt>
            <dd>
              制作にかかった時間はデザイン14時間、コーディング14時間、合計で28時間でした。
            </dd>
            <dt>URL :</dt>
            <dd>
              <Link href={"https://fleur-website.vercel.app/"} target="_blank">
                https://fleur-website.vercel.app/
              </Link>
            </dd>
          </dl>
        </main>
        <Footer />
      </Glass>
      <Object1 />
      <Object2 />
      <Object3 />
    </>
  );
}
