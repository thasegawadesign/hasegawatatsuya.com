import { breakpoints } from "@/styles/styles.css";
import { style } from "@vanilla-extract/css";

export const glass = style({
  position: "relative",
  maxWidth: 1400,
  width: "88%",
  margin: "100px auto",
  backgroundColor: "rgba(255, 255, 255, .1)",
  borderRadius: 20,
  border: "solid 1px",
  borderColor: "rgba(255, 255, 255, .3)",
  ":before": {
    content: "",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    width: "100%",
    height: "100%",
    borderRadius: 20,
    boxShadow: "inset 0px 0px 80px rgba(255, 255 , 255 , .3)",
    backdropFilter: "blur(120px)",
    WebkitBackdropFilter: "blur(120px)",
    zIndex: -1,
  },
  "@media": {
    [breakpoints["xl"]]: {
      width: "92%",
    },
    [breakpoints["md"]]: {
      width: "96%",
    },
    [breakpoints["sm"]]: {
      marginTop: 8,
      marginBottom: 8,
      ":before": {
        backdropFilter: "blur(80px)",
        WebkitBackdropFilter: "blur(80px)",
      },
    },
  },
});