import { isOpenHamburgerMenuAtom } from "@/atoms/isOpenHamburgerMenuAtom";
import {
  hamburgerMenu,
  hamburgerMenuLine,
} from "@/components/hamburgerMenu/hamburgerMenu.css";
import { haptic } from "@/utils/haptic";
import clsx from "clsx";
import { useAtom } from "jotai";

export default function HamburgerMenu() {
  const [, setIsOpenHamburgerMenu] = useAtom(isOpenHamburgerMenuAtom);

  return (
    <button
      className={clsx(hamburgerMenu)}
      aria-label="メニューを開く"
      onClick={() => {
        setIsOpenHamburgerMenu(true);
        haptic();
      }}
    >
      <div className={clsx(hamburgerMenuLine)}></div>
      <div className={clsx(hamburgerMenuLine)}></div>
      <div className={clsx(hamburgerMenuLine)}></div>
    </button>
  );
}
