import Works from "@/app/tools/cookie-memo/works";
import { SITE_TITLE_TOOLS } from "@/constants/constants";
import { Metadata } from "next";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: `Cookieメモ | ${SITE_TITLE_TOOLS}`,
};

export default function CookieMemo() {
  return (
    <>
      <Works />
    </>
  );
}
