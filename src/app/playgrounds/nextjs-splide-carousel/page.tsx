import Works from "@/app/playgrounds/nextjs-splide-carousel/works";
import { SITE_TITLE_EXPERIMENTAL } from "@/constants/constants";
import { Metadata } from "next";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: `アクセシブルなSplideカルーセル | ${SITE_TITLE_EXPERIMENTAL}`,
};

export default function NextjsSplideCarousel() {
  return (
    <>
      <Works />
    </>
  );
}
