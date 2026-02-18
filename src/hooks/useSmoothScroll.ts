import Lenis from "lenis";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function useSmoothScroll() {
  const router = useRouter();

  useEffect(() => {
    const lenis = new Lenis();
    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    const scrollToElement = (elementId: string) => {
      const targetElement = document.querySelector(elementId) as HTMLElement;
      if (targetElement) {
        lenis.scrollTo(targetElement);
      }
    };
    const handleClick = (event: MouseEvent) => {
      event.preventDefault();
      const targetId = (event.currentTarget as HTMLAnchorElement)
        .getAttribute("href")
        ?.substring(1);
      scrollToElement(targetId || "");
      router.push(`/${targetId}`);
    };

    const anchorLinks = document.querySelectorAll('a[href^="/#"]');
    anchorLinks.forEach((link) => {
      (link as HTMLAnchorElement).addEventListener("click", handleClick);
    });

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      anchorLinks.forEach((link) => {
        (link as HTMLAnchorElement).removeEventListener("click", handleClick);
      });
    };
  }, [router]);
}
