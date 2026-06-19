import Works from "@/app/works/cookie-memo/works";
import { SITE_TITLE_WORKS } from "@/constants/constants";
import { Metadata } from "next";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: `Cookieメモ | ${SITE_TITLE_WORKS}`,
};

export default function CookieMemo() {
  return (
    <>
      <Works />
    </>
  );
}
