"use client";

import { cormorant, notoSerifJP } from "@/app/fonts";
import {
  aboutHero,
  certifications,
  description,
  event,
  history,
  line,
  main,
  nameBox,
  nameEn,
  nameJa,
  occupation,
  photo,
  photoBox,
  profileLink,
  profileLinkBox,
  profileLinkIcon,
  tilt,
  year,
} from "@/components/main/about/main.css";
import Tooltip from "@/components/tooltip/tooltip";
import { EMAIL, GITHUB, NOTE, X } from "@/constants/constants";
import { useClipboard } from "@/hooks/useClipboard";
import { gsapAnimation } from "@/utils/gsap";
import clsx from "clsx";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import Tilt from "react-parallax-tilt";

export default function Main() {
  const occupationRef = useRef(null);
  const descriptionRef = useRef(null);
  const valueRef = useRef(null);
  const historyRef = useRef(null);
  const certificationsRef = useRef(null);

  const { copy } = useClipboard();

  const handleEmailClick = async () => {
    await copy(EMAIL);
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsapAnimation.inview(occupationRef);
    gsapAnimation.inview(descriptionRef);
    gsapAnimation.inview(valueRef);
    gsapAnimation.inview(historyRef);
    gsapAnimation.inview(certificationsRef);
  }, []);

  return (
    <>
      <main className={clsx(main)}>
        <section className={clsx(aboutHero)}>
          <h1 className={nameBox}>
            <span className={clsx(notoSerifJP.className, nameJa)}>
              ハセガワ タツヤ
            </span>
            <span className={clsx(cormorant.className, nameEn)}>
              Tatsuya Hasegawa
            </span>
          </h1>
          <Tilt
            tiltMaxAngleX={6}
            tiltMaxAngleY={6}
            perspective={800}
            scale={1.0}
            transitionSpeed={800}
            trackOnWindow={true}
            reset={false}
            className={clsx(tilt)}
          >
            <div className={clsx(photoBox)}>
              <Image
                src={"/photo.avif"}
                width={320}
                height={480}
                alt="長谷川達也"
                className={photo}
                priority
                view-transition-name={"photo"}
              />
            </div>
          </Tilt>
        </section>
        <ul className={clsx(profileLinkBox)}>
          <li>
            <Link
              href={GITHUB}
              aria-label="GitHub"
              target="_brank"
              className={clsx(profileLink)}
            >
              <FaGithub className={clsx(profileLinkIcon)} />
            </Link>
          </li>
          <li>
            <Link
              href={X}
              aria-label="X"
              target="_brank"
              className={clsx(profileLink)}
            >
              <FaXTwitter className={clsx(profileLinkIcon)} />
            </Link>
          </li>
          <li>
            <Link
              href={NOTE}
              aria-label="note"
              target="_brank"
              className={clsx(profileLink)}
            >
              <Image
                src="/icons/note-icon.svg"
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
                onClick={handleEmailClick}
                className={clsx(profileLink)}
                aria-label="Copy Email"
              >
                <IoMail className={clsx(profileLinkIcon)} />
              </button>
            </Tooltip>
          </li>
        </ul>
        <div className={clsx(line)}></div>
        <section>
          <h2
            ref={occupationRef}
            className={clsx(cormorant.className, occupation)}
          >
            Web Design,
            <br />
            Front-end Development
          </h2>
          <p ref={descriptionRef} className={clsx(description)}>
            2001年生まれ、放送大学在学中。
            <br />
            趣味は散歩。
            <br />
            感覚の分解能と意識の解像度を磨き、
            <br />
            自然と調和したものが
            <br />
            「自在」に創れる状態を目指して、
            <br />
            Webについて勉強しています。
            <br />
            クリエイティブワーク、
            <br />
            モノづくりの達人が目標です。
          </p>
          <p ref={valueRef} className={clsx(description)}>
            ホームページ制作の実務においては、
            <br />
            想定される訪問者・ユーザのニーズを起点に考えます。
            <br />
            情報設計・デザイン・コーディングの各工程で
            <br />
            アクセシビリティ・ユーザビリティ・審美性・
            <br />
            セキュリティ・パフォーマンス・保守性・堅牢性など
            <br />
            Webに求められる性質を
            <br />
            認知・構造・表現・技術などの観点から
            <br />
            細心の注意を払って設計・実装しています。
            <br />
            商売道具としてのホームページが果たす役割に
            <br />
            持続的に応えられるよう、揺らぎの少ない、
            <br />
            安定したプロダクトを届けることが
            <br />
            私の役割だと捉えています。
            <br />
            さらに、ホームページ公開、運用開始後も改善を重ね、
            <br />
            プロダクトを育てる姿勢で仕事に取り組みます。
            <br />
            加えて、将来的には
            <br />
            空間コンピューティングや没入型体験など、
            <br />
            新しいヒューマンインターフェイスへの
            <br />
            応用も視野に入れています。
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
          <dl ref={certificationsRef} className={clsx(certifications)}>
            <div>
              <dt className={clsx(year)}>2021.08</dt>
              <dd className={clsx(event)}>色彩検定2級 合格</dd>
            </div>
            <div>
              <dt className={clsx(year)}>2024.01</dt>
              <dd className={clsx(event)}>基本情報技術者試験 合格</dd>
            </div>
            <div>
              <dt className={clsx(year)}>2025.04</dt>
              <dd className={clsx(event)}>応用情報技術者試験 合格</dd>
            </div>
          </dl>
        </section>
      </main>
    </>
  );
}
