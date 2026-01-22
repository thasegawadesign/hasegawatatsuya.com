import Works from "@/app/works/tomosho-unyu/works";
import { SITE_TITLE_WORKS } from "@/constants/constants";
import { Metadata } from "next";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: `「株式会社 智商運輸」コーポレートサイト | ${SITE_TITLE_WORKS}`,
};

export default function TomoshoUnyu() {
  return (
    <>
      <Works />
    </>
  );
}
