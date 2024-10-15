"use client";

import { isPlayingAudioAtom } from "@/atoms/isPlayingAudioAtom";
import {
  animationPaused,
  animationRunning,
  audioButton,
} from "@/components/audio/audioPlayer.css";
import { getAudioInstance } from "@/utils/getAudioInstance";
import clsx from "clsx";
import { useAtom } from "jotai";
import { useEffect, useRef } from "react";

export default function AudioButton() {
  const [isPlayingAudio, setIsPlayingAudio] = useAtom(isPlayingAudioAtom);

  const audioButtonRef = useRef(null);

  useEffect(() => {
    const audioButton = audioButtonRef.current as unknown as HTMLButtonElement;

    const handleAudioButtonClick = () => {
      const audio = getAudioInstance();

      if (isPlayingAudio) {
        audio.pause();
        setIsPlayingAudio(false);
      } else {
        audio.loop = true;
        audio.play();
        setIsPlayingAudio(true);
      }
    };

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
    const audio = getAudioInstance();

    const handleVisibilityChange = () => {
      if (document.hidden) {
        audio.pause();
      } else {
        if (isPlayingAudio) {
          audio.play();
        }
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [isPlayingAudio]);

  useEffect(() => {
    const audio = getAudioInstance();

    const playAudio = () => {
      if (!audio) return;
      audio.currentTime = 0;
      audio.play();
    };

    audio.addEventListener("ended", playAudio);

    return () => {
      audio.removeEventListener("ended", playAudio);
    };
  }, [isPlayingAudio]);

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
