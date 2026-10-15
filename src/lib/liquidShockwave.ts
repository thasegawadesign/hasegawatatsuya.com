type ShockwaveListener = (clientX: number, clientY: number) => void;

const listeners = new Set<ShockwaveListener>();

export function subscribeLiquidShockwave(listener: ShockwaveListener): () => void {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

export function triggerLiquidShockwave(clientX: number, clientY: number): void {
  for (const cb of listeners) {
    cb(clientX, clientY);
  }
}
