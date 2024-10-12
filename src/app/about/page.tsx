"use client";

import {
  aboutHero,
  backToIndex,
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
import AudioButton from "@/components/audio/audioButton";
import Footer from "@/components/footer/footer";
import Glass from "@/components/glass/glass";
import HamburgerMenu from "@/components/hamburgerMenu/hamburgerMenu";
import MobileNav from "@/components/mobileNav/mobileNav";
import Nav from "@/components/nav/nav";
import Object1 from "@/components/object/object1";
import Object2 from "@/components/object/object2";
import Object3 from "@/components/object/object3";
import TextCircle from "@/components/textCircle/textCircle";
import { useWindowWidth } from "@react-hook/window-size";
import clsx from "clsx";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useAtomValue } from "jotai";
import { debounce } from "lodash";
import { Cormorant, Noto_Serif_JP, Roboto } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import Tilt from "react-parallax-tilt";

const notoSerifJP = Noto_Serif_JP({
  subsets: ["latin"],
  weight: "400",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400"],
});

const cormorant = Cormorant({
  subsets: ["latin"],
  weight: ["300", "400"],
});

export default function About() {
  const mainRef = useRef(null);
  const occupationRef = useRef(null);
  const descriptionRef = useRef(null);
  const historyRef = useRef(null);

  const isOpenHamburgerMenu = useAtomValue(isOpenHamburgerMenuAtom);

  const [lastScrollTop, setLastScrollTop] = useState(0);
  const onlyWidth = useWindowWidth();

  useEffect(() => {
    const handleScroll = debounce(() => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const rotationAmount = scrollTop > lastScrollTop ? 0.4 : -0.28;
      setLastScrollTop(scrollTop);

      gsap.to(mainRef.current, {
        rotation: onlyWidth > 640 ? rotationAmount : 0,
        duration: 0.2,
        ease: "power2.out",
      });

      gsap.to(mainRef.current, {
        rotation: 0,
        duration: 0.6,
        ease: "power2.out",
        delay: 0.2,
      });
    }, 10);

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop, onlyWidth]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      occupationRef.current,
      { opacity: 0, rotation: -2 },
      {
        opacity: 1,
        rotation: 0,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: occupationRef.current,
          start: "top 80%",
          end: "top 50%",
          scrub: false,
          once: true,
        },
      }
    );
    gsap.fromTo(
      descriptionRef.current,
      { opacity: 0, rotation: -2 },
      {
        opacity: 1,
        rotation: 0,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: descriptionRef.current,
          start: "top 80%",
          end: "top 50%",
          scrub: false,
          once: true,
        },
      }
    );
    gsap.fromTo(
      historyRef.current,
      { opacity: 0, rotation: -2 },
      {
        opacity: 1,
        rotation: 0,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: historyRef.current,
          start: "top 80%",
          end: "top 50%",
          scrub: false,
          once: true,
        },
      }
    );
  }, []);

  return (
    <>
      <div className={clsx(glassBox)}>
        <Glass>
          <header className={clsx(header)}>
            <Nav />
            <HamburgerMenu />
            {isOpenHamburgerMenu && <MobileNav />}
            <AudioButton />
            <TextCircle />
          </header>
          <main ref={mainRef} className={clsx(main)}>
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
                    view-transition-name={"photo"}
                  />
                </div>
              </Tilt>
            </div>
            <div className={clsx(profileLinkBox)}>
              <Link
                href={"https://github.com/thasegawakaihatsu"}
                target="_brank"
              >
                <FaGithub className={clsx(profileLinkIcon)} />
              </Link>
              <Link
                href={"mailto:hasegawatatsuya206@gmail.com"}
                target="_brank"
              >
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
              2001年生まれ、ECCコンピュータ専門学校中退。
              <br />
              趣味は散歩とランニング。
              <br />
              有酸素運動で汗を流すのが日課。
              <br />
              Webの豊かな表現を身につけるために 日々学習に取り組んでいます。
            </p>
            <dl ref={historyRef} className={clsx(history)}>
              <div>
                <dt className={clsx(year)}>2020-2024</dt>
                <dd className={clsx(event)}>ECCコンピュータ専門学校</dd>
              </div>
              <div>
                <dt className={clsx(year)}>2022-</dt>
                <dd className={clsx(event)}>株式会社Univearth</dd>
              </div>
            </dl>
          </main>
          <Footer />
        </Glass>
        <Link href={"/"} className={(roboto.className, backToIndex)}>
          Back to Index
        </Link>
      </div>
      <Object1 />
      <Object2 />
      <Object3 />
    </>
  );
}
