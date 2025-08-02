"use client";

import {
  aboutSection,
  contactSection,
  contactWrapper,
  description,
  emailIcon,
  emailLink,
  emailTextBox,
  emailTextRotateFront,
  emailTextRotateTop,
  header,
  line,
  main,
  motionDiv,
  nameMainVisual,
  profileContent,
  profileImage,
  profileImageContainer,
  profileImageWrapper,
  profileLink,
  profileLinkBox,
  profileLinkIcon,
  profileMore,
  profileName,
  profileOccupation,
  profileSection,
  profileTextBox,
  sectionHeading,
  sectionHeadingContact,
  worksBox,
  worksCategory,
  worksIcon,
  worksItem,
  worksLink,
  worksName,
  worksNameSpan,
  worksSection,
  worksTextBox,
} from "@/app/page.css";
import clsx from "clsx";
import { Cormorant, Roboto } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

import { isOpenHamburgerMenuAtom } from "@/atoms/isOpenHamburgerMenuAtom";
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
import { useViewTransition } from "@/hooks/useViewTransition";
import { desktopBr, mobileBr } from "@/styles/styles.css";
import { gsapAnimation } from "@/utils/gsap";
import { useWindowWidth } from "@react-hook/window-size";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useAtomValue } from "jotai";
import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useMemo, useRef } from "react";

const cormorant = Cormorant({
  subsets: ["latin"],
  weight: ["500", "600"],
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400"],
});

export default function Home() {
  const nameMainVisualRef = useRef(null);
  const descriptionRef = useRef(null);
  const profileRef = useRef(null);
  const profileImageContainerRef = useRef(null);
  const worksItem1Ref = useRef(null);
  const worksItem2Ref = useRef(null);
  const worksItem3Ref = useRef(null);
  const worksItem4Ref = useRef(null);
  const worksItem5Ref = useRef(null);
  const contactWrapperRef = useRef(null);
  const contactRef = useRef(null);

  const isOpenHamburgerMenu = useAtomValue(isOpenHamburgerMenuAtom);

  const width = useWindowWidth();

  const { scrollYProgress } = useScroll({
    target: profileImageContainerRef,
    offset: ["start end", "end start"],
  });

  const yRange = useMemo(
    () =>
      width <= PARALLAX_ENABLE_MIN_WIDTH ? ["0px", "0px"] : ["-20px", "20px"],
    [width]
  );
  const y = useTransform(scrollYProgress, [0, 1], yRange);

  const handleTransition = useViewTransition();

  useSmoothScroll();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsapAnimation.scale(nameMainVisualRef);
    gsapAnimation.inview(descriptionRef);
    gsapAnimation.inview(profileRef);
    gsapAnimation.inview(worksItem1Ref);
    gsapAnimation.inview(worksItem2Ref);
    gsapAnimation.inview(worksItem3Ref);
    gsapAnimation.inview(worksItem4Ref);
    gsapAnimation.inview(worksItem5Ref);
    gsapAnimation.inview(contactRef);
    gsapAnimation.parallaxDeep(contactWrapperRef);
  }, []);

  return (
    <>
      <Glass>
        <header className={clsx(header)}>
          <Nav />
          <HamburgerMenu />
          {isOpenHamburgerMenu && <MobileNav />}
          {!isOpenHamburgerMenu && <TextCircle />}
        </header>
        <main className={clsx(main)}>
          <h1
            className={clsx(cormorant.className, nameMainVisual)}
            ref={nameMainVisualRef}
          >
            Tatsuya <br />
            Hasegawa
          </h1>
          <div className={clsx(line)}></div>
          <section id="about" className={clsx(aboutSection)}>
            <h2 className={clsx(roboto.className, sectionHeading)}>About</h2>
            <p className={clsx(description)} ref={descriptionRef}>
              Webデザイナー長谷川 達也の
              <br className={mobileBr} />
              ポートフォリオサイトです.
              <br className={mobileBr} />
              <br className={clsx(desktopBr)} />
              実際に触れることのできる
              <br className={mobileBr} />
              Web作品を
              <br className={mobileBr} />
              デザイン・実装することに
              <br className={mobileBr} />
              喜びを感じます.
              <br className={mobileBr} />
              <br className={clsx(desktopBr)} />
              書いたコードが画面に反映される
              <br className={mobileBr} />
              感動を
              <br className={mobileBr} />
              学習を始めて以来
              <br className={mobileBr} />
              ずっと持ち続けています.
            </p>
            <section className={profileSection} ref={profileRef}>
              <div className={clsx(profileContent)}>
                <div className={clsx(profileTextBox)}>
                  <h3 className={clsx(roboto.className, profileName)}>
                    Tatsuya Hasegawa
                  </h3>
                  <p className={clsx(roboto.className, profileOccupation)}>
                    Web Designer
                  </p>
                </div>
                <div className={clsx(profileLinkBox)}>
                  <Link
                    href={GITHUB}
                    className={clsx(profileLink)}
                    target="_brank"
                  >
                    <FaGithub className={clsx(profileLinkIcon)} />
                  </Link>
                  <Link
                    href={`mailto:${EMAIL}`}
                    className={clsx(profileLink)}
                    target="_brank"
                  >
                    <IoMdMail className={clsx(profileLinkIcon)} />
                  </Link>
                </div>
                <Link
                  href={"/about"}
                  className={clsx(roboto.className, profileMore)}
                  onClick={handleTransition("/about")}
                >
                  More
                </Link>
              </div>
              <div className={clsx(profileImageWrapper)}>
                <div
                  ref={profileImageContainerRef}
                  className={clsx(profileImageContainer)}
                >
                  <motion.div style={{ y }} className={clsx(motionDiv)}>
                    <Image
                      src={"/photo.avif"}
                      alt="長谷川達也"
                      className={clsx(profileImage)}
                      view-transition-name={"photo"}
                      fill
                    />
                  </motion.div>
                </div>
              </div>
            </section>
          </section>
          <section id="works" className={clsx(worksSection)}>
            <h2 className={clsx(roboto.className, sectionHeading)}>Works</h2>
            <div className={clsx(worksBox)}>
              <section className={clsx(worksItem)} ref={worksItem1Ref}>
                <div className={clsx(worksTextBox)}>
                  <h3 className={clsx(worksName)}>
                    <span className={clsx(worksNameSpan)}>「フルール」</span>
                    <span className={clsx(worksNameSpan)}>ブランドサイト</span>
                  </h3>
                  <p className={clsx(worksCategory)}>(Webサイト)</p>
                </div>
                <Link
                  href={"/works/fleur"}
                  className={clsx(worksLink)}
                  onClick={handleTransition("/works/fleur")}
                >
                  <Image
                    src={"/icons/fleur-icon.avif"}
                    width={160}
                    height={160}
                    className={clsx(worksIcon)}
                    alt="フルール"
                  />
                </Link>
              </section>
              <section className={clsx(worksItem)} ref={worksItem2Ref}>
                <div className={clsx(worksTextBox)}>
                  <h3 className={clsx(worksName)}>一問一答メーカー</h3>
                  <p className={clsx(worksCategory)}>(Webアプリケーション)</p>
                </div>
                <Link
                  href={"https://www.question-and-answer.vegetstudios.com"}
                  className={clsx(worksLink)}
                  target="_blank"
                >
                  <Image
                    src={"/icons/question-and-answer-icon.avif"}
                    width={160}
                    height={160}
                    className={clsx(worksIcon)}
                    alt="一問一答メーカーのアイコン"
                  />
                </Link>
              </section>
              <section className={clsx(worksItem)} ref={worksItem3Ref}>
                <div className={clsx(worksTextBox)}>
                  <h3 className={clsx(worksName)}>ステメモ</h3>
                  <p className={clsx(worksCategory)}>(Webアプリケーション)</p>
                </div>
                <Link
                  href={"https://www.sutememo.vegetstudios.com"}
                  className={clsx(worksLink)}
                  target="_blank"
                >
                  <Image
                    src={"/icons/sutememo-icon.avif"}
                    width={160}
                    height={160}
                    className={clsx(worksIcon)}
                    alt="ステメモのアイコン"
                  />
                </Link>
              </section>
              <section className={clsx(worksItem)} ref={worksItem4Ref}>
                <div className={clsx(worksTextBox)}>
                  <h3 className={clsx(worksName)}>プレイリスト2025</h3>
                  <p className={clsx(worksCategory)}>(グラフィック)</p>
                </div>
                <Link
                  href={"/works/playlist2025"}
                  className={clsx(worksLink)}
                  onClick={handleTransition("/works/playlist2025")}
                >
                  <Image
                    src={"/icons/playlist2025-icon.avif"}
                    width={160}
                    height={160}
                    className={clsx(worksIcon)}
                    alt="プレイリスト2025"
                  />
                </Link>
              </section>
              <section className={clsx(worksItem)} ref={worksItem5Ref}>
                <div className={clsx(worksTextBox)}>
                  <h3 className={clsx(worksName)}>力強さのあるビジュアル</h3>
                  <p className={clsx(worksCategory)}>(レタッチ)</p>
                </div>
                <Link
                  href={"/works/sporty"}
                  className={clsx(worksLink)}
                  onClick={handleTransition("/works/sporty")}
                >
                  <Image
                    src={"/icons/sporty-icon.avif"}
                    width={160}
                    height={160}
                    className={clsx(worksIcon)}
                    alt="力強さのあるビジュアル"
                  />
                </Link>
              </section>
            </div>
          </section>
          <section id="contact" className={clsx(contactSection)}>
            <h2 className={clsx(roboto.className, sectionHeadingContact)}>
              Contact
            </h2>
            <div ref={contactWrapperRef} className={clsx(contactWrapper)}>
              <Link
                href={`mailto:${EMAIL}`}
                className={clsx(emailLink)}
                ref={contactRef}
              >
                <IoMdMail className={clsx(emailIcon)} />
                <div className={clsx(emailTextBox)}>
                  <span className={clsx(roboto.className, emailTextRotateTop)}>
                    {EMAIL}
                  </span>
                  <span
                    className={clsx(roboto.className, emailTextRotateFront)}
                  >
                    {EMAIL}
                  </span>
                </div>
              </Link>
            </div>
          </section>
        </main>
        <Footer />
      </Glass>
    </>
  );
}
