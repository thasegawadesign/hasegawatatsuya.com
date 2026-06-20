import Works from "@/app/tools/shader-mandala/works";
import { SITE_TITLE_TOOLS } from "@/constants/constants";
import { Metadata } from "next";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: `シェーダー曼荼羅 目標達成シート | ${SITE_TITLE_TOOLS}`,
};

export default function ShaderMandala() {
  return (
    <>
      <Works />
    </>
  );
}
