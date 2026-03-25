import Works from "@/app/experimental/editorial-hero-prototype/works";
import { SITE_TITLE_EXPERIMENTAL } from "@/constants/constants";
import { Metadata } from "next";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: `非対称ヒーロー プロトタイプ | ${SITE_TITLE_EXPERIMENTAL}`,
};

export default function EditorialHeroPage() {
  return (
    <>
      <Works />
    </>
  );
}
