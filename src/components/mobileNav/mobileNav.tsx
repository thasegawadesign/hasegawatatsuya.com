"use client";

import { roboto } from "@/app/fonts";
import { isOpenHamburgerMenuAtom } from "@/atoms/isOpenHamburgerMenuAtom";
import {
  mobileNav,
  mobileNavCross,
  mobileNavCrossBox,
  mobileNavLink,
  mobileNavLinkBox,
} from "@/components/mobileNav/mobileNav.css";
import { useWindowWidth } from "@react-hook/window-size";
import clsx from "clsx";
import { FocusTrap } from "focus-trap-react";
import gsap from "gsap";
import { useAtom } from "jotai";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function MobileNav() {
  const width = useWindowWidth();

  const mobileNavHomeLinkRef = useRef(null);
  const mobileNavAboutLinkRef = useRef(null);
  const mobileNavWorksLinkRef = useRef(null);
  const mobileNavContactLinkRef = useRef(null);

  const [isOpenHamburgerMenu, setIsOpenHamburgerMenu] = useAtom(
    isOpenHamburgerMenuAtom
  );

  useEffect(() => {
    if (width >= 640 && isOpenHamburgerMenu) {
      setIsOpenHamburgerMenu(false);
    }
  }, [isOpenHamburgerMenu, setIsOpenHamburgerMenu, width]);

  useEffect(() => {
    const noscroll = (event: WheelEvent | TouchEvent) => {
      event.preventDefault();
    };
    if (isOpenHamburgerMenu) {
      document.addEventListener("wheel", noscroll, { passive: false });
      document.addEventListener("touchmove", noscroll, { passive: false });
      gsap.fromTo(
        mobileNavHomeLinkRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1.5, ease: "power2.out" }
      );
      gsap.fromTo(
        mobileNavAboutLinkRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1.5, ease: "power2.out" }
      );
      gsap.fromTo(
        mobileNavWorksLinkRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1.5, ease: "power2.out" }
      );
      gsap.fromTo(
        mobileNavContactLinkRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1.5, ease: "power2.out" }
      );
    } else {
      document.removeEventListener("wheel", noscroll);
      document.removeEventListener("touchmove", noscroll);
    }

    return () => {
      document.removeEventListener("wheel", noscroll);
      document.removeEventListener("touchmove", noscroll);
    };
  }, [isOpenHamburgerMenu]);

  return (
    <FocusTrap active={isOpenHamburgerMenu}>
      <nav className={clsx(mobileNav)} aria-label="グローバル">
        <ul className={clsx(mobileNavCrossBox)}>
          <li>
            <button
              className={mobileNavCross}
              aria-label="メニューを閉じる"
              onClick={() => setIsOpenHamburgerMenu(false)}
            ></button>
          </li>
        </ul>
        <ul className={clsx(mobileNavLinkBox)}>
          <li>
            <Link
              href={"/"}
              ref={mobileNavHomeLinkRef}
              className={clsx(roboto.className, mobileNavLink)}
              onClick={() => {
                setIsOpenHamburgerMenu(false);
              }}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href={"/about"}
              ref={mobileNavAboutLinkRef}
              className={clsx(roboto.className, mobileNavLink)}
              onClick={() => {
                setIsOpenHamburgerMenu(false);
              }}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href={"/#works"}
              ref={mobileNavWorksLinkRef}
              className={clsx(roboto.className, mobileNavLink)}
              onClick={() => setIsOpenHamburgerMenu(false)}
            >
              Works
            </Link>
          </li>
          <li>
            <Link
              href={"/#contact"}
              ref={mobileNavContactLinkRef}
              className={clsx(roboto.className, mobileNavLink)}
              onClick={() => setIsOpenHamburgerMenu(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </FocusTrap>
  );
}
