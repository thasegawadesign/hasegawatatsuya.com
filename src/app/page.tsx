"use client";

import {
  aboutSection,
  contactSection,
  description,
  desktopBr,
  emailIcon,
  emailLink,
  header,
  line,
  main,
  mobileBr,
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
  worksUnderDevelopment,
  worksUnderDevelopmentItem,
} from "@/app/page.css";
import clsx from "clsx";
import { Cormorant, Roboto } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

import { debounce } from "lodash";

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
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useAtomValue } from "jotai";
import { useRouter } from "next/navigation";
import { MouseEvent, useCallback, useEffect, useRef, useState } from "react";

const cormorant = Cormorant({
  subsets: ["latin"],
  weight: ["500", "600"],
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400"],
});

export default function Home() {
  const mainRef = useRef(null);
  const nameMainVisualRef = useRef(null);
  const descriptionRef = useRef(null);
  const profileRef = useRef(null);
  const worksItem1Ref = useRef(null);
  const worksItem2Ref = useRef(null);
  const worksItem3Ref = useRef(null);
  const contactRef = useRef(null);

  const isOpenHamburgerMenu = useAtomValue(isOpenHamburgerMenuAtom);

  const [lastScrollTop, setLastScrollTop] = useState(0);
  const onlyWidth = useWindowWidth();

  const router = useRouter();

  const handleTransition = useCallback(
    (event: MouseEvent) => {
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

  return (
    <>
      <Glass>
        <header className={clsx(header)}>
          <Nav />
          <HamburgerMenu />
          {isOpenHamburgerMenu && <MobileNav />}
          <AudioButton />
          <TextCircle />
        </header>
        <main ref={mainRef} className={clsx(main)}>
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
              クリエイティブエンジニア 長谷川 達也の <br className={mobileBr} />
              ポートフォリオサイトです。
              <br className={mobileBr} />
              <br className={clsx(desktopBr)} />
              実際に触れることのできる
              <br className={mobileBr} />
              フロントエンドを開発することに
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
                    Creative Developer
                  </p>
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
                  <h3 className={clsx(worksName)}>一問一答メーカー</h3>
                  <p className={clsx(worksCategory)}>Webアプリ</p>
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
              <section className={clsx(worksItem)} ref={worksItem2Ref}>
                <div className={clsx(worksTextBox)}>
                  <h3 className={clsx(worksName)}>ステメモ</h3>
                  <p className={clsx(worksCategory)}>Webアプリ</p>
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
              <section
                className={clsx(worksUnderDevelopmentItem)}
                ref={worksItem3Ref}
              >
                <h3 className={clsx(roboto.className, worksUnderDevelopment)}>
                  under development...
                </h3>
              </section>
            </div>
          </section>
          <section id="contact" className={clsx(contactSection)}>
            <h2 className={clsx(roboto.className, sectionHeading)}>Contact</h2>
            <Link
              href={"mailto:hasegawatatsuya206@gmail.com"}
              className={clsx(emailLink)}
              ref={contactRef}
            >
              <IoMdMail className={clsx(emailIcon)} />
              <span className={clsx(roboto.className)}>
                hasegawatatsuya206@gmail.com
              </span>
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
