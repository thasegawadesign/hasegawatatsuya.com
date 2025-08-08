import { keyframes, style } from "@vanilla-extract/css";

export const html = style({
  overflowX: "hidden",
  scrollPaddingTop: 40,
});

export const smoothScroll = style({
  "@media": {
    "(prefers-reduced-motion: no-preference)": {
      ":focus-within": {
        scrollBehavior: "smooth",
      },
    },
  },
});

export const body = style({
  fontFamily: "YakuHanJP, Noto Sans JP, sans-serif",
  fontWeight: 200,
  "::selection": {
    color: "#130059",
    backgroundColor: "#faf1e8",
  },
});

export const gradientMove = keyframes({
  "0%": {
    backgroundPosition: "0% 0%",
  },
  "25%": {
    backgroundPosition: "50% 25%",
  },
  "50%": {
    backgroundPosition: "100% 50%",
  },
  "75%": {
    backgroundPosition: "50% 75%",
  },
  "100%": {
    backgroundPosition: "0% 0%",
  },
});
export const backgroundGradient = style({
  backgroundColor: "#106",
  backgroundImage: `
  radial-gradient(at 0 0, #f70, transparent 40%),
  radial-gradient(at 0 40%, #0df, transparent 40%),
  radial-gradient(at 40% 60%, #01f, transparent 80%),
  radial-gradient(at 0 100%, #faa, transparent 50%)`,
  backgroundAttachment: "fixed",
  backgroundSize: "150% 150%",
  animation: `${gradientMove} 20s ease-in-out infinite`,
});
