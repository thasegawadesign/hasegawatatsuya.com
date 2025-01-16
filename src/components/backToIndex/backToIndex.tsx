"use client";

import {
  backToIndex,
  backToIndexBox,
} from "@/components/backToIndex/backToIndex.css";
import clsx from "clsx";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Roboto } from "next/font/google";
import Link from "next/link";
import { useEffect, useRef } from "react";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100"],
});

export default function BackToIndex() {
  const backToIndexRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      backToIndexRef.current,
      { opacity: 0, rotation: -2 },
      {
        opacity: 1,
        rotation: 0,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: backToIndexRef.current,
          start: "top 80%",
          end: "top 50%",
          scrub: false,
          once: true,
        },
      }
    );
  }, []);

  return (
    <>
      <div className={clsx(backToIndexBox)}>
        <Link
          ref={backToIndexRef}
          href={"/"}
          className={(roboto.className, backToIndex)}
        >
          Back to Index
        </Link>
      </div>
    </>
  );
}
