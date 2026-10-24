import {
  CUBIC_BEZIER,
  DURATION_M,
  DURATION_S,
  PROFILE_IMAGE_BRIGHTNESS,
  PROFILE_IMAGE_SATURATION,
} from "@/constants/constants";
import { LAYER } from "@/styles/layers";
import { SITE_EDGE } from "@/styles/siteEdge";
import { breakpoints, vars } from "@/styles/styles.css";
import { createVar, globalStyle, keyframes, style } from "@vanilla-extract/css";

export const main = style({
  position: "relative",
  zIndex: LAYER.content,
  display: "flow-root",
});

export const name = style({
  margin: "24vh auto",
  background: "linear-gradient(135deg, #130059 0%, #26003f 100%)",
  backgroundClip: "text",
  paddingBottom: "0.24em",
  textAlign: "center",
  lineHeight: "0.76em",
  letterSpacing: "-0.04em",
  fontSize: "clamp(7.6rem, 16.8vw + 2.4rem, 29.6rem)",
  fontWeight: 700,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  "@media": {
    [breakpoints["sm"]]: {
      margin: "33.3vh auto",
    },
  },
  selectors: {
    "&::selection": {
      WebkitTextFillColor: "#130059",
    },
  },
});
export const nameTightLeft = style({
  marginLeft: "-0.024em",
});
export const nameTight = style({
  letterSpacing: "-0.044em",
});
export const nameTighter = style({
  letterSpacing: "-0.032em",
});
export const nameWide = style({
  letterSpacing: "-0.020em",
});
export const nameWider = style({
  letterSpacing: "-0.016em",
});

export const animateLine = keyframes({
  "0%": { transform: "translateY(-100%)" },
  "100%": { transform: "translateY(100%)" },
});
// lg 以下は見出し・本文・縦線の左端を、作品アイコン（3 列グリッドの 1 列目）の左端に揃える
// worksBox の左端からアイコンの左端まで = worksItem の padding + アイコンを中央に置いたときの余白
const iconOffset = (boxWidth: string) => `(2vw + ((${boxWidth} - 2vw) / 3 - 4vw - 120px) / 2)`;
// 左端 = 中央寄せされた worksBox の左余白 + アイコンまでの余白
const iconLeft = (boxWidth: string) => `calc((100% - ${boxWidth}) / 2 + ${iconOffset(boxWidth)})`;
// lg を 640px 固定にすると幅の広い側で画面の 3 分の 2 ほどしか使えず細く見え、
// 720px 固定にすると 768px 付近（ガラスのカードが約 707px）ではみ出す。
// min() を calc() の入れ子に直接書くと lightningcss が式の整理で再帰しすぎて dev サーバーごと落ちる
const boxWidthLg = createVar();
// xl を 800px 固定にすると、狭い側で左上の TH ロゴが箱の端にかかる
const boxWidthXl = createVar();
// TH ロゴの幅（約 50px）と、その右に残す余白（約 32px）
const LOGO_CLEARANCE = "82px";
globalStyle(":root", {
  vars: {
    [boxWidthLg]: "min(720px, 82vw)",
    [boxWidthXl]: `min(800px, 100vw - 2 * (${SITE_EDGE.xl.side} + ${LOGO_CLEARANCE}))`,
  },
});
const BOX_WIDTH = {
  xl: boxWidthXl,
  lg: boxWidthLg,
  md: "580px",
};
const CONTENT_LEFT = {
  lg: iconLeft(BOX_WIDTH.lg),
  md: iconLeft(BOX_WIDTH.md),
  sm: "8vw",
};

export const line = style({
  position: "relative",
  margin: "0 auto clamp(60px, 5vw, 80px)",
  backgroundColor: "rgba(19, 0, 89, .3)",
  width: 1,
  height: 60,
  overflow: "hidden",
  ":before": {
    position: "absolute",
    backgroundColor: vars.color.text,
    width: 1,
    height: 60,
    animationName: animateLine,
    animationDuration: "1.6s",
    animationTimingFunction: "ease",
    animationIterationCount: "infinite",
    content: "",
  },
  "@media": {
    [breakpoints["2xl"]]: {
      height: 56,
      ":before": {
        height: 56,
      },
    },
    [breakpoints["xl"]]: {
      height: 48,
      ":before": {
        height: 48,
      },
    },
    [breakpoints["lg"]]: {
      marginLeft: CONTENT_LEFT.lg,
      height: 40,
      ":before": {
        height: 40,
      },
    },
    [breakpoints["md"]]: {
      marginLeft: CONTENT_LEFT.md,
    },
    [breakpoints["sm"]]: {
      marginLeft: CONTENT_LEFT.sm,
    },
  },
});

export const sectionHeading = style({
  marginBottom: 16,
  textAlign: "center",
  letterSpacing: "-0.02em",
  color: vars.color.text,
  fontSize: "1.6rem",
  fontWeight: 300,
  "@media": {
    [breakpoints["xl"]]: {
      marginBottom: 12,
      fontSize: "1.4rem",
    },
    [breakpoints["lg"]]: {
      paddingLeft: CONTENT_LEFT.lg,
      textAlign: "left",
    },
    [breakpoints["md"]]: {
      paddingLeft: CONTENT_LEFT.md,
    },
    [breakpoints["sm"]]: {
      paddingLeft: CONTENT_LEFT.sm,
    },
  },
});

export const aboutSection = style({
  paddingBottom: 120,
  "@media": {
    [breakpoints["sm"]]: {
      paddingBottom: 60,
    },
  },
});

export const description = style({
  transformOrigin: "right bottom",
  marginBottom: 60,
  padding: "0 4vw",
  textAlign: "center",
  lineHeight: 1.7,
  letterSpacing: "-0.04em",
  color: vars.color.text,
  fontSize: "clamp(1.8rem, 0.72vw + 1.12rem, 2.24rem)",
  fontWeight: 300,
  "@media": {
    [breakpoints["lg"]]: {
      paddingLeft: CONTENT_LEFT.lg,
      textAlign: "left",
    },
    [breakpoints["md"]]: {
      paddingLeft: CONTENT_LEFT.md,
    },
    [breakpoints["sm"]]: {
      paddingLeft: CONTENT_LEFT.sm,
      marginBottom: 28,
      lineHeight: 1.6,
    },
  },
});

export const profileSection = style({
  display: "flex",
  flexDirection: "row-reverse",
  justifyContent: "center",
  placeItems: "end",
  gap: 56,
  backdropFilter: "blur(8px)",
  margin: "0 auto",
  borderRadius: 36,
  backgroundColor: "rgba(255, 255, 255, .12)",
  padding: "66px 12vw",
  maxWidth: 920,
  "@media": {
    [breakpoints["2xl"]]: {
      gap: 52,
      maxWidth: 880,
    },
    [breakpoints["xl"]]: {
      gap: 48,
      maxWidth: BOX_WIDTH.xl,
    },
    // 写真（row-reverse なので左側）の左端を 1 列目のアイコンの左端に、テキストの右端を 3 列目のアイコンの右端に揃える。
    // 左端だけ揃えるとテキストの右が丸ごと空いて重心が左に寄り、中央に置くと前後のセクションの左端の線から外れる。
    // 写真とテキストが離れるので、名前を写真の上端、ソーシャルと More を下端に寄せて右揃えにし、写真と対で見せる
    [breakpoints["lg"]]: {
      justifyContent: "space-between",
      placeItems: "stretch",
      paddingRight: `calc${iconOffset(BOX_WIDTH.lg)}`,
      paddingLeft: `calc${iconOffset(BOX_WIDTH.lg)}`,
      maxWidth: BOX_WIDTH.lg,
    },
    [breakpoints["md"]]: {
      paddingRight: `calc${iconOffset(BOX_WIDTH.md)}`,
      paddingLeft: `calc${iconOffset(BOX_WIDTH.md)}`,
      maxWidth: BOX_WIDTH.md,
    },
    [breakpoints["sm"]]: {
      justifyContent: "space-between",
      gap: 16,
      margin: "0 2vw",
      padding: "30px 6vw",
      maxWidth: 580,
    },
  },
});
const PROFILE_IMAGE_RADIUS = 24;
const PROFILE_IMAGE_RADIUS_SM = 20;
// 角丸の写真は四角の端より見た目の端が内側にあるので、写真の上下に揃えるテキストは角の 45° の位置まで寄せる
const cornerInset = (radius: number) => Math.round(radius * (1 - Math.SQRT1_2));

export const profileContent = style({
  paddingBottom: 44,
  "@media": {
    [breakpoints["xl"]]: {
      paddingBottom: 36,
    },
    [breakpoints["lg"]]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end",
      paddingTop: cornerInset(PROFILE_IMAGE_RADIUS),
      paddingBottom: cornerInset(PROFILE_IMAGE_RADIUS),
    },
    [breakpoints["sm"]]: {
      paddingTop: cornerInset(PROFILE_IMAGE_RADIUS_SM),
      paddingBottom: cornerInset(PROFILE_IMAGE_RADIUS_SM),
    },
  },
});
export const profileTextBox = style({
  display: "flex",
  flexDirection: "column-reverse",
  gap: 10,
  marginBottom: 20,
  "@media": {
    [breakpoints["lg"]]: {
      alignItems: "flex-end",
    },
    [breakpoints["sm"]]: {
      gap: 8,
      marginBottom: 12,
    },
  },
});
export const profileName = style({
  letterSpacing: "-0.02em",
  whiteSpace: "nowrap",
  color: vars.color.text,
  fontSize: "3.7rem",
  fontWeight: 300,
  "@media": {
    [breakpoints["2xl"]]: {
      fontSize: "3.6rem",
    },
    [breakpoints["xl"]]: {
      fontSize: "3.4rem",
    },
    [breakpoints["lg"]]: {
      fontSize: "3rem",
    },
    [breakpoints["sm"]]: {
      textAlign: "right",
      fontSize: "2.3rem",
    },
  },
});
export const profileOccupation = style({
  lineHeight: 1.2,
  letterSpacing: "-0.02em",
  color: vars.color.text,
  fontSize: "1.5rem",
  fontWeight: 300,
  "@media": {
    [breakpoints["xl"]]: {
      fontSize: "1.4rem",
    },
    [breakpoints["lg"]]: {
      fontSize: "1.3rem",
    },
    [breakpoints["sm"]]: {
      textAlign: "right",
      lineHeight: 1.25,
      fontSize: "1rem",
    },
  },
});
export const profileLinkBox = style({
  display: "flex",
  gap: 16,
  // デスクトップは写真が高いので、ここを詰めるとテキストのまとまりが写真に対して潰れて見える
  marginBottom: 56,
  "@media": {
    [breakpoints["lg"]]: {
      marginTop: "auto",
      marginBottom: 32,
    },
    [breakpoints["sm"]]: {
      gap: 12,
      marginBottom: 20,
    },
  },
});
export const profileLink = style({
  display: "block",
  transition: `scale ${DURATION_M}s ${CUBIC_BEZIER}`,
  border: "none",
  backgroundColor: "transparent",
  cursor: "pointer",
  lineHeight: "100%",
  ":hover": {
    scale: 1.28,
  },
  ":focus-visible": {
    scale: 1.28,
  },
});
export const profileLinkIcon = style({
  width: 28,
  height: 28,
  color: vars.color.text,
  userSelect: "none",
  pointerEvents: "none",
  "@media": {
    [breakpoints["sm"]]: {
      width: 22,
      height: 22,
    },
  },
});
// IoMail の描画域は viewBox の縦 69% しかなく、他のアイコンと並べると小さく見える。
// 拡大すると横幅いっぱいまで広がり左の note に寄って見えるので、その分だけ左に余白を足す
export const profileLinkIconMail = style({
  scale: 1.13,
  marginLeft: 4,
});

export const profileMore = style({
  position: "relative",
  display: "inline-block",
  textDecoration: "none",
  letterSpacing: "0.04em",
  color: vars.color.text,
  fontSize: "1.6rem",
  fontWeight: 300,
  ":before": {
    position: "absolute",
    right: 0,
    bottom: 0,
    left: 0,
    transition: `width ${DURATION_M}s ${CUBIC_BEZIER}`,
    backgroundColor: vars.color.text,
    width: "100%",
    height: "1px",
    content: "",
  },
  selectors: {
    "&:focus-visible:before": {
      width: 0,
    },
    "&:hover:before": {
      width: 0,
    },
  },
  "@media": {
    [breakpoints["2xl"]]: {
      fontSize: "1.5rem",
    },
    [breakpoints["sm"]]: {
      display: "block",
      marginLeft: "auto",
      width: "fit-content",
      fontSize: "1.2rem",
    },
  },
});
export const profileImageWrapper = style({
  position: "relative",
  // About の写真（2:3）と比率をそろえ、View Transition で歪まないように縮ませない
  flexShrink: 0,
  marginLeft: -140,
  width: 200,
  height: 300,
  overflow: "hidden",
  "@media": {
    [breakpoints["2xl"]]: {
      marginLeft: -120,
    },
    [breakpoints["xl"]]: {
      marginLeft: -96,
      width: 180,
      height: 270,
    },
    [breakpoints["lg"]]: {
      marginLeft: 0,
      width: 170,
      height: 255,
    },
    [breakpoints["md"]]: {
      width: 150,
      height: 225,
    },
    [breakpoints["sm"]]: {
      width: 120,
      height: 180,
    },
  },
});
export const profileImageContainer = style({
  aspectRatio: 3 / 2,
  position: "relative",
  borderRadius: PROFILE_IMAGE_RADIUS,
  width: "100%",
  height: "100%",
  overflow: "hidden",
  "@media": {
    [breakpoints["sm"]]: {
      borderRadius: PROFILE_IMAGE_RADIUS_SM,
    },
  },
});
export const motionDiv = style({
  position: "absolute",
  zIndex: 0,
  inset: 0,
});
export const profileImage = style({
  filter: `saturate(${PROFILE_IMAGE_SATURATION}) brightness(${PROFILE_IMAGE_BRIGHTNESS})`,
  borderRadius: 24,
  objectFit: "cover",
  pointerEvents: "none",
  width: "100%",
  height: "auto",
  userSelect: "none",
  "@media": {
    [breakpoints["sm"]]: {
      borderRadius: 20,
    },
  },
});

export const worksSection = style({
  paddingBottom: 120,
  "@media": {
    [breakpoints["sm"]]: {
      paddingBottom: 60,
    },
  },
});
export const worksBox = style({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "1vw",
  margin: "0 auto",
  maxWidth: 920,
  "@media": {
    [breakpoints["2xl"]]: {
      maxWidth: 880,
    },
    [breakpoints["xl"]]: {
      maxWidth: BOX_WIDTH.xl,
    },
    [breakpoints["lg"]]: {
      maxWidth: BOX_WIDTH.lg,
    },
    [breakpoints["md"]]: {
      maxWidth: BOX_WIDTH.md,
    },
    [breakpoints["sm"]]: {
      gap: 0,
      backdropFilter: "blur(8px)",
      margin: "0 2vw",
      borderRadius: 36,
      backgroundColor: "rgba(255, 255, 255, .12)",
      padding: "0 2vw 28px",
    },
  },
});
export const worksItem = style({
  position: "relative",
  isolation: "isolate",
  display: "flex",
  flexDirection: "column-reverse",
  alignItems: "center",
  justifyContent: "start",
  gap: 12,
  borderRadius: 36,
  padding: "44px 2vw",
  selectors: {
    "&::before": {
      position: "absolute",
      zIndex: 0,
      borderRadius: "inherit",
      backgroundColor: "rgba(255, 255, 255, 0.12)",
      backdropFilter: "blur(8px)",
      pointerEvents: "none",
      content: '""',
      inset: 0,
    },
  },
  "@media": {
    [breakpoints["xl"]]: {
      gap: 8,
      padding: "40px 2vw",
    },
    [breakpoints["lg"]]: {
      padding: "38px 2vw",
    },
    [breakpoints["md"]]: {
      padding: "36px 2vw",
    },
    [breakpoints["sm"]]: {
      padding: "24px 2vw 0px",
      selectors: {
        "&::before": {
          backgroundColor: "transparent",
          backdropFilter: "none",
        },
      },
    },
  },
});
export const worksTextBox = style({
  display: "flex",
  flexDirection: "column-reverse",
  alignItems: "center",
  gap: 4,
  position: "relative",
  zIndex: 0,
  pointerEvents: "none",
  "@media": {
    [breakpoints["xl"]]: {
      gap: 2,
    },
  },
});
export const worksName = style({
  textAlign: "center",
  lineHeight: "1.4em",
  letterSpacing: "-0.06em",
  color: vars.color.text,
  fontSize: "1.7rem",
  fontWeight: 400,
  "@media": {
    [breakpoints["lg"]]: {
      fontSize: "1.6rem",
    },
    [breakpoints["md"]]: {
      fontSize: "1.5rem",
    },
    [breakpoints["sm"]]: {
      fontSize: "1.2rem",
    },
  },
});
export const worksNameSpan = style({
  display: "block",
});
export const worksCategory = style({
  letterSpacing: "-0.06em",
  color: vars.color.text,
  fontSize: "1rem",
  fontWeight: 300,
  "@media": {
    [breakpoints["sm"]]: {
      fontSize: "0.9rem",
    },
  },
});
const WORKS_ICON_HOVER_SCALE = 1.05;

export const worksLink = style({
  position: "relative",
  zIndex: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  width: 160,
  height: 160,
  "@media": {
    [breakpoints["2xl"]]: {
      width: 150,
      height: 150,
    },
    [breakpoints["xl"]]: {
      width: 120,
      height: 120,
    },
    [breakpoints["sm"]]: {
      width: 80,
      height: 80,
    },
  },
});
export const worksLinkHovered = style({});
export const worksIconFrame = style({
  display: "block",
  transformOrigin: "center center",
  backfaceVisibility: "hidden",
  pointerEvents: "none",
  width: `${100 / WORKS_ICON_HOVER_SCALE}%`,
  height: `${100 / WORKS_ICON_HOVER_SCALE}%`,
  transition: `transform ${DURATION_S}s cubic-bezier(0.4, 0, 1, 1)`,
  selectors: {
    [`${worksLinkHovered} &`]: {
      transform: `scale(${WORKS_ICON_HOVER_SCALE})`,
    },
  },
});
globalStyle(`${worksIconFrame} *`, {
  pointerEvents: "none",
});
export const worksIcon = style({
  display: "block",
  pointerEvents: "none",
  width: "100%",
  height: "100%",
  userSelect: "none",
});

export const contactSection = style({
  paddingBottom: "clamp(60px, 8vw, 160px)",
});

export const address = style({
  margin: "0 auto",
  maxWidth: 920,
  "@media": {
    [breakpoints["2xl"]]: {
      maxWidth: 880,
    },
    [breakpoints["xl"]]: {
      maxWidth: BOX_WIDTH.xl,
    },
    [breakpoints["lg"]]: {
      maxWidth: BOX_WIDTH.lg,
    },
    [breakpoints["md"]]: {
      maxWidth: BOX_WIDTH.md,
    },
    [breakpoints["sm"]]: {
      margin: "0 2vw",
    },
  },
});
export const emailButton = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 22,
  border: "none",
  borderRadius: 36,
  backgroundColor: vars.color.text,
  cursor: "pointer",
  padding: "200px 8vw",
  width: "100%",
  textAlign: "center",
  textDecoration: "none",
  color: "#130059",
  fontSize: "2.8rem",
  fontWeight: 300,
  "@media": {
    [breakpoints["2xl"]]: {
      gap: 20,
      fontSize: "2.6rem",
    },
    [breakpoints["xl"]]: {
      gap: 18,
      padding: "180px 8vw",
      fontSize: "2.5rem",
    },
    [breakpoints["lg"]]: {
      gap: 16,
      fontSize: "2.3rem",
    },
    [breakpoints["md"]]: {
      gap: 14,
      fontSize: "1.8rem",
    },
    [breakpoints["sm"]]: {
      gap: 12,
      padding: "144px 2vw",
      fontSize: "1.6rem",
    },
  },
});
export const emailButtonHover = style({
  fontSize: "2rem",
  "@media": {
    [breakpoints["2xl"]]: {
      fontSize: "1.9rem",
    },
    [breakpoints["xl"]]: {
      fontSize: "1.8rem",
    },
    [breakpoints["lg"]]: {
      fontSize: "1.7rem",
    },
    [breakpoints["md"]]: {
      fontSize: "1.5rem",
    },
    [breakpoints["sm"]]: {
      fontSize: "1.2rem",
    },
  },
});
export const emailTextBox = style({
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backfaceVisibility: "hidden",
  transformStyle: "preserve-3d",
  width: "12.8em",
  height: 40,
  overflowY: "hidden",
  letterSpacing: "-0.01em",
});
export const emailTextRotateTop = style({
  position: "absolute",
  top: 0,
  bottom: 0,
  display: "flex",
  placeItems: "center",
  transform: "rotateX(0deg)",
  transformOrigin: "top",
  transition: `transform ${DURATION_M}s cubic-bezier(0.78, 0.13, 0.14, 0.84)`,
  selectors: {
    [`${emailButton}:hover &`]: {
      transform: "rotateX(-90deg) translateZ(-60px)",
    },
  },
});
export const emailTextRotateFront = style({
  position: "absolute",
  top: 0,
  bottom: 0,
  display: "flex",
  placeItems: "center",
  transform: "rotateX(-90deg) translateZ(60px)",
  transformOrigin: "bottom",
  transition: `transform ${DURATION_M}s cubic-bezier(0.78, 0.13, 0.14, 0.84)`,
  selectors: {
    [`${emailButton}:hover &`]: {
      transform: "rotateX(0deg) translateZ(0px)",
    },
  },
});
