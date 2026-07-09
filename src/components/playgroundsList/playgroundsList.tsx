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
import { PLAYGROUNDS } from "@/constants/playgrounds";
import { gsapAnimation } from "@/lib/gsap";
import { haptic } from "@/lib/haptic";
import { playSfxClick } from "@/lib/playSfx";
import { preloadNextPageMainVisual } from "@/lib/preloadNextPageMainVisual";
import clsx from "clsx";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

export default function PlaygroundsList() {
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    boxRef.current?.querySelectorAll(":scope > section").forEach((el) => {
      gsapAnimation.inview({ current: el as HTMLElement });
    });
  }, []);

  return (
    <div className={clsx(worksBox)} ref={boxRef}>
      {PLAYGROUNDS.map((playground) => {
        const useNameSpans = playground.useNameSpans ?? true;
        const ariaLabel = playground.external
          ? `${playground.nameLines.join(" ")}（新しいタブで開く）`
          : undefined;

        return (
          <section key={playground.id} className={clsx(worksItem)}>
            <div className={clsx(worksTextBox)}>
              <h3 id={playground.id} className={clsx(worksName)}>
                {useNameSpans
                  ? playground.nameLines.map((line) => (
                      <span key={line} className={clsx(worksNameSpan)}>
                        {line}
                      </span>
                    ))
                  : playground.nameLines[0]}
              </h3>
              <p className={clsx(worksCategory)}>{playground.category}</p>
            </div>
            <WorksIconLink
              href={playground.href}
              aria-label={ariaLabel}
              aria-labelledby={playground.external ? undefined : playground.id}
              iconSrc={playground.iconSrc}
              rel="noopener noreferrer"
              target={playground.external ? "_blank" : undefined}
              onMouseEnter={
                playground.mockupSrc
                  ? () =>
                      preloadNextPageMainVisual(
                        playground.mockupSrc!,
                        playground.mockupWidth!,
                        playground.mockupHeight!,
                      )
                  : undefined
              }
              onTouchStart={
                playground.mockupSrc
                  ? () =>
                      preloadNextPageMainVisual(
                        playground.mockupSrc!,
                        playground.mockupWidth!,
                        playground.mockupHeight!,
                      )
                  : undefined
              }
              onFocus={
                playground.mockupSrc
                  ? () =>
                      preloadNextPageMainVisual(
                        playground.mockupSrc!,
                        playground.mockupWidth!,
                        playground.mockupHeight!,
                      )
                  : undefined
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
