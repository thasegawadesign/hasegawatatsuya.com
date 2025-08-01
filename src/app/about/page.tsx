"use client";

import {
  aboutHero,
  description,
  event,
  glassBox,
  header,
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
  year,
} from "@/app/about/page.css";
import { isOpenHamburgerMenuAtom } from "@/atoms/isOpenHamburgerMenuAtom";
import BackToIndex from "@/components/backToIndex/backToIndex";
import Footer from "@/components/footer/footer";
import Glass from "@/components/glass/glass";
import HamburgerMenu from "@/components/hamburgerMenu/hamburgerMenu";
import MobileNav from "@/components/mobileNav/mobileNav";
import Nav from "@/components/nav/nav";
import TextCircle from "@/components/textCircle/textCircle";
import {
  EMAIL,
  GITHUB,
  PARALLAX_ENABLE_MIN_WIDTH,
} from "@/constants/constants";
import useSmoothScroll from "@/hooks/useSmoothScroll";
import { gsapAnimation } from "@/utils/gsap";
import { useWindowWidth } from "@react-hook/window-size";
import clsx from "clsx";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useAtomValue } from "jotai";
import { motion, useScroll, useTransform } from "motion/react";
import { Cormorant, Noto_Serif_JP } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef } from "react";
import { FaGithub } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import Tilt from "react-parallax-tilt";

const notoSerifJP = Noto_Serif_JP({
  subsets: ["latin"],
  weight: "400",
});

const cormorant = Cormorant({
  subsets: ["latin"],
  weight: ["300", "400"],
});

export default function About() {
  const photoContainerRef = useRef(null);
  const occupationRef = useRef(null);
  const descriptionRef = useRef(null);
  const historyRef = useRef(null);

  const isOpenHamburgerMenu = useAtomValue(isOpenHamburgerMenuAtom);

  const width = useWindowWidth();

  const { scrollYProgress } = useScroll({
    target: photoContainerRef,
    offset: ["start end", "end start"],
  });

  const yRange = useMemo(
    () =>
      width <= PARALLAX_ENABLE_MIN_WIDTH ? ["0px", "0px"] : ["-40px", "40px"],
    [width]
  );
  const y = useTransform(scrollYProgress, [0, 1], yRange);

  useSmoothScroll();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsapAnimation.inview(occupationRef);
    gsapAnimation.inview(descriptionRef);
    gsapAnimation.inview(historyRef);
  }, []);

  return (
    <>
      <div className={clsx(glassBox)}>
        <Glass>
          <header className={clsx(header)}>
            <Nav />
            <HamburgerMenu />
            {isOpenHamburgerMenu && <MobileNav />}
            {!isOpenHamburgerMenu && <TextCircle />}
          </header>
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
              <Tilt reset={false}>
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
              <Link href={GITHUB} target="_brank">
                <FaGithub className={clsx(profileLinkIcon)} />
              </Link>
              <Link href={`mailto:${EMAIL}`} target="_brank">
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
              2001年生まれ, 放送大学在学中.
              <br />
              趣味は散歩.
              <br />
              デザインと実装の解像度を高め,
              <br />
              有用で美しいものが
              <br />
              「自在」につくれるようになることを目指して,
              <br />
              Webについて勉強しています.
              <br />
              ホームページ制作の達人を目指しています.
            </p>
            <dl ref={historyRef} className={clsx(history)}>
              <div>
                <dt className={clsx(year)}>2020–2024</dt>
                <dd className={clsx(event)}>ECCコンピュータ専門学校(中退)</dd>
              </div>
              <div>
                <dt className={clsx(year)}>2022–現在</dt>
                <dd className={clsx(event)}>株式会社Univearth(業務委託)</dd>
              </div>
              <div>
                <dt className={clsx(year)}>2025–現在</dt>
                <dd className={clsx(event)}>放送大学(在学中)</dd>
              </div>
            </dl>
          </main>
          <Footer />
        </Glass>
        <BackToIndex />
      </div>
    </>
  );
}
