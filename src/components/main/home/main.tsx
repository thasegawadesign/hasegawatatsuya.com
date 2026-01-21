"use client";

import {
  aboutSection,
  contactSection,
  description,
  emailIcon,
  emailLink,
  emailTextBox,
  emailTextRotateFront,
  emailTextRotateTop,
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
  worksBox,
  worksCategory,
  worksIcon,
  worksItem,
  worksLink,
  worksName,
  worksNameSpan,
  worksSection,
  worksTextBox,
} from "@/components/main/home/main.css";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

import { cormorant, roboto } from "@/app/fonts";
import {
  EMAIL,
  GITHUB,
  NOTE,
  PARALLAX_ENABLE_MIN_WIDTH,
  X,
} from "@/constants/constants";
import { desktopBr, mobileBr } from "@/styles/styles.css";
import { gsapAnimation } from "@/utils/gsap";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";

export default function Main() {
  const [mounted, setMounted] = useState(false);

  const descriptionRef = useRef(null);
  const profileRef = useRef(null);
  const profileImageContainerRef = useRef(null);
  const worksItem01Ref = useRef(null);
  const worksItem02Ref = useRef(null);
  const worksItem03Ref = useRef(null);
  const worksItem04Ref = useRef(null);
  const worksItem05Ref = useRef(null);
  const worksItem06Ref = useRef(null);
  const worksItem07Ref = useRef(null);
  const contactRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: profileImageContainerRef,
    offset: ["start end", "end start"],
  });

  const enableParallax =
    mounted && window.innerWidth > PARALLAX_ENABLE_MIN_WIDTH;

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    enableParallax ? ["-20px", "20px"] : ["0px", "0px"]
  );

  useEffect(() => {
    setMounted(true);

    gsap.registerPlugin(ScrollTrigger);

    gsapAnimation.inview(descriptionRef);
    gsapAnimation.inview(profileRef);
    gsapAnimation.inview(worksItem01Ref);
    gsapAnimation.inview(worksItem02Ref);
    gsapAnimation.inview(worksItem03Ref);
    gsapAnimation.inview(worksItem04Ref);
    gsapAnimation.inview(worksItem05Ref);
    gsapAnimation.inview(worksItem06Ref);
    gsapAnimation.inview(worksItem07Ref);
    gsapAnimation.inview(contactRef);
  }, []);

  return (
    <>
      <main className={clsx(main)}>
        <h1 className={clsx(cormorant.className, nameMainVisual)}>
          Tatsuya
          <br />
          Hasegawa
        </h1>
        <div className={clsx(line)}></div>
        <section id="about" className={clsx(aboutSection)}>
          <h2 className={clsx(roboto.className, sectionHeading)}>About</h2>
          <p className={clsx(description)} ref={descriptionRef}>
            Webデザイナー、
            <br className={mobileBr} />
            フロントエンドエンジニア <br className={mobileBr} />
            長谷川 達也の
            <br className={mobileBr} />
            ポートフォリオです。
            <br className={mobileBr} />
            <br className={clsx(desktopBr)} />
            実際に触れることのできる
            <br className={mobileBr} />
            Web制作物を
            <br className={mobileBr} />
            デザイン・実装することに
            <br className={mobileBr} />
            喜びを感じます。
            <br className={mobileBr} />
            <br className={clsx(desktopBr)} />
            書いたコードが画面に反映される
            <br className={mobileBr} />
            感動を
            <br className={mobileBr} />
            学習を始めて以来
            <br className={mobileBr} />
            ずっと持ち続けています。
          </p>
          <section className={profileSection} ref={profileRef}>
            <div className={clsx(profileContent)}>
              <div className={clsx(profileTextBox)}>
                <h3 className={clsx(roboto.className, profileName)}>
                  Tatsuya Hasegawa
                </h3>
                <p className={clsx(roboto.className, profileOccupation)}>
                  Web Designer | Front-end Developer
                </p>
              </div>
              <div className={clsx(profileLinkBox)}>
                <Link
                  href={GITHUB}
                  className={clsx(profileLink)}
                  aria-label="GitHub"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FaGithub className={clsx(profileLinkIcon)} />
                </Link>
                <Link
                  href={X}
                  className={clsx(profileLink)}
                  aria-label="X"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FaXTwitter className={clsx(profileLinkIcon)} />
                </Link>
                <Link
                  href={NOTE}
                  className={clsx(profileLink)}
                  aria-label="note"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Image
                    src="/icons/note-icon.svg"
                    width={28}
                    height={28}
                    alt="note"
                    className={clsx(profileLinkIcon)}
                  />
                </Link>
                <Link
                  href={`mailto:${EMAIL}`}
                  className={clsx(profileLink)}
                  aria-label="Email"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <IoMdMail className={clsx(profileLinkIcon)} />
                </Link>
              </div>
              <Link
                href={"/about"}
                className={clsx(roboto.className, profileMore)}
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
            <section className={clsx(worksItem)} ref={worksItem01Ref}>
              <div className={clsx(worksTextBox)}>
                <h3 className={clsx(worksName)}>
                  <span className={clsx(worksNameSpan)}>
                    「株式会社Univearth」
                  </span>
                  <span className={clsx(worksNameSpan)}>
                    コーポレートサイト
                  </span>
                </h3>
                <p className={clsx(worksCategory)}>(Webサイト)</p>
              </div>
              <Link href={"/works/univearth"} className={clsx(worksLink)}>
                <Image
                  src={"/icons/univearth-icon.avif"}
                  width={160}
                  height={160}
                  className={clsx(worksIcon)}
                  alt="株式会社Univearthのアイコン"
                />
              </Link>
            </section>
            <section className={clsx(worksItem)} ref={worksItem02Ref}>
              <div className={clsx(worksTextBox)}>
                <h3 className={clsx(worksName)}>
                  <span className={clsx(worksNameSpan)}>
                    「株式会社 智商運輸」
                  </span>
                  <span className={clsx(worksNameSpan)}>
                    コーポレートサイト
                  </span>
                </h3>
                <p className={clsx(worksCategory)}>(Webサイト)</p>
              </div>
              <Link href={"/works/tomosho-unyu"} className={clsx(worksLink)}>
                <Image
                  src={"/icons/tomosho-unyu-icon.avif"}
                  width={160}
                  height={160}
                  className={clsx(worksIcon)}
                  alt="株式会社 智商運輸のアイコン"
                />
              </Link>
            </section>
            <section className={clsx(worksItem)} ref={worksItem03Ref}>
              <div className={clsx(worksTextBox)}>
                <h3 className={clsx(worksName)}>
                  <span className={clsx(worksNameSpan)}>「フルール」</span>
                  <span className={clsx(worksNameSpan)}>ブランドサイト</span>
                </h3>
                <p className={clsx(worksCategory)}>(Webサイト)</p>
              </div>
              <Link href={"/works/fleur"} className={clsx(worksLink)}>
                <Image
                  src={"/icons/fleur-icon.avif"}
                  width={160}
                  height={160}
                  className={clsx(worksIcon)}
                  alt="フルールのアイコン"
                />
              </Link>
            </section>
            <section className={clsx(worksItem)} ref={worksItem04Ref}>
              <div className={clsx(worksTextBox)}>
                <h3 className={clsx(worksName)}>プレイリスト2025</h3>
                <p className={clsx(worksCategory)}>(グラフィック)</p>
              </div>
              <Link href={"/works/playlist2025"} className={clsx(worksLink)}>
                <Image
                  src={"/icons/playlist2025-icon.avif"}
                  width={160}
                  height={160}
                  className={clsx(worksIcon)}
                  alt="プレイリスト2025のアイコン"
                />
              </Link>
            </section>
            <section className={clsx(worksItem)} ref={worksItem05Ref}>
              <div className={clsx(worksTextBox)}>
                <h3 className={clsx(worksName)}>一問一答メーカー</h3>
                <p className={clsx(worksCategory)}>(Webアプリケーション)</p>
              </div>
              <Link
                href={"https://www.question-and-answer.vegetworks.com/"}
                className={clsx(worksLink)}
                rel="noopener noreferrer"
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
            <section className={clsx(worksItem)} ref={worksItem06Ref}>
              <div className={clsx(worksTextBox)}>
                <h3 className={clsx(worksName)}>ステメモ</h3>
                <p className={clsx(worksCategory)}>(Webアプリケーション)</p>
              </div>
              <Link
                href={"https://www.sutememo.vegetworks.com/"}
                className={clsx(worksLink)}
                rel="noopener noreferrer"
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
            <section className={clsx(worksItem)} ref={worksItem07Ref}>
              <div className={clsx(worksTextBox)}>
                <h3 className={clsx(worksName)}>JavaScript電卓</h3>
                <p className={clsx(worksCategory)}>(Webアプリケーション)</p>
              </div>
              <Link
                href={"https://www.calculator.vegetworks.com/"}
                className={clsx(worksLink)}
                rel="noopener noreferrer"
                target="_blank"
              >
                <Image
                  src={"/icons/calculator-icon.avif"}
                  width={160}
                  height={160}
                  className={clsx(worksIcon)}
                  alt="JavaScript電卓のアイコン"
                />
              </Link>
            </section>
          </div>
        </section>
        <section id="contact" className={clsx(contactSection)}>
          <h2 className={clsx(roboto.className, sectionHeading)}>Contact</h2>
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
              <span className={clsx(roboto.className, emailTextRotateFront)}>
                {EMAIL}
              </span>
            </div>
          </Link>
        </section>
      </main>
    </>
  );
}
