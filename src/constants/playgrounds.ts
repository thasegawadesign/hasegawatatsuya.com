export type PlaygroundItem = {
  id: string;
  nameLines: string[];
  useNameSpans?: boolean;
  category: string;
  href: string;
  iconSrc: string;
  mockupSrc?: string;
  mockupWidth?: number;
  mockupHeight?: number;
  external?: boolean;
};

export const PLAYGROUNDS: PlaygroundItem[] = [
  {
    id: "playground-auto-playing-carousel",
    nameLines: ["Auto playing carousel", "自動再生カルーセル"],
    category: "(プロトタイプ)",
    href: "/playgrounds/auto-playing-carousel",
    iconSrc: "/images/icons/auto-playing-carousel-icon.avif",
    mockupSrc: "/images/mockups/auto-playing-carousel-mockup.avif",
    mockupWidth: 6000,
    mockupHeight: 4500,
  },
  {
    id: "playground-moire-playground",
    nameLines: ["モアレパターン"],
    category: "(プロトタイプ)",
    href: "/playgrounds/moire-playground",
    iconSrc: "/images/icons/moire-playground-icon.svg",
    mockupSrc: "/images/mockups/moire-playground-mockup.avif",
    mockupWidth: 6000,
    mockupHeight: 4500,
  },
  {
    id: "playground-editorial-hero-prototype",
    nameLines: ["大小2枚の", "非対称ヒーロー"],
    category: "(プロトタイプ)",
    href: "/playgrounds/editorial-hero-prototype",
    iconSrc: "/images/icons/editorial-hero-prototype-icon.avif",
    mockupSrc: "/images/mockups/editorial-hero-prototype-mockup.avif",
    mockupWidth: 6000,
    mockupHeight: 4500,
  },
  {
    id: "playground-customer-voice-carousel-prototype",
    nameLines: ["お客様の声", "カルーセル"],
    category: "(プロトタイプ)",
    href: "/playgrounds/customer-voice-carousel-prototype",
    iconSrc: "/images/icons/customer-voice-carousel-prototype-icon.avif",
    mockupSrc: "/images/mockups/customer-voice-carousel-prototype-mockup.avif",
    mockupWidth: 6000,
    mockupHeight: 4500,
  },
  {
    id: "playground-vision-scroll-snap",
    nameLines: ["Vision", "スクロールスナップ"],
    category: "(プロトタイプ)",
    href: "/playgrounds/vision-scroll-snap",
    iconSrc: "/images/icons/vision-scroll-snap-icon.avif",
    mockupSrc: "/images/mockups/vision-scroll-snap-mockup.avif",
    mockupWidth: 6000,
    mockupHeight: 4500,
  },
  {
    id: "playground-nextjs-splide-carousel",
    nameLines: ["アクセシブルな", "Splideカルーセル"],
    category: "(プロトタイプ)",
    href: "/playgrounds/nextjs-splide-carousel",
    iconSrc: "/images/icons/nextjs-splide-carousel-icon.avif",
    mockupSrc: "/images/mockups/nextjs-splide-carousel-mockup.avif",
    mockupWidth: 6000,
    mockupHeight: 4500,
  },
  {
    id: "playground-mega-dropdown-menu-prototype",
    nameLines: ["メガドロップダウン", "メニュー"],
    category: "(プロトタイプ)",
    href: "/playgrounds/mega-dropdown-menu-prototype",
    iconSrc: "/images/icons/mega-dropdown-menu-prototype-icon.avif",
    mockupSrc: "/images/mockups/mega-dropdown-menu-prototype-mockup.avif",
    mockupWidth: 6000,
    mockupHeight: 4500,
  },
  {
    id: "playground-playlist2025",
    nameLines: ["プレイリスト2025"],
    useNameSpans: false,
    category: "(グラフィック)",
    href: "/playgrounds/playlist2025",
    iconSrc: "/images/icons/playlist2025-icon.avif",
    mockupSrc: "/images/mockups/playlist2025-mockup.avif",
    mockupWidth: 4000,
    mockupHeight: 3000,
  },
  {
    id: "playground-fleur",
    nameLines: ["フルール", "ブランドサイト"],
    category: "(Webサイト)",
    href: "/playgrounds/fleur",
    iconSrc: "/images/icons/fleur-icon.avif",
    mockupSrc: "/images/mockups/fleur-website-mockup.avif",
    mockupWidth: 4000,
    mockupHeight: 3000,
  },
];
