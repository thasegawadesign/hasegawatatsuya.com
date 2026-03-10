import { roboto } from "@/app/fonts";
import {
  logo,
  nav,
  navLink,
  navLinkBox,
  navLogoBox,
} from "@/components/nav/nav.css";
import { haptic } from "@/lib/haptic";
import clsx from "clsx";
import Link from "next/link";

export default function Nav() {
  return (
    <nav className={clsx(nav)} aria-label="グローバル">
      <ul className={clsx(navLogoBox)}>
        <li>
          <Link
            href={"/"}
            className={clsx(roboto.className, logo)}
            onClick={() => haptic()}
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
            onClick={() => haptic()}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href={"/#works"}
            className={clsx(roboto.className, navLink)}
            onClick={() => haptic()}
          >
            Works
          </Link>
        </li>
        <li>
          <Link
            href={"/#contact"}
            className={clsx(roboto.className, navLink)}
            onClick={() => haptic()}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
