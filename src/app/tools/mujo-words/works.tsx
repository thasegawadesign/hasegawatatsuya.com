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
              what="手放したい言葉を入力し、川へ流すWebアプリ。"
              why="頭の中に残り続ける言葉も、書き出して手放すと、少し軽くなることがあります。どんな言葉も、とどまらずに流れていく。その「無常」を、言葉を川に流すという体験にしたくて制作しました。"
              how={
                <>
                  月の浮かぶ夜の川を描きました。入力した言葉は水面に浮かび、流れに乗って、やがて見えなくなります。できることは、言葉を書いて流すことだけ。その一つの行為に、気持ちを向けられるようにしました。
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
