import { glassBox } from "@/app/about/page.css";
import BackToIndex from "@/components/backToIndex/backToIndex";
import Footer from "@/components/footer/footer";
import Glass from "@/components/glass/glass";
import Header from "@/components/header/header";
import Main from "@/components/main/about/main";
import { preloadAboutPhoto } from "@/lib/preloadAboutPhoto";
import clsx from "clsx";
import { Metadata } from "next";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "About | 長谷川 達也",
};

export default function About() {
  preloadAboutPhoto();

  return (
    <>
      <div className={clsx(glassBox)}>
        <Glass>
          <Header />
          <Main />
          <Footer />
        </Glass>
        <BackToIndex />
      </div>
    </>
  );
}
