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
                  新しい表現領域を求めて、食品ジャンルのサイト制作に取り組みました。口にするものへの意識が高い健康志向層をターゲットに、グルテンフリーのマカロンブランドとして「美しさ」と「清潔感」を軸に企画・デザインしています。
                </>
              }
              how={
                <>
                  職人の手によって丁寧に仕上げられるマカロン。その繊細な美しさを最大限に引き立てるため、余白と白を軸にしたシンプルなデザインを選択しました。
                  ブランド名「フルール」はフランス語で&quot;花&quot;を意味し、小さく愛らしいマカロンの世界観と自然に呼応します。花のモチーフをビジュアルにさりげなく織り交ぜ、マカロンの丸みを背景の造形言語として転用することで、やわらかさと上品さを一貫したトーンで表現しました。
                  インタラクションはあえてミニマルに抑え、操作のたびに「丁寧に作られている」と感じてもらえる体験を意図しています。
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
