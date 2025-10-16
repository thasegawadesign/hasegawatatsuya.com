import Works from "@/app/works/fleur/works";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "架空マカロン専門店「フルール」 | Webデザイナー 長谷川 達也 | ポートフォリオ",
};

export default function Fleur() {
  return (
    <>
      <Works />
    </>
  );
}
