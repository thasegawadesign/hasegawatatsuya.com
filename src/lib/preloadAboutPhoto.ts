import { getImageProps } from "next/image";
import { preload } from "react-dom";

export const ABOUT_PHOTO_SRC = "/images/photo.avif";
export const ABOUT_PHOTO_WIDTH = 320;
export const ABOUT_PHOTO_HEIGHT = 480;
export const ABOUT_PHOTO_SIZES = "(max-width: 639px) 240px, (max-width: 1279px) 280px, 320px";

const ABOUT_NAME_JA = "ハセガワ タツヤ";

export const preloadAboutPhoto = () => {
  const {
    props: { src, srcSet, sizes },
  } = getImageProps({
    src: ABOUT_PHOTO_SRC,
    alt: "",
    width: ABOUT_PHOTO_WIDTH,
    height: ABOUT_PHOTO_HEIGHT,
    sizes: ABOUT_PHOTO_SIZES,
  });

  if (srcSet) {
    preload(src, {
      as: "image",
      imageSrcSet: srcSet,
      imageSizes: sizes,
    });
  } else {
    preload(src, {
      as: "image",
    });
  }

  if (typeof document !== "undefined") {
    const family = getComputedStyle(document.documentElement)
      .getPropertyValue("--font-noto-serif-jp")
      .split(",")[0]
      ?.trim();
    if (family) {
      void document.fonts?.load(`700 1em ${family}`, ABOUT_NAME_JA);
    }
  }
};
