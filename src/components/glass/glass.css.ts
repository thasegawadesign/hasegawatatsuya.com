import { breakpoints } from "@/styles/styles.css";
import { style } from "@vanilla-extract/css";

export const glass = style({
  position: "relative",
  margin: "5vw auto",
  border: "2px solid",
  borderRadius: 40,
  borderColor: "rgba(255, 255, 255, 0.2)",
  boxShadow: "0 0px 40px 0 rgba(0, 0, 0, 0.16)",
  backgroundColor: "rgba(255, 255, 255, 0.2)",
  width: "88vw",
  maxWidth: 1400,
  ":before": {
    position: "absolute",
    zIndex: -1,
    top: 0,
    right: 0,
    left: 0,
    backdropFilter: "blur(96px)",
    borderRadius: 38,
    boxShadow: "inset 0px 0px 80px rgba(255, 255 , 255 , 0.3)",
    width: "100%",
    height: "100%",
    content: "",
    WebkitBackdropFilter: "blur(96px)",
  },
  ":after": {
    position: "absolute",
    top: 0,
    left: 0,
    opacity: 0.3,
    mixBlendMode: "overlay",
    borderRadius: "inherit",
    background:
      "linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0.1) 100%)",
    width: "100%",
    height: "100%",
    content: "",
  },
  "@media": {
    [breakpoints["2xl"]]: {
      width: "86vw",
    },
    [breakpoints["xl"]]: {
      marginTop: "4vw",
      marginBottom: "4vw",
      width: "92vw",
    },
    [breakpoints["md"]]: {
      marginTop: "2vw",
      marginBottom: "2vw",
      width: "96vw",
    },
    [breakpoints["sm"]]: {
      marginTop: "1vw",
      marginBottom: "1vw",
      width: "98vw",
      ":before": {
        backdropFilter: "blur(48px)",
        WebkitBackdropFilter: "blur(48px)",
      },
    },
  },
});

export const noise = style({
  position: "absolute",
  zIndex: 0,
  top: 0,
  opacity: 0.3,
  borderRadius: 38,
  width: "100%",
  height: "100%",
});
