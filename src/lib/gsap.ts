import { PARALLAX_ENABLE_MIN_WIDTH } from "@/constants/constants";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MutableRefObject } from "react";

type GsapRef = MutableRefObject<HTMLElement | null>;

const INVIEW_RISE_PX = 40;
const INVIEW_STAGGER_S = 0.12;
// GSAP は受け取った vars を書き換える
const INVIEW_FROM = { opacity: 0, rotation: -2, y: INVIEW_RISE_PX };
const INVIEW_TO = { opacity: 1, rotation: 0, y: 0, duration: 1.5, ease: "power2.out" };

function layoutTop(el: HTMLElement) {
  let top = 0;
  for (let node: HTMLElement | null = el; node; node = node.offsetParent as HTMLElement | null) {
    top += node.offsetTop;
  }
  return top;
}

function staggerIn(items: NodeListOf<HTMLElement>) {
  gsap.set(items, { ...INVIEW_FROM });
  ScrollTrigger.batch(items, {
    // 枠の回転が乗ると、同じ行でも getBoundingClientRect の top が左右でずれる
    start: (self) => layoutTop(self.trigger as HTMLElement) - window.innerHeight * 0.8,
    once: true,
    onEnter: (batch) => {
      // ScrollTrigger はスクロール位置が戻った更新で、トリガーを逆順に処理する
      const ordered = [...batch].sort((a, b) =>
        a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1,
      );
      gsap.to(ordered, { ...INVIEW_TO, stagger: INVIEW_STAGGER_S });
    },
  });
}

export const gsapAnimation = {
  scale(ref: GsapRef) {
    gsap.fromTo(
      ref.current,
      {
        opacity: 0,
        scale: 0.98,
        transformOrigin: "center",
      },
      {
        opacity: 1,
        scale: 1,
        duration: 1.5,
        ease: "power2.out",
      },
    );
  },
  inview(ref: GsapRef, { clearTransform = false }: { clearTransform?: boolean } = {}) {
    gsap.fromTo(
      ref.current,
      { ...INVIEW_FROM },
      {
        ...INVIEW_TO,
        ...(clearTransform && { clearProps: "transform" }),
        scrollTrigger: {
          trigger: ref.current,
          // ScrollTrigger は transform 後の位置で start を測る
          start: `top-=${INVIEW_RISE_PX} 80%`,
          end: "top 50%",
          scrub: false,
          once: true,
        },
      },
    );
  },
  inviewList(boxRef: GsapRef) {
    const mm = gsap.matchMedia();
    // styles の breakpoints.sm と同じ幅
    mm.add("(max-width: 639px)", () => {
      gsapAnimation.inview(boxRef);
    });
    mm.add("all", () => {
      const items = boxRef.current?.querySelectorAll<HTMLElement>(":scope > section");
      if (items?.length) staggerIn(items);
    });
    return mm;
  },
  parallaxLight(ref: GsapRef) {
    gsap.to(ref.current, {
      y: -20,
      ease: "none",
      scrollTrigger: {
        trigger: ref.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  },
  parallax(ref: GsapRef) {
    gsap.to(ref.current, {
      y: -40,
      ease: "none",
      scrollTrigger: {
        trigger: ref.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  },
  parallaxRange(triggerRef: GsapRef, targetRef: GsapRef, distance: number) {
    const mm = gsap.matchMedia();
    mm.add(`(min-width: ${PARALLAX_ENABLE_MIN_WIDTH + 1}px)`, () => {
      gsap.fromTo(
        targetRef.current,
        { y: -distance },
        {
          y: distance,
          ease: "none",
          scrollTrigger: {
            trigger: triggerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        },
      );
    });
    return mm;
  },
  parallaxDeep(ref: GsapRef) {
    gsap.to(ref.current, {
      y: -120,
      ease: "none",
      scrollTrigger: {
        trigger: ref.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  },
};
