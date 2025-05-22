import Works from "@/app/works/sporty/works";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "躍動感のあるビジュアル | Tatsuya Hasegawa | Webデザイナー",
  description: "Tatsuya Hasegawa のポートフォリオサイト",
};

export default function Sporty() {
  return (
    <>
      <Works />
    </>
  );
}
