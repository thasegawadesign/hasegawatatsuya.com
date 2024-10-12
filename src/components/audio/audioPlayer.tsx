"use client";

import { isPlayingAudioAtom } from "@/atoms/isPlayingAudioAtom";
import {
  animationPaused,
  animationRunning,
  audioButton,
} from "@/components/audio/audioPlayer.css";
import clsx from "clsx";
import { useAtom } from "jotai";
import { useCallback, useEffect, useRef, useState } from "react";

export default function AudioButton() {
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const [isPlayingAudio, setIsPlayingAudio] = useAtom(isPlayingAudioAtom);

  const audioButtonRef = useRef(null);

  const playAudio = useCallback(() => {
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
  }, [audio]);

  const handleAudioButtonClick = useCallback(() => {
    if (isPlayingAudio) {
      audio?.pause();
      setIsPlayingAudio(false);
    } else {
      audio?.play();
      setIsPlayingAudio(true);
    }
  }, [audio, isPlayingAudio, setIsPlayingAudio]);

  useEffect(() => {
    setAudio(new Audio("/kanatanouchuu.mp3"));
  }, []);

  useEffect(() => {
    const audioButton = audioButtonRef.current as unknown as HTMLButtonElement;

    if (audioButton) {
      audioButton.addEventListener("click", handleAudioButtonClick);
    }

    return () => {
      if (audioButton) {
        audioButton.removeEventListener("click", handleAudioButtonClick);
      }
    };
  }, [handleAudioButtonClick, isPlayingAudio, setIsPlayingAudio]);

  useEffect(() => {
    audio?.addEventListener("ended", playAudio);

    return () => {
      audio?.removeEventListener("ended", playAudio);
    };
  }, [audio, playAudio]);

  return (
    <button
      className={clsx(
        audioButton,
        isPlayingAudio ? animationRunning : animationPaused
      )}
      ref={audioButtonRef}
    ></button>
  );
}
