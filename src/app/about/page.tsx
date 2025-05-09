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
  nameBox,
  nameEn,
  nameJa,
  occupation,
  photo,
  photoBox,
  profileLinkBox,
  profileLinkIcon,
  year,
} from "@/app/about/page.css";
import { isOpenHamburgerMenuAtom } from "@/atoms/isOpenHamburgerMenuAtom";
import AudioPlayer from "@/components/audio/audioPlayer";
import BackToIndex from "@/components/backToIndex/backToIndex";
import Footer from "@/components/footer/footer";
import Glass from "@/components/glass/glass";
import HamburgerMenu from "@/components/hamburgerMenu/hamburgerMenu";
import MobileNav from "@/components/mobileNav/mobileNav";
import Nav from "@/components/nav/nav";
import Object1 from "@/components/object/object1";
import Object2 from "@/components/object/object2";
import Object3 from "@/components/object/object3";
import TextCircle from "@/components/textCircle/textCircle";
import { email, github } from "@/constants/constants";
import useSmoothScroll from "@/hooks/useSmoothScroll";
import { gsapAnimation } from "@/utils/gsap";
import clsx from "clsx";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useAtomValue } from "jotai";
import { Cormorant, Noto_Serif_JP } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
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
  const occupationRef = useRef(null);
  const descriptionRef = useRef(null);
  const historyRef = useRef(null);

  const isOpenHamburgerMenu = useAtomValue(isOpenHamburgerMenuAtom);

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
            <AudioPlayer />
            <TextCircle />
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
                  <Image
                    src={"/photo.webp"}
                    width={320}
                    height={480}
                    alt="長谷川達也"
                    className={photo}
                    priority
                    view-transition-name={"photo"}
                  />
                </div>
              </Tilt>
            </div>
            <div className={clsx(profileLinkBox)}>
              <Link href={github} target="_brank">
                <FaGithub className={clsx(profileLinkIcon)} />
              </Link>
              <Link href={`mailto:${email}`} target="_brank">
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
              趣味は読書と散歩とランニング。有酸素運動で汗を流すのが日課。
              <br />
              デザインとエンジニアリングに理解を深め、
              <br />
              自由自在にものづくりができることを目指して、
              <br />
              日々学習に励んでいます。
            </p>
            <dl ref={historyRef} className={clsx(history)}>
              <div>
                <dt className={clsx(year)}>2020-2024</dt>
                <dd className={clsx(event)}>ECCコンピュータ専門学校(中退)</dd>
              </div>
              <div>
                <dt className={clsx(year)}>2022-</dt>
                <dd className={clsx(event)}>株式会社Univearth(業務委託)</dd>
              </div>
              <div>
                <dt className={clsx(year)}>2025-</dt>
                <dd className={clsx(event)}>放送大学(在学中)</dd>
              </div>
            </dl>
          </main>
          <Footer />
        </Glass>
        <BackToIndex />
      </div>
      <Object1 />
      <Object2 />
      <Object3 />
    </>
  );
}
