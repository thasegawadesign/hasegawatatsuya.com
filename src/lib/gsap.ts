import { PARALLAX_ENABLE_MIN_WIDTH } from "@/constants/constants";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MutableRefObject } from "react";

type GsapRef = MutableRefObject<HTMLElement | null>;

const INVIEW_RISE_PX = 40;
const INVIEW_STAGGER_S = 0.12;

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
      { opacity: 0, rotation: -2, y: INVIEW_RISE_PX },
      {
        opacity: 1,
        rotation: 0,
        y: 0,
        ...(clearTransform && { clearProps: "transform" }),
        duration: 1.5,
        ease: "power2.out",
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
      if (!items?.length) return;
      gsap.set(items, { opacity: 0, rotation: -2, y: INVIEW_RISE_PX });
      ScrollTrigger.batch(items, {
        start: `top-=${INVIEW_RISE_PX} 80%`,
        once: true,
        onEnter: (batch) => {
          gsap.to(batch, {
            opacity: 1,
            rotation: 0,
            y: 0,
            duration: 1.5,
            ease: "power2.out",
            stagger: INVIEW_STAGGER_S,
          });
        },
      });
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
