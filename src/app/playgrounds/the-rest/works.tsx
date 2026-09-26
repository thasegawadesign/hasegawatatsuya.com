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
              nameJa="The Rest."
              nameEn="The Rest."
              nameJaNode={<>誰もいない草原</>}
              imageSrc="/images/mockups/the-rest-mockup.avif"
              imageWidth={4096}
              imageHeight={3072}
              what="誰もいない草原に、オレンジのソファだけが置かれたインタラクティブな空間。"
              why="休息に使えそうな場所であると同時に、奇妙な空間にもしたいという意図があります。人がいない草原にソファを一つ置くことで、どこか落ち着かない感覚が同居します。"
              how={
                <>
                  爽やかな草原に、象徴的なオレンジのソファを置いた奇妙な世界観を目指しました。文字のない空間ではありますが、ある意味記号的な要素からは逃れられない人間世界を映しています。環境が素朴なのは象徴的なソファの誘目性を高める工夫であり、曇り空が奇妙さを演出しています。爽やかな草原と書きましたが、見ようによっては果てしなく無限に広がっていそうという意味では奇妙かもしれません。ソファは、歩くのが面倒くさいギリギリの距離に置いたので、ダッシュもできるようにしました。
                  <br />
                  ソファのモデリングは初めてでした。奇妙な空間なので、形状や布の質感など愛着が持てるか持てないか、どっちとも捉えられそうなラインを攻めました。
                  <br />
                  実装の多くは、コーディングエージェントとの往復で進めています。事前学習として、基礎的事項をThree.js
                  Journeyで押さえた上で、具体的に形にしていく作業はAIをフル活用してスピード違反で進めました。
                  <br />
                  技術面では Vite / TypeScript / Three.js を採用しています。
                </>
              }
              role={
                <>
                  Web Design,
                  <br />
                  Frontend Development,
                  <br />
                  3D Modeling
                </>
              }
              date="2026.9"
              DemoURL="https://www.the-rest.vegetworks.com/"
            />
          </main>
          <Footer />
        </Glass>
        <BackToIndex />
      </div>
    </>
  );
}
