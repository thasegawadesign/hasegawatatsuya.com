import Works from "@/app/playgrounds/editorial-hero-prototype/works";
import { SITE_TITLE_EXPERIMENTAL } from "@/constants/constants";
import { Metadata } from "next";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: `大小2枚の非対称ヒーロー | ${SITE_TITLE_EXPERIMENTAL}`,
};

export default function EditorialHeroPage() {
  return (
    <>
      <Works />
    </>
  );
}
