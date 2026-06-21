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
  sectionHeadingTools,
  sectionHeadingWorks,
  worksSection,
} from "@/components/main/home/main.css";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

import { cormorant, roboto } from "@/app/fonts";
import PlaygroundsList from "@/components/playgroundsList/playgroundsList";
import ToolsList from "@/components/toolsList/toolsList";
import Tooltip from "@/components/tooltip/tooltip";
import WorksList from "@/components/worksList/worksList";
import { EMAIL, GITHUB, NOTE, PARALLAX_ENABLE_MIN_WIDTH, X } from "@/constants/constants";
import { useClipboard } from "@/hooks/useClipboard";
import { playFireworksAt } from "@/lib/fireworksConfetti";
import { gsapAnimation } from "@/lib/gsap";
import { haptic } from "@/lib/haptic";
import { playSfxClick, playSfxSuccess } from "@/lib/playSfx";
import { desktopBr, mobileBr } from "@/styles/styles.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState, type MouseEvent } from "react";

export default function Main() {
  const [mounted, setMounted] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);
  const emailCopyLockRef = useRef(false);
  const emailCopiedResetTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [emailHovered, setEmailHovered] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);

  const descriptionRef = useRef(null);
  const profileRef = useRef(null);
  const profileImageContainerRef = useRef(null);
  const contactRef = useRef(null);

  const { copy } = useClipboard();

  const handleEmailClick = async (ev: MouseEvent<HTMLButtonElement>) => {
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
    playFireworksAt(ev.clientX, ev.clientY);
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

  const enableParallax = mounted && window.innerWidth > PARALLAX_ENABLE_MIN_WIDTH;

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    enableParallax ? ["-20px", "20px"] : ["0px", "0px"],
  );

  useEffect(() => {
    setMounted(true);

    gsap.registerPlugin(ScrollTrigger);

    gsapAnimation.inview(descriptionRef);
    gsapAnimation.inview(profileRef);
    gsapAnimation.inview(contactRef);
  }, []);

  return (
    <>
      <main className={clsx(main)}>
        <h1 className={clsx(cormorant.className, name)}>
          Ta
          <span className={clsx(nameWide)}>tsu</span>
          ya
          <br />H<span className={clsx(nameWide)}>as</span>
          <span className={clsx(nameTight, nameTightLeft)}>e</span>
          <span className={clsx(nameWide)}>ga</span>
          <span className={clsx(nameTightLeft)}>w</span>a
        </h1>
        <div className={clsx(line)}></div>
        <section id="about" className={clsx(aboutSection)}>
          <h2 className={clsx(roboto.className, sectionHeading, sectionHeadingAbout)}>About</h2>
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
                <h3 className={clsx(roboto.className, profileName)}>Tatsuya Hasegawa</h3>
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
                      onClick={(ev) => {
                        void handleEmailClick(ev);
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
              <div ref={profileImageContainerRef} className={clsx(profileImageContainer)}>
                <motion.div style={{ y }} className={clsx(motionDiv)}>
                  <Image
                    src={"/images/photo.avif"}
                    alt="長谷川達也"
                    className={clsx(profileImage)}
                    fill
                    sizes="(max-width: 640px) 120px, (max-width: 1280px) 180px, 200px"
                  />
                </motion.div>
              </div>
            </div>
          </section>
        </section>
        <section id="works" className={clsx(worksSection)}>
          <h2 className={clsx(roboto.className, sectionHeading, sectionHeadingWorks)}>Works</h2>
          <WorksList />
        </section>
        <section id="tools" className={clsx(worksSection)}>
          <h2 className={clsx(roboto.className, sectionHeading, sectionHeadingTools)}>Tools</h2>
          <ToolsList />
        </section>
        <section id="playgrounds" className={clsx(worksSection)}>
          <h2 className={clsx(roboto.className, sectionHeading, sectionHeadingExperimental)}>
            Playgrounds
          </h2>
          <PlaygroundsList />
        </section>
        <section id="contact" className={clsx(contactSection)}>
          <h2 className={clsx(roboto.className, sectionHeading, sectionHeadingContact)}>Contact</h2>
          <address className={clsx(address)}>
            <button
              className={clsx(emailButton)}
              ref={contactRef}
              onClick={(ev) => {
                void handleEmailClick(ev);
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
                    [emailButtonHover]: emailCopied || emailHovered || emailFocused,
                  })}
                >
                  {getLabel()}
                </span>
                <span
                  className={clsx(roboto.className, emailTextRotateFront, {
                    [emailButtonHover]: emailCopied || emailHovered || emailFocused,
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
