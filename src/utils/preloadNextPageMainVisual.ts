import { getImageProps } from "next/image";
import { preload } from "react-dom";

export const preloadNextPageMainVisual = (
  path: string,
  width: number,
  height: number
) => {
  const {
    props: { src, srcSet, sizes },
  } = getImageProps({
    src: path,
    alt: "",
    width: width,
    height: height,
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
};
