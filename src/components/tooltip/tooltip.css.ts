import { keyframes, style } from "@vanilla-extract/css";

export const tooltipContent = style({
  borderRadius: 4,
  padding: "4px 6px",
  fontSize: 14,
  fontWeight: 500,
  lineHeight: 1,
  color: "#130059",
  backgroundColor: "#faf1e8",
  userSelect: "none",
  animationDuration: "400ms",
  animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
  willChange: "transform, opacity",
  selectors: {
    '&[data-state="delayed-open"][data-side="top"]': {
      animationName: "slideDownAndFade",
    },
    '&[data-state="delayed-open"][data-side="right"]': {
      animationName: "slideLeftAndFade",
    },
    '&[data-state="delayed-open"][data-side="bottom"]': {
      animationName: "slideUpAndFade",
    },
    '&[data-state="delayed-open"][data-side="left"]': {
      animationName: "slideRightAndFade",
    },
  },
  zIndex: 9999,
});

export const tooltipArrow = style({
  fill: "#faf1e8",
});

export const slideUpAndFade = keyframes({
  from: {
    opacity: 0,
    transform: "translateY(2px)",
  },
  to: {
    opacity: 1,
    transform: "translateY(0)",
  },
});

export const slideRightAndFade = keyframes({
  from: {
    opacity: 0,
    transform: "translateX(-2px)",
  },
  to: {
    opacity: 1,
    transform: "translateX(0)",
  },
});

export const slideDownAndFade = keyframes({
  from: {
    opacity: 0,
    transform: "translateY(-2px)",
  },
  to: {
    opacity: 1,
    transform: "translateY(0)",
  },
});

export const slideLeftAndFade = keyframes({
  from: {
    opacity: 0,
    transform: "translateX(2px)",
  },
  to: {
    opacity: 1,
    transform: "translateX(0)",
  },
});
