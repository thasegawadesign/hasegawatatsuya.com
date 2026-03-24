import Works from "@/app/experimental/nextjs-splide-carousel/works";
import { SITE_TITLE_WORKS } from "@/constants/constants";
import { Metadata } from "next";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: `アクセシブルなSplideカルーセル | ${SITE_TITLE_WORKS}`,
};

export default function NextjsSplideCarouselPage() {
  return (
    <>
      <Works />
    </>
  );
}
