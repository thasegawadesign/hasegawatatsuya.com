import { noiseTextureDataUrl } from "@/components/object/noiseTexture";
import { style } from "@vanilla-extract/css";

/** Sharp grain on top of blurred orb (blur on sibling would smear this away). */
export const objectGrain = style({
  position: "absolute",
  zIndex: 1,
  inset: 0,
  opacity: 0.62,
  mixBlendMode: "overlay",
  borderRadius: "inherit",
  backgroundImage: `url("${noiseTextureDataUrl}")`,
  backgroundRepeat: "repeat",
  backgroundSize: "min(16vw, 128px) min(16vw, 128px)",
  pointerEvents: "none",
});
