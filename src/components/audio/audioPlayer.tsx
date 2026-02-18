"use client";

import { isPlayingAudioAtom } from "@/atoms/isPlayingAudioAtom";
import {
  animationPaused,
  animationRunning,
  audioButton,
  audioButtonBox,
} from "@/components/audio/audioPlayer.css";
import Tooltip from "@/components/tooltip/tooltip";
import { getAudioInstance } from "@/utils/getAudioInstance";
import { animated, to, useSpring } from "@react-spring/web";
import clsx from "clsx";
import { useAtom } from "jotai";
import { useCallback, useEffect, useRef } from "react";

export default function AudioButton() {
  const [isPlayingAudio, setIsPlayingAudio] = useAtom(isPlayingAudioAtom);

  const audioButtonRef = useRef(null);
  const boxRef = useRef<HTMLDivElement>(null);
  const fadeIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const isFadingRef = useRef(false);

  const [spring, api] = useSpring(() => ({
    x: 0,
    y: 0,
    scale: 1,
    config: { tension: 300, friction: 20 },
  }));

  const fadeIn = useCallback(
    (audio: HTMLAudioElement, duration: number = 500) => {
      return new Promise<void>((resolve) => {
        if (isFadingRef.current) return resolve();

        isFadingRef.current = true;
        const startVolume = 0;
        const targetVolume = 1;
        const steps = 50;
        const stepDuration = duration / steps;
        const volumeStep = (targetVolume - startVolume) / steps;

        audio.volume = startVolume;
        let currentStep = 0;

        fadeIntervalRef.current = setInterval(() => {
          currentStep++;
          const newVolume = Math.min(
            startVolume + volumeStep * currentStep,
            targetVolume
          );
          audio.volume = newVolume;

          if (currentStep >= steps || newVolume >= targetVolume) {
            if (fadeIntervalRef.current) {
              clearInterval(fadeIntervalRef.current);
              fadeIntervalRef.current = null;
            }
            audio.volume = targetVolume;
            isFadingRef.current = false;
            resolve();
          }
        }, stepDuration);
      });
    },
    []
  );

  const fadeOut = useCallback(
    (audio: HTMLAudioElement, duration: number = 500) => {
      return new Promise<void>((resolve) => {
        if (isFadingRef.current) return resolve();

        isFadingRef.current = true;
        const startVolume = audio.volume;
        const targetVolume = 0;
        const steps = 50;
        const stepDuration = duration / steps;
        const volumeStep = (startVolume - targetVolume) / steps;

        let currentStep = 0;

        fadeIntervalRef.current = setInterval(() => {
          currentStep++;
          const newVolume = Math.max(
            startVolume - volumeStep * currentStep,
            targetVolume
          );
          audio.volume = newVolume;

          if (currentStep >= steps || newVolume <= targetVolume) {
            if (fadeIntervalRef.current) {
              clearInterval(fadeIntervalRef.current);
              fadeIntervalRef.current = null;
            }
            audio.volume = targetVolume;
            audio.pause();
            isFadingRef.current = false;
            resolve();
          }
        }, stepDuration);
      });
    },
    []
  );

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

    const handleAudioButtonClick = async () => {
      if (isFadingRef.current) return;

      const audio = getAudioInstance();

      if (isPlayingAudio) {
        setIsPlayingAudio(false);
        await fadeOut(audio, 300);
      } else {
        audio.loop = true;
        audio.volume = 0;
        audio.play();
        setIsPlayingAudio(true);
        await fadeIn(audio, 300);
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
  }, [isPlayingAudio, setIsPlayingAudio, fadeIn, fadeOut]);

  useEffect(() => {
    const audio = getAudioInstance();

    const handleVisibilityChange = async () => {
      if (document.hidden) {
        if (isPlayingAudio && !isFadingRef.current) {
          await fadeOut(audio, 200);
        }
      } else {
        if (isPlayingAudio && !isFadingRef.current) {
          audio.volume = 0;
          audio.play();
          await fadeIn(audio, 200);
        }
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [isPlayingAudio, fadeIn, fadeOut]);

  useEffect(() => {
    const audio = getAudioInstance();

    const playAudio = async () => {
      if (!audio || !isPlayingAudio) return;
      audio.currentTime = 0;
      audio.volume = 0;
      audio.play();
      await fadeIn(audio, 100);
    };

    audio.addEventListener("ended", playAudio);

    return () => {
      audio.removeEventListener("ended", playAudio);
    };
  }, [isPlayingAudio, fadeIn]);

  useEffect(() => {
    return () => {
      if (fadeIntervalRef.current) {
        clearInterval(fadeIntervalRef.current);
        fadeIntervalRef.current = null;
      }
      isFadingRef.current = false;
    };
  }, []);

  return (
    <animated.div
      ref={boxRef}
      className={clsx(audioButtonBox)}
      style={{
        transform: to(
          [spring.x, spring.y, spring.scale],
          (xVal, yVal, s) => `translate(${xVal}px, ${yVal}px) scale(${s})`
        ),
      }}
    >
      <Tooltip content={isPlayingAudio ? "Sound OFF" : "Sound ON"} side="top">
        <button
          ref={audioButtonRef}
          aria-label={isPlayingAudio ? "Sound OFF" : "Sound ON"}
          className={clsx(
            audioButton,
            isPlayingAudio ? animationRunning : animationPaused
          )}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        ></button>
      </Tooltip>
    </animated.div>
  );
}
