"use client";

import {
  aboutSection,
  address,
  contactSection,
  description,
  emailButton,
  emailButtonHover,
  emailTextBox,
  emailTextRotateFront,
  emailTextRotateTop,
  line,
  main,
  motionDiv,
  name,
  nameTight,
  nameTightLeft,
  nameWide,
  nameWider,
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
  sectionHeadingAbout,
  sectionHeadingContact,
  sectionHeadingExperimental,
  sectionHeadingWorks,
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
import { IoMail } from "react-icons/io5";

import { cormorant, roboto } from "@/app/fonts";
import Tooltip from "@/components/tooltip/tooltip";
import {
  EMAIL,
  GITHUB,
  NOTE,
  PARALLAX_ENABLE_MIN_WIDTH,
  X,
} from "@/constants/constants";
import { useClipboard } from "@/hooks/useClipboard";
import { gsapAnimation } from "@/lib/gsap";
import { haptic } from "@/lib/haptic";
import { playSfxClick, playSfxSuccess } from "@/lib/playSfx";
import { preloadNextPageMainVisual } from "@/lib/preloadNextPageMainVisual";
import { desktopBr, mobileBr } from "@/styles/styles.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";

export default function Main() {
  const [mounted, setMounted] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);
  const emailCopyLockRef = useRef(false);
  const emailCopiedResetTimeoutRef = useRef<ReturnType<
    typeof setTimeout
  > | null>(null);
  const [emailHovered, setEmailHovered] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);

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
  const worksItem08Ref = useRef(null);
  const worksItem09Ref = useRef(null);
  const worksItem10Ref = useRef(null);
  const worksItem11Ref = useRef(null);
  const worksItem12Ref = useRef(null);
  const worksItem13Ref = useRef(null);
  const contactRef = useRef(null);

  const { copy } = useClipboard();

  const handleEmailClick = async () => {
    if (emailCopyLockRef.current) return;
    emailCopyLockRef.current = true;
    await copy(EMAIL);
    setEmailCopied(true);

    if (emailCopiedResetTimeoutRef.current) {
      clearTimeout(emailCopiedResetTimeoutRef.current);
    }
    emailCopiedResetTimeoutRef.current = setTimeout(() => {
      setEmailCopied(false);
      emailCopyLockRef.current = false;
      emailCopiedResetTimeoutRef.current = null;
    }, 2000);

    playSfxSuccess();
    haptic();
  };

  const handleEmailHover = async () => {
    setTimeout(() => {
      setEmailHovered(true);
    }, 300);
  };

  const handleEmailFocus = async () => {
    setTimeout(() => {
      setEmailFocused(true);
    }, 300);
  };

  const handleEmailBlur = async () => {
    setTimeout(() => {
      setEmailFocused(false);
    }, 300);
  };

  const handleEmailLeave = async () => {
    if (emailCopiedResetTimeoutRef.current) {
      clearTimeout(emailCopiedResetTimeoutRef.current);
      emailCopiedResetTimeoutRef.current = null;
    }
    emailCopyLockRef.current = false;
    setEmailCopied(false);

    setTimeout(() => {
      setEmailHovered(false);
      setEmailFocused(false);
    }, 300);
  };

  const getLabel = () => {
    if (emailCopied) return "Email Copied!";
    if (emailHovered) return "Copy Email";
    if (emailFocused) return "Copy Email";
    return EMAIL;
  };

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
    gsapAnimation.inview(worksItem08Ref);
    gsapAnimation.inview(worksItem09Ref);
    gsapAnimation.inview(worksItem10Ref);
    gsapAnimation.inview(worksItem11Ref);
    gsapAnimation.inview(worksItem12Ref);
    gsapAnimation.inview(worksItem13Ref);
    gsapAnimation.inview(contactRef);
  }, []);

  return (
    <>
      <main className={clsx(main)}>
        <h1 className={clsx(cormorant.className, name)}>
          Ta
          <span className={clsx(nameWide)}>tsu</span>
          ya
          <br />H<span className={clsx(nameWider)}>as</span>
          <span className={clsx(nameTight, nameTightLeft)}>e</span>
          <span className={clsx(nameWide)}>ga</span>
          <span className={clsx(nameTightLeft)}>w</span>a
        </h1>
        <div className={clsx(line)}></div>
        <section id="about" className={clsx(aboutSection)}>
          <h2
            className={clsx(
              roboto.className,
              sectionHeading,
              sectionHeadingAbout
            )}
          >
            About
          </h2>
          <p ref={descriptionRef} className={clsx(description)}>
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
              <ul className={clsx(profileLinkBox)}>
                <li>
                  <Link
                    href={GITHUB}
                    className={clsx(profileLink)}
                    aria-label="GitHub"
                    rel="noopener noreferrer"
                    target="_blank"
                    onClick={() => {
                      playSfxClick();
                      haptic();
                    }}
                  >
                    <FaGithub className={clsx(profileLinkIcon)} />
                  </Link>
                </li>
                <li>
                  <Link
                    href={X}
                    className={clsx(profileLink)}
                    aria-label="X"
                    rel="noopener noreferrer"
                    target="_blank"
                    onClick={() => {
                      playSfxClick();
                      haptic();
                    }}
                  >
                    <FaXTwitter className={clsx(profileLinkIcon)} />
                  </Link>
                </li>
                <li>
                  <Link
                    href={NOTE}
                    className={clsx(profileLink)}
                    aria-label="note"
                    rel="noopener noreferrer"
                    target="_blank"
                    onClick={() => {
                      playSfxClick();
                      haptic();
                    }}
                  >
                    <Image
                      src="/images/icons/note-icon.svg"
                      width={28}
                      height={28}
                      alt="note"
                      className={clsx(profileLinkIcon)}
                    />
                  </Link>
                </li>
                <li>
                  <Tooltip content="Copy Email" side="bottom">
                    <button
                      aria-label="Copy Email"
                      className={clsx(profileLink)}
                      onClick={() => {
                        handleEmailClick();
                      }}
                    >
                      <IoMail className={clsx(profileLinkIcon)} />
                    </button>
                  </Tooltip>
                </li>
              </ul>
              <Link
                href={"/about"}
                className={clsx(roboto.className, profileMore)}
                onClick={() => {
                  playSfxClick();
                  haptic();
                }}
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
                    src={"/images/photo.avif"}
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
          <h2
            className={clsx(
              roboto.className,
              sectionHeading,
              sectionHeadingWorks
            )}
          >
            Works
          </h2>
          <div className={clsx(worksBox)}>
            <section className={clsx(worksItem)} ref={worksItem01Ref}>
              <div className={clsx(worksTextBox)}>
                <h3 className={clsx(worksName)}>
                  <span className={clsx(worksNameSpan)}>
                    「福昇運輸株式会社」
                  </span>
                  <span className={clsx(worksNameSpan)}>
                    コーポレートサイト
                  </span>
                </h3>
                <p className={clsx(worksCategory)}>(Webサイト)</p>
              </div>
              <Link
                href={"/works/fukusho-unyu"}
                className={clsx(worksLink)}
                onMouseEnter={() =>
                  preloadNextPageMainVisual(
                    "/images/mockups/fukusho-unyu-mockup.avif",
                    4000,
                    3000
                  )
                }
                onTouchStart={() =>
                  preloadNextPageMainVisual(
                    "/images/mockups/fukusho-unyu-mockup.avif",
                    4000,
                    3000
                  )
                }
                onFocus={() =>
                  preloadNextPageMainVisual(
                    "/images/mockups/fukusho-unyu-mockup.avif",
                    4000,
                    3000
                  )
                }
                onClick={() => {
                  playSfxClick();
                  haptic();
                }}
              >
                <Image
                  src={"/images/icons/fukusho-unyu-icon.avif"}
                  width={160}
                  height={160}
                  className={clsx(worksIcon)}
                  alt="福昇運輸株式会社のアイコン"
                />
              </Link>
            </section>
            <section className={clsx(worksItem)} ref={worksItem02Ref}>
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
              <Link
                href={"/works/univearth"}
                className={clsx(worksLink)}
                onMouseEnter={() =>
                  preloadNextPageMainVisual(
                    "/images/mockups/univearth-mockup.avif",
                    4000,
                    3000
                  )
                }
                onTouchStart={() =>
                  preloadNextPageMainVisual(
                    "/images/mockups/univearth-mockup.avif",
                    4000,
                    3000
                  )
                }
                onFocus={() =>
                  preloadNextPageMainVisual(
                    "/images/mockups/univearth-mockup.avif",
                    4000,
                    3000
                  )
                }
                onClick={() => {
                  playSfxClick();
                  haptic();
                }}
              >
                <Image
                  src={"/images/icons/univearth-icon.avif"}
                  width={160}
                  height={160}
                  className={clsx(worksIcon)}
                  alt="株式会社Univearthのアイコン"
                />
              </Link>
            </section>
            <section className={clsx(worksItem)} ref={worksItem03Ref}>
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
              <Link
                href={"/works/tomosho-unyu"}
                className={clsx(worksLink)}
                onMouseEnter={() =>
                  preloadNextPageMainVisual(
                    "/images/mockups/tomosho-unyu-mockup.avif",
                    4000,
                    3000
                  )
                }
                onTouchStart={() =>
                  preloadNextPageMainVisual(
                    "/images/mockups/tomosho-unyu-mockup.avif",
                    4000,
                    3000
                  )
                }
                onFocus={() =>
                  preloadNextPageMainVisual(
                    "/images/mockups/tomosho-unyu-mockup.avif",
                    4000,
                    3000
                  )
                }
                onClick={() => {
                  playSfxClick();
                  haptic();
                }}
              >
                <Image
                  src={"/images/icons/tomosho-unyu-icon.avif"}
                  width={160}
                  height={160}
                  className={clsx(worksIcon)}
                  alt="株式会社 智商運輸のアイコン"
                />
              </Link>
            </section>
            <section className={clsx(worksItem)} ref={worksItem04Ref}>
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
                onMouseEnter={() =>
                  preloadNextPageMainVisual(
                    "/images/mockups/fleur-website-mockup.avif",
                    4000,
                    3000
                  )
                }
                onTouchStart={() =>
                  preloadNextPageMainVisual(
                    "/images/mockups/fleur-website-mockup.avif",
                    4000,
                    3000
                  )
                }
                onFocus={() =>
                  preloadNextPageMainVisual(
                    "/images/mockups/fleur-website-mockup.avif",
                    4000,
                    3000
                  )
                }
                onClick={() => {
                  playSfxClick();
                  haptic();
                }}
              >
                <Image
                  src={"/images/icons/fleur-icon.avif"}
                  width={160}
                  height={160}
                  className={clsx(worksIcon)}
                  alt="フルールのアイコン"
                />
              </Link>
            </section>
            <section className={clsx(worksItem)} ref={worksItem05Ref}>
              <div className={clsx(worksTextBox)}>
                <h3 className={clsx(worksName)}>プレイリスト2025</h3>
                <p className={clsx(worksCategory)}>(グラフィック)</p>
              </div>
              <Link
                href={"/works/playlist2025"}
                className={clsx(worksLink)}
                onMouseEnter={() =>
                  preloadNextPageMainVisual(
                    "/images/mockups/playlist2025-mockup.avif",
                    4000,
                    3000
                  )
                }
                onTouchStart={() =>
                  preloadNextPageMainVisual(
                    "/images/mockups/playlist2025-mockup.avif",
                    4000,
                    3000
                  )
                }
                onFocus={() =>
                  preloadNextPageMainVisual(
                    "/images/mockups/playlist2025-mockup.avif",
                    4000,
                    3000
                  )
                }
                onClick={() => {
                  playSfxClick();
                  haptic();
                }}
              >
                <Image
                  src={"/images/icons/playlist2025-icon.avif"}
                  width={160}
                  height={160}
                  className={clsx(worksIcon)}
                  alt="プレイリスト2025のアイコン"
                />
              </Link>
            </section>
            <section className={clsx(worksItem)} ref={worksItem06Ref}>
              <div className={clsx(worksTextBox)}>
                <h3 className={clsx(worksName)}>一問一答メーカー</h3>
                <p className={clsx(worksCategory)}>(Webアプリケーション)</p>
              </div>
              <Link
                href={"https://www.question-and-answer.vegetworks.com/"}
                className={clsx(worksLink)}
                rel="noopener noreferrer"
                target="_blank"
                onClick={() => {
                  playSfxClick();
                  haptic();
                }}
              >
                <Image
                  src={"/images/icons/question-and-answer-icon.avif"}
                  width={160}
                  height={160}
                  className={clsx(worksIcon)}
                  alt="一問一答メーカーのアイコン"
                />
              </Link>
            </section>
            <section className={clsx(worksItem)} ref={worksItem07Ref}>
              <div className={clsx(worksTextBox)}>
                <h3 className={clsx(worksName)}>ステメモ</h3>
                <p className={clsx(worksCategory)}>(Webアプリケーション)</p>
              </div>
              <Link
                href={"https://www.sutememo.vegetworks.com/"}
                className={clsx(worksLink)}
                rel="noopener noreferrer"
                target="_blank"
                onClick={() => {
                  playSfxClick();
                  haptic();
                }}
              >
                <Image
                  src={"/images/icons/sutememo-icon.avif"}
                  width={160}
                  height={160}
                  className={clsx(worksIcon)}
                  alt="ステメモのアイコン"
                />
              </Link>
            </section>
            <section className={clsx(worksItem)} ref={worksItem08Ref}>
              <div className={clsx(worksTextBox)}>
                <h3 className={clsx(worksName)}>JavaScript電卓</h3>
                <p className={clsx(worksCategory)}>(Webアプリケーション)</p>
              </div>
              <Link
                href={"https://www.calculator.vegetworks.com/"}
                className={clsx(worksLink)}
                rel="noopener noreferrer"
                target="_blank"
                onClick={() => {
                  playSfxClick();
                  haptic();
                }}
              >
                <Image
                  src={"/images/icons/calculator-icon.avif"}
                  width={160}
                  height={160}
                  className={clsx(worksIcon)}
                  alt="JavaScript電卓のアイコン"
                />
              </Link>
            </section>
          </div>
        </section>
        <section id="experimental" className={clsx(worksSection)}>
          <h2
            className={clsx(
              roboto.className,
              sectionHeading,
              sectionHeadingExperimental
            )}
          >
            Experimental
          </h2>
          <div className={clsx(worksBox)}>
            <section className={clsx(worksItem)} ref={worksItem09Ref}>
              <div className={clsx(worksTextBox)}>
                <h3 className={clsx(worksName)}>
                  <span className={clsx(worksNameSpan)}>大小2枚の</span>
                  <span className={clsx(worksNameSpan)}>非対称ヒーロー</span>
                </h3>
                <p className={clsx(worksCategory)}>(プロトタイプ)</p>
              </div>
              <Link
                href={"/experimental/editorial-hero-prototype"}
                className={clsx(worksLink)}
                rel="noopener noreferrer"
                onMouseEnter={() =>
                  preloadNextPageMainVisual(
                    "/images/mockups/editorial-hero-prototype-mockup.avif",
                    6000,
                    4500
                  )
                }
                onTouchStart={() =>
                  preloadNextPageMainVisual(
                    "/images/mockups/editorial-hero-prototype-mockup.avif",
                    6000,
                    4500
                  )
                }
                onFocus={() =>
                  preloadNextPageMainVisual(
                    "/images/mockups/editorial-hero-prototype-mockup.avif",
                    6000,
                    4500
                  )
                }
                onClick={() => {
                  playSfxClick();
                  haptic();
                }}
              >
                <Image
                  src={"/images/icons/editorial-hero-prototype-icon.avif"}
                  width={160}
                  height={160}
                  className={clsx(worksIcon)}
                  alt="非対称ヒーローのアイコン"
                />
              </Link>
            </section>
            <section className={clsx(worksItem)} ref={worksItem10Ref}>
              <div className={clsx(worksTextBox)}>
                <h3 className={clsx(worksName)}>
                  <span className={clsx(worksNameSpan)}>お客様の声</span>
                  <span className={clsx(worksNameSpan)}>カルーセル</span>
                </h3>
                <p className={clsx(worksCategory)}>(プロトタイプ)</p>
              </div>
              <Link
                href={"/experimental/customer-voice-carousel-prototype"}
                className={clsx(worksLink)}
                rel="noopener noreferrer"
                onMouseEnter={() =>
                  preloadNextPageMainVisual(
                    "/images/mockups/customer-voice-carousel-prototype-mockup.avif",
                    6000,
                    4500
                  )
                }
                onTouchStart={() =>
                  preloadNextPageMainVisual(
                    "/images/mockups/customer-voice-carousel-prototype-mockup.avif",
                    6000,
                    4500
                  )
                }
                onFocus={() =>
                  preloadNextPageMainVisual(
                    "/images/mockups/customer-voice-carousel-prototype-mockup.avif",
                    6000,
                    4500
                  )
                }
                onClick={() => {
                  playSfxClick();
                  haptic();
                }}
              >
                <Image
                  src={
                    "/images/icons/customer-voice-carousel-prototype-icon.avif"
                  }
                  width={160}
                  height={160}
                  className={clsx(worksIcon)}
                  alt="お客様の声カルーセルのアイコン"
                />
              </Link>
            </section>
            <section className={clsx(worksItem)} ref={worksItem11Ref}>
              <div className={clsx(worksTextBox)}>
                <h3 className={clsx(worksName)}>
                  <span className={clsx(worksNameSpan)}>Vision</span>
                  <span className={clsx(worksNameSpan)}>
                    スクロールスナップ
                  </span>
                </h3>
                <p className={clsx(worksCategory)}>(プロトタイプ)</p>
              </div>
              <Link
                href={"/experimental/vision-scroll-snap"}
                className={clsx(worksLink)}
                rel="noopener noreferrer"
                onMouseEnter={() =>
                  preloadNextPageMainVisual(
                    "/images/mockups/vision-scroll-snap-mockup.avif",
                    6000,
                    4500
                  )
                }
                onTouchStart={() =>
                  preloadNextPageMainVisual(
                    "/images/mockups/vision-scroll-snap-mockup.avif",
                    6000,
                    4500
                  )
                }
                onFocus={() =>
                  preloadNextPageMainVisual(
                    "/images/mockups/vision-scroll-snap-mockup.avif",
                    6000,
                    4500
                  )
                }
                onClick={() => {
                  playSfxClick();
                  haptic();
                }}
              >
                <Image
                  src={"/images/icons/vision-scroll-snap-icon.avif"}
                  width={160}
                  height={160}
                  className={clsx(worksIcon)}
                  alt="Visionスクロールスナップのアイコン"
                />
              </Link>
            </section>
            <section className={clsx(worksItem)} ref={worksItem12Ref}>
              <div className={clsx(worksTextBox)}>
                <h3 className={clsx(worksName)}>
                  <span className={clsx(worksNameSpan)}>斜めが刺さる</span>
                  <span className={clsx(worksNameSpan)}>Aboutセクション</span>
                </h3>
                <p className={clsx(worksCategory)}>(プロトタイプ)</p>
              </div>
              <Link
                href={"/experimental/about-section-diagonal-energy"}
                className={clsx(worksLink)}
                rel="noopener noreferrer"
                onMouseEnter={() =>
                  preloadNextPageMainVisual(
                    "/images/mockups/about-section-diagonal-energy-mockup.avif",
                    6000,
                    4500
                  )
                }
                onTouchStart={() =>
                  preloadNextPageMainVisual(
                    "/images/mockups/about-section-diagonal-energy-mockup.avif",
                    6000,
                    4500
                  )
                }
                onFocus={() =>
                  preloadNextPageMainVisual(
                    "/images/mockups/about-section-diagonal-energy-mockup.avif",
                    6000,
                    4500
                  )
                }
                onClick={() => {
                  playSfxClick();
                  haptic();
                }}
              >
                <Image
                  src={"/images/icons/about-section-diagonal-energy-icon.avif"}
                  width={160}
                  height={160}
                  className={clsx(worksIcon)}
                  alt="斜めが刺さるAboutセクションのアイコン"
                />
              </Link>
            </section>
            <section className={clsx(worksItem)} ref={worksItem13Ref}>
              <div className={clsx(worksTextBox)}>
                <h3 className={clsx(worksName)}>
                  <span className={clsx(worksNameSpan)}>アクセシブルな</span>
                  <span className={clsx(worksNameSpan)}>Splideカルーセル</span>
                </h3>
                <p className={clsx(worksCategory)}>(プロトタイプ)</p>
              </div>
              <Link
                href={"/experimental/nextjs-splide-carousel"}
                className={clsx(worksLink)}
                rel="noopener noreferrer"
                onMouseEnter={() =>
                  preloadNextPageMainVisual(
                    "/images/mockups/nextjs-splide-carousel-mockup.avif",
                    6000,
                    4500
                  )
                }
                onTouchStart={() =>
                  preloadNextPageMainVisual(
                    "/images/mockups/nextjs-splide-carousel-mockup.avif",
                    6000,
                    4500
                  )
                }
                onFocus={() =>
                  preloadNextPageMainVisual(
                    "/images/mockups/nextjs-splide-carousel-mockup.avif",
                    6000,
                    4500
                  )
                }
                onClick={() => {
                  playSfxClick();
                  haptic();
                }}
              >
                <Image
                  src={"/images/icons/nextjs-splide-carousel-icon.avif"}
                  width={160}
                  height={160}
                  className={clsx(worksIcon)}
                  alt="Splideカルーセルのアイコン"
                />
              </Link>
            </section>
          </div>
        </section>
        <section id="contact" className={clsx(contactSection)}>
          <h2
            className={clsx(
              roboto.className,
              sectionHeading,
              sectionHeadingContact
            )}
          >
            Contact
          </h2>
          <address className={clsx(address)}>
            <button
              className={clsx(emailButton)}
              ref={contactRef}
              onClick={() => {
                handleEmailClick();
              }}
              onFocus={handleEmailFocus}
              onBlur={handleEmailBlur}
              onMouseEnter={handleEmailHover}
              onMouseLeave={handleEmailLeave}
              onTouchStart={handleEmailHover}
              onTouchEnd={handleEmailLeave}
            >
              <div className={clsx(emailTextBox)}>
                <span
                  className={clsx(roboto.className, emailTextRotateTop, {
                    [emailButtonHover]:
                      emailCopied || emailHovered || emailFocused,
                  })}
                >
                  {getLabel()}
                </span>
                <span
                  className={clsx(roboto.className, emailTextRotateFront, {
                    [emailButtonHover]:
                      emailCopied || emailHovered || emailFocused,
                  })}
                >
                  {getLabel()}
                </span>
              </div>
            </button>
          </address>
        </section>
      </main>
    </>
  );
}
