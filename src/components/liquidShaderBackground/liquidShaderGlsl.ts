/** WebGL2 フォールバック用 GLSL（WebGPU 非対応時に RawShaderMaterial で使用） */

export const LIQUID_VERTEX_SHADER = `
precision highp float;
attribute vec3 position;
attribute vec2 uv;
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`;

export const LIQUID_FRAGMENT_SHADER = `
precision highp float;

uniform float uTime;
uniform vec2 uResolution;
uniform float uMotion;

varying vec2 vUv;

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
}

float hash3(vec3 p) {
  return fract(sin(dot(p, vec3(127.1, 311.7, 74.7))) * 43758.5453);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
    mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
    u.y
  );
}

float fbm(vec2 p) {
  float v = 0.0;
  float a = 0.5;
  for (int i = 0; i < 5; i++) {
    v += a * noise(p);
    p *= 2.08;
    a *= 0.5;
  }
  return v;
}

float fbmRidged(vec2 p) {
  float v = 0.0;
  float a = 0.5;
  for (int i = 0; i < 4; i++) {
    float n = noise(p);
    n = 1.0 - abs(n * 2.0 - 1.0);
    v += a * n * n;
    p *= 2.1;
    a *= 0.52;
  }
  return v;
}

vec2 domainWarp(vec2 p, float t) {
  vec2 q = vec2(fbm(p + vec2(0.0, t * 0.08)), fbm(p + vec2(5.2, 3.1 + t * 0.06)));
  vec2 r = vec2(
    fbm(p + 3.8 * q + vec2(1.7, 9.2)),
    fbm(p + 3.8 * q + vec2(8.3, 2.8))
  );
  vec2 s = vec2(
    fbm(p + 2.2 * r + vec2(t * 0.11, -t * 0.09)),
    fbm(p + 2.2 * r + vec2(-t * 0.1, t * 0.12))
  );
  return p + (s - 0.5) * 1.15 + (r - 0.5) * 0.55;
}

vec2 vortexTwist(vec2 p, vec2 center, float t, float strength) {
  vec2 d = p - center;
  float r = length(d) + 1e-4;
  float falloff = (1.0 - smoothstep(0.0, 1.35, r)) * strength;
  float a = atan(d.y, d.x);
  a += falloff * (2.8 / (r + 0.35) + sin(t * 0.25 + r * 4.0) * 1.4);
  return center + vec2(cos(a), sin(a)) * r;
}

float heightAt(vec2 p) {
  return fbm(p) * 0.55 + fbmRidged(p * 1.4) * 0.45;
}

void main() {
  vec2 uv = vUv;
  float aspect = max(uResolution.x / uResolution.y, 0.5);
  vec2 p = (uv - 0.5) * vec2(aspect * 2.0, 2.0);

  float t = uTime * uMotion;

  vec2 vc = vec2(-aspect * 0.52, 0.42);
  p = vortexTwist(p, vc, t, 0.85);

  vec2 w = domainWarp(p * 0.95 + vec2(sin(t * 0.15), cos(t * 0.12)) * 0.08, t);
  w += vec2(sin(t * 0.22 + p.y * 3.0), cos(t * 0.19 + p.x * 3.0)) * 0.12;

  float e = 0.0045 * (0.6 + 0.4 * sin(t * 0.1));
  float h0 = heightAt(w + vec2(t * 0.04, -t * 0.035));
  float hx = heightAt(w + vec2(e, 0.0)) - heightAt(w - vec2(e, 0.0));
  float hy = heightAt(w + vec2(0.0, e)) - heightAt(w - vec2(0.0, e));
  vec3 N = normalize(vec3(-hx * 8.0, -hy * 8.0, 1.0));

  float h1 = fbm(w * 2.3 - vec2(t * 0.06, t * 0.05));
  float h2 = fbm(w * 1.1 + vec2(17.3, 9.1));
  float ridge = fbmRidged(w * 2.8 + t * 0.05);

  vec3 lightDir = normalize(vec3(0.35, 0.55, 0.76));
  vec3 viewDir = normalize(vec3(0.0, 0.0, 1.0));
  vec3 H = normalize(lightDir + viewDir);
  float ndl = max(0.0, dot(N, lightDir));
  float spec = pow(max(0.0, dot(N, H)), 64.0);
  float fres = pow(1.0 - max(0.0, dot(N, viewDir)), 3.5);

  vec3 baseBlue = vec3(0.023529, 0.074510, 0.819608);
  /** #8F2C71 */
  vec3 brandPlum = vec3(0.560784, 0.172549, 0.443137);
  vec3 abyss = mix(vec3(0.0, 0.02, 0.08), baseBlue, 0.38);
  vec3 navy = mix(vec3(0.02, 0.08, 0.22), baseBlue, 0.62);
  vec3 deepBlue = mix(baseBlue, vec3(0.2, 0.55, 1.0), 0.35);
  vec3 electricCyan = vec3(0.3, 0.88, 1.0);
  vec3 magenta = mix(vec3(0.98, 0.22, 0.62), brandPlum, 0.45);
  vec3 hotPink = mix(vec3(1.0, 0.45, 0.78), brandPlum, 0.38);
  vec3 sunTint = vec3(1.0, 0.92, 0.58);

  float heightMix = smoothstep(0.15, 0.9, h0);
  float swirlAccent = smoothstep(0.4, 0.95, h1) * smoothstep(0.12, 0.88, ridge);
  float magMask = smoothstep(0.5, 0.95, h2) * (0.55 + 0.45 * sin(h0 * 18.0 + h1 * 9.0 + t * 0.8));

  vec3 col = mix(abyss, navy, heightMix);
  col = mix(col, deepBlue, smoothstep(0.2, 0.68, h0) * 0.92);
  col = mix(col, electricCyan, smoothstep(0.32, 0.85, h0 + ridge * 0.28) * (0.58 + 0.42 * ndl));
  col = mix(col, mix(magenta, hotPink, h1), swirlAccent * 0.82);
  col = mix(col, hotPink, magMask * 0.62);
  col = mix(col, brandPlum, magMask * 0.22 + swirlAccent * 0.14);

  col += vec3(0.05, 0.2, 0.48) * (0.35 + 0.65 * ndl);
  col += vec3(0.88, 0.96, 1.0) * spec * 1.75;
  col += sunTint * spec * 0.62;
  col += vec3(0.25, 0.55, 1.0) * fres * 0.48 * (0.45 + h0);

  float edgeChroma = (abs(hx) + abs(hy)) * 3.0;
  col.r += edgeChroma * 0.04;
  col.b -= edgeChroma * 0.03;

  float g = hash3(vec3(uv * uResolution.xy * 0.85, t * 30.0)) - 0.5;
  col += g * 0.035;

  col = pow(col, vec3(0.97));
  col = mix(vec3(dot(col, vec3(0.299, 0.587, 0.114))), col, 1.12);

  float vig = 1.0 - dot(p * 0.28, p * 0.28);
  col *= clamp(vig * 0.9 + 0.24, 0.0, 1.0);

  gl_FragColor = vec4(col, 1.0);
}
`;
