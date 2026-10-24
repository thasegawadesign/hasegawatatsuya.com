import { isOpenHamburgerMenuAtom } from "@/atoms/isOpenHamburgerMenuAtom";
import {
  hamburgerMenu,
  hamburgerMenuLine,
  hamburgerSlot,
} from "@/components/hamburgerMenu/hamburgerMenu.css";
import { haptic } from "@/lib/haptic";
import { playSfxClick } from "@/lib/playSfx";
import clsx from "clsx";
import { useAtom } from "jotai";

export default function HamburgerMenu() {
  const [, setIsOpenHamburgerMenu] = useAtom(isOpenHamburgerMenuAtom);

  return (
    <button
      className={clsx(hamburgerSlot, hamburgerMenu)}
      aria-label="メニューを開く"
      onClick={() => {
        setIsOpenHamburgerMenu(true);
        playSfxClick();
        haptic();
      }}
    >
      <div className={clsx(hamburgerMenuLine)}></div>
      <div className={clsx(hamburgerMenuLine)}></div>
      <div className={clsx(hamburgerMenuLine)}></div>
    </button>
  );
}
