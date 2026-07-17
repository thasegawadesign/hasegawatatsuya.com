declare interface Document {
  startViewTransition?: (callback: () => void) => void;
}

interface LiquidBootHandle {
  canvas: HTMLCanvasElement;
  stop: () => void;
}

declare global {
  interface Window {
    __liquidBoot?: LiquidBootHandle;
  }
}

export {};
