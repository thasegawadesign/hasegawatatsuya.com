import Works from "@/app/experimental/about-section-diagonal-energy/works";
import { SITE_TITLE_WORKS } from "@/constants/constants";
import { Metadata } from "next";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: `斜めが刺さるAboutセクション | ${SITE_TITLE_WORKS}`,
};

export default function AboutSectionDiagonalEnergy() {
  return (
    <>
      <Works />
    </>
  );
}
