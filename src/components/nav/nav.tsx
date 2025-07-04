"use client";

import {
  logo,
  nav,
  navLink,
  navLinkBox,
  navLogoBox,
} from "@/components/nav/nav.css";
import { useViewTransition } from "@/hooks/useViewTransition";
import clsx from "clsx";
import { Roboto } from "next/font/google";
import Link from "next/link";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400"],
});

export default function Nav() {
  const handleTransition = useViewTransition();

  return (
    <nav className={clsx(nav)}>
      <ul className={clsx(navLogoBox)}>
        <li>
          <Link
            href={"/"}
            className={clsx(roboto.className, logo)}
            onClick={handleTransition("/")}
          >
            TH
          </Link>
        </li>
      </ul>
      <ul className={clsx(navLinkBox)}>
        <li>
          <Link
            href={"/about"}
            className={clsx(roboto.className, navLink)}
            onClick={handleTransition("/about")}
          >
            About
          </Link>
        </li>
        <li>
          <Link href={"/#works"} className={clsx(roboto.className, navLink)}>
            Works
          </Link>
        </li>
        <li>
          <Link href={"/#contact"} className={clsx(roboto.className, navLink)}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
