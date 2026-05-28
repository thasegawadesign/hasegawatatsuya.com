const isTouchDevice =
  typeof window !== "undefined" ? window.matchMedia("(pointer: coarse)").matches : false;

export function haptic(pattern: number | number[] = 50) {
  try {
    if (!isTouchDevice) return;

    if ("vibrate" in navigator) {
      navigator.vibrate(pattern);
    }
  } catch {}
}
