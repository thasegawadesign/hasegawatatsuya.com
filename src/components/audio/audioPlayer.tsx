"use client";

import { isPlayingAudioAtom } from "@/atoms/isPlayingAudioAtom";
import {
  animationPaused,
  animationRunning,
  audioButton,
  audioButtonBox,
} from "@/components/audio/audioPlayer.css";
import { getAudioInstance } from "@/utils/getAudioInstance";
import { animated, to, useSpring } from "@react-spring/web";
import clsx from "clsx";
import { useAtom } from "jotai";
import { useEffect, useRef } from "react";

export default function AudioButton() {
  const [isPlayingAudio, setIsPlayingAudio] = useAtom(isPlayingAudioAtom);

  const audioButtonRef = useRef(null);
  const boxRef = useRef<HTMLDivElement>(null);

  const [spring, api] = useSpring(() => ({
    x: 0,
    y: 0,
    scale: 1,
    config: { tension: 300, friction: 20 },
  }));

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!boxRef.current) return;
    const rect = boxRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const dx = e.clientX - centerX;
    const dy = e.clientY - centerY;

    api.start({ x: dx * 0.6, y: dy * 0.6, scale: 1.28 });
  };

  const handleMouseLeave = () => {
    api.start({ x: 0, y: 0, scale: 1 });
  };

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
      ref={audioButtonRef}
      title={isPlayingAudio ? "Sound OFF" : "Sound ON"}
      className={clsx(audioButtonBox)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <animated.div
        ref={boxRef}
        style={{
          transform: to(
            [spring.x, spring.y, spring.scale],
            (xVal, yVal, s) => `translate(${xVal}px, ${yVal}px) scale(${s})`
          ),
        }}
        className={clsx(
          audioButton,
          isPlayingAudio ? animationRunning : animationPaused
        )}
      ></animated.div>
    </button>
  );
}
