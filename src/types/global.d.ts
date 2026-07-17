declare interface Document {
  startViewTransition?: (callback: () => void) => void;
}

interface LiquidBootHandle {
  canvas: HTMLCanvasElement;
  /** boot 開始時に決めた時間オフセット込みの現在時刻（秒） */
  time: () => number;
  stop: () => void;
}

declare global {
  interface Window {
    __liquidBoot?: LiquidBootHandle;
  }
}

export {};
