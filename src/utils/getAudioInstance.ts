let audio: HTMLAudioElement;

export const getAudioInstance = () => {
  if (!audio) {
    audio = new Audio("/circuit-sleep.mp3");
  }
  return audio;
};
