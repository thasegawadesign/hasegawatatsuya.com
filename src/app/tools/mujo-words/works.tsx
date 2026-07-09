import { glassBox } from "@/app/about/page.css";
import { main } from "@/app/tools/tools.css";
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
              nameJa="無常の言葉"
              nameEn="Mujo Words"
              nameJaNode={<>無常の言葉</>}
              imageSrc="/images/mockups/mujo-words-mockup.avif"
              imageWidth={6000}
              imageHeight={4500}
              what="手放したい言葉を入力し、川へ流すことで心を軽くするWebアプリ。放たれた言葉は水面に浮かび、やがて流れ去っていきます。"
              why="頭の中に留まり続ける言葉は、書き出して手放すことで少し軽くなることがあります。無常の思想を背景に、言葉を川へ還すという静かな体験を届けたくて制作しました。"
              how={
                <>
                  入力した言葉が川の流れに乗って消えていく様子を、シンプルなアニメーションで表現しました。余計な機能を排し、言葉を書いて流すという一つの行為に集中できる画面設計にしています。
                  <br />
                  技術面では Next.js / TypeScript / Tailwind CSS を採用しています。
                </>
              }
              role={
                <>
                  Web Design,
                  <br />
                  Frontend Development
                </>
              }
              date="2026.7"
              DemoURL="https://www.mujo-words.vegetworks.com/"
            />
          </main>
          <Footer />
        </Glass>
        <BackToIndex />
      </div>
    </>
  );
}
