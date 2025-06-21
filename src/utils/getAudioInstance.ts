let audio: HTMLAudioElement;

export const getAudioInstance = () => {
  if (!audio) {
    audio = new Audio("/uchuu.mp3");
  }
  return audio;
};
