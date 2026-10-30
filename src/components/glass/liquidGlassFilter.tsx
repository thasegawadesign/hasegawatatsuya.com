import { glassFilter } from "@/components/glass/glass.css";

type LiquidGlassFilterProps = {
  id: string;
  width: number;
  height: number;
  mapUrl: string;
  refractionPx: number;
  aberration: number;
};

const CHANNELS = [
  { name: "RED", spread: 0, matrix: "1 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0" },
  { name: "GREEN", spread: 1, matrix: "0 0 0 0 0  0 1 0 0 0  0 0 0 0 0  0 0 0 1 0" },
  { name: "BLUE", spread: 2, matrix: "0 0 0 0 0  0 0 0 0 0  0 0 1 0 0  0 0 0 1 0" },
] as const;

export function LiquidGlassFilter({
  id,
  width,
  height,
  mapUrl,
  refractionPx,
  aberration,
}: LiquidGlassFilterProps) {
  // マップの振れ幅は ±0.5 なので、縁での最大変位を refractionPx にするには倍の scale が要る。
  // 中央は無変位なので、チャンネルごとに scale をずらしても色収差は縁の帯にしか出ない
  const scale = refractionPx * 2;

  return (
    <svg className={glassFilter} aria-hidden="true">
      <defs>
        <filter
          id={id}
          x="0"
          y="0"
          width={width}
          height={height}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feImage
            x="0"
            y="0"
            width={width}
            height={height}
            href={mapUrl}
            preserveAspectRatio="none"
            result="MAP"
          />
          {CHANNELS.map(({ name, spread, matrix }) => [
            <feDisplacementMap
              key={`${name}-displaced`}
              in="SourceGraphic"
              in2="MAP"
              scale={scale * (1 + aberration * spread)}
              xChannelSelector="R"
              yChannelSelector="B"
              result={`${name}_DISPLACED`}
            />,
            <feColorMatrix
              key={`${name}-channel`}
              in={`${name}_DISPLACED`}
              type="matrix"
              values={matrix}
              result={`${name}_CHANNEL`}
            />,
          ])}
          <feBlend in="GREEN_CHANNEL" in2="BLUE_CHANNEL" mode="screen" result="GB" />
          <feBlend in="RED_CHANNEL" in2="GB" mode="screen" />
        </filter>
      </defs>
    </svg>
  );
}
