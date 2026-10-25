"use client";

import { char, enChar, enLine, visuallyHidden } from "@/components/typingName/typingName.css";
import clsx from "clsx";
import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";

const JA = "ハセガワ タツヤ";
const EN = "Tatsuya Hasegawa";

// カナ1文字ごとに、同じ音の英字（EN の位置）を同時に出す。英語は名・姓の順なので Hasegawa から灯る
const SYLLABLES: [number, number[]][] = [
  [0, [8, 9]],
  [1, [10, 11]],
  [2, [12, 13]],
  [3, [14, 15]],
  [4, [7]],
  [5, [0, 1]],
  [6, [2, 3, 4]],
  [7, [5, 6]],
];

const LETTER_INTERVAL = 0.018;
// 最初の集合は何が起きたか掴めるかどうかの速さで済ませ、ゆっくり見せるのは入れ替えに任せる。
// 一定の間隔だと機械的に見えるので、人が打つような揺らぎを持たせる
const assembleSyllableInterval = () => gsap.utils.random(0.008, 0.016);
const ASSEMBLE_LETTER_INTERVAL = 0.004;
const ASSEMBLE = 0.22;

// __reactViewTransition は React の内部プロパティなので、activeViewTransition が使えないブラウザの代わりにだけ頼る
const getActiveViewTransition = () => {
  const doc = document as Document & {
    activeViewTransition?: ViewTransition | null;
    __reactViewTransition?: ViewTransition | null;
  };
  return doc.activeViewTransition ?? doc.__reactViewTransition ?? null;
};

interface TypingNameProps {
  jaClassName: string;
  enClassName: string;
}

export default function TypingName({ jaClassName, enClassName }: TypingNameProps) {
  const jaRef = useRef<HTMLSpanElement>(null);
  const enRef = useRef<HTMLSpanElement>(null);

  // View Transition 中の React は useEffect を遷移の終わりまで遅らせ、写真より後に名前が集まってしまうため useLayoutEffect にする
  useLayoutEffect(() => {
    const jaChars = Array.from(jaRef.current?.children ?? []);
    const enChars = Array.from(enRef.current?.children ?? []);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Safari では遷移中の DOM 更新の時点で文字を隠す CSS がまだ効いておらず、完成形のまま写し取られる。
    // 位置まで散らすと写しがはみ出した文字の分だけ巨大になるので、ここでは透明にするだけにとどめる
    gsap.set([...jaChars, ...enChars], { opacity: 0 });

    const reach = Math.hypot(window.innerWidth, window.innerHeight) * 0.6;
    const ARRIVE = 0.7;
    const DEPART = 0.5;

    // 横と縦の動きに別々の緩急をつけると、直線ではなく弧を描いて漂うように動く。
    // どちらの軸を先に進めるかで弧の曲がる向きが変わるので、文字ごとに入れ替える
    const pickEases = (fast: string, slow: string) =>
      Math.random() < 0.5 ? [fast, slow] : [slow, fast];

    // filter や text-shadow は大きな文字だと毎フレームの描き直しが重くカクつくので、
    // GPU で合成できる opacity と transform だけで動かす
    const arrive = (el: Element, distance: number, immediateRender = true, duration = ARRIVE) => {
      const angle = gsap.utils.random(0, Math.PI * 2);
      const [xEase, yEase] = pickEases("expo.out", "power1.inOut");
      return gsap
        .timeline()
        .fromTo(
          el,
          { opacity: 0, rotation: gsap.utils.random(-90, 90), scale: gsap.utils.random(0.6, 1.6) },
          {
            opacity: 1,
            rotation: 0,
            scale: 1,
            duration,
            ease: "expo.out",
            immediateRender,
          },
          0,
        )
        .fromTo(
          el,
          { x: Math.cos(angle) * distance },
          { x: 0, duration, ease: xEase, immediateRender },
          0,
        )
        .fromTo(
          el,
          { y: Math.sin(angle) * distance },
          { y: 0, duration, ease: yEase, immediateRender },
          0,
        )
        .set(el, { clearProps: "transform" });
    };
    const depart = (el: Element, distance: number) => {
      const angle = gsap.utils.random(0, Math.PI * 2);
      const [xEase, yEase] = pickEases("power3.in", "sine.in");
      return gsap
        .timeline()
        .to(
          el,
          {
            opacity: 0,
            rotation: gsap.utils.random(-90, 90),
            scale: gsap.utils.random(0.6, 1.6),
            duration: DEPART,
            ease: "power2.in",
          },
          0,
        )
        .to(el, { x: Math.cos(angle) * distance, duration: DEPART, ease: xEase }, 0)
        .to(el, { y: Math.sin(angle) * distance, duration: DEPART, ease: yEase }, 0);
    };
    const syllableChars = ([ja, en]: [number, number[]]) =>
      [jaChars[ja], ...en.map((i) => enChars[i])].filter((el): el is Element => !!el);

    // 画面の外周あたりのランダムな方向から、それぞれの位置へ集まってくる
    let tl: gsap.core.Timeline | undefined;
    let cancelled = false;
    const build = () => {
      if (cancelled) return;
      tl = gsap.timeline({ onComplete: () => scheduleExchange() });
      let at = 0;
      for (const syllable of SYLLABLES) {
        syllableChars(syllable).forEach((el, n) => {
          tl?.add(
            arrive(el, reach * gsap.utils.random(0.7, 1), true, ASSEMBLE),
            at + n * ASSEMBLE_LETTER_INTERVAL,
          );
        });
        at += assembleSyllableInterval();
      }
    };
    // useSmoothScroll が lagSmoothing(0) にしているので、遷移の準備で描画が止まっていた間の時間が GSAP の時計に一度に足される。
    // 止まっている間に作ると開始が過去になって一瞬で終わるので、次の tick で時計が今に追いついてから作る
    const assemble = () => gsap.ticker.add(build, true);

    // 遷移中も新しいページ側（::view-transition-new）は描かれ続けるので、写真の到着を待たずに集める。
    // 散らすのは、写しが巨大にならないよう写し取りが済んで遷移が動き出して（ready）から
    const transition = getActiveViewTransition();
    if (transition) {
      transition.ready.then(assemble, assemble);
    } else {
      assemble();
    }

    // 集まった後も音節を一つずつ散らしては別の方向から戻し、部品を入れ替えながら形を保ち続ける（動的平衡）
    const exchangeable = SYLLABLES.filter(([ja]) => JA[ja] !== " ");
    let visible = true;
    let exchangeCall: gsap.core.Tween | undefined;
    let exchangeTl: gsap.core.Timeline | undefined;

    const exchange = () => {
      if (visible && !document.hidden) {
        const els = syllableChars(gsap.utils.random(exchangeable));
        const nextTl = gsap.timeline();
        els.forEach((el, n) => {
          const delay = n * LETTER_INTERVAL;
          nextTl.add(depart(el, reach * gsap.utils.random(0.2, 0.35)), delay);
          nextTl.add(arrive(el, reach * gsap.utils.random(0.2, 0.35), false), DEPART + delay);
        });
        exchangeTl = nextTl;
      }
      scheduleExchange();
    };
    const scheduleExchange = () => {
      exchangeCall = gsap.delayedCall(gsap.utils.random(1.5, 3.5), exchange);
    };

    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
    });
    if (jaRef.current) observer.observe(jaRef.current);

    return () => {
      cancelled = true;
      gsap.ticker.remove(build);
      tl?.kill();
      exchangeCall?.kill();
      exchangeTl?.kill();
      gsap.killTweensOf([...jaChars, ...enChars]);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <span className={visuallyHidden}>
        {JA} {EN}
      </span>
      <span ref={jaRef} aria-hidden="true" className={jaClassName}>
        {Array.from(JA).map((c, i) => (
          <span key={i} className={char}>
            {c}
          </span>
        ))}
      </span>
      <span ref={enRef} aria-hidden="true" className={clsx(enClassName, enLine)}>
        {Array.from(EN).map((c, i) => (
          <span key={i} className={clsx(char, enChar)}>
            {c}
          </span>
        ))}
      </span>
    </>
  );
}
