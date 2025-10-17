import Works from "@/app/works/tomosho-unyu/works";
import { SITE_TITLE_BASE } from "@/constants/constants";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `「株式会社 智商運輸」コーポレートサイト | ${SITE_TITLE_BASE}`,
};

export default function TomoshoUnyu() {
  return (
    <>
      <Works />
    </>
  );
}
