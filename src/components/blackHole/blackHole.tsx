import {
  blackHoleContainer,
  svgStyles,
} from "@/components/blackHole/blackHole.css";

export default function BlackHole() {
  return (
    <div className={blackHoleContainer}>
      <svg
        viewBox="0 0 800 800"
        className={svgStyles}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* 降着円盤のグラデーション */}
          <radialGradient id="accretionDisk" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#000000" stopOpacity="1" />
            <stop offset="30%" stopColor="#ff4400" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#ffaa00" stopOpacity="0.9" />
            <stop offset="70%" stopColor="#ff6600" stopOpacity="0.7" />
            <stop offset="85%" stopColor="#ff2200" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#330000" stopOpacity="0.2" />
          </radialGradient>

          {/* 内側の高温領域 */}
          <radialGradient id="innerDisk" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#000000" stopOpacity="1" />
            <stop offset="20%" stopColor="#ffffff" stopOpacity="0.9" />
            <stop offset="40%" stopColor="#aaccff" stopOpacity="0.8" />
            <stop offset="60%" stopColor="#ff8800" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#ff4400" stopOpacity="0.3" />
          </radialGradient>

          {/* ジェットのグラデーション */}
          <linearGradient id="jetGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#88ccff" stopOpacity="0.8" />
            <stop offset="30%" stopColor="#aaeeff" stopOpacity="0.6" />
            <stop offset="70%" stopColor="#66aadd" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#004466" stopOpacity="0.1" />
          </linearGradient>

          {/* 背景の星々 */}
          <filter id="starGlow">
            <feGaussianBlur stdDeviation="1" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* 重力レンズ効果 */}
          <filter id="gravitationalLensing">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
            <feOffset in="blur" dx="2" dy="2" result="offset" />
            <feMerge>
              <feMergeNode in="offset" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* 降着円盤のアニメーション */}
          <animateTransform
            id="diskRotation"
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            from="0 400 400"
            to="360 400 400"
            dur="20s"
            repeatCount="indefinite"
          />
        </defs>

        {/* 背景の星々 */}
        <g>
          <circle
            cx="100"
            cy="150"
            r="1"
            fill="#ffffff"
            filter="url(#starGlow)"
            opacity="0.8"
          />
          <circle
            cx="700"
            cy="200"
            r="0.5"
            fill="#aaccff"
            filter="url(#starGlow)"
            opacity="0.6"
          />
          <circle
            cx="150"
            cy="600"
            r="1.5"
            fill="#ffccaa"
            filter="url(#starGlow)"
            opacity="0.7"
          />
          <circle
            cx="650"
            cy="650"
            r="0.8"
            fill="#ccaaff"
            filter="url(#starGlow)"
            opacity="0.5"
          />
          <circle
            cx="50"
            cy="400"
            r="1.2"
            fill="#ffffff"
            filter="url(#starGlow)"
            opacity="0.9"
          />
          <circle
            cx="750"
            cy="450"
            r="0.7"
            fill="#ffaacc"
            filter="url(#starGlow)"
            opacity="0.6"
          />
          <circle
            cx="200"
            cy="100"
            r="0.6"
            fill="#aaffcc"
            filter="url(#starGlow)"
            opacity="0.4"
          />
          <circle
            cx="600"
            cy="100"
            r="1.1"
            fill="#ccccff"
            filter="url(#starGlow)"
            opacity="0.8"
          />
        </g>

        {/* 極ジェット（上） */}
        <g>
          <ellipse
            cx="400"
            cy="200"
            rx="8"
            ry="180"
            fill="url(#jetGradient)"
            opacity="0.7"
          />
          <ellipse
            cx="400"
            cy="200"
            rx="4"
            ry="160"
            fill="url(#jetGradient)"
            opacity="0.9"
          />
        </g>

        {/* 極ジェット（下） */}
        <g>
          <ellipse
            cx="400"
            cy="600"
            rx="8"
            ry="180"
            fill="url(#jetGradient)"
            opacity="0.7"
          />
          <ellipse
            cx="400"
            cy="600"
            rx="4"
            ry="160"
            fill="url(#jetGradient)"
            opacity="0.9"
          />
        </g>

        {/* 降着円盤（外側） */}
        <g>
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            from="0 400 400"
            to="360 400 400"
            dur="25s"
            repeatCount="indefinite"
          />
          <ellipse
            cx="400"
            cy="400"
            rx="280"
            ry="70"
            fill="url(#accretionDisk)"
            opacity="0.8"
          />
        </g>

        {/* 降着円盤（中間） */}
        <g>
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            from="0 400 400"
            to="360 400 400"
            dur="15s"
            repeatCount="indefinite"
          />
          <ellipse
            cx="400"
            cy="400"
            rx="200"
            ry="50"
            fill="url(#accretionDisk)"
            opacity="0.9"
          />
        </g>

        {/* 降着円盤（内側・高温） */}
        <g>
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            from="0 400 400"
            to="360 400 400"
            dur="8s"
            repeatCount="indefinite"
          />
          <ellipse
            cx="400"
            cy="400"
            rx="120"
            ry="30"
            fill="url(#innerDisk)"
            opacity="1"
          />
        </g>

        {/* 事象の地平線（シュワルツシルト半径） */}
        <circle
          cx="400"
          cy="400"
          r="60"
          fill="#000000"
          stroke="#333333"
          strokeWidth="1"
          opacity="1"
        />

        {/* フォトンスフィア（光の軌道） */}
        <circle
          cx="400"
          cy="400"
          r="90"
          fill="none"
          stroke="#444444"
          strokeWidth="0.5"
          opacity="0.3"
          strokeDasharray="2,4"
        />

        {/* 重力レンズ効果（アインシュタインリング風） */}
        <g filter="url(#gravitationalLensing)">
          <circle
            cx="400"
            cy="400"
            r="140"
            fill="none"
            stroke="#666699"
            strokeWidth="1"
            opacity="0.4"
          />
          <circle
            cx="400"
            cy="400"
            r="160"
            fill="none"
            stroke="#666699"
            strokeWidth="0.5"
            opacity="0.2"
          />
        </g>

        {/* 降着円盤の渦構造 */}
        <g>
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            from="0 400 400"
            to="360 400 400"
            dur="12s"
            repeatCount="indefinite"
          />
          <path
            d="M 320 400 Q 360 380 400 400 Q 440 420 480 400 Q 520 380 560 400"
            fill="none"
            stroke="#ffaa44"
            strokeWidth="2"
            opacity="0.6"
          />
          <path
            d="M 300 400 Q 340 420 400 400 Q 460 380 500 400 Q 540 420 580 400"
            fill="none"
            stroke="#ff6622"
            strokeWidth="1.5"
            opacity="0.5"
          />
        </g>

        {/* エネルギー放出の閃光効果 */}
        <g>
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            from="0 400 400"
            to="360 400 400"
            dur="5s"
            repeatCount="indefinite"
          />
          <circle cx="350" cy="380" r="3" fill="#ffffff" opacity="0.8">
            <animate
              attributeName="opacity"
              values="0.8;0.3;0.8"
              dur="2s"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="450" cy="420" r="2" fill="#aaccff" opacity="0.6">
            <animate
              attributeName="opacity"
              values="0.6;0.2;0.6"
              dur="3s"
              repeatCount="indefinite"
            />
          </circle>
        </g>
      </svg>
    </div>
  );
}
