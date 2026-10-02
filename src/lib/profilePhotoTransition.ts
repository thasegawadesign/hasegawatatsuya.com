import { PROFILE_PHOTO_TRANSITION_NAME } from "@/lib/preloadAboutPhoto";

const GROUP = `::view-transition-group(${PROFILE_PHOTO_TRANSITION_NAME})`;
const DURATION = 800;
const EASING = "cubic-bezier(0.76, 0, 0.24, 1)";

// 既定の group アニメーションは width / height も動かすためメインスレッドで描画され、
// モバイルではカクつく。最終サイズに固定し、transform の scale だけで補間し直す。
export const morphProfilePhotoWithTransform = () => {
  const root = document.documentElement;
  const uaAnimation = root
    .getAnimations({ subtree: true })
    .find((animation) => (animation.effect as KeyframeEffect | null)?.pseudoElement === GROUP);
  if (!uaAnimation) return;

  const from = (uaAnimation.effect as KeyframeEffect).getKeyframes()[0];
  const fromTransform = from?.transform;
  const fromWidth = parseFloat(String(from?.width));
  const fromHeight = parseFloat(String(from?.height));
  if (typeof fromTransform !== "string" || !fromWidth || !fromHeight) return;

  uaAnimation.cancel();

  const to = getComputedStyle(root, GROUP);
  const toWidth = parseFloat(to.width);
  const toHeight = parseFloat(to.height);
  if (!toWidth || !toHeight) {
    uaAnimation.play();
    return;
  }

  const toTransform = to.transform === "none" ? "" : to.transform;
  // 縦横で倍率が違うと写真が歪むので高さ基準の等倍率にし、横のずれは中央寄せで吸収する
  const scale = fromHeight / toHeight;
  const offsetX = (fromWidth - toWidth * scale) / 2;

  root.animate(
    [
      {
        transformOrigin: "0 0",
        transform: `${fromTransform} translateX(${offsetX}px) scale(${scale})`,
      },
      { transformOrigin: "0 0", transform: `${toTransform} translateX(0px) scale(1)` },
    ],
    { duration: DURATION, easing: EASING, fill: "both", pseudoElement: GROUP },
  );
};
