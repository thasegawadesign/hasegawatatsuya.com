"use client";

import WorksIconLink from "@/components/worksIconLink/worksIconLink";
import {
  worksBox,
  worksCategory,
  worksItem,
  worksName,
  worksNameSpan,
  worksTextBox,
} from "@/components/main/home/main.css";
import { WORKS } from "@/constants/works";
import { gsapAnimation } from "@/lib/gsap";
import { haptic } from "@/lib/haptic";
import { playSfxClick } from "@/lib/playSfx";
import { preloadNextPageMainVisual } from "@/lib/preloadNextPageMainVisual";
import clsx from "clsx";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

export default function WorksList() {
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    boxRef.current?.querySelectorAll(":scope > section").forEach((el) => {
      gsapAnimation.inview({ current: el as HTMLElement });
    });
  }, []);

  return (
    <div className={clsx(worksBox)} ref={boxRef}>
      {WORKS.map((work) => {
        const useNameSpans = work.useNameSpans ?? true;

        return (
          <section key={work.id} className={clsx(worksItem)}>
            <div className={clsx(worksTextBox)}>
              <h3 id={work.id} className={clsx(worksName)}>
                {useNameSpans
                  ? work.nameLines.map((line) => (
                      <span key={line} className={clsx(worksNameSpan)}>
                        {line}
                      </span>
                    ))
                  : work.nameLines[0]}
              </h3>
              <p className={clsx(worksCategory)}>{work.category}</p>
            </div>
            <WorksIconLink
              href={work.href}
              aria-labelledby={work.id}
              iconSrc={work.iconSrc}
              onMouseEnter={() =>
                preloadNextPageMainVisual(work.mockupSrc, work.mockupWidth, work.mockupHeight)
              }
              onTouchStart={() =>
                preloadNextPageMainVisual(work.mockupSrc, work.mockupWidth, work.mockupHeight)
              }
              onFocus={() =>
                preloadNextPageMainVisual(work.mockupSrc, work.mockupWidth, work.mockupHeight)
              }
              onClick={() => {
                playSfxClick();
                haptic();
              }}
            />
          </section>
        );
      })}
    </div>
  );
}
