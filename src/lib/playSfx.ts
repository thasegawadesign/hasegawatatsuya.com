import { getAudioInstance } from "@/lib/getAudioInstance";

const audioByPath: Record<string, HTMLAudioElement | null> = {
  "sfx/click": null,
  "sfx/success": null,
};

function playSfx(path: string) {
  if (typeof window === "undefined") return;

  if (!audioByPath[path]) audioByPath[path] = getAudioInstance(path);
  const audio = audioByPath[path]!;

  // 連打でも毎回先頭から鳴らす
  audio.currentTime = 0;
  void audio.play().catch(() => {});
}

export function playSfxClick() {
  playSfx("sfx/click");
}

export function playSfxSuccess() {
  playSfx("sfx/success");
}
