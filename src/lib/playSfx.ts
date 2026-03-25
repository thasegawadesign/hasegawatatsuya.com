import { getAudioInstance } from "@/lib/getAudioInstance";

let sfxAudio: HTMLAudioElement | null = null;

export function playSfxClick() {
  if (typeof window === "undefined") return;
  if (!sfxAudio) sfxAudio = getAudioInstance("sfx/click");
  sfxAudio.currentTime = 0;
  void sfxAudio.play().catch(() => {});
}

export function playSfxSuccess() {
  if (typeof window === "undefined") return;
  if (!sfxAudio) sfxAudio = getAudioInstance("sfx/success");
  sfxAudio.currentTime = 0;
  void sfxAudio.play().catch(() => {});
}
