let audio: HTMLAudioElement;

export const getAudioInstance = () => {
  if (!audio) {
    audio = new Audio("/sun-dappled-resonance.mp3");
  }
  return audio;
};
