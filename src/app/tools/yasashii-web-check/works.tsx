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
              nameJa="やさしいWebチェック"
              nameEn="Yasashii Web Check"
              nameJaNode={<>やさしいWebチェック</>}
              imageSrc="/images/mockups/yasashii-web-check-mockup.avif"
              imageWidth={6000}
              imageHeight={4500}
              videoSrc="/videos/mockups/yasashii-web-check-mockup.mp4"
              what="URLを入力するだけで、読みやすさ・アクセシビリティ・言葉のやさしさなど6つの観点からWebページを診断するWebサービス"
              why="放送大学でユニバーサルデザインを学ぶうちに、Webのアクセシビリティに興味を持ちました。読みやすさやアクセシビリティは、専門知識がなくても気軽に確認できる仕組みがあるとよいと考え、WCAG 2.1 AA / JIS X 8341-3 を参考に診断ツールを制作しました。"
              how="Next.js / TypeScript / Tailwind CSS"
              role={
                <>
                  Web Design,
                  <br />
                  Frontend Development
                </>
              }
              date="2026.6"
              DemoURL="https://www.yasashii-web-check.com/"
            />
          </main>
          <Footer />
        </Glass>
        <BackToIndex />
      </div>
    </>
  );
}
