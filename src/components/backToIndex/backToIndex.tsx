"use client";

import { roboto } from "@/app/fonts";
import { isOpenHamburgerMenuAtom } from "@/atoms/isOpenHamburgerMenuAtom";
import {
  backToIndex,
  backToIndexBox,
  backToIndexBoxHidden,
} from "@/components/backToIndex/backToIndex.css";
import { gsapAnimation } from "@/lib/gsap";
import { haptic } from "@/lib/haptic";
import { playSfxClick } from "@/lib/playSfx";
import clsx from "clsx";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useAtomValue } from "jotai";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function BackToIndex() {
  const backToIndexRef = useRef(null);
  const isOpenHamburgerMenu = useAtomValue(isOpenHamburgerMenuAtom);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsapAnimation.inview(backToIndexRef);
  }, []);

  return (
    <>
      <div
        ref={backToIndexRef}
        className={clsx(backToIndexBox, isOpenHamburgerMenu && backToIndexBoxHidden)}
      >
        <Link
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
