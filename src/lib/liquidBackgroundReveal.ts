let revealed = false;
const listeners = new Set<() => void>();

export function isLiquidBackgroundRevealed(): boolean {
  return revealed;
}

export function subscribeLiquidBackgroundReveal(onReveal: () => void): () => void {
  if (revealed) {
    onReveal();
    return () => {};
  }
  listeners.add(onReveal);
  return () => {
    listeners.delete(onReveal);
  };
}

export function notifyLiquidBackgroundReveal(): void {
  if (revealed) return;
  revealed = true;
  for (const cb of listeners) {
    cb();
  }
  listeners.clear();
}
