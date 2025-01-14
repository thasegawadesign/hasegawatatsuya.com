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
  header,
  line,
  main,
  nameMainVisual,
  profileContent,
  profileImage,
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
import AudioPlayer from "@/components/audio/audioPlayer";
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
import { desktopBr, mobileBr } from "@/styles/styles.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useAtomValue } from "jotai";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useRef } from "react";

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
  const worksItem1Ref = useRef(null);
  const worksItem2Ref = useRef(null);
  const worksItem3Ref = useRef(null);
  const contactRef = useRef(null);

  const isOpenHamburgerMenu = useAtomValue(isOpenHamburgerMenuAtom);

  const router = useRouter();

  useSmoothScroll();

  const handleTransition = useCallback(
    (event: React.MouseEvent) => {
      event.preventDefault();
      if (document.startViewTransition) {
        document.startViewTransition(() => {
          router.push("/about");
        });
      } else {
        router.push("/about");
      }
    },
    [router]
  );

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      nameMainVisualRef.current,
      {
        opacity: 0,
        scale: 0.98,
        transformOrigin: "center",
      },
      {
        opacity: 1,
        scale: 1,
        duration: 1.5,
        ease: "power2.out",
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
      profileRef.current,
      { opacity: 0, scale: 0.9, rotation: -2 },
      {
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: descriptionRef.current,
          start: "top 50%",
          end: "top 50%",
          scrub: false,
          once: true,
        },
      }
    );
    gsap.fromTo(
      worksItem1Ref.current,
      { opacity: 0, scale: 0.9, rotation: -2 },
      {
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: worksItem1Ref.current,
          start: "top 80%",
          end: "top 50%",
          scrub: false,
          once: true,
        },
      }
    );
    gsap.fromTo(
      worksItem2Ref.current,
      { opacity: 0, scale: 0.9, rotation: -2 },
      {
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: worksItem2Ref.current,
          start: "top 80%",
          end: "top 50%",
          scrub: false,
          once: true,
        },
      }
    );
    gsap.fromTo(
      worksItem3Ref.current,
      { opacity: 0, scale: 0.9, rotation: -2 },
      {
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: worksItem3Ref.current,
          start: "top 80%",
          end: "top 50%",
          scrub: false,
          once: true,
        },
      }
    );
    gsap.fromTo(
      contactRef.current,
      { opacity: 0, scale: 0.96 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: contactRef.current,
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
      <Glass>
        <header className={clsx(header)}>
          <Nav />
          <HamburgerMenu />
          {isOpenHamburgerMenu && <MobileNav />}
          <AudioPlayer />
          <TextCircle />
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
              Webデザイナー 長谷川 達也の <br className={mobileBr} />
              ポートフォリオサイトです。
              <br className={mobileBr} />
              <br className={clsx(desktopBr)} />
              実際に触れることのできる
              <br className={mobileBr} />
              Web作品をデザイン・実装することに
              <br className={mobileBr} />
              喜びを感じます。
              <br className={mobileBr} />
              <br className={clsx(desktopBr)} />
              書いたコードが画面に反映される感動を
              <br className={mobileBr} />
              学習を始めて以来ずっと持ち続けています。
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
                  <Link href={github} target="_brank">
                    <FaGithub className={clsx(profileLinkIcon)} />
                  </Link>
                  <Link href={`mailto:${email}`} target="_brank">
                    <IoMdMail className={clsx(profileLinkIcon)} />
                  </Link>
                </div>
                <Link
                  href={"/about"}
                  className={clsx(roboto.className, profileMore)}
                  onClick={handleTransition}
                >
                  More
                </Link>
              </div>
              <Image
                src={"/photo.webp"}
                width={200}
                height={300}
                alt="長谷川達也"
                className={profileImage}
                view-transition-name={"photo"}
              />
            </section>
          </section>
          <section id="works" className={clsx(worksSection)}>
            <h2 className={clsx(roboto.className, sectionHeading)}>Works</h2>
            <div className={clsx(worksBox)}>
              <section className={clsx(worksItem)} ref={worksItem1Ref}>
                <div className={clsx(worksTextBox)}>
                  <h3 className={clsx(worksName)}>フルール</h3>
                  <p className={clsx(worksCategory)}>Webサイト</p>
                </div>
                <Link href={"/works/fleur"} className={clsx(worksLink)}>
                  <Image
                    src={"/icons/fleur-icon.png"}
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
                  <p className={clsx(worksCategory)}>Webアプリケーション</p>
                </div>
                <Link
                  href={"https://question-and-answer.gojiyuuniotorikudasai.com"}
                  className={clsx(worksLink)}
                  target="_blank"
                >
                  <Image
                    src={"/icons/question-and-answer-icon.png"}
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
                  <p className={clsx(worksCategory)}>Webアプリケーション</p>
                </div>
                <Link
                  href={"https://sutememo.gojiyuuniotorikudasai.com"}
                  className={clsx(worksLink)}
                  target="_blank"
                >
                  <Image
                    src={"/icons/sutememo-icon.png"}
                    width={160}
                    height={160}
                    className={clsx(worksIcon)}
                    alt="ステメモのアイコン"
                  />
                </Link>
              </section>
            </div>
          </section>
          <section id="contact" className={clsx(contactSection)}>
            <h2 className={clsx(roboto.className, sectionHeading)}>Contact</h2>
            <Link
              href={`mailto:${email}`}
              className={clsx(emailLink)}
              ref={contactRef}
            >
              <IoMdMail className={clsx(emailIcon)} />
              <div className={clsx(emailTextBox)}>
                <span className={clsx(roboto.className, emailTextRotateTop)}>
                  {email}
                </span>
                <span className={clsx(roboto.className, emailTextRotateFront)}>
                  {email}
                </span>
              </div>
            </Link>
          </section>
        </main>
        <Footer />
      </Glass>
      <Object1 />
      <Object2 />
      <Object3 />
    </>
  );
}
