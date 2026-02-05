import Works from "@/app/works/fukusho-unyu/works";
import { SITE_TITLE_WORKS } from "@/constants/constants";
import { Metadata } from "next";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: `「福昇運輸株式会社」コーポレートサイト | ${SITE_TITLE_WORKS}`,
};

export default function FukushoUnyu() {
  return (
    <>
      <Works />
    </>
  );
}
