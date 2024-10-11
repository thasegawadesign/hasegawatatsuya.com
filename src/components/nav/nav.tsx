import { logo, nav, navLink, navLinkBox } from "@/components/nav/nav.css";
import clsx from "clsx";
import { Roboto } from "next/font/google";
import Link from "next/link";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400"],
});

export default function Nav() {
  return (
    <nav className={clsx(nav)}>
      <ul>
        <li>
          <Link href={"/#home"} className={clsx(roboto.className, logo)}>
            TH
          </Link>
        </li>
      </ul>
      <ul className={clsx(navLinkBox)}>
        <li>
          <Link href={"/#home"} className={clsx(roboto.className, navLink)}>
            Home
          </Link>
        </li>
        <li>
          <Link href={"/#about"} className={clsx(roboto.className, navLink)}>
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
