import { keyframes, style } from "@vanilla-extract/css";

export const tooltipContent = style({
  zIndex: 9999,
  willChange: "transform, opacity",
  borderRadius: 4,
  backgroundColor: "#faf1e8",
  padding: "4px 6px",
  animationDuration: "400ms",
  animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
  userSelect: "none",
  lineHeight: 1,
  color: "#130059",
  fontSize: 14,
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
  fontWeight: 500,
});

export const tooltipArrow = style({
  fill: "#faf1e8",
});

export const slideUpAndFade = keyframes({
  from: {
    transform: "translateY(2px)",
    opacity: 0,
  },
  to: {
    transform: "translateY(0)",
    opacity: 1,
  },
});

export const slideRightAndFade = keyframes({
  from: {
    transform: "translateX(-2px)",
    opacity: 0,
  },
  to: {
    transform: "translateX(0)",
    opacity: 1,
  },
});

export const slideDownAndFade = keyframes({
  from: {
    transform: "translateY(-2px)",
    opacity: 0,
  },
  to: {
    transform: "translateY(0)",
    opacity: 1,
  },
});

export const slideLeftAndFade = keyframes({
  from: {
    transform: "translateX(2px)",
    opacity: 0,
  },
  to: {
    transform: "translateX(0)",
    opacity: 1,
  },
});
