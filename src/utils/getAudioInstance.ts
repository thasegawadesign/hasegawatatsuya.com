let audio: HTMLAudioElement;

export const getAudioInstance = () => {
  if (!audio) {
    audio = new Audio("/journey-log.mp3");
  }
  return audio;
};
