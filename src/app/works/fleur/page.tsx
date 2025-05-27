import Works from "@/app/works/fleur/works";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "架空マカロン専門店『フルール』 | Tatsuya Hasegawa | Webデザイナー",
  description: "Tatsuya Hasegawa のポートフォリオサイト",
};

export default function Fleur() {
  return (
    <>
      <Works />
    </>
  );
}
