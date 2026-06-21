import { glassBox } from "@/app/about/page.css";
import { main } from "@/app/works/works.css";
import BackToIndex from "@/components/backToIndex/backToIndex";
import WorksInfo from "@/components/experimental/worksInfo";
import Footer from "@/components/footer/footer";
import Glass from "@/components/glass/glass";
import Header from "@/components/header/header";
import clsx from "clsx";

export default function Works() {
  return (
    <>
      <div className={clsx(glassBox)}>
        <Glass>
          <Header />
          <main className={clsx(main)}>
            <WorksInfo
              nameJa="架空マカロン専門店フルール"
              nameEn="Fleur"
              nameJaNode={
                <>
                  架空マカロン専門店
                  <br />
                  フルールのブランドサイト
                </>
              }
              imageSrc="/images/mockups/fleur-website-mockup.avif"
              imageWidth={4000}
              imageHeight={3000}
              what="健康志向で美しいスイーツを愛する人のための架空マカロン専門店フルールのブランドサイト"
              why={
                <>
                  食品系のサイト制作は初めてで、新しいジャンルに挑戦してみたいという思いがきっかけです。食べるものへのこだわりが強い方を想定し、グルテンフリーのマカロン店フルールを企画しました。美しさと清潔感を軸にデザインしています。
                </>
              }
              how={
                <>
                  職人が一つひとつ仕上げるマカロン。その繊細な美しさが際立つように、余白と白を基調にしたシンプルなデザインにしました。
                  <br />
                  フルールはフランス語で&quot;花&quot;を意味するブランド名。小さく愛らしいマカロンの世界観にもぴったり合います。花をモチーフにさりげなく取り入れ、背景の曲線にはマカロンの丸みを借りることで、やわらかく上品な雰囲気を全体に通しました。
                  <br />
                  操作もあえてシンプルに。触れるたびに、丁寧に作られたブランドらしさが伝わる体験を目指しました。
                </>
              }
              role={
                <>
                  Web Design,
                  <br />
                  Frontend Development
                </>
              }
              date="2024.11"
              DemoURL="https://www.fleur.vegetworks.com/"
            />
          </main>
          <Footer />
        </Glass>
        <BackToIndex />
      </div>
    </>
  );
}
