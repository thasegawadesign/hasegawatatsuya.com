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
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import Tilt from "react-parallax-tilt";

export default function Main() {
  const occupationRef = useRef(null);
  const descriptionRef = useRef(null);
  const valueRef = useRef(null);
  const historyRef = useRef(null);
  const certificationsRef = useRef(null);

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
            <Link href={GITHUB} aria-label="GitHub" target="_brank">
              <FaGithub className={clsx(profileLinkIcon)} />
            </Link>
          </li>
          <li>
            <Link href={X} aria-label="X" target="_brank">
              <FaXTwitter className={clsx(profileLinkIcon)} />
            </Link>
          </li>
          <li>
            <Link href={NOTE} aria-label="note" target="_brank">
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
            <Link href={`mailto:${EMAIL}`} aria-label="Email" target="_brank">
              <IoMdMail className={clsx(profileLinkIcon)} />
            </Link>
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
            デザインと実装の解像度を高め、
            <br />
            有用で美しいものが
            <br />
            「自在」につくれる状態になることを目指して、
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
            想定される多様な訪問者の
            <br />
            ニーズに応えることを第一に考えます。
            <br />
            情報設計、UX/UIデザイン、コーディングの各段階で
            <br />
            アクセシビリティ、ユーザビリティ、審美性、
            <br />
            セキュリティ、パフォーマンス、保守性など
            <br />
            Webに求められる
            <br />
            基本的な性質を
            <br />
            認知、構造、表現、技術などの観点から
            <br />
            多面的に配慮し、
            <br />
            商売道具としてのホームページが果たす役割に
            <br />
            持続的に応えられるような
            <br />
            安定した品質の成果物を届けることが
            <br />
            私の役割だと捉えています。
            <br />
            さらに、
            <br />
            ホームページ公開、運用開始後も
            <br />
            継続的に改善を重ね、
            <br />
            まさにホームページを
            <br />
            「育てる」姿勢で仕事に取り組みます。
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
