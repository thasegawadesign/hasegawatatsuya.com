import gsap from "gsap";
import { MutableRefObject } from "react";

export const gsapAnimation = {
  scale(ref: MutableRefObject<null>) {
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
      }
    );
  },
  inview(ref: MutableRefObject<null>) {
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
      }
    );
  },
  parallaxLight(ref: MutableRefObject<null>) {
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
  parallax(ref: MutableRefObject<null>) {
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
  parallaxDeep(ref: MutableRefObject<null>) {
    gsap.to(ref.current, {
      y: -100,
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
