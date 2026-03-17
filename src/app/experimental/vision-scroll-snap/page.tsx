import Works from "@/app/experimental/vision-scroll-snap/works";
import { SITE_TITLE_WORKS } from "@/constants/constants";
import { Metadata } from "next";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: `Visionスクロールスナップ | ${SITE_TITLE_WORKS}`,
};

export default function VisionScrollSnapPage() {
  return (
    <>
      <Works />
    </>
  );
}
