import Works from "@/app/experimental/about-section-diagonal-energy/works";
import { SITE_TITLE_EXPERIMENTAL } from "@/constants/constants";
import { Metadata } from "next";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: `斜めが刺さるAboutセクション（運送・物流サイト向け） | ${SITE_TITLE_EXPERIMENTAL}`,
};

export default function AboutSectionDiagonalEnergy() {
  return (
    <>
      <Works />
    </>
  );
}
