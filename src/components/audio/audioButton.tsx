"use client";

import { isPlayingAudioAtom } from "@/atoms/isPlayingAudioAtom";
import {
  animationPaused,
  animationRunning,
  audioButton,
} from "@/components/audio/audioButton.css";
import clsx from "clsx";
import { useAtom } from "jotai";
import { useEffect, useRef } from "react";

let audio: HTMLAudioElement;

export default function AudioButton() {
  const [isPlayingAudio, setIsPlayingAudio] = useAtom(isPlayingAudioAtom);

  const audioButtonRef = useRef(null);

  useEffect(() => {
    const handleAudioButtonClick = () => {
      if (isPlayingAudio) {
        audio.pause();
        setIsPlayingAudio(false);
      } else {
        audio.play();
        setIsPlayingAudio(true);
      }
    };

    const audioButton = audioButtonRef.current as unknown as HTMLButtonElement;

    if (audioButton) {
      audioButton.addEventListener("click", handleAudioButtonClick);
    }

    return () => {
      if (audioButton) {
        audioButton.removeEventListener("click", handleAudioButtonClick);
      }
    };
  }, [isPlayingAudio, setIsPlayingAudio]);

  useEffect(() => {
    audio = new Audio("/kanatanouchuu.mp3");

    const playAudio = () => {
      audio.currentTime = 0;
      audio.play();
    };

    audio.addEventListener("ended", playAudio);

    return () => {
      audio.removeEventListener("ended", playAudio);
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

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
