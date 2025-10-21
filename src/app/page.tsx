import Footer from "@/components/footer/footer";
import Glass from "@/components/glass/glass";
import Header from "@/components/header/header";
import Main from "@/components/main/home/main";

export const dynamic = "force-static";

export default function Home() {
  return (
    <>
      <Glass>
        <Header />
        <Main />
        <Footer />
      </Glass>
    </>
  );
}
