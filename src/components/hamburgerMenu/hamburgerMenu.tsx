import { isOpenHamburgerMenuAtom } from "@/atoms/isOpenHamburgerMenuAtom";
import {
  hamburgerMenu,
  hamburgerMenuLine,
} from "@/components/hamburgerMenu/hamburgerMenu.css";
import clsx from "clsx";
import { useAtom } from "jotai";

export default function HamburgerMenu() {
  const [, setIsOpenHamburgerMenu] = useAtom(isOpenHamburgerMenuAtom);

  return (
    <button
      className={clsx(hamburgerMenu)}
      onClick={() => setIsOpenHamburgerMenu(true)}
    >
      <div className={clsx(hamburgerMenuLine)}></div>
      <div className={clsx(hamburgerMenuLine)}></div>
      <div className={clsx(hamburgerMenuLine)}></div>
    </button>
  );
}
