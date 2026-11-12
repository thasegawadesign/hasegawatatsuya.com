"use client";

import { cormorant } from "@/app/fonts";
import {
  aboutHero,
  certifications,
  certificationsSection,
  contributions,
  contributionsSection,
  description,
  event,
  history,
  historySection,
  line,
  main,
  nameBox,
  nameEn,
  nameJa,
  occupation,
  occupationContainer,
  photo,
  photoBox,
  photoMagic,
  photoMagicInner,
  profileLink,
  profileLinkBox,
  profileLinkIcon,
  profileLinkIconMail,
  section,
  sectionHeading,
  smBr,
  wideBr,
  tilt,
  year,
} from "@/components/main/about/main.css";
import PlayfulText from "@/components/playfulText/playfulText";
import Tooltip from "@/components/tooltip/tooltip";
import TypingName from "@/components/typingName/typingName";
import { EMAIL, GITHUB, NOTE, X } from "@/constants/constants";
import { useClipboard } from "@/hooks/useClipboard";
import { triggerLiquidShockwave } from "@/lib/liquidShockwave";
import { gsapAnimation } from "@/lib/gsap";
import { haptic } from "@/lib/haptic";
import { playSfxClick, playSfxSuccess } from "@/lib/playSfx";
import {
  ABOUT_PHOTO_HEIGHT,
  ABOUT_PHOTO_SIZES,
  ABOUT_PHOTO_SRC,
  ABOUT_PHOTO_WIDTH,
  PROFILE_PHOTO_TRANSITION_NAME,
} from "@/lib/preloadAboutPhoto";
import { morphProfilePhotoWithTransform } from "@/lib/profilePhotoTransition";
import clsx from "clsx";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, ViewTransition, type MouseEvent } from "react";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

const TILT_MAX_ANGLE = 6;

export default function Main() {
  const [emailCopied, setEmailCopied] = useState(false);
  const tiltRef = useRef<HTMLDivElement>(null);
  const occupationRef = useRef(null);
  const descriptionRef = useRef(null);
  const valueRef = useRef(null);
  const historyRef = useRef(null);
  const certificationsRef = useRef(null);
  const contributionsRef = useRef(null);
  const emailCopyLockRef = useRef(false);
  const emailCopiedResetTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const { copy } = useClipboard();

  const handleEmailClick = async (ev: MouseEvent<HTMLButtonElement>) => {
    if (emailCopyLockRef.current || emailCopied) return;
    emailCopyLockRef.current = true;
    triggerLiquidShockwave(ev.clientX, ev.clientY);
    playSfxSuccess();
    haptic();
    if (!(await copy(EMAIL))) {
      emailCopyLockRef.current = false;
      return;
    }
    setEmailCopied(true);

    if (emailCopiedResetTimeoutRef.current) {
      clearTimeout(emailCopiedResetTimeoutRef.current);
    }
    emailCopiedResetTimeoutRef.current = setTimeout(() => {
      setEmailCopied(false);
      emailCopyLockRef.current = false;
      emailCopiedResetTimeoutRef.current = null;
    }, 2000);
  };

  useEffect(() => {
    const el = tiltRef.current;
    if (!el) return;

    const mm = gsap.matchMedia();
    mm.add("(min-width: 640px)", () => {
      gsap.set(el, { transformPerspective: 800 });
      const vars = { duration: 0.8, ease: "power3.out" };
      const toRotationX = gsap.quickTo(el, "rotationX", vars);
      const toRotationY = gsap.quickTo(el, "rotationY", vars);

      const onPointerMove = (e: PointerEvent) => {
        const ratioX = (e.clientX / window.innerWidth) * 2 - 1;
        const ratioY = (e.clientY / window.innerHeight) * 2 - 1;
        toRotationX(ratioY * TILT_MAX_ANGLE);
        toRotationY(-ratioX * TILT_MAX_ANGLE);
      };

      window.addEventListener("pointermove", onPointerMove);
      return () => window.removeEventListener("pointermove", onPointerMove);
    });

    return () => mm.revert();
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsapAnimation.inview(occupationRef);
    gsapAnimation.inview(descriptionRef);
    gsapAnimation.inview(valueRef);
    gsapAnimation.inview(historyRef);
    gsapAnimation.inview(certificationsRef);
    gsapAnimation.inview(contributionsRef);
  }, []);

  return (
    <>
      <main className={clsx(main)}>
        <section className={clsx(aboutHero)}>
          <h1 className={nameBox}>
            <TypingName jaClassName={nameJa} enClassName={clsx(cormorant.className, nameEn)} />
          </h1>
          <div ref={tiltRef} className={clsx(tilt)}>
            <ViewTransition
              name={PROFILE_PHOTO_TRANSITION_NAME}
              share="auto"
              default="none"
              onShare={morphProfilePhotoWithTransform}
            >
              <div className={clsx(photoBox)}>
                <div className={clsx(photoMagic)}>
                  <div className={clsx(photoMagicInner)}>
                    <Image
                      src={ABOUT_PHOTO_SRC}
                      width={ABOUT_PHOTO_WIDTH}
                      height={ABOUT_PHOTO_HEIGHT}
                      sizes={ABOUT_PHOTO_SIZES}
                      alt="長谷川達也"
                      className={clsx(photo)}
                      priority
                    />
                  </div>
                </div>
              </div>
            </ViewTransition>
          </div>
        </section>
        <ul className={clsx(profileLinkBox)}>
          <li>
            <Link
              href={GITHUB}
              aria-label="GitHub"
              rel="noopener noreferrer"
              target="_blank"
              className={clsx(profileLink)}
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
              aria-label="X"
              rel="noopener noreferrer"
              target="_blank"
              className={clsx(profileLink)}
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
              aria-label="note"
              rel="noopener noreferrer"
              target="_blank"
              className={clsx(profileLink)}
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
            <Tooltip
              content="Copy Email"
              side="bottom"
              announcement={emailCopied ? "Email Copied!" : ""}
            >
              <button
                aria-label="Copy Email"
                className={clsx(profileLink)}
                onClick={(ev) => {
                  void handleEmailClick(ev);
                }}
              >
                <IoMail className={clsx(profileLinkIcon, profileLinkIconMail)} />
              </button>
            </Tooltip>
          </li>
        </ul>
        <div className={clsx(line)}></div>
        <section className={clsx(occupationContainer)}>
          <h2 ref={occupationRef} className={clsx(cormorant.className, occupation)}>
            <PlayfulText text="Web Design," variant="track" autoPlayDelay={350} />
            <br />
            <PlayfulText text="Frontend Development" variant="type" autoPlayDelay={800} />
          </h2>
          <p ref={descriptionRef} className={clsx(description)}>
            2001年生まれ、放送大学在学中。
            <br />
            <PlayfulText text="趣味は散歩。" variant="walk" />
            <br />
            無為自然でありながら、
            <br className={smBr} />
            有用で美しく、
            <br />
            生命力あふれるものを
            <br />
            「自在」に創れる状態を目指して、
            <br />
            Webについて探求しています。
            <br />
            クリエイティブワーク、
            <br />
            モノづくりの達人になることが
            <br className={smBr} />
            目標です。
          </p>
          <p ref={valueRef} className={clsx(description)}>
            インタラクティブなWeb空間を
            <br />
            構築していく過程では、
            <br />
            触れたときの感触に
            <br className={smBr} />
            何度も立ち返ります。
            <br />
            情報設計・デザイン・
            <br className={smBr} />
            コーディングを
            <br />
            一体で進めながら、
            <br />
            アクセシビリティ・
            <br className={smBr} />
            ユーザビリティ・審美性・
            <br />
            セキュリティ・パフォーマンス・
            <br />
            堅牢性・保守性など
            <br />
            Webに求められる性質を
            <br />
            認知・構造・表現・技術などの
            <br className={smBr} />
            観点から捉えて
            <br />
            設計・実装しています。
            <br />
            Webサイトは、
            <br />
            社会と情報空間の
            <br className={smBr} />
            インターフェイスです。
            <br />
            その内部構造は堅牢に、
            <br />
            触れる面は心地よく。
            <br />
            <PlayfulText text={"失敗に気づけば、\u200b何度でも壊します。"} variant="break" />
            <br />
            ホームページの公開・
            <br className={smBr} />
            運用開始後も
            <br />
            環境の変化に応答しながら
            <br />
            手入れを続けます。
            <br />
            空間コンピューティングや
            <br />
            没入型体験など、
            <br className={wideBr} />
            新しい
            <br className={smBr} />
            ヒューマンインターフェイスへの
            <br />
            応用も視野に入れています。
          </p>
          <section ref={historyRef} className={clsx(section, historySection)}>
            <h3 className={clsx(sectionHeading)}>Experience</h3>
            <dl className={clsx(history)}>
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
              <div>
                <dt className={clsx(year)}>2026–現在</dt>
                <dd className={clsx(event)}>株式会社U-ZERO（業務委託）</dd>
              </div>
            </dl>
          </section>
          <section ref={certificationsRef} className={clsx(section, certificationsSection)}>
            <h3 className={clsx(sectionHeading)}>Certifications</h3>
            <dl className={clsx(certifications)}>
              <div>
                <dt className={clsx(year)}>2021.8</dt>
                <dd className={clsx(event)}>色彩検定2級 合格</dd>
              </div>
              <div>
                <dt className={clsx(year)}>2024.1</dt>
                <dd className={clsx(event)}>基本情報技術者試験 合格</dd>
              </div>
              <div>
                <dt className={clsx(year)}>2025.4</dt>
                <dd className={clsx(event)}>応用情報技術者試験 合格</dd>
              </div>
              <div>
                <dt className={clsx(year)}>2026.9</dt>
                <dd className={clsx(event)}>G検定 #5 合格</dd>
              </div>
            </dl>
          </section>
          <section ref={contributionsRef} className={clsx(section, contributionsSection)}>
            <h3 className={clsx(sectionHeading)}>OSS Contributions</h3>
            <dl className={clsx(contributions)}>
              <div>
                <dt className={clsx(year)}>2026.3</dt>
                <dd className={clsx(event)}>
                  OJPP（Open Japan Politech Platform）
                  <br />
                  ファビコンを追加
                </dd>
              </div>
            </dl>
          </section>
        </section>
      </main>
    </>
  );
}
