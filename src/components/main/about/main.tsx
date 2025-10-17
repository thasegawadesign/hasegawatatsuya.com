"use client";

import { cormorant, notoSerifJP } from "@/app/fonts";
import {
  aboutHero,
  description,
  event,
  history,
  line,
  main,
  motionDiv,
  nameBox,
  nameEn,
  nameJa,
  occupation,
  photo,
  photoBox,
  photoContainer,
  profileLinkBox,
  profileLinkIcon,
  tilt,
  year,
} from "@/components/main/about/main.css";
import { EMAIL, GITHUB, NOTE, X } from "@/constants/constants";
import { gsapAnimation } from "@/utils/gsap";
import clsx from "clsx";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import Tilt from "react-parallax-tilt";

export default function Main() {
  const photoContainerRef = useRef(null);
  const occupationRef = useRef(null);
  const descriptionRef = useRef(null);
  const historyRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: photoContainerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-40px", "40px"]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsapAnimation.inview(occupationRef);
    gsapAnimation.inview(descriptionRef);
    gsapAnimation.inview(historyRef);
  }, []);

  return (
    <>
      <main className={clsx(main)}>
        <div className={clsx(aboutHero)}>
          <h1 className={nameBox}>
            <span className={clsx(notoSerifJP.className, nameJa)}>
              ハセガワ タツヤ
            </span>
            <span className={clsx(cormorant.className, nameEn)}>
              Tatsuya Hasegawa
            </span>
          </h1>
          <Tilt
            tiltMaxAngleX={3}
            tiltMaxAngleY={3}
            perspective={1000}
            scale={1.02}
            transitionSpeed={1000}
            reset={true}
            className={clsx(tilt)}
          >
            <div className={clsx(photoBox)}>
              <div ref={photoContainerRef} className={clsx(photoContainer)}>
                <motion.div style={{ y }} className={clsx(motionDiv)}>
                  <Image
                    src={"/photo.avif"}
                    width={320}
                    height={480}
                    alt="長谷川達也"
                    className={photo}
                    priority
                    view-transition-name={"photo"}
                  />
                </motion.div>
              </div>
            </div>
          </Tilt>
        </div>
        <div className={clsx(profileLinkBox)}>
          <Link href={GITHUB} aria-label="GitHub" target="_brank">
            <FaGithub className={clsx(profileLinkIcon)} />
          </Link>
          <Link href={X} aria-label="X" target="_brank">
            <FaXTwitter className={clsx(profileLinkIcon)} />
          </Link>
          <Link href={NOTE} aria-label="note" target="_brank">
            <Image
              src="/icons/note-icon.svg"
              width={28}
              height={28}
              alt="note"
              className={clsx(profileLinkIcon)}
            />
          </Link>
          <Link href={`mailto:${EMAIL}`} aria-label="Email" target="_brank">
            <IoMdMail className={clsx(profileLinkIcon)} />
          </Link>
        </div>
        <div className={clsx(line)}></div>
        <p
          ref={occupationRef}
          className={clsx(cormorant.className, occupation)}
        >
          Web Design,
          <br />
          Frontend Development
        </p>
        <p ref={descriptionRef} className={clsx(description)}>
          2001年生まれ、放送大学在学中。
          <br />
          趣味は散歩。
          <br />
          デザインと実装の解像度を高め、
          <br />
          有用で美しいものが
          <br />
          「自在」につくれるようになることを目指して、
          <br />
          Webについて勉強しています。
          <br />
          クリエイティブワーク、
          <br />
          モノづくりの達人が目標です。
        </p>
        <dl ref={historyRef} className={clsx(history)}>
          <div>
            <dt className={clsx(year)}>2020–2024</dt>
            <dd className={clsx(event)}>ECCコンピュータ専門学校（中退）</dd>
          </div>
          <div>
            <dt className={clsx(year)}>2022–現在</dt>
            <dd className={clsx(event)}>株式会社Univearth（業務委託）</dd>
          </div>
          <div>
            <dt className={clsx(year)}>2025–現在</dt>
            <dd className={clsx(event)}>放送大学（在学中）</dd>
          </div>
        </dl>
      </main>
    </>
  );
}
