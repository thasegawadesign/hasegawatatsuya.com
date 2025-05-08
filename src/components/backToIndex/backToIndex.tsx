"use client";

import {
  backToIndex,
  backToIndexBox,
} from "@/components/backToIndex/backToIndex.css";
import { gsapAnimation } from "@/utils/gsap";
import clsx from "clsx";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Roboto } from "next/font/google";
import Link from "next/link";
import { useEffect, useRef } from "react";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["200"],
});

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
        >
          Back to Index
        </Link>
      </div>
    </>
  );
}
