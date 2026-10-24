let context: AudioContext | null = null;
let analyser: AnalyserNode | null = null;
let bins: Uint8Array<ArrayBuffer> | null = null;
let prevBins: Float32Array | null = null;
let connectedElement: HTMLAudioElement | null = null;
let playing = false;

// 絶対的な音量で反応させると、起伏の小さい BGM では値が張り付いて動かないので、曲中の相対的な抑揚と拍を使う
let energySlow = 0;
let energyFloor = 0;
let energyCeil = 0;
let energyPrimed = false;
let fluxMean = 0;
let fluxVar = 0;
let sinceBeat = 1;
let beatSide = 1;
let midSlow = 0;
let swayTarget = 0;
let pulseTarget = 0;
let sinceFlash = 0;
let flashTarget = 0;
let flashStrength = 0;
let flashDecay = 1.3;
let flashSnap = false;
let flashX = 0.5;
let flashY = 0.5;
let echoArmed = false;
let lastPosition = -1;
let energyLong = 0;
let breakTime = 0;

// BGM で必ず光らせる時刻（声と強いアタック）。拍や帯域の解析では伴奏に埋もれて拾えないので時刻で持つ。
// 光が音より先に来ても気にならないが、遅れると目立つので、解析上の音の頭より少し前（0.1〜0.25s、目で見て合わせた値）に置く
// decay は余韻の引きの速さ（大きいほど短い）。1 つ目の声は短く切れるので、長いと光だけ残って見える
const GLOW_CUES = [
  { at: 54.6, strength: 1.8, decay: 2 },
  { at: 73.65, strength: 1.4, decay: 1.3 },
  { at: 95.85, strength: 1.4, decay: 1.3 },
  { at: 113.65, strength: 1.8, decay: 0.7 },
];

// iOS Safari は suspended の AudioContext に繋いだ要素が無音になるので、必ずユーザー操作の中から呼ぶ
export function connectBgmAnalyser(audio: HTMLAudioElement): void {
  if (typeof window === "undefined" || !("AudioContext" in window)) return;
  try {
    if (!context) context = new AudioContext();
    // createMediaElementSource は同じ要素に 2 回呼ぶと例外になる
    if (connectedElement !== audio) {
      const source = context.createMediaElementSource(audio);
      analyser = context.createAnalyser();
      analyser.fftSize = 1024;
      analyser.smoothingTimeConstant = 0.5;
      bins = new Uint8Array(analyser.frequencyBinCount);
      prevBins = new Float32Array(analyser.frequencyBinCount);
      source.connect(analyser);
      analyser.connect(context.destination);
      connectedElement = audio;
    }
    if (context.state === "suspended") void context.resume();
  } catch {
    // 解析は演出にすぎないので、失敗しても BGM の再生は止めない
  }
}

export function setBgmPlaying(value: boolean): void {
  playing = value;
  if (value && context?.state === "suspended") void context.resume();
}

function ease(current: number, target: number, delta: number, rate: number): number {
  return current + (target - current) * (1 - Math.exp(-delta * rate));
}

function bandAverage(fromHz: number, toHz: number): number {
  if (!analyser || !bins || !context) return 0;
  const hzPerBin = context.sampleRate / analyser.fftSize;
  const from = Math.max(1, Math.floor(fromHz / hzPerBin));
  const to = Math.min(bins.length - 1, Math.ceil(toHz / hzPerBin));
  let sum = 0;
  for (let i = from; i <= to; i++) sum += bins[i];
  return sum / ((to - from + 1) * 255);
}

function spectralFlux(): number {
  if (!bins || !prevBins) return 0;
  let flux = 0;
  for (let i = 1; i < bins.length; i++) {
    const v = bins[i] / 255;
    const d = v - prevBins[i];
    if (d > 0) flux += d;
    prevBins[i] = v;
  }
  return flux / bins.length;
}

// out の並びはシェーダーの uBgm と一致させる: (groove, glow, sway, pulse)。sway だけ -1..1、他は 0..1
export function sampleBgmLevels(
  out: { x: number; y: number; z: number; w: number },
  flash: { x: number; y: number; z: number },
  delta: number,
  enabled: boolean,
): void {
  let groove = 0;
  let glow = 0;
  let pulseHit = false;
  let flashHit = false;

  if (enabled && playing && analyser && bins && delta > 0) {
    analyser.getByteFrequencyData(bins);

    const energy = bandAverage(40, 4000);
    energySlow = ease(energySlow, energy, delta, 4);
    // 再生開始直後は幅が 0 から始まると groove が 1 に張り付くので、最初の値で揃える
    if (!energyPrimed) {
      energySlow = energyFloor = energyCeil = energyLong = energy;
      energyPrimed = true;
    }
    energyFloor = Math.min(energySlow, ease(energyFloor, energySlow, delta, 0.15));
    energyCeil = Math.max(energySlow, ease(energyCeil, energySlow, delta, 0.15));
    groove = Math.min(
      1,
      Math.max(0, (energySlow - energyFloor) / Math.max(energyCeil - energyFloor, 0.04)),
    );

    const mid = bandAverage(300, 3000);
    midSlow = ease(midSlow, mid, delta, 1.2);
    glow = Math.min(1, Math.max(0, (mid - midSlow) * 12));

    const flux = spectralFlux();
    const k = 1 - Math.exp(-delta * 2);
    const diff = flux - fluxMean;
    fluxMean += diff * k;
    fluxVar = (1 - k) * (fluxVar + diff * diff * k);
    sinceBeat += delta;
    sinceFlash += delta;

    const position = connectedElement?.currentTime ?? 0;
    // シークやループの巻き戻しで通過扱いにしないよう、通常の再生で進んだ分だけを見る
    const advanced = position - lastPosition;
    if (lastPosition >= 0 && advanced > 0 && advanced < 0.5) {
      for (const cue of GLOW_CUES) {
        if (lastPosition < cue.at && cue.at <= position) {
          flashHit = true;
          // 曲の山場なので、通常の上限 1 を超えて画面全体まで灯す
          flashStrength = cue.strength;
          flashDecay = cue.decay;
          flashSnap = true;
          flashX = 0.3 + 0.4 * Math.random();
          flashY = 0.3 + 0.4 * Math.random();
          sinceFlash = 0;
          echoArmed = false;
        }
      }
    }
    lastPosition = position;

    // 発光は「曲の決まった所では必ず光る」規則を軸にし、ときどきだけ裏をかく。
    // 全部を乱数にすると音と無関係に見え、全部を規則にすると機械的に見えるため
    energyLong = ease(energyLong, energy, delta, 0.5);
    if (energy < energyLong * 0.55) breakTime += delta;
    else if (energy > energyLong * 0.85) {
      if (breakTime > 0.25 && !flashHit && sinceFlash > 0.6) {
        flashHit = true;
        flashStrength = 0.9;
        flashX = 0.2 + 0.6 * Math.random();
        flashY = 0.2 + 0.6 * Math.random();
        sinceFlash = 0;
        echoArmed = Math.random() < 0.3;
      }
      breakTime = 0;
    }

    // BGM は約 130 BPM（1 拍 0.46s）。0.3s 未満の連続検出は 8 分音符なので、拍として数えない
    if (sinceBeat > 0.3 && diff > Math.sqrt(fluxVar) * 1.5 && flux > 0.004) {
      sinceBeat = 0;
      beatSide = -beatSide;
      pulseHit = true;
      const strong = diff > Math.sqrt(fluxVar) * 2.2;
      if (flashHit) {
        echoArmed = false;
      } else if (echoArmed) {
        echoArmed = false;
        flashHit = true;
        flashStrength = 0.4 + 0.2 * Math.random();
      } else if (strong && sinceFlash > 3) {
        if (Math.random() < 0.85) {
          flashHit = true;
          flashStrength = 0.7 + 0.2 * Math.random();
          flashX = 0.15 + 0.7 * Math.random();
          flashY = 0.15 + 0.7 * Math.random();
          echoArmed = Math.random() < 0.3;
        }
        sinceFlash = 0;
      } else if (!strong && sinceFlash > 2.5 && Math.random() < 0.03) {
        flashHit = true;
        flashStrength = 0.5 + 0.4 * Math.random();
        flashX = 0.1 + 0.8 * Math.random();
        flashY = 0.1 + 0.8 * Math.random();
        sinceFlash = 0;
      }
    }
  } else {
    sinceBeat = 1;
    sinceFlash = 0;
    echoArmed = false;
    lastPosition = -1;
    breakTime = 0;
    energyPrimed = false;
    midSlow = 0;
  }

  // 減衰は BGM のフェードアウト（300ms）より長く取り、止めたあと水面が静まっていくように見せる
  out.x = ease(out.x, groove, delta, groove > out.x ? 3 : 1.5);
  out.y = ease(out.y, glow, delta, glow > out.y ? 10 : 2.5);
  if (pulseHit) {
    pulseTarget = 1;
    swayTarget = beatSide;
  }
  if (flashHit) {
    flashTarget = flashStrength;
    if (flashStrength <= 1) flashDecay = 1.3;
  }
  pulseTarget *= Math.exp(-delta * 4.5);
  flashTarget *= Math.exp(-delta * flashDecay);
  swayTarget *= Math.exp(-delta * 1.6);
  // 目標値は拍で跳ねるが、そのまま使うと絵が 1 フレームで飛ぶので追従させる
  out.w = ease(out.w, pulseTarget, delta, 22);
  out.z = ease(out.z, swayTarget, delta, 7);
  // 生き物の発光に見せるため、瞬間的に点けず少しかけて灯す
  if (flashSnap) {
    flash.z = flashTarget;
    flashSnap = false;
  } else {
    flash.z = ease(flash.z, flashTarget, delta, 7);
  }
  flash.x = flashX;
  flash.y = flashY;
}
