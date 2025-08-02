import Works from "@/app/works/sporty/works";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "力強さのあるビジュアル | 長谷川 達也のポートフォリオサイト",
};

export default function Sporty() {
  return (
    <>
      <Works />
    </>
  );
}
