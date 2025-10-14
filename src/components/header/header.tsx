"use client";

import { isOpenHamburgerMenuAtom } from "@/atoms/isOpenHamburgerMenuAtom";
import HamburgerMenu from "@/components/hamburgerMenu/hamburgerMenu";
import { header } from "@/components/header/header.css";
import MobileNav from "@/components/mobileNav/mobileNav";
import Nav from "@/components/nav/nav";
import TextCircle from "@/components/textCircle/textCircle";
import clsx from "clsx";
import { useAtomValue } from "jotai";

export default function Header() {
  const isOpenHamburgerMenu = useAtomValue(isOpenHamburgerMenuAtom);

  return (
    <>
      <header className={clsx(header)}>
        <Nav />
        <HamburgerMenu />
        {isOpenHamburgerMenu && <MobileNav />}
        {!isOpenHamburgerMenu && <TextCircle />}
      </header>
    </>
  );
}
