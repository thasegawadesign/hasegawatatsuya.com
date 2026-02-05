let audio: HTMLAudioElement;

export const getAudioInstance = () => {
  if (!audio) {
    audio = new Audio("/harmony.mp3");
  }
  return audio;
};
