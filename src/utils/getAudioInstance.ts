let audio: HTMLAudioElement;

export const getAudioInstance = () => {
  if (!audio) {
    audio = new Audio("/kanatanouchuu.mp3");
  }
  return audio;
};
