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
              how={
                <>
                  入力されたURLを取得し、読みやすさ・アクセシビリティ・言葉のやさしさなど6つの観点から自動診断する仕組みを構築しました。WCAG
                  2.1 AA / JIS X 8341-3
                  を参照し、専門知識がなくても結果を直感的に把握できるUIにしています。
                  <br />
                  任意のURLにサーバからアクセスする特性上、SSRF（Server-Side Request
                  Forgery）への対策にも配慮しました。http/https
                  のみを許可し、localhost・プライベートIP・内部向けホスト名をブロック。取得前にはDNS解決結果も検証し、リダイレクト先でも同様のチェックを行うことで、内部ネットワークへの不正アクセスを防いでいます。
                  <br />
                  技術面では Next.js / TypeScript / Tailwind CSS を採用しています。
                </>
              }
              role={
                <>
                  Web Design,
                  <br />
                  Frontend Development,
                  <br />
                  Backend Development
                </>
              }
              date="2026.6"
              DemoURL="https://www.yasashii-web-check.vegetsoft.com/"
            />
          </main>
          <Footer />
        </Glass>
        <BackToIndex />
      </div>
    </>
  );
}
