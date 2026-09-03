/**
 * 3x 端末で fill-rate が 9 倍になるのを防ぐ。Retina は 2 まで描く。
 */
export const MAX_CANVAS_PIXEL_RATIO = 2;

export function getCanvasPixelRatio(): number {
  return Math.min(window.devicePixelRatio || 1, MAX_CANVAS_PIXEL_RATIO);
}
