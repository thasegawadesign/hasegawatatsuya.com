let audio: HTMLAudioElement;

export const getAudioInstance = () => {
  if (!audio) {
    audio = new Audio("/api/audio");
  }
  return audio;
};
