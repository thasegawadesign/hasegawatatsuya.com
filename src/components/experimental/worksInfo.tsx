"use client";

import { cormorant, roboto } from "@/app/fonts";
import {
  container,
  hgroupHeading,
  hgroupHeadingEn,
  hgroupHeadingJa,
  worksDd,
  worksDl,
  worksDlItem,
  worksDt,
  worksImage,
  worksLink,
  worksRole,
} from "@/components/experimental/worksInfo.css";
import { PARALLAX_ENABLE_MIN_WIDTH } from "@/constants/constants";
import { gsapAnimation } from "@/lib/gsap";
import { haptic } from "@/lib/haptic";
import { useWindowWidth } from "@react-hook/window-size";
import clsx from "clsx";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useMemo, useRef } from "react";

interface Props {
  readonly nameJa: string;
  readonly nameEn: string;
  readonly nameJaNode?: React.ReactNode;
  readonly nameEnNode?: React.ReactNode;
  readonly imageSrc: string;
  readonly imageWidth: number;
  readonly imageHeight: number;
  readonly what: string | React.ReactNode;
  readonly why: string | React.ReactNode;
  readonly how: string | React.ReactNode;
  readonly role: string | React.ReactNode;
  readonly date: string | React.ReactNode;
  readonly DemoURL?: string;
  readonly BuyURL?: string;
}

export default function WorksInfo(props: Props) {
  const {
    nameJa,
    nameEn,
    nameJaNode,
    nameEnNode,
    imageSrc,
    imageWidth,
    imageHeight,
    what,
    why,
    how,
    role,
    date,
    DemoURL,
    BuyURL,
  } = props;

  const getUrlFontSize = (url: string) => {
    const length = url.length;

    if (length > 80) return "clamp(0.7rem, 1.0vw, 1.7rem)";
    if (length > 60) return "clamp(0.8rem, 1.16vw, 1.8rem)";
    if (length > 40) return "clamp(0.9rem, 1.2vw, 2.0rem)";

    return "clamp(1.6rem, 1.4vw, 2.3rem)";
  };

  type LinkStyle = React.CSSProperties & {
    "--link-underline-top"?: string;
  };
  const getUrlLinkStyle = (url: string): LinkStyle => ({
    fontSize: getUrlFontSize(url),
    "--link-underline-top": getUrlUnderlineTop(url),
  });

  const getUrlUnderlineTop = (url: string) => {
    const length = url.length;

    if (length > 80) return "clamp(0.8rem, 0.96vw, 1.6rem)";
    if (length > 60) return "clamp(1.0rem, 1.0vw, 1.8rem)";
    if (length > 40) return "clamp(1.2rem, 1.2vw, 2.0rem)";

    return "clamp(1.6rem, 1.36vw, 3rem)";
  };

  const width = useWindowWidth();

  const containerRef = useRef(null);
  const hgroupRef = useRef(null);
  const worksWhatRef = useRef(null);
  const worksWhyRef = useRef(null);
  const worksHowRef = useRef(null);
  const worksRoleRef = useRef(null);
  const worksTimeRef = useRef(null);
  const worksDemoURLRef = useRef(null);
  const worksBuyURLRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const yRange = useMemo(
    () =>
      width <= PARALLAX_ENABLE_MIN_WIDTH ? ["0px", "0px"] : ["-80px", "80px"],
    [width]
  );
  const y = useTransform(scrollYProgress, [0, 1], yRange);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsapAnimation.inview(hgroupRef);
    gsapAnimation.inview(worksWhatRef);
    gsapAnimation.inview(worksWhyRef);
    gsapAnimation.inview(worksHowRef);
    gsapAnimation.inview(worksRoleRef);
    gsapAnimation.inview(worksTimeRef);
    gsapAnimation.inview(worksDemoURLRef);
    gsapAnimation.inview(worksBuyURLRef);
  }, []);

  return (
    <>
      <div ref={containerRef} className={clsx(container)}>
        <motion.div style={{ y }}>
          <Image
            src={imageSrc}
            width={imageWidth}
            height={imageHeight}
            alt={nameJa}
            className={clsx(worksImage)}
            priority
          />
        </motion.div>
      </div>
      <hgroup ref={hgroupRef} className={clsx(hgroupHeading)}>
        <h1 className={clsx(cormorant.className, hgroupHeadingEn)}>
          {nameEnNode ? nameEnNode : nameEn}
        </h1>
        <p className={clsx(hgroupHeadingJa)}>
          {nameJaNode ? nameJaNode : nameJa}
        </p>
      </hgroup>
      <dl className={clsx(worksDl)}>
        <div ref={worksWhatRef} className={clsx(worksDlItem)}>
          <dt className={clsx(roboto.className, worksDt)}>What :</dt>
          <dd className={clsx(worksDd)}>{what}</dd>
        </div>
        <div ref={worksWhyRef} className={clsx(worksDlItem)}>
          <dt className={clsx(roboto.className, worksDt)}>Why :</dt>
          <dd className={clsx(worksDd)}>{why}</dd>
        </div>
        <div ref={worksHowRef} className={clsx(worksDlItem)}>
          <dt className={clsx(roboto.className, worksDt)}>How :</dt>
          <dd className={clsx(worksDd)}>{how}</dd>
        </div>
        <div ref={worksRoleRef} className={clsx(worksDlItem)}>
          <dt className={clsx(roboto.className, worksDt)}>Role :</dt>
          <dd className={clsx(cormorant.className, worksRole)}>{role}</dd>
        </div>
        <div ref={worksTimeRef} className={clsx(worksDlItem)}>
          <dt className={clsx(roboto.className, worksDt)}>Date :</dt>
          <dd className={clsx(roboto.className, worksDd)}>{date}</dd>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "clamp(48px, 6.0vw, 72px)",
          }}
        >
          <div ref={worksDemoURLRef} className={clsx(worksDlItem)}>
            {DemoURL && (
              <>
                <dt className={clsx(roboto.className, worksDt)}>Demo :</dt>
                <dd className={clsx(worksDd)}>
                  <Link
                    href={DemoURL}
                    className={clsx(roboto.className, worksLink)}
                    style={getUrlLinkStyle(DemoURL)}
                    rel="noopener noreferrer"
                    target="_blank"
                    onClick={() => haptic()}
                  >
                    {DemoURL}
                  </Link>
                </dd>
              </>
            )}
          </div>
          <div ref={worksBuyURLRef} className={clsx(worksDlItem)}>
            {BuyURL && (
              <>
                <dt className={clsx(roboto.className, worksDt)}>Buy :</dt>
                <dd className={clsx(worksDd)}>
                  <Link
                    href={BuyURL}
                    className={clsx(roboto.className, worksLink)}
                    style={getUrlLinkStyle(BuyURL)}
                    rel="noopener noreferrer"
                    target="_blank"
                    onClick={() => haptic()}
                  >
                    {BuyURL}
                  </Link>
                </dd>
              </>
            )}
          </div>
        </div>
      </dl>
    </>
  );
}
