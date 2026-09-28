import { PARALLAX_ENABLE_MIN_WIDTH } from "@/constants/constants";
import gsap from "gsap";
import { MutableRefObject } from "react";

type GsapRef = MutableRefObject<HTMLElement | null>;

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
  inview(ref: GsapRef) {
    gsap.fromTo(
      ref.current,
      { opacity: 0, rotation: -2 },
      {
        opacity: 1,
        rotation: 0,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%",
          end: "top 50%",
          scrub: false,
          once: true,
        },
      },
    );
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
