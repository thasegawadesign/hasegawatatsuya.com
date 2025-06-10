"use client";

import {
  logo,
  nav,
  navLink,
  navLinkBox,
  navLogoBox,
} from "@/components/nav/nav.css";
import clsx from "clsx";
import { Roboto } from "next/font/google";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400"],
});

export default function Nav() {
  const router = useRouter();

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

  return (
    <nav className={clsx(nav)}>
      <ul className={clsx(navLogoBox)}>
        <li>
          <Link href={"/#home"} className={clsx(roboto.className, logo)}>
            TH
          </Link>
        </li>
      </ul>
      <ul className={clsx(navLinkBox)}>
        <li>
          <Link
            href={"/about"}
            className={clsx(roboto.className, navLink)}
            onClick={handleTransition}
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
