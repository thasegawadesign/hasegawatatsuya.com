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
import { haptic } from "@/lib/haptic";
import { playSfxClick } from "@/lib/playSfx";
import { FocusScope } from "@react-aria/focus";
import { useWindowWidth } from "@react-hook/window-size";
import clsx from "clsx";
import gsap from "gsap";
import { useAtom } from "jotai";
import Link from "next/link";
import { useEffect, useRef } from "react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/#works", label: "Works" },
  { href: "/#tools", label: "Tools" },
  { href: "/#playgrounds", label: "Playgrounds" },
  { href: "/#contact", label: "Contact" },
] as const;

export default function MobileNav() {
  const width = useWindowWidth();
  const navLinkRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const [isOpenHamburgerMenu, setIsOpenHamburgerMenu] = useAtom(isOpenHamburgerMenuAtom);

  const closeMenu = () => {
    setIsOpenHamburgerMenu(false);
    playSfxClick();
    haptic();
  };

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

      const linkAnimation = { opacity: 1, duration: 1.5, ease: "power2.out" };

      navLinkRefs.current.forEach((link) => {
        if (link) {
          gsap.fromTo(link, { opacity: 0 }, linkAnimation);
        }
      });
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
    <FocusScope contain restoreFocus autoFocus>
      <nav className={clsx(mobileNav)} aria-label="グローバル">
        <ul className={clsx(mobileNavCrossBox)}>
          <li>
            <button
              className={mobileNavCross}
              aria-label="メニューを閉じる"
              onClick={closeMenu}
            ></button>
          </li>
        </ul>
        <ul className={clsx(mobileNavLinkBox)}>
          {NAV_LINKS.map((link, index) => (
            <li key={link.href}>
              <Link
                href={link.href}
                ref={(el) => {
                  navLinkRefs.current[index] = el;
                }}
                className={clsx(roboto.className, mobileNavLink)}
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </FocusScope>
  );
}
