import { glassBox } from "@/app/about/page.css";
import { main } from "@/app/works/works.css";
import BackToIndex from "@/components/backToIndex/backToIndex";
import Footer from "@/components/footer/footer";
import Glass from "@/components/glass/glass";
import Header from "@/components/header/header";
import Object1 from "@/components/object/object1";
import Object2 from "@/components/object/object2";
import Object3 from "@/components/object/object3";
import WorksInfo from "@/components/works/worksInfo";
import clsx from "clsx";

export default function Works() {
  return (
    <>
      <div className={clsx(glassBox)}>
        <Glass>
          <Header />
          <main className={clsx(main)}>
            <WorksInfo
              nameJa="架空マカロン専門店『フルール』"
              nameEn="Fleur"
              nameJaNode={
                <>
                  架空マカロン専門店
                  <br />
                  「フルール」ブランドサイト
                </>
              }
              imageSrc="/fleur-website-mockup.avif"
              imageWidth={4000}
              imageHeight={3000}
              what="健康志向で美しいスイーツを愛する人のための架空マカロン専門店「フルール」ブランドサイト"
              why={
                <>
                  あらゆるジャンルのWebサイトを制作してみたいと思う中で、まずは食品を扱うWebサイトに挑戦してみようと考えるようになりました。
                  <br />
                  口にするものには特別なこだわりを持つ、健康志向の方に向けて、「グルテンフリー」「美しさ」「清潔感」をキーワードに企画しました。
                </>
              }
              how={
                <>
                  職人の技が光る、美しく仕上げられたマカロンを引き立たせるため、シンプルで清潔感のある白を基調としたデザインに仕上げました。
                  <br />
                  ブランド名の「フルール」はフランス語で“花”を意味し、小さくて愛らしいマカロンのイメージにぴったりだと感じて命名しました。
                  <br />
                  ヴィジュアルデザインでは、由来にちなんで花のモチーフをさりげなく装飾に取り入れ、マカロンの丸みを造形に活かし、統一感とやわらかさを表現しました。
                  <br />
                  技術面では、操作可能な要素にミニマルなインタラクションを実装することで、細部まで丁寧に作り込みました。
                </>
              }
              role={
                <>
                  Web Design,
                  <br />
                  Front-end Development
                </>
              }
              date="2024.11"
              URL="https://www.fleur.vegetworks.com/"
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
