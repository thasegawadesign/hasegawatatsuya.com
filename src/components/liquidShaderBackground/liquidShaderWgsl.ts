/**
 * WebGPU 用 WGSL — `wgslFn` は先頭の 1 関数だけをパースするため、ヘルパーは 1 関数ずつ分割し、
 * メインの `liquidColor` に `includes` で渡す。
 */

export const LIQUID_WGSL_HASH = /* wgsl */ `
fn hash(p: vec2<f32>) -> f32 {
  return fract(sin(dot(p, vec2<f32>(127.1, 311.7))) * 43758.5453);
}
`;

export const LIQUID_WGSL_HASH3 = /* wgsl */ `
fn hash3(p: vec3<f32>) -> f32 {
  return fract(sin(dot(p, vec3<f32>(127.1, 311.7, 74.7))) * 43758.5453);
}
`;

export const LIQUID_WGSL_NOISE = /* wgsl */ `
fn noise(p: vec2<f32>) -> f32 {
  let i = floor(p);
  let f = fract(p);
  let u = f * f * (vec2<f32>(3.0, 3.0) - 2.0 * f);
  return mix(
    mix(hash(i), hash(i + vec2<f32>(1.0, 0.0)), u.x),
    mix(hash(i + vec2<f32>(0.0, 1.0)), hash(i + vec2<f32>(1.0, 1.0)), u.x),
    u.y
  );
}
`;

export const LIQUID_WGSL_FBM = /* wgsl */ `
fn fbm(p_in: vec2<f32>) -> f32 {
  var p = p_in;
  var v = 0.0;
  var a = 0.5;
  for (var i: i32 = 0; i < 5; i = i + 1) {
    v = v + a * noise(p);
    p = p * 2.08;
    a = a * 0.5;
  }
  return v;
}
`;

export const LIQUID_WGSL_FBM_RIDGED = /* wgsl */ `
fn fbmRidged(p_in: vec2<f32>) -> f32 {
  var p = p_in;
  var v = 0.0;
  var a = 0.5;
  for (var i: i32 = 0; i < 4; i = i + 1) {
    var n = noise(p);
    n = 1.0 - abs(n * 2.0 - 1.0);
    v = v + a * n * n;
    p = p * 2.1;
    a = a * 0.52;
  }
  return v;
}
`;

export const LIQUID_WGSL_DOMAIN_WARP = /* wgsl */ `
fn domainWarp(p: vec2<f32>, t: f32) -> vec2<f32> {
  let q = vec2<f32>(
    fbm(p + vec2<f32>(0.0, t * 0.08)),
    fbm(p + vec2<f32>(5.2, 3.1 + t * 0.06))
  );
  let r = vec2<f32>(
    fbm(p + 3.8 * q + vec2<f32>(1.7, 9.2)),
    fbm(p + 3.8 * q + vec2<f32>(8.3, 2.8))
  );
  let s = vec2<f32>(
    fbm(p + 2.2 * r + vec2<f32>(t * 0.11, -t * 0.09)),
    fbm(p + 2.2 * r + vec2<f32>(-t * 0.1, t * 0.12))
  );
  return p + (s - vec2<f32>(0.5, 0.5)) * 1.15 + (r - vec2<f32>(0.5, 0.5)) * 0.55;
}
`;

export const LIQUID_WGSL_VORTEX_TWIST = /* wgsl */ `
fn vortexTwist(p: vec2<f32>, center: vec2<f32>, t: f32, strength: f32) -> vec2<f32> {
  let d = p - center;
  let r = length(d) + 0.0001;
  let falloff = (1.0 - smoothstep(0.0, 1.35, r)) * strength;
  var a = atan2(d.y, d.x);
  a = a + falloff * (2.8 / (r + 0.35) + sin(t * 0.25 + r * 4.0) * 1.4);
  return center + vec2<f32>(cos(a), sin(a)) * r;
}
`;

export const LIQUID_WGSL_HEIGHT_AT = /* wgsl */ `
fn heightAt(p: vec2<f32>) -> f32 {
  return fbm(p) * 0.55 + fbmRidged(p * 1.4) * 0.45;
}
`;

/** メイン（TSL から呼ぶのはこの 1 本だけ） */
export const LIQUID_WGSL_LIQUID_COLOR = /* wgsl */ `
fn liquidColor(vUv: vec2<f32>, uTime: f32, uResolution: vec2<f32>, uMotion: f32) -> vec3<f32> {
  let uv = vUv;
  let aspect = max(uResolution.x / uResolution.y, 0.5);
  var p = (uv - vec2<f32>(0.5, 0.5)) * vec2<f32>(aspect * 2.0, 2.0);

  let t = uTime * uMotion;

  let vc = vec2<f32>(-aspect * 0.52, 0.42);
  p = vortexTwist(p, vc, t, 0.85);

  var w = domainWarp(p * 0.95 + vec2<f32>(sin(t * 0.15), cos(t * 0.12)) * 0.08, t);
  w = w + vec2<f32>(sin(t * 0.22 + p.y * 3.0), cos(t * 0.19 + p.x * 3.0)) * 0.12;

  let e = 0.0045 * (0.6 + 0.4 * sin(t * 0.1));
  let h0 = heightAt(w + vec2<f32>(t * 0.04, -t * 0.035));
  let hx = heightAt(w + vec2<f32>(e, 0.0)) - heightAt(w - vec2<f32>(e, 0.0));
  let hy = heightAt(w + vec2<f32>(0.0, e)) - heightAt(w - vec2<f32>(0.0, e));
  let N = normalize(vec3<f32>(-hx * 8.0, -hy * 8.0, 1.0));

  let h1 = fbm(w * 2.3 - vec2<f32>(t * 0.06, t * 0.05));
  let h2 = fbm(w * 1.1 + vec2<f32>(17.3, 9.1));
  let ridge = fbmRidged(w * 2.8 + t * 0.05);

  let lightDir = normalize(vec3<f32>(0.35, 0.55, 0.76));
  let viewDir = normalize(vec3<f32>(0.0, 0.0, 1.0));
  let H = normalize(lightDir + viewDir);
  let ndl = max(0.0, dot(N, lightDir));
  let spec = pow(max(0.0, dot(N, H)), 64.0);
  let fres = pow(1.0 - max(0.0, dot(N, viewDir)), 3.5);

  let baseBlue = vec3<f32>(0.023529, 0.074510, 0.819608);
  /* #8F2C71 */
  let brandPlum = vec3<f32>(0.560784, 0.172549, 0.443137);
  let abyss = mix(vec3<f32>(0.0, 0.02, 0.08), baseBlue, 0.38);
  let navy = mix(vec3<f32>(0.02, 0.08, 0.22), baseBlue, 0.62);
  let deepBlue = mix(baseBlue, vec3<f32>(0.2, 0.55, 1.0), 0.35);
  let electricCyan = vec3<f32>(0.3, 0.88, 1.0);
  let magenta = mix(vec3<f32>(0.98, 0.22, 0.62), brandPlum, 0.45);
  let hotPink = mix(vec3<f32>(1.0, 0.45, 0.78), brandPlum, 0.38);
  let sunTint = vec3<f32>(1.0, 0.92, 0.58);

  let heightMix = smoothstep(0.15, 0.9, h0);
  let swirlAccent = smoothstep(0.4, 0.95, h1) * smoothstep(0.12, 0.88, ridge);
  let magMask = smoothstep(0.5, 0.95, h2) * (0.55 + 0.45 * sin(h0 * 18.0 + h1 * 9.0 + t * 0.8));

  var col = mix(abyss, navy, heightMix);
  col = mix(col, deepBlue, smoothstep(0.2, 0.68, h0) * 0.92);
  col = mix(col, electricCyan, smoothstep(0.32, 0.85, h0 + ridge * 0.28) * (0.58 + 0.42 * ndl));
  col = mix(col, mix(magenta, hotPink, h1), swirlAccent * 0.82);
  col = mix(col, hotPink, magMask * 0.62);
  col = mix(col, brandPlum, magMask * 0.22 + swirlAccent * 0.14);

  col = col + vec3<f32>(0.05, 0.2, 0.48) * (0.35 + 0.65 * ndl);
  col = col + vec3<f32>(0.88, 0.96, 1.0) * spec * 1.75;
  col = col + sunTint * spec * 0.62;
  col = col + vec3<f32>(0.25, 0.55, 1.0) * fres * 0.48 * (0.45 + h0);

  let edgeChroma = (abs(hx) + abs(hy)) * 3.0;
  col = vec3<f32>(col.x + edgeChroma * 0.04, col.y, col.z - edgeChroma * 0.03);

  let g = hash3(vec3<f32>(uv * uResolution * 0.85, t * 30.0)) - 0.5;
  col = col + vec3<f32>(g * 0.035);

  col = vec3<f32>(pow(col.x, 0.97), pow(col.y, 0.97), pow(col.z, 0.97));
  let lum = dot(col, vec3<f32>(0.299, 0.587, 0.114));
  col = mix(vec3<f32>(lum, lum, lum), col, 1.12);

  let vig = 1.0 - dot(p * 0.28, p * 0.28);
  col = col * clamp(vig * 0.9 + 0.24, 0.0, 1.0);

  return col;
}
`;
