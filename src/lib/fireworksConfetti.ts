import confetti from "canvas-confetti";

/** クリック位置を中心に、canvas-confetti の花火バーストを再生する */
export function playFireworksAt(clientX: number, clientY: number) {
  if (typeof window === "undefined") return;

  const origin = {
    x: clientX / window.innerWidth,
    y: clientY / window.innerHeight,
  };
  const count = 200;

  void confetti({
    origin,
    spread: 26,
    startVelocity: 55,
    particleCount: Math.floor(count * 0.25),
  });
  void confetti({
    origin,
    spread: 60,
    particleCount: Math.floor(count * 0.2),
  });
  void confetti({
    origin,
    spread: 100,
    decay: 0.91,
    scalar: 0.8,
    particleCount: Math.floor(count * 0.35),
  });
  void confetti({
    origin,
    spread: 120,
    startVelocity: 25,
    decay: 0.92,
    scalar: 1.2,
    particleCount: Math.floor(count * 0.1),
  });
  void confetti({
    origin,
    spread: 120,
    startVelocity: 45,
    particleCount: Math.floor(count * 0.1),
  });
}
