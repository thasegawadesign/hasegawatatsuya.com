const IOS_SMOOTHING = 0.6;

const round = (n: number) => Math.round(n * 100) / 100;
const rad = (deg: number) => (deg * Math.PI) / 180;

export const squirclePath = (
  width: number,
  height: number,
  radius: number,
  smoothing = IOS_SMOOTHING,
  offset = 0,
) => {
  const budget = Math.min(width, height) / 2;
  const r = Math.min(radius, budget);
  const s = Math.min(smoothing, Math.max(budget / r - 1, 0));
  const p = Math.min((1 + s) * r, budget);

  const arcMeasure = 90 * (1 - s);
  const arc = Math.sin(rad(arcMeasure / 2)) * r * Math.SQRT2;
  const alpha = (90 - arcMeasure) / 2;
  const p3ToP4 = r * Math.tan(rad(alpha / 2));
  const beta = 45 * s;
  const c = p3ToP4 * Math.cos(rad(beta));
  const d = c * Math.tan(rad(beta));
  const b = (p - arc - c - d) / 3;
  const a = 2 * b;

  const [A, C, D, L, R] = [a, c, d, arc, r].map(round);
  const ab = round(a + b);
  const bc = round(b + c);
  const abc = round(a + b + c);
  const W = round(offset + width);
  const H = round(offset + height);
  const O = round(offset);

  return [
    `M${round(offset + width - p)} ${O}`,
    `c${A} 0 ${ab} 0 ${abc} ${D}`,
    `a${R} ${R} 0 0 1 ${L} ${L}`,
    `c${D} ${C} ${D} ${bc} ${D} ${abc}`,
    `L${W} ${round(offset + height - p)}`,
    `c0 ${A} 0 ${ab} ${-D} ${abc}`,
    `a${R} ${R} 0 0 1 ${-L} ${L}`,
    `c${-C} ${D} ${-bc} ${D} ${-abc} ${D}`,
    `L${round(offset + p)} ${H}`,
    `c${-A} 0 ${-ab} 0 ${-abc} ${-D}`,
    `a${R} ${R} 0 0 1 ${-L} ${-L}`,
    `c${-D} ${-C} ${-D} ${-bc} ${-D} ${-abc}`,
    `L${O} ${round(offset + p)}`,
    `c0 ${-A} 0 ${-ab} ${D} ${-abc}`,
    `a${R} ${R} 0 0 1 ${L} ${-L}`,
    `c${C} ${-D} ${bc} ${-D} ${abc} ${-D}`,
    "Z",
  ].join("");
};

export const squircleClipPath = (width: number, height: number, radius: number) =>
  `path("${squirclePath(width, height, radius)}")`;

export const squircleCorners = (width: number, height: number, radius: number) => ({
  borderRadius: radius,
  clipPath: squircleClipPath(width, height, radius),
});

export const squircleReach = (radius: number) => (1 + IOS_SMOOTHING) * radius;

const svgUrl = (width: number, height: number, body: string) =>
  `url("data:image/svg+xml,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">${body}</svg>`,
  )}")`;

// 中央を 0 幅にすると塗りの元がなくなり中が透けるので、2px 残す
const maskBoxImage = (inset: number, path: (size: number) => string, outset = 0) => {
  const size = inset * 2 + 2;
  const image = svgUrl(size, size, `<path fill-rule="evenodd" d="${path(size)}"/>`);
  return `${image} ${inset} / ${inset}px / ${outset}px stretch`;
};

export const squircleMaskBoxImage = (radius: number) =>
  maskBoxImage(Math.ceil(squircleReach(radius)), (size) => squirclePath(size, size, radius));

export const squircleRingMaskBoxImage = (radius: number, width: number) =>
  maskBoxImage(
    Math.ceil(squircleReach(radius)),
    (size) =>
      squirclePath(size, size, radius) +
      squirclePath(size - width * 2, size - width * 2, radius - width, IOS_SMOOTHING, width),
  );

export const squircleOutsideMaskBoxImage = (radius: number, margin: number) =>
  maskBoxImage(
    Math.ceil(squircleReach(radius)) + margin,
    (size) =>
      `M0 0H${size}V${size}H0Z` +
      squirclePath(size - margin * 2, size - margin * 2, radius, IOS_SMOOTHING, margin),
    margin,
  );

export const squircleBottomMaskBoxImage = (radius: number) => {
  const inset = Math.ceil(squircleReach(radius));
  const size = inset * 2 + 2;
  const image = svgUrl(
    size,
    inset + 2,
    `<path transform="translate(0 ${-inset})" d="${squirclePath(size, size, radius)}"/>`,
  );
  return `${image} 0 ${inset} ${inset} / 0 ${inset}px ${inset}px stretch`;
};

export const squircleBottomCorners = (radius: number) => ({
  borderRadius: `0 0 ${radius}px ${radius}px`,
  WebkitMaskBoxImage: squircleBottomMaskBoxImage(radius),
});
