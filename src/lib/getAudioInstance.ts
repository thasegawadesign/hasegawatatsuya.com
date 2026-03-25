export const getAudioInstance = (path: string): HTMLAudioElement => {
  return new Audio(`/api/${path}`);
};
