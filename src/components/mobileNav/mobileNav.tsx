"use client";

import { isOpenHamburgerMenuAtom } from "@/atoms/isOpenHamburgerMenuAtom";
import {
  mobileNav,
  mobileNavCross,
  mobileNavCrossBox,
  mobileNavLink,
  mobileNavLinkBox,
} from "@/components/mobileNav/mobileNav.css";
import clsx from "clsx";
import gsap from "gsap";
import { useAtom } from "jotai";
import { Roboto } from "next/font/google";
import Link from "next/link";
import { useEffect, useRef } from "react";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400"],
});

export default function MobileNav() {
  const mobileNavHomeLinkRef = useRef(null);
  const mobileNavAboutLinkRef = useRef(null);
  const mobileNavWorksLinkRef = useRef(null);
  const mobileNavContactLinkRef = useRef(null);

  const [isOpenHamburgerMenu, setIsOpenHamburgerMenu] = useAtom(
    isOpenHamburgerMenuAtom
  );

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
    <nav className={clsx(mobileNav)}>
      <ul className={clsx(mobileNavCrossBox)}>
        <li>
          <button
            className={mobileNavCross}
            onClick={() => setIsOpenHamburgerMenu(false)}
          ></button>
        </li>
      </ul>
      <ul className={clsx(mobileNavLinkBox)}>
        <li>
          <Link
            href={"/#home"}
            ref={mobileNavHomeLinkRef}
            className={clsx(roboto.className, mobileNavLink)}
            onClick={() => setIsOpenHamburgerMenu(false)}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href={"/about"}
            ref={mobileNavAboutLinkRef}
            className={clsx(roboto.className, mobileNavLink)}
            onClick={() => setIsOpenHamburgerMenu(false)}
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
  );
}
