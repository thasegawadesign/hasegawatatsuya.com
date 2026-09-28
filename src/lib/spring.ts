import gsap from "gsap";

export interface SpringConfig {
  readonly tension: number;
  readonly friction: number;
  readonly mass?: number;
  readonly precision?: number;
}

export interface Spring<K extends string> {
  start(to: Partial<Record<K, number>>): void;
  stop(): void;
}

interface SpringAxis {
  position: number;
  velocity: number;
  target: number;
}

// react-spring と同じ 1ms 刻みの積分で、途中で目標が変わっても速度を引き継ぐ
export function createSpring<K extends string>(
  element: HTMLElement,
  initial: Record<K, number>,
  { tension, friction, mass = 1, precision = 0.001 }: SpringConfig,
): Spring<K> {
  const keys = Object.keys(initial) as K[];
  const axes = {} as Record<K, SpringAxis>;
  for (const key of keys) {
    axes[key] = { position: initial[key], velocity: 0, target: initial[key] };
  }
  const restVelocity = precision / 10;
  let running = false;

  const tick = (_time: number, deltaTime: number) => {
    const steps = Math.ceil(deltaTime);
    let settled = true;
    const values = {} as Record<K, number>;

    for (const key of keys) {
      const axis = axes[key];
      for (let i = 0; i < steps; i++) {
        if (
          Math.abs(axis.velocity) <= restVelocity &&
          Math.abs(axis.target - axis.position) <= precision
        ) {
          break;
        }
        const acceleration =
          (-tension * 1e-6 * (axis.position - axis.target) - friction * 1e-3 * axis.velocity) /
          mass;
        axis.velocity += acceleration;
        axis.position += axis.velocity;
      }
      if (
        Math.abs(axis.velocity) <= restVelocity &&
        Math.abs(axis.target - axis.position) <= precision
      ) {
        axis.position = axis.target;
        axis.velocity = 0;
      } else {
        settled = false;
      }
      values[key] = axis.position;
    }

    gsap.set(element, values);
    if (settled) stop();
  };

  const stop = () => {
    if (!running) return;
    running = false;
    gsap.ticker.remove(tick);
  };

  return {
    start(to: Partial<Record<K, number>>) {
      for (const key of keys) {
        const value = to[key];
        if (value !== undefined) axes[key].target = value;
      }
      if (!running) {
        running = true;
        gsap.ticker.add(tick);
      }
    },
    stop,
  };
}
