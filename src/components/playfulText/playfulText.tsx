"use client";

import {
  blurred,
  caret,
  char,
  faceted,
  glyph,
  grabbable,
  pressable,
  root,
  swaying,
  tuggable,
  untyped,
  visuallyHidden,
  word,
} from "@/components/playfulText/playfulText.css";
import { haptic } from "@/lib/haptic";
import { triggerLiquidShockwave } from "@/lib/liquidShockwave";
import { createSpring, type Spring } from "@/lib/spring";
import clsx from "clsx";
import gsap from "gsap";
import { Fragment, useEffect, useMemo, useRef, type MouseEvent, type PointerEvent } from "react";

type Variant =
  | "lift"
  | "break"
  | "press"
  | "sway"
  | "breathe"
  | "facets"
  | "drift"
  | "free"
  | "magnify"
  | "strike"
  | "join"
  | "unite"
  | "tend"
  | "firm"
  | "cushion"
  | "attend"
  | "web"
  | "walk"
  | "track"
  | "type";

interface Props {
  readonly text: string;
  readonly variant: Variant;
  readonly className?: string;
  readonly autoPlayDelay?: number;
  readonly autoPlayAt?: string;
}

type Pose = { x: number; y: number; rotation: number; scale: number };
type CharSpring = Spring<keyof Pose>;

const REST: Pose = { x: 0, y: 0, rotation: 0, scale: 1 };
const SPRING = { tension: 260, friction: 14 };
const PRESS_SPRING = { tension: 260, friction: 6 };

const WAVE_STAGGER_MS = 38;
const WAVE_HOLD_MS = 130;
const BREAK_WINDUP_MS = 55;
const BREAK_DENT_REACH = 3;
const BREAK_KICK = 0.012;
const BREAK_HOLD_MS = 900;
const BREAK_EDGE_PX = 12;
const BREAK_RETURN_STAGGER_MS = 34;
const PRESS_RADIUS_EM = 1.6;
const PRESS_SINK_EM = 0.26;
const PRESS_SHRINK = 0.3;
const PRESS_PULL_EM = 0.14;
const PRESS_TILT_DEG = 20;
const PRESS_HOVER_DEPTH = 0.5;
const PRESS_HOLD_MS = 150;
const PRESS_REBOUND_MS_PER_EM = 14;
const SWAY_FULL_SPEED = 0.9;
const SWAY_TILT_DEG = 36;
const SWAY_DRAG_EM = 0.24;
const SWAY_SETTLE_MS = 120;
const SWAY_RISE_STAGGER_MS = 35;
const SWAY_GUST_STAGGER_MS = 40;
const SWAY_GUST_MS = 260;
const BREATHE_PERIOD_MS = 2600;
const BREATHE_PHASE_STEP = 0.7;
const BREATHE_SWELL = 0.11;
const BREATHE_RISE_EM = 0.07;
const BREATHE_SWAY_DEG = 4;
const BREATHE_FLINCH = 0.3;
const BREATHE_FLINCH_RADIUS_EM = 1.4;
const BREATHE_STARTLE_SCALE = 0.7;
const BREATHE_STARTLE_MS = 520;
const FACET_GAP_MS = 380;
const FACET_REST_MS = 600;
const FOCUS_SCALE = 1.25;
const FOCUS_HOLD_MS = 260;
const FOCUS_CLEAR_MS = 400;
const STACK_DROP_EM = 1;
const STACK_WAIT_S = 0.08;
const STACK_STAGGER_S = 0.12;
const STACK_FALL_S = 0.16;
const FLOURISH_SPRING = { tension: 200, friction: 8 };
const FLOURISH_RISE_EM = 0.55;
const FLOURISH_TILT_DEG = 16;
const FLOURISH_SCALE = 1.7;
const FLOURISH_STAGGER_MS = 60;
const FLOURISH_HOLD_MS = 150;
const FLOURISH_SETTLE_MS = 700;
const GEAR_TEETH = 6;
const GEAR_TOOTH_S = 0.07;
const GEAR_PAUSE_S = 0.02;
const DRIFT_SPRING = { tension: 12, friction: 12 };
const DRIFT_RADIUS_EM = 1.4;
const DRIFT_MAX_SPEED = 2;
const DRIFT_PUSH = 0.12;
const DRIFT_SPIN = 0.15;
const DRIFT_GAP_MS = 100;
const DRIFT_BREEZE = 0.16;
const DRIFT_BREEZE_STAGGER_MS = 70;
const FREE_FOLLOW = 0.5;
const FREE_REACH_EM = 0.5;
const FREE_DRAG_SLOP_PX = 4;
const FREE_ORBIT_EM = 0.6;
const FREE_ORBIT_STEPS = 16;
const FREE_ORBIT_STEP_MS = 40;
const MAGNIFY_SPRING = { tension: 300, friction: 24 };
const MAGNIFY_RADIUS_EM = 1.1;
const MAGNIFY_SCALE = 0.9;
const MAGNIFY_RISE_EM = 0.12;
const MAGNIFY_SPREAD_EM = 0.5;
const MAGNIFY_SWEEP_STEPS = 24;
const MAGNIFY_SWEEP_STEP_MS = 30;
const STRIKE_TURN_S = 0.42;
const STRIKE_STAGGER_S = 0.06;
const JOIN_SPRING = { tension: 320, friction: 22 };
const JOIN_GAP_EM = 0.7;
const JOIN_HOLD_MS = 420;
const JOIN_CONTACT_MS = 150;
const JOIN_RIPPLE_EM = 0.14;
const JOIN_RIPPLE_STAGGER_MS = 35;
const JOIN_RIPPLE_HOLD_MS = 90;
const UNITE_SPRING = { tension: 260, friction: 20 };
const UNITE_FUSE_MS = 450;
const UNITE_STEP_EM = 0.18;
const UNITE_STEP_HOLD_MS = 140;
const UNITE_HOLD_MS = 1100;
const TEND_SPRING = { tension: 200, friction: 18 };
const TEND_MIN_MS = 2200;
const TEND_JITTER_MS = 1400;
const TEND_FIX_MS = 700;
const TEND_TIDY_WAIT_MS = 250;
const TEND_TIDY_STAGGER_MS = 70;
const FIRM_SPRING = { tension: 1200, friction: 40 };
const FIRM_JOLT_EM = 0.09;
const FIRM_JOLTS = 6;
const FIRM_JOLT_MS = 30;
const CUSHION_SPRING = { tension: 60, friction: 22 };
const CUSHION_RADIUS_EM = 2.2;
const CUSHION_SINK_EM = 0.3;
const CUSHION_SHRINK = 0.22;
const CUSHION_HOLD_MS = 500;
const ATTEND_RANGE_EM = 14;
const ATTEND_REACH_EM = 0.14;
const ATTEND_TURN_EM = 5;
const ATTEND_TILT_DEG = 18;
const WEB_SPRING = { tension: 170, friction: 9 };
const WEB_FALLOFF = 0.45;
const WEB_STRETCH_EM = 3;
const WEB_TILT_DEG = 14;
const WEB_SNAP_STAGGER_MS = 25;
const WEB_DEMO_HOLD_MS = 260;
const WEB_PRESS_EM = 0.22;
const WEB_PLUCK = 0.14;
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
const AUTOPLAY_GAP_MS = 500;
const WORD_BREAK = /[ \u200b]/;

interface QueuedAutoPlay {
  readonly el: Element;
  readonly delay: number;
  readonly hold: number;
  readonly run: () => void;
  timer?: ReturnType<typeof setTimeout>;
  cancelled: boolean;
}

let autoPlayQueue: QueuedAutoPlay[] = [];
let autoPlayFlush: ReturnType<typeof setTimeout> | undefined;
let autoPlaySlot = 0;

const queueAutoPlay = (el: Element, delay: number, hold: number, run: () => void) => {
  const queued: QueuedAutoPlay = { el, delay, hold, run, cancelled: false };
  autoPlayQueue.push(queued);
  autoPlayFlush ??= setTimeout(() => {
    autoPlayFlush = undefined;
    const batch = autoPlayQueue.sort((a, b) =>
      a.el.compareDocumentPosition(b.el) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1,
    );
    autoPlayQueue = [];
    const now = performance.now();
    for (const entry of batch) {
      if (entry.cancelled) continue;
      const at = Math.max(now + entry.delay, autoPlaySlot);
      autoPlaySlot = at + entry.hold;
      entry.timer = setTimeout(entry.run, at - now);
    }
  }, 0);
  return () => {
    queued.cancelled = true;
    clearTimeout(queued.timer);
  };
};

const springConfig = (variant: Variant, tilt: number, facet: number) => {
  if (variant === "press") return PRESS_SPRING;
  if (variant === "facets" && facet % 4 === 2) return FLOURISH_SPRING;
  if (variant === "sway") return { tension: 50 + 30 * (0.5 + 0.5 * tilt), friction: 4.5 };
  if (variant === "drift") return DRIFT_SPRING;
  if (variant === "magnify") return MAGNIFY_SPRING;
  if (variant === "join") return JOIN_SPRING;
  if (variant === "unite") return UNITE_SPRING;
  if (variant === "tend") return TEND_SPRING;
  if (variant === "firm") return FIRM_SPRING;
  if (variant === "cushion") return CUSHION_SPRING;
  if (variant === "web") return WEB_SPRING;
  if (variant === "attend") return { tension: 90 + 50 * (0.5 + 0.5 * tilt), friction: 16 };
  if (variant === "free") return { tension: 700 + 200 * tilt, friction: 50 };
  return SPRING;
};

// 変形中の文字の getBoundingClientRect は位置がぶれる
const charPoints = (els: (HTMLElement | null)[]) => {
  const centers: number[] = [];
  const middles: number[] = [];
  els.forEach((el, i) => {
    const wordEl = el?.parentElement;
    if (!el || !wordEl) {
      centers[i] = 0;
      middles[i] = 0;
      return;
    }
    const rect = wordEl.getBoundingClientRect();
    const scale = wordEl.offsetWidth ? rect.width / wordEl.offsetWidth : 1;
    centers[i] = rect.left + (el.offsetLeft + el.offsetWidth / 2) * scale;
    middles[i] = rect.top + rect.height / 2;
  });
  return { centers, middles };
};

const askewPose = (fontSize: number): Partial<Pose> => ({
  x: (Math.random() - 0.5) * fontSize * 0.12,
  y: (Math.random() - 0.5) * fontSize * 0.2,
  rotation: (Math.random() < 0.5 ? -1 : 1) * (8 + Math.random() * 8),
});

const leanPose = (amount: number, tilt: number, fontSize: number): Partial<Pose> => ({
  x: amount * tilt * fontSize * 0.06,
  y: amount * fontSize * SWAY_DRAG_EM,
  rotation: amount * SWAY_TILT_DEG * (0.7 + 0.3 * tilt),
});

export default function PlayfulText({
  text,
  variant,
  className,
  autoPlayDelay,
  autoPlayAt,
}: Props) {
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

  const facets = useMemo(() => {
    const groups: number[][] = [[]];
    chars.forEach((c, i) => {
      if (c === "・") groups.push([]);
      else groups[groups.length - 1].push(i);
    });
    return groups.filter((group) => group.length > 0);
  }, [chars]);

  const facetCount = facets.length;

  const rootRef = useRef<HTMLSpanElement>(null);
  const charRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const springsRef = useRef<CharSpring[]>([]);
  const hoverPosesRef = useRef<Pose[]>([]);
  const timeoutsRef = useRef<ReturnType<typeof setTimeout>[]>([]);
  const busyRef = useRef(false);
  const armedRef = useRef(false);
  const pressingRef = useRef(false);
  const reboundAtRef = useRef(0);
  const flinchRef = useRef<number[]>([]);
  const startledUntilRef = useRef(0);
  const lastPointerRef = useRef<{ x: number; y: number; time: number } | null>(null);
  const grabRef = useRef<{ x: number; y: number; moved: boolean } | null>(null);
  const draggedRef = useRef(false);
  const tugRef = useRef<{ x: number; y: number; index: number; moved: boolean } | null>(null);
  const strikeRef = useRef<gsap.core.Timeline | null>(null);
  const facetBusyRef = useRef<boolean[]>([]);
  const hoveredFacetRef = useRef(-1);
  const facetTweensRef = useRef<(gsap.core.Timeline | undefined)[]>([]);
  const caretRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const springs = charRefs.current.slice(0, chars.length).map((el, i) =>
      createSpring(
        el!,
        REST,
        springConfig(
          variant,
          tilts[i],
          facets.findIndex((group) => group.includes(i)),
        ),
      ),
    );
    springsRef.current = springs;
    hoverPosesRef.current = chars.map(() => REST);
    const timeouts = timeoutsRef.current;
    return () => {
      for (const s of springs) s.stop();
      for (const t of timeouts) clearTimeout(t);
      timeouts.length = 0;
      springsRef.current = [];
      busyRef.current = false;
      facetBusyRef.current = [];
      for (const tween of facetTweensRef.current) tween?.kill();
      facetTweensRef.current = [];
      strikeRef.current?.kill();
    };
  }, [chars, facets, tilts, variant]);

  useEffect(() => {
    const rootEl = rootRef.current;
    if (variant !== "sway" || !rootEl) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let lastY = window.scrollY;
    let lastTime = performance.now();
    let fontSize = 0;
    let held = 0;
    let settle: ReturnType<typeof setTimeout> | undefined;
    let rises: ReturnType<typeof setTimeout>[] = [];
    const onScroll = () => {
      const now = performance.now();
      const elapsed = now - lastTime;
      const moved = window.scrollY - lastY;
      lastY = window.scrollY;
      lastTime = now;
      if (!armedRef.current || !fontSize || elapsed <= 0 || busyRef.current) return;
      const amount = Math.max(-1, Math.min(1, moved / elapsed / SWAY_FULL_SPEED));
      if (Math.abs(amount) > Math.abs(held)) held = amount;
      for (const rise of rises) clearTimeout(rise);
      for (const t of timeoutsRef.current) clearTimeout(t);
      timeoutsRef.current.length = 0;
      springsRef.current.forEach((spring, i) => spring.start(leanPose(held, tilts[i], fontSize)));
      clearTimeout(settle);
      settle = setTimeout(() => {
        held = 0;
        rises = springsRef.current.map((spring, i) =>
          setTimeout(() => spring.start(REST), i * SWAY_RISE_STAGGER_MS),
        );
      }, SWAY_SETTLE_MS);
    };
    const observer = new IntersectionObserver(([entry]) => {
      fontSize = entry?.isIntersecting ? parseFloat(getComputedStyle(rootEl).fontSize) : 0;
    });
    observer.observe(rootEl);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      clearTimeout(settle);
      for (const rise of rises) clearTimeout(rise);
    };
  }, [variant, tilts]);

  useEffect(() => {
    const rootEl = rootRef.current;
    if (variant !== "breathe" || !rootEl) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let fontSize = 0;
    const tick = (time: number) => {
      if (performance.now() < startledUntilRef.current) return;
      const turn = ((time * 1000) / BREATHE_PERIOD_MS) * Math.PI * 2;
      springsRef.current.forEach((spring, i) => {
        const breath = Math.sin(turn - i * BREATHE_PHASE_STEP - tilts[i] * 0.6);
        const flinch = flinchRef.current[i] ?? 0;
        spring.start({
          y: -breath * fontSize * BREATHE_RISE_EM,
          rotation: tilts[i] * breath * BREATHE_SWAY_DEG,
          scale: 1 + breath * BREATHE_SWELL - flinch * BREATHE_FLINCH,
        });
      });
    };
    const observer = new IntersectionObserver(([entry]) => {
      gsap.ticker.remove(tick);
      if (!entry?.isIntersecting) return;
      fontSize = parseFloat(getComputedStyle(rootEl).fontSize);
      gsap.ticker.add(tick);
    });
    observer.observe(rootEl);
    return () => {
      observer.disconnect();
      gsap.ticker.remove(tick);
    };
  }, [variant, tilts]);

  useEffect(() => {
    const rootEl = rootRef.current;
    if (variant !== "tend" || !rootEl) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let next: ReturnType<typeof setTimeout> | undefined;
    let fix: ReturnType<typeof setTimeout> | undefined;
    let last = -1;
    const loop = () => {
      next = setTimeout(
        () => {
          const springs = springsRef.current;
          if (!busyRef.current && springs.length > 0) {
            let i = Math.floor(Math.random() * springs.length);
            if (i === last) i = (i + 1) % springs.length;
            last = i;
            springs[i].start(askewPose(parseFloat(getComputedStyle(rootEl).fontSize)));
            fix = setTimeout(() => {
              if (!busyRef.current) springs[i].start(REST);
            }, TEND_FIX_MS);
          }
          loop();
        },
        TEND_MIN_MS + Math.random() * TEND_JITTER_MS,
      );
    };
    const observer = new IntersectionObserver(([entry]) => {
      clearTimeout(next);
      if (entry?.isIntersecting) loop();
    });
    observer.observe(rootEl);
    return () => {
      observer.disconnect();
      clearTimeout(next);
      clearTimeout(fix);
    };
  }, [variant]);

  useEffect(() => {
    const rootEl = rootRef.current;
    if (variant !== "attend" || !rootEl) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let pointer: { x: number; y: number } | null = null;
    let visible = false;
    let frame = 0;
    const turn = () => {
      frame = 0;
      if (!visible) return;
      const fontSize = parseFloat(getComputedStyle(rootEl).fontSize);
      const { centers, middles } = charPoints(charRefs.current.slice(0, chars.length));
      springsRef.current.forEach((spring, i) => {
        if (!pointer) {
          spring.start(REST);
          return;
        }
        const dx = pointer.x - centers[i];
        const dy = pointer.y - middles[i];
        const distance = Math.hypot(dx, dy) || 1;
        const near = 1 / (1 + distance / (fontSize * ATTEND_RANGE_EM));
        const reach = fontSize * ATTEND_REACH_EM * near;
        spring.start({
          x: (dx / distance) * reach,
          y: (dy / distance) * reach,
          rotation:
            Math.tanh(dx / (fontSize * ATTEND_TURN_EM)) * ATTEND_TILT_DEG * (0.4 + 0.6 * near),
        });
      });
    };
    const request = () => {
      frame ||= requestAnimationFrame(turn);
    };
    const onPointer = (e: globalThis.PointerEvent) => {
      pointer = { x: e.clientX, y: e.clientY };
      request();
    };
    const onLeave = () => {
      pointer = null;
      request();
    };
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry?.isIntersecting ?? false;
      if (visible) request();
      else for (const spring of springsRef.current) spring.start(REST);
    });
    observer.observe(rootEl);
    window.addEventListener("pointermove", onPointer, { passive: true });
    window.addEventListener("pointerdown", onPointer, { passive: true });
    window.addEventListener("scroll", request, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onPointer);
      window.removeEventListener("pointerdown", onPointer);
      window.removeEventListener("scroll", request);
      document.documentElement.removeEventListener("pointerleave", onLeave);
    };
  }, [chars, variant]);

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

  const measure = () => {
    const rootEl = rootRef.current;
    if (!rootEl) return null;
    return {
      fontSize: parseFloat(getComputedStyle(rootEl).fontSize),
      ...charPoints(charRefs.current.slice(0, chars.length)),
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
      const spring = springsRef.current[i];
      const distance = Math.abs(i - origin);
      const near = 1 / (1 + distance * 0.18);
      if (distance <= BREAK_DENT_REACH) {
        const dent = 1 - distance / (BREAK_DENT_REACH + 1);
        spring?.start({ scale: 1 - 0.34 * dent });
        spring?.impulse({ scale: -0.012 * dent });
      }
      const side = cx === clientX ? (Math.random() < 0.5 ? -1 : 1) : Math.sign(cx - clientX);
      const elevation = (Math.random() - 0.5) * 2 * (0.5 + 0.9 * near);
      const reach = fontSize * (1.5 + Math.random() * 3.5) * (0.45 + near);
      const x = Math.min(maxX, Math.max(minX, cx + side * reach * Math.cos(elevation))) - cx;
      const y = reach * Math.sin(elevation);
      const spin = (Math.random() - 0.5) * 540;
      later(() => {
        spring?.start({ x, y, rotation: spin, scale: 0.6 + Math.random() * 0.9 });
        spring?.impulse({
          x: x * BREAK_KICK,
          y: y * BREAK_KICK,
          rotation: spin * BREAK_KICK,
        });
      }, BREAK_WINDUP_MS);
      const back = BREAK_HOLD_MS + distance * BREAK_RETURN_STAGGER_MS;
      longest = Math.max(longest, back);
      later(() => spring?.start(REST), back);
    });
    later(() => {
      busyRef.current = false;
    }, longest);
  };

  const dent = (clientX: number, clientY: number, depth: number) => {
    const measured = measure();
    if (!measured) return;
    const { fontSize, centers, middles } = measured;
    const radius = fontSize * PRESS_RADIUS_EM;
    clearTimers();
    centers.forEach((cx, i) => {
      const dx = (clientX - cx) / radius;
      const dy = (clientY - middles[i]) / radius;
      const influence = Math.exp(-(dx * dx + dy * dy)) * depth;
      springsRef.current[i]?.start({
        x: dx * influence * fontSize * PRESS_PULL_EM,
        y: influence * fontSize * PRESS_SINK_EM,
        rotation: dx * influence * PRESS_TILT_DEG,
        scale: 1 - influence * PRESS_SHRINK,
      });
    });
  };

  const rebound = (clientX: number, clientY: number) => {
    const measured = measure();
    if (!measured) return;
    const { fontSize, centers, middles } = measured;
    clearTimers();
    centers.forEach((cx, i) => {
      const distance = Math.hypot(clientX - cx, clientY - middles[i]) / fontSize;
      later(() => springsRef.current[i]?.start(REST), distance * PRESS_REBOUND_MS_PER_EM);
    });
  };

  const press = (clientX: number, clientY: number) => {
    dent(clientX, clientY, 1);
    later(() => rebound(clientX, clientY), PRESS_HOLD_MS);
  };

  const letGo = ({ clientX, clientY }: PointerEvent, hovering: boolean) => {
    pressingRef.current = false;
    clearTimers();
    later(
      () => {
        if (hovering) dent(clientX, clientY, PRESS_HOVER_DEPTH);
        else rebound(clientX, clientY);
      },
      Math.max(0, reboundAtRef.current - performance.now()),
    );
  };

  const gust = () => {
    const measured = measure();
    if (busyRef.current || !measured) return;
    clearTimers();
    springsRef.current.forEach((spring, i) => {
      later(() => spring.start(leanPose(1, tilts[i], measured.fontSize)), i * SWAY_GUST_STAGGER_MS);
      later(() => spring.start(REST), i * SWAY_GUST_STAGGER_MS + SWAY_GUST_MS);
    });
  };

  const startle = () => {
    startledUntilRef.current = performance.now() + BREATHE_STARTLE_MS;
    springsRef.current.forEach((spring, i) => {
      spring.start({ y: 0, rotation: tilts[i] * 14, scale: BREATHE_STARTLE_SCALE });
    });
  };

  const playFacet = (k: number) => {
    const indices = facets[k];
    const measured = measure();
    if (!indices || !measured || facetBusyRef.current[k]) return;
    const { fontSize } = measured;
    const els = indices.map((i) => charRefs.current[i]);
    const kind = k % 4;
    let duration = 0;
    facetBusyRef.current[k] = true;
    facetTweensRef.current[k]?.progress(1).kill();
    if (kind === 0) {
      indices.forEach((i, j) => {
        els[j]?.classList.add(blurred);
        springsRef.current[i]?.start({ scale: FOCUS_SCALE });
      });
      later(() => {
        indices.forEach((i, j) => {
          els[j]?.classList.remove(blurred);
          springsRef.current[i]?.start(REST);
        });
      }, FOCUS_HOLD_MS);
      duration = FOCUS_HOLD_MS + FOCUS_CLEAR_MS;
    } else if (kind === 1) {
      const timeline = gsap.timeline();
      els.forEach((el, j) => {
        if (!el) return;
        timeline.fromTo(
          el,
          { y: -fontSize * STACK_DROP_EM, opacity: 0 },
          { y: 0, opacity: 1, duration: STACK_FALL_S, ease: "power3.in" },
          STACK_WAIT_S + j * STACK_STAGGER_S,
        );
      });
      facetTweensRef.current[k] = timeline;
      duration = (STACK_WAIT_S + els.length * STACK_STAGGER_S + STACK_FALL_S) * 1000;
    } else if (kind === 2) {
      indices.forEach((i, j) => {
        later(() => {
          springsRef.current[i]?.start({
            y: -fontSize * FLOURISH_RISE_EM,
            rotation: (j % 2 ? 1 : -1) * FLOURISH_TILT_DEG,
            scale: FLOURISH_SCALE,
          });
        }, j * FLOURISH_STAGGER_MS);
        later(() => springsRef.current[i]?.start(REST), j * FLOURISH_STAGGER_MS + FLOURISH_HOLD_MS);
      });
      duration = indices.length * FLOURISH_STAGGER_MS + FLOURISH_HOLD_MS + FLOURISH_SETTLE_MS;
    } else {
      const timeline = gsap.timeline();
      const step = GEAR_TOOTH_S + GEAR_PAUSE_S;
      els.forEach((el, j) => {
        if (!el) return;
        const turn = ((j % 2 ? -1 : 1) * 360) / GEAR_TEETH;
        for (let tooth = 0; tooth < GEAR_TEETH; tooth++) {
          timeline.to(
            el,
            { rotation: turn * (tooth + 1), duration: GEAR_TOOTH_S, ease: "power2.inOut" },
            tooth * step,
          );
        }
        timeline.set(el, { rotation: 0 }, GEAR_TEETH * step);
      });
      facetTweensRef.current[k] = timeline;
      duration = GEAR_TEETH * step * 1000;
    }
    later(() => {
      facetBusyRef.current[k] = false;
    }, duration);
  };

  const playFacets = () => {
    facets.forEach((_, k) => later(() => playFacet(k), k * FACET_GAP_MS));
  };

  const facetAt = (clientX: number) => {
    const measured = measure();
    if (!measured) return -1;
    const nearest = nearestIndex(measured.centers, clientX);
    return facets.findIndex((group) => group.includes(nearest));
  };

  const breeze = () => {
    clearTimers();
    springsRef.current.forEach((spring, i) => {
      later(() => {
        spring.impulse({
          x: DRIFT_BREEZE,
          y: -DRIFT_BREEZE * 0.3,
          rotation: tilts[i] * DRIFT_BREEZE * 0.6,
        });
      }, i * DRIFT_BREEZE_STAGGER_MS);
    });
  };

  const orbit = () => {
    const measured = measure();
    if (busyRef.current || !measured) return;
    busyRef.current = true;
    clearTimers();
    const radius = measured.fontSize * FREE_ORBIT_EM;
    for (let step = 1; step <= FREE_ORBIT_STEPS; step++) {
      later(() => {
        springsRef.current.forEach((spring, i) => {
          const phase = i * Math.PI;
          const angle = (step / FREE_ORBIT_STEPS) * Math.PI * 2 + phase;
          spring.start({
            x: radius * (Math.cos(angle) - Math.cos(phase)),
            y: radius * (Math.sin(angle) - Math.sin(phase)),
          });
        });
      }, step * FREE_ORBIT_STEP_MS);
    }
    later(
      () => {
        for (const spring of springsRef.current) spring.start(REST);
        busyRef.current = false;
      },
      (FREE_ORBIT_STEPS + 1) * FREE_ORBIT_STEP_MS,
    );
  };

  const lens = (clientX: number) => {
    const measured = measure();
    if (!measured) return;
    const { fontSize, centers } = measured;
    const radius = fontSize * MAGNIFY_RADIUS_EM;
    centers.forEach((cx, i) => {
      const dx = (clientX - cx) / radius;
      const influence = Math.exp(-dx * dx);
      springsRef.current[i]?.start({
        x: -dx * influence * fontSize * MAGNIFY_SPREAD_EM,
        y: -influence * fontSize * MAGNIFY_RISE_EM,
        scale: 1 + influence * MAGNIFY_SCALE,
      });
    });
  };

  const sweep = () => {
    const rootEl = rootRef.current;
    const measured = measure();
    if (busyRef.current || !rootEl || !measured) return;
    busyRef.current = true;
    clearTimers();
    const rect = rootEl.getBoundingClientRect();
    const margin = measured.fontSize * MAGNIFY_RADIUS_EM;
    const from = rect.left - margin;
    const span = rect.width + margin * 2;
    for (let step = 0; step <= MAGNIFY_SWEEP_STEPS; step++) {
      later(() => lens(from + (span * step) / MAGNIFY_SWEEP_STEPS), step * MAGNIFY_SWEEP_STEP_MS);
    }
    later(
      () => {
        for (const spring of springsRef.current) spring.start(REST);
        busyRef.current = false;
      },
      (MAGNIFY_SWEEP_STEPS + 1) * MAGNIFY_SWEEP_STEP_MS,
    );
  };

  const strike = () => {
    if (strikeRef.current?.isActive()) return;
    const els = charRefs.current.slice(0, chars.length).filter((el) => el !== null);
    strikeRef.current = gsap
      .timeline()
      .to(els, {
        rotation: 360,
        duration: STRIKE_TURN_S,
        ease: "power4.out",
        stagger: STRIKE_STAGGER_S,
      })
      .set(els, { rotation: 0 });
  };

  const join = () => {
    const measured = measure();
    if (busyRef.current || !measured) return;
    busyRef.current = true;
    clearTimers();
    const { fontSize } = measured;
    const seam = Math.ceil(chars.length / 2);
    const gap = fontSize * JOIN_GAP_EM;
    springsRef.current.forEach((spring, i) => spring.start({ x: i < seam ? -gap : gap }));
    later(() => {
      for (const spring of springsRef.current) spring.start({ x: 0 });
    }, JOIN_HOLD_MS);
    let longest = 0;
    springsRef.current.forEach((spring, i) => {
      const distance = i < seam ? seam - 1 - i : i - seam;
      const at = JOIN_HOLD_MS + JOIN_CONTACT_MS + distance * JOIN_RIPPLE_STAGGER_MS;
      longest = Math.max(longest, at + JOIN_RIPPLE_HOLD_MS);
      later(() => spring.start({ y: -fontSize * JOIN_RIPPLE_EM }), at);
      later(() => spring.start(REST), at + JOIN_RIPPLE_HOLD_MS);
    });
    later(() => {
      busyRef.current = false;
    }, longest);
  };

  const unite = () => {
    const measured = measure();
    if (busyRef.current || !measured) return;
    busyRef.current = true;
    clearTimers();
    const { fontSize } = measured;
    const dots = chars.flatMap((c, i) => (c === "・" ? [i] : []));
    const dotWidth = charRefs.current[dots[0]]?.offsetWidth ?? 0;
    chars.forEach((_, i) => {
      const before = dots.filter((dot) => dot < i).length;
      springsRef.current[i]?.start(
        dots.includes(i) ? { scale: 0 } : { x: (dots.length / 2 - before) * dotWidth },
      );
    });
    later(() => {
      for (const spring of springsRef.current) spring.start({ y: -fontSize * UNITE_STEP_EM });
    }, UNITE_FUSE_MS);
    later(() => {
      for (const spring of springsRef.current) spring.start({ y: 0 });
    }, UNITE_FUSE_MS + UNITE_STEP_HOLD_MS);
    later(() => {
      for (const spring of springsRef.current) spring.start(REST);
      busyRef.current = false;
    }, UNITE_HOLD_MS);
  };

  const tidy = () => {
    const measured = measure();
    if (busyRef.current || !measured) return;
    busyRef.current = true;
    clearTimers();
    springsRef.current.forEach((spring, i) => {
      spring.start(askewPose(measured.fontSize));
      later(() => spring.start(REST), TEND_TIDY_WAIT_MS + i * TEND_TIDY_STAGGER_MS);
    });
    later(
      () => {
        busyRef.current = false;
      },
      TEND_TIDY_WAIT_MS + chars.length * TEND_TIDY_STAGGER_MS,
    );
  };

  const shudder = () => {
    const measured = measure();
    if (busyRef.current || !measured) return;
    busyRef.current = true;
    clearTimers();
    const reach = measured.fontSize * FIRM_JOLT_EM;
    for (let jolt = 0; jolt < FIRM_JOLTS; jolt++) {
      const x = (jolt % 2 ? -1 : 1) * reach * (1 - jolt / FIRM_JOLTS);
      later(() => {
        for (const spring of springsRef.current) spring.start({ x });
      }, jolt * FIRM_JOLT_MS);
    }
    later(() => {
      for (const spring of springsRef.current) spring.start(REST);
      busyRef.current = false;
    }, FIRM_JOLTS * FIRM_JOLT_MS);
  };

  const sinkAt = (clientX: number) => {
    const measured = measure();
    if (!measured) return;
    const { fontSize, centers } = measured;
    const radius = fontSize * CUSHION_RADIUS_EM;
    centers.forEach((cx, i) => {
      const dx = (clientX - cx) / radius;
      const influence = Math.exp(-dx * dx);
      springsRef.current[i]?.start({
        y: influence * fontSize * CUSHION_SINK_EM,
        scale: 1 - influence * CUSHION_SHRINK,
      });
    });
  };

  const cushion = () => {
    const rootEl = rootRef.current;
    if (busyRef.current || !rootEl) return;
    busyRef.current = true;
    clearTimers();
    const rect = rootEl.getBoundingClientRect();
    sinkAt(rect.left + rect.width / 2);
    later(() => {
      for (const spring of springsRef.current) spring.start(REST);
      busyRef.current = false;
    }, CUSHION_HOLD_MS);
  };

  const pull = (index: number, x: number, y: number, fontSize: number) => {
    springsRef.current.forEach((spring, i) => {
      const hold = Math.exp(-Math.abs(i - index) * WEB_FALLOFF);
      spring.start({
        x: x * hold,
        y: y * hold,
        rotation: Math.sign(index - i) * (y / fontSize) * hold * WEB_TILT_DEG,
      });
    });
  };

  const snap = (index: number) => {
    clearTimers();
    springsRef.current.forEach((spring, i) => {
      later(() => spring.start(REST), Math.abs(i - index) * WEB_SNAP_STAGGER_MS);
    });
  };

  const tug = () => {
    const measured = measure();
    if (busyRef.current || !measured) return;
    busyRef.current = true;
    const index = Math.floor(chars.length / 2);
    pull(index, measured.fontSize * 0.4, -measured.fontSize * 1.1, measured.fontSize);
    later(() => {
      snap(index);
      later(() => {
        busyRef.current = false;
      }, chars.length * WEB_SNAP_STAGGER_MS);
    }, WEB_DEMO_HOLD_MS);
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
    else if (variant === "sway") gust();
    else if (variant === "breathe") startle();
    else if (variant === "facets") playFacets();
    else if (variant === "drift") breeze();
    else if (variant === "free") orbit();
    else if (variant === "magnify") sweep();
    else if (variant === "strike") strike();
    else if (variant === "join") join();
    else if (variant === "unite") unite();
    else if (variant === "tend") tidy();
    else if (variant === "firm") shudder();
    else if (variant === "cushion") cushion();
    else if (variant === "web") tug();
  };

  const followsPointer =
    variant === "lift" ||
    variant === "break" ||
    variant === "press" ||
    variant === "breathe" ||
    variant === "facets" ||
    variant === "drift" ||
    variant === "free" ||
    variant === "magnify" ||
    variant === "cushion" ||
    variant === "attend" ||
    variant === "web";

  const autoPlayRef = useRef<() => void>(() => {});
  useEffect(() => {
    autoPlayRef.current = () => {
      const rootEl = rootRef.current;
      if (!rootEl || reducedMotion()) return;
      armedRef.current = true;
      const rect = rootEl.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      if (variant === "lift") wave(centerX);
      else if (variant === "break") shatter(centerX);
      else if (variant === "press") {
        const target = Array.from(autoPlayAt ?? "");
        const first = chars.findIndex((_, i) => target.every((c, j) => chars[i + j] === c));
        const measured = measure();
        if (!target.length || first < 0 || !measured) {
          press(centerX, rect.top + rect.height / 2);
          return;
        }
        const last = first + target.length - 1;
        press(
          (measured.centers[first] + measured.centers[last]) / 2,
          (measured.middles[first] + measured.middles[last]) / 2,
        );
      } else play();
    };
  });

  useEffect(() => {
    const rootEl = rootRef.current;
    armedRef.current = autoPlayDelay === undefined;
    if (autoPlayDelay === undefined || !rootEl) return;
    const hold = variant === "facets" ? facetCount * FACET_GAP_MS + FACET_REST_MS : AUTOPLAY_GAP_MS;
    let cancel: (() => void) | undefined;
    // gsapAnimation.inview の start（top 80%）と揃えておく
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        observer.disconnect();
        cancel = queueAutoPlay(rootEl, autoPlayDelay, hold, () => autoPlayRef.current());
      },
      { rootMargin: "0px 0px -20% 0px" },
    );
    observer.observe(rootEl);
    return () => {
      observer.disconnect();
      cancel?.();
    };
  }, [autoPlayDelay, facetCount, variant]);

  const onPointerEnter = (e: PointerEvent) => {
    if (followsPointer || e.pointerType !== "mouse" || reducedMotion()) return;
    play();
  };

  const release = () => {
    const tugged = tugRef.current;
    if (tugged) {
      draggedRef.current = tugged.moved;
      tugRef.current = null;
      snap(tugged.index);
      if (!tugged.moved) {
        springsRef.current.forEach((spring, i) => {
          spring.impulse({ y: -WEB_PLUCK * Math.exp(-Math.abs(i - tugged.index) * WEB_FALLOFF) });
        });
      }
    }
    const grab = grabRef.current;
    if (!grab) return;
    draggedRef.current = grab.moved;
    grabRef.current = null;
    for (const spring of springsRef.current) spring.start(REST);
  };

  const onPointerDown = (e: PointerEvent) => {
    if (variant === "web") {
      const measured = measure();
      if (!measured || reducedMotion()) return;
      clearTimers();
      busyRef.current = false;
      draggedRef.current = false;
      tugRef.current = {
        x: e.clientX,
        y: e.clientY,
        index: nearestIndex(measured.centers, e.clientX),
        moved: false,
      };
      pull(tugRef.current.index, 0, measured.fontSize * WEB_PRESS_EM, measured.fontSize);
      e.currentTarget.setPointerCapture(e.pointerId);
      return;
    }
    if (variant === "free") {
      if (reducedMotion()) return;
      clearTimers();
      busyRef.current = false;
      draggedRef.current = false;
      grabRef.current = { x: e.clientX, y: e.clientY, moved: false };
      e.currentTarget.setPointerCapture(e.pointerId);
      return;
    }
    if (variant === "cushion" && !busyRef.current && !reducedMotion()) sinkAt(e.clientX);
    if (variant !== "press" || reducedMotion()) return;
    pressingRef.current = true;
    reboundAtRef.current = performance.now() + PRESS_HOLD_MS;
    dent(e.clientX, e.clientY, 1);
  };

  const onPointerUp = (e: PointerEvent) => {
    if (variant === "free" || variant === "web") release();
    if (variant !== "press" || !pressingRef.current) return;
    letGo(e, e.pointerType === "mouse");
  };

  const onPointerCancel = (e: PointerEvent) => {
    if (variant === "free" || variant === "web") release();
    if (variant === "press") letGo(e, false);
  };

  const onPointerMove = (e: PointerEvent) => {
    if (variant === "press") {
      if (reducedMotion()) return;
      if (pressingRef.current) dent(e.clientX, e.clientY, 1);
      else if (e.pointerType === "mouse") dent(e.clientX, e.clientY, PRESS_HOVER_DEPTH);
      return;
    }
    if (variant === "web") {
      const tugged = tugRef.current;
      const measured = measure();
      if (!tugged || !measured) return;
      const limit = measured.fontSize * WEB_STRETCH_EM;
      const stretch = (moved: number) => limit * Math.tanh(moved / limit);
      const x = e.clientX - tugged.x;
      const y = e.clientY - tugged.y;
      if (Math.hypot(x, y) > FREE_DRAG_SLOP_PX) tugged.moved = true;
      if (!tugged.moved) return;
      pull(tugged.index, stretch(x), stretch(y), measured.fontSize);
      return;
    }
    if (variant === "magnify") {
      if (e.pointerType !== "mouse" || busyRef.current || reducedMotion()) return;
      lens(e.clientX);
      return;
    }
    if (variant === "cushion") {
      if (e.pointerType !== "mouse" || busyRef.current || reducedMotion()) return;
      sinkAt(e.clientX);
      return;
    }
    if (variant === "drift") {
      if (e.pointerType !== "mouse" || reducedMotion()) return;
      const now = performance.now();
      const last = lastPointerRef.current;
      lastPointerRef.current = { x: e.clientX, y: e.clientY, time: now };
      const measured = measure();
      if (!last || !measured) return;
      const elapsed = now - last.time;
      if (elapsed <= 0 || elapsed > DRIFT_GAP_MS) return;
      const speed = (moved: number) =>
        Math.max(-DRIFT_MAX_SPEED, Math.min(DRIFT_MAX_SPEED, moved / elapsed));
      const vx = speed(e.clientX - last.x);
      const vy = speed(e.clientY - last.y);
      const radius = measured.fontSize * DRIFT_RADIUS_EM;
      measured.centers.forEach((cx, i) => {
        const dx = (e.clientX - cx) / radius;
        const dy = (e.clientY - measured.middles[i]) / radius;
        const influence = Math.exp(-(dx * dx + dy * dy));
        springsRef.current[i]?.impulse({
          x: vx * influence * DRIFT_PUSH,
          y: vy * influence * DRIFT_PUSH,
          rotation: vx * influence * tilts[i] * DRIFT_SPIN,
        });
      });
      return;
    }
    if (variant === "free") {
      if (reducedMotion()) return;
      const grab = grabRef.current;
      if (grab) {
        const x = e.clientX - grab.x;
        const y = e.clientY - grab.y;
        if (Math.hypot(x, y) > FREE_DRAG_SLOP_PX) grab.moved = true;
        for (const spring of springsRef.current) spring.start({ x, y });
        return;
      }
      const measured = measure();
      if (e.pointerType !== "mouse" || busyRef.current || !measured) return;
      const reach = measured.fontSize * FREE_REACH_EM;
      const toward = (offset: number) => Math.max(-reach, Math.min(reach, offset * FREE_FOLLOW));
      measured.centers.forEach((cx, i) => {
        springsRef.current[i]?.start({
          x: toward(e.clientX - cx),
          y: toward(e.clientY - measured.middles[i]),
        });
      });
      return;
    }
    if (variant === "facets") {
      if (e.pointerType !== "mouse" || reducedMotion()) return;
      const k = facetAt(e.clientX);
      if (k === hoveredFacetRef.current) return;
      hoveredFacetRef.current = k;
      playFacet(k);
      return;
    }
    if (variant === "breathe") {
      if (e.pointerType !== "mouse" || reducedMotion()) return;
      const measured = measure();
      if (!measured) return;
      const radius = measured.fontSize * BREATHE_FLINCH_RADIUS_EM;
      flinchRef.current = measured.centers.map((cx) =>
        Math.exp(-(((e.clientX - cx) / radius) ** 2)),
      );
      return;
    }
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

  const onPointerLeave = (e: PointerEvent) => {
    if (variant === "press") {
      letGo(e, false);
      return;
    }
    flinchRef.current = [];
    lastPointerRef.current = null;
    if (variant === "drift" || variant === "attend" || variant === "web") return;
    if (variant === "free" && grabRef.current) return;
    if (variant === "facets") {
      hoveredFacetRef.current = -1;
      return;
    }
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
    else if (variant === "facets") playFacet(facetAt(e.clientX));
    else if (variant !== "web" && !draggedRef.current) play();
    draggedRef.current = false;
  };

  return (
    <span
      ref={rootRef}
      className={clsx(
        root,
        variant === "press" && pressable,
        variant === "sway" && swaying,
        variant === "facets" && faceted,
        variant === "free" && grabbable,
        variant === "web" && tuggable,
        className,
      )}
      onPointerEnter={onPointerEnter}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerCancel}
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
