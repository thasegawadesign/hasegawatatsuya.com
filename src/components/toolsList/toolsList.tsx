"use client";

import {
  worksBox,
  worksCategory,
  worksIcon,
  worksItem,
  worksLink,
  worksName,
  worksNameSpan,
  worksTextBox,
} from "@/components/main/home/main.css";
import { TOOLS } from "@/constants/tools";
import { gsapAnimation } from "@/lib/gsap";
import { haptic } from "@/lib/haptic";
import { playSfxClick } from "@/lib/playSfx";
import { preloadNextPageMainVisual } from "@/lib/preloadNextPageMainVisual";
import clsx from "clsx";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function ToolsList() {
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    boxRef.current?.querySelectorAll(":scope > section").forEach((el) => {
      gsapAnimation.inview({ current: el as HTMLElement });
    });
  }, []);

  return (
    <div className={clsx(worksBox)} ref={boxRef}>
      {TOOLS.map((tool) => {
        const useNameSpans = tool.useNameSpans ?? true;
        const toolName = tool.nameLines.join(" ");

        return (
          <section key={tool.id} className={clsx(worksItem)}>
            <div className={clsx(worksTextBox)}>
              <h3 id={tool.id} className={clsx(worksName)}>
                {useNameSpans
                  ? tool.nameLines.map((line) => (
                      <span key={line} className={clsx(worksNameSpan)}>
                        {line}
                      </span>
                    ))
                  : tool.nameLines[0]}
              </h3>
              <p className={clsx(worksCategory)}>{tool.category}</p>
            </div>
            <Link
              href={tool.href}
              aria-label={tool.external ? `${toolName}（新しいタブで開く）` : undefined}
              aria-labelledby={tool.external ? undefined : tool.id}
              className={clsx(worksLink)}
              rel={tool.external ? "noopener noreferrer" : undefined}
              target={tool.external ? "_blank" : undefined}
              onMouseEnter={
                tool.mockupSrc
                  ? () =>
                      preloadNextPageMainVisual(
                        tool.mockupSrc!,
                        tool.mockupWidth!,
                        tool.mockupHeight!,
                      )
                  : undefined
              }
              onTouchStart={
                tool.mockupSrc
                  ? () =>
                      preloadNextPageMainVisual(
                        tool.mockupSrc!,
                        tool.mockupWidth!,
                        tool.mockupHeight!,
                      )
                  : undefined
              }
              onFocus={
                tool.mockupSrc
                  ? () =>
                      preloadNextPageMainVisual(
                        tool.mockupSrc!,
                        tool.mockupWidth!,
                        tool.mockupHeight!,
                      )
                  : undefined
              }
              onClick={() => {
                playSfxClick();
                haptic();
              }}
            >
              <Image
                src={tool.iconSrc}
                width={160}
                height={160}
                className={clsx(worksIcon)}
                alt=""
              />
            </Link>
          </section>
        );
      })}
    </div>
  );
}
