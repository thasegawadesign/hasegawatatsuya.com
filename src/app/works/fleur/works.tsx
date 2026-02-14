import { glassBox } from "@/app/about/page.css";
import { main } from "@/app/works/works.css";
import BackToIndex from "@/components/backToIndex/backToIndex";
import Footer from "@/components/footer/footer";
import Glass from "@/components/glass/glass";
import Header from "@/components/header/header";
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
                  あらゆるジャンルのWebサイト制作に挑戦する一歩として、食品ジャンルのサイト制作に取り組みました。
                  <br />
                  口にするものには強いこだわりを持つ健康志向層をターゲットに、「グルテンフリー」「美しさ」「清潔感」をキーワードとして企画・デザインしています。
                </>
              }
              how={
                <>
                  職人の技が光る、美しく仕上げられたマカロンを引き立たせるため、シンプルで清潔感のある白を基調としたデザインに仕上げています。
                  <br />
                  ブランド名の「フルール」はフランス語で“花”を意味し、小さくて愛らしいマカロンのイメージにぴったりだと感じて命名しました。
                  <br />
                  ビジュアル面では、花のモチーフをさりげなく装飾に取り入れ、マカロンの丸みを背景の造形に活用することで、やわらかさと上品さを表現しています。
                  <br />
                  技術面では、操作可能な要素にミニマルなインタラクションを実装することで、細部まで丁寧に作り込んでいます。
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
    </>
  );
}
