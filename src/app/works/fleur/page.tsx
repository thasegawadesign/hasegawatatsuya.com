import Works from "@/app/works/fleur/works";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "架空マカロン専門店『フルール』 | 長谷川 達也のポートフォリオサイト",
};

export default function Fleur() {
  return (
    <>
      <Works />
    </>
  );
}
