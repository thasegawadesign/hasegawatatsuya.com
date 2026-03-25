"use client";

import { roboto } from "@/app/fonts";
import {
  backToIndex,
  backToIndexBox,
} from "@/components/backToIndex/backToIndex.css";
import { gsapAnimation } from "@/lib/gsap";
import { haptic } from "@/lib/haptic";
import { playSfxClick } from "@/lib/playSfx";
import clsx from "clsx";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function BackToIndex() {
  const backToIndexRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsapAnimation.inview(backToIndexRef);
  }, []);

  return (
    <>
      <div className={clsx(backToIndexBox)}>
        <Link
          ref={backToIndexRef}
          href={"/"}
          className={clsx(roboto.className, backToIndex)}
          onClick={() => {
            playSfxClick();
            haptic();
          }}
        >
          Back to Index
        </Link>
      </div>
    </>
  );
}
