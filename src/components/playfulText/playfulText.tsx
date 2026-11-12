"use client";

import {
  caret,
  char,
  glyph,
  root,
  untyped,
  visuallyHidden,
  word,
} from "@/components/playfulText/playfulText.css";
import { haptic } from "@/lib/haptic";
import { triggerLiquidShockwave } from "@/lib/liquidShockwave";
import { createSpring, type Spring } from "@/lib/spring";
import clsx from "clsx";
import { Fragment, useEffect, useMemo, useRef, type MouseEvent, type PointerEvent } from "react";

type Variant = "lift" | "break" | "walk" | "track" | "type";

interface Props {
  readonly text: string;
  readonly variant: Variant;
  readonly className?: string;
  readonly autoPlayDelay?: number;
}

type Pose = { x: number; y: number; rotation: number; scale: number };
type CharSpring = Spring<keyof Pose>;

const REST: Pose = { x: 0, y: 0, rotation: 0, scale: 1 };
const SPRING = { tension: 260, friction: 14 };

const WAVE_STAGGER_MS = 38;
const WAVE_HOLD_MS = 130;
const BREAK_FALL_MS = 200;
const BREAK_HOLD_MS = 1050;
const BREAK_EDGE_PX = 12;
const BREAK_RETURN_STAGGER_MS = 34;
const WALK_STEPS = 4;
const WALK_STRIDE_EM = 0.38;
const WALK_STEP_MS = 270;
const WALK_LAND_MS = 130;
const WALK_FOLLOW_MS = 80;
const WALK_PAUSE_MS = 450;
const TRACK_HOLD_MS = 420;
const TRACK_RETURN_STAGGER_MS = 26;
const TYPE_KEY_MIN_MS = 30;
const TYPE_KEY_JITTER_MS = 32;
const TYPE_SPACE_MS = 60;
const TYPE_GLYPH_MS = 60;
const TYPE_GLYPH_STEPS = 3;
const TYPE_GLYPH_SCALE = 0.62;
const TYPE_CARET_LINGER_MS = 260;
const TYPE_GLYPHS = "<>/{}()[];:=.$&|!#";
const ASCII_WORD = /^[\x21-\x7e]+$/;
const WORD_BREAK = /[ \u200b]/;

export default function PlayfulText({ text, variant, className, autoPlayDelay }: Props) {
  const words = useMemo(() => {
    let start = 0;
    return text.split(WORD_BREAK).map((w, wi, all) => {
      const wordChars = Array.from(w);
      const offset = all.slice(0, wi).join("").length + wi;
      const entry = {
        chars: wordChars,
        start,
        latin: ASCII_WORD.test(w),
        spaced: wi > 0 && text[offset - 1] === " ",
      };
      start += wordChars.length;
      return entry;
    });
  }, [text]);
  const chars = useMemo(() => words.flatMap((w) => w.chars), [words]);
  const tilts = useMemo(
    () => chars.map((_, i) => Math.sin(i * 12.9898) * 0.5 + Math.cos(i * 4.1414) * 0.5),
    [chars],
  );

  const rootRef = useRef<HTMLSpanElement>(null);
  const charRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const springsRef = useRef<CharSpring[]>([]);
  const hoverPosesRef = useRef<Pose[]>([]);
  const timeoutsRef = useRef<ReturnType<typeof setTimeout>[]>([]);
  const busyRef = useRef(false);
  const caretRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const springs = charRefs.current
      .slice(0, chars.length)
      .map((el) => createSpring(el!, REST, SPRING));
    springsRef.current = springs;
    hoverPosesRef.current = chars.map(() => REST);
    const timeouts = timeoutsRef.current;
    return () => {
      for (const s of springs) s.stop();
      for (const t of timeouts) clearTimeout(t);
      timeouts.length = 0;
      springsRef.current = [];
      busyRef.current = false;
    };
  }, [chars]);

  // 一文字ずつ inline-block に分けるとフォントのペアカーニングが効かない。
  // px で持つと文字サイズが変わるたびに測り直しが要るので em にしている
  useEffect(() => {
    let cancelled = false;
    const applyKerning = () => {
      const rootEl = rootRef.current;
      const ctx = document.createElement("canvas").getContext("2d");
      if (cancelled || !rootEl || !ctx) return;
      const cs = getComputedStyle(rootEl);
      const fontSize = parseFloat(cs.fontSize);
      ctx.font = `${cs.fontStyle} ${cs.fontWeight} ${cs.fontSize} ${cs.fontFamily}`;
      const width = (t: string) => ctx.measureText(t).width;
      for (const w of words) {
        if (!w.latin) continue;
        for (let j = 1; j < w.chars.length; j++) {
          const el = charRefs.current[w.start + j];
          if (!el) continue;
          const [prev, cur] = [w.chars[j - 1], w.chars[j]];
          const kern = width(prev + cur) - width(prev) - width(cur);
          el.style.marginLeft = `${kern / fontSize}em`;
        }
      }
    };
    void document.fonts.ready.then(applyKerning);
    return () => {
      cancelled = true;
    };
  }, [words]);

  const reducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const later = (fn: () => void, ms: number) => {
    timeoutsRef.current.push(setTimeout(fn, ms));
  };

  const clearTimers = () => {
    for (const t of timeoutsRef.current) clearTimeout(t);
    timeoutsRef.current.length = 0;
  };

  // 変形中の文字の getBoundingClientRect は位置がぶれるので使わない
  const measure = () => {
    const rootEl = rootRef.current;
    if (!rootEl) return null;
    return {
      fontSize: parseFloat(getComputedStyle(rootEl).fontSize),
      centers: charRefs.current.slice(0, chars.length).map((el) => {
        const wordEl = el?.parentElement;
        if (!el || !wordEl) return 0;
        const rect = wordEl.getBoundingClientRect();
        const scale = wordEl.offsetWidth ? rect.width / wordEl.offsetWidth : 1;
        return rect.left + (el.offsetLeft + el.offsetWidth / 2) * scale;
      }),
    };
  };

  const nearestIndex = (centers: number[], clientX: number) => {
    let nearest = 0;
    centers.forEach((cx, i) => {
      if (Math.abs(clientX - cx) < Math.abs(clientX - centers[nearest])) nearest = i;
    });
    return nearest;
  };

  const wave = (clientX: number) => {
    const measured = measure();
    if (!measured) return;
    const { fontSize, centers } = measured;
    const origin = nearestIndex(centers, clientX);
    clearTimers();
    centers.forEach((_, i) => {
      const distance = Math.abs(i - origin);
      const falloff = 1 / (1 + distance * 0.16);
      later(() => {
        springsRef.current[i]?.start({
          y: -fontSize * 0.95 * falloff,
          rotation: tilts[i] * 26 * falloff,
          scale: 1 + 0.42 * falloff,
        });
      }, distance * WAVE_STAGGER_MS);
      later(
        () => springsRef.current[i]?.start(hoverPosesRef.current[i]),
        distance * WAVE_STAGGER_MS + WAVE_HOLD_MS,
      );
    });
  };

  const shatter = (clientX: number) => {
    const measured = measure();
    if (!measured) return;
    const { fontSize, centers } = measured;
    const origin = nearestIndex(centers, clientX);
    clearTimers();
    busyRef.current = true;
    hoverPosesRef.current = chars.map(() => REST);
    // transform ではみ出した分も横スクロール幅に入る
    const minX = BREAK_EDGE_PX;
    const maxX = window.innerWidth - BREAK_EDGE_PX;
    let longest = 0;
    centers.forEach((cx, i) => {
      const side = cx === clientX ? (Math.random() < 0.5 ? -1 : 1) : Math.sign(cx - clientX);
      const near = 1 / (1 + Math.abs(i - origin) * 0.18);
      const reach = side * fontSize * (1.2 + Math.random() * 3.2) * (0.5 + near);
      const clampX = (x: number) => Math.min(maxX, Math.max(minX, cx + x)) - cx;
      const spin = (Math.random() - 0.5) * 520;
      springsRef.current[i]?.start({
        x: clampX(reach),
        y: -fontSize * (0.6 + Math.random() * 2.6) * (0.5 + near),
        rotation: spin,
        scale: 0.6 + Math.random() * 0.9,
      });
      later(
        () => {
          springsRef.current[i]?.start({
            x: clampX(reach * 1.25),
            y: fontSize * (2.2 + Math.random() * 3.8),
            rotation: spin * 1.8,
          });
        },
        BREAK_FALL_MS + Math.random() * 120,
      );
      const back = BREAK_HOLD_MS + Math.abs(i - origin) * BREAK_RETURN_STAGGER_MS;
      longest = Math.max(longest, back);
      later(() => springsRef.current[i]?.start(REST), back);
    });
    later(() => {
      busyRef.current = false;
    }, longest);
  };

  const stroll = () => {
    if (busyRef.current) return;
    const measured = measure();
    if (!measured) return;
    const { fontSize } = measured;
    busyRef.current = true;
    const count = chars.length;
    const stride = fontSize * WALK_STRIDE_EM;
    const step = (i: number, at: number, toStep: number, foot: number) => {
      later(() => {
        springsRef.current[i]?.start({
          x: stride * toStep,
          y: -fontSize * 0.17,
          rotation: foot * 9,
        });
      }, at);
      later(() => springsRef.current[i]?.start({ y: 0, rotation: -foot * 3 }), at + WALK_LAND_MS);
    };
    const arrive = WALK_STEPS * WALK_STEP_MS + (count - 1) * WALK_FOLLOW_MS;
    const depart = arrive + WALK_PAUSE_MS;
    for (let i = 0; i < count; i++) {
      const outLag = (count - 1 - i) * WALK_FOLLOW_MS;
      const backLag = i * WALK_FOLLOW_MS;
      for (let k = 1; k <= WALK_STEPS; k++) {
        step(i, outLag + (k - 1) * WALK_STEP_MS, k, (i + k) % 2 ? 1 : -1);
      }
      later(() => springsRef.current[i]?.start({ rotation: -8 }), arrive + 60 + i * 30);
      later(() => springsRef.current[i]?.start({ rotation: 6 }), arrive + 260 + i * 30);
      for (let k = WALK_STEPS - 1; k >= 0; k--) {
        const at = depart + backLag + (WALK_STEPS - 1 - k) * WALK_STEP_MS;
        step(i, at, k, (i + k) % 2 ? -1 : 1);
      }
      later(() => springsRef.current[i]?.start(REST), depart + backLag + WALK_STEPS * WALK_STEP_MS);
    }
    later(
      () => {
        busyRef.current = false;
      },
      depart + (count - 1) * WALK_FOLLOW_MS + WALK_STEPS * WALK_STEP_MS,
    );
  };

  const track = () => {
    const rootEl = rootRef.current;
    if (busyRef.current || !rootEl) return;
    const measured = measure();
    if (!measured) return;
    const { fontSize } = measured;
    busyRef.current = true;
    const align = getComputedStyle(rootEl).textAlign;
    const last = chars.length - 1;
    const anchor = align === "left" || align === "start" ? 0 : last / 2;
    chars.forEach((_, i) => {
      springsRef.current[i]?.start({ x: (i - anchor) * fontSize * 0.07 });
      later(
        () => springsRef.current[i]?.start(REST),
        TRACK_HOLD_MS + Math.abs(i - anchor) * TRACK_RETURN_STAGGER_MS,
      );
    });
    later(
      () => {
        busyRef.current = false;
      },
      TRACK_HOLD_MS + Math.max(anchor, last - anchor) * TRACK_RETURN_STAGGER_MS,
    );
  };

  const type = () => {
    const caretEl = caretRef.current;
    if (busyRef.current || !caretEl) return;
    busyRef.current = true;
    const els = charRefs.current.slice(0, chars.length);
    for (const el of els) el?.classList.add(untyped);
    const edge = (i: number, after: boolean) => {
      const el = els[i];
      const wordEl = el?.parentElement;
      if (!el || !wordEl) return 0;
      return wordEl.offsetLeft + el.offsetLeft + (after ? el.offsetWidth : 0);
    };
    const moveCaret = (x: number) => {
      caretEl.style.transform = `translateX(${x}px)`;
    };
    caretEl.style.opacity = "1";
    moveCaret(edge(0, false));

    let at = 0;
    words.forEach((w, wi) => {
      w.chars.forEach((_, j) => {
        const i = w.start + j;
        at +=
          TYPE_KEY_MIN_MS +
          Math.random() * TYPE_KEY_JITTER_MS +
          (wi > 0 && j === 0 ? TYPE_SPACE_MS : 0);
        for (let k = 0; k <= TYPE_GLYPH_STEPS; k++) {
          later(
            () => {
              const el = els[i];
              if (!el) return;
              if (k === TYPE_GLYPH_STEPS) {
                el.classList.remove(glyph);
                springsRef.current[i]?.start(REST);
                return;
              }
              el.dataset.glyph = TYPE_GLYPHS[Math.floor(Math.random() * TYPE_GLYPHS.length)];
              if (k > 0) return;
              el.classList.remove(untyped);
              el.classList.add(glyph);
              springsRef.current[i]?.start({ scale: TYPE_GLYPH_SCALE });
              moveCaret(edge(i, true));
            },
            at + k * TYPE_GLYPH_MS,
          );
        }
      });
    });
    later(
      () => {
        caretEl.style.opacity = "0";
        busyRef.current = false;
      },
      at + TYPE_GLYPH_STEPS * TYPE_GLYPH_MS + TYPE_CARET_LINGER_MS,
    );
  };

  const play = () => {
    if (variant === "walk") stroll();
    else if (variant === "track") track();
    else if (variant === "type") type();
  };

  const followsPointer = variant === "lift" || variant === "break";

  const autoPlayRef = useRef<() => void>(() => {});
  useEffect(() => {
    autoPlayRef.current = () => {
      const rootEl = rootRef.current;
      if (!rootEl || reducedMotion()) return;
      if (variant === "lift") {
        const rect = rootEl.getBoundingClientRect();
        wave(rect.left + rect.width / 2);
      } else {
        play();
      }
    };
  });

  useEffect(() => {
    const rootEl = rootRef.current;
    if (autoPlayDelay === undefined || !rootEl) return;
    let timer: ReturnType<typeof setTimeout> | undefined;
    // gsapAnimation.inview の start（top 80%）と揃えておく
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        observer.disconnect();
        timer = setTimeout(() => autoPlayRef.current(), autoPlayDelay);
      },
      { rootMargin: "0px 0px -20% 0px" },
    );
    observer.observe(rootEl);
    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, [autoPlayDelay]);

  const onPointerEnter = (e: PointerEvent) => {
    if (followsPointer || e.pointerType !== "mouse" || reducedMotion()) return;
    play();
  };

  const onPointerMove = (e: PointerEvent) => {
    // タップでは pointerleave が来ず、変形したまま残る
    if (!followsPointer || e.pointerType !== "mouse" || busyRef.current || reducedMotion()) {
      return;
    }
    const measured = measure();
    if (!measured) return;
    const { fontSize, centers } = measured;
    const radius = fontSize * 1.6;
    centers.forEach((cx, i) => {
      const d = (e.clientX - cx) / radius;
      const influence = Math.exp(-d * d);
      const pose: Pose =
        variant === "lift"
          ? {
              x: 0,
              y: -influence * fontSize * 0.42,
              rotation: influence * tilts[i] * 16,
              scale: 1 + influence * 0.34,
            }
          : {
              x: influence * fontSize * (Math.random() - 0.5) * 0.5,
              y: influence * fontSize * (Math.random() - 0.5) * 0.5,
              rotation: influence * tilts[i] * 26,
              scale: 1,
            };
      hoverPosesRef.current[i] = pose;
      springsRef.current[i]?.start(pose);
    });
  };

  const onPointerLeave = () => {
    hoverPosesRef.current = chars.map(() => REST);
    if (busyRef.current) return;
    for (const s of springsRef.current) s.start(REST);
  };

  const onClick = (e: MouseEvent) => {
    haptic();
    triggerLiquidShockwave(e.clientX, e.clientY);
    if (reducedMotion()) return;
    if (variant === "lift") wave(e.clientX);
    else if (variant === "break") shatter(e.clientX);
    else play();
  };

  return (
    <span
      ref={rootRef}
      className={clsx(root, className)}
      onPointerEnter={onPointerEnter}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      onClick={onClick}
    >
      <span className={visuallyHidden}>{text.replaceAll("\u200b", "")}</span>
      {variant === "type" && <span ref={caretRef} aria-hidden="true" className={caret} />}
      {words.map((w, wi) => (
        <Fragment key={wi}>
          {wi > 0 && (w.spaced ? " " : <wbr />)}
          <span aria-hidden="true" className={word}>
            {w.chars.map((c, j) => (
              <span
                key={j}
                className={char}
                ref={(el) => {
                  charRefs.current[w.start + j] = el;
                }}
              >
                {c}
              </span>
            ))}
          </span>
        </Fragment>
      ))}
    </span>
  );
}
