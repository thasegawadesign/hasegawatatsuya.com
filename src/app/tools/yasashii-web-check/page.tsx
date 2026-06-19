import Works from "@/app/tools/yasashii-web-check/works";
import { SITE_TITLE_TOOLS } from "@/constants/constants";
import { Metadata } from "next";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: `やさしいWebチェック | ${SITE_TITLE_TOOLS}`,
};

export default function YasashiiWebCheck() {
  return (
    <>
      <Works />
    </>
  );
}
