import { glassBox } from "@/app/about/page.css";
import BackToIndex from "@/components/backToIndex/backToIndex";
import Footer from "@/components/footer/footer";
import Glass from "@/components/glass/glass";
import Header from "@/components/header/header";
import Main from "@/components/main/about/main";
import clsx from "clsx";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | 長谷川 達也",
};

export default function About() {
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
