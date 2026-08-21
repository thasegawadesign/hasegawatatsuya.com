import { roboto } from "@/app/fonts";
import { logo, nav, navLink, navLinkBox, navLogoBox } from "@/components/nav/nav.css";
import { haptic } from "@/lib/haptic";
import { playSfxClick } from "@/lib/playSfx";
import { preloadAboutPhoto } from "@/lib/preloadAboutPhoto";
import clsx from "clsx";
import Link from "next/link";

const NAV_LINKS = [
  { href: "/about", label: "About" },
  { href: "/#works", label: "Works" },
  { href: "/#tools", label: "Tools" },
  { href: "/#playgrounds", label: "Playgrounds" },
  { href: "/#contact", label: "Contact" },
] as const;

function handleNavClick() {
  playSfxClick();
  haptic();
}

function maybePreloadAboutPhoto(href: string) {
  if (href === "/about") preloadAboutPhoto();
}

export default function Nav() {
  return (
    <nav className={clsx(nav)} aria-label="グローバル">
      <ul className={clsx(navLogoBox)}>
        <li>
          <Link href="/" className={clsx(roboto.className, logo)} onClick={handleNavClick}>
            TH
          </Link>
        </li>
      </ul>
      <ul className={clsx(navLinkBox)}>
        {NAV_LINKS.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className={clsx(roboto.className, navLink)}
              onClick={handleNavClick}
              onMouseEnter={() => maybePreloadAboutPhoto(href)}
              onTouchStart={() => maybePreloadAboutPhoto(href)}
              onFocus={() => maybePreloadAboutPhoto(href)}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
