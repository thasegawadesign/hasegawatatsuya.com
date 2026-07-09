export type ToolItem = {
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

export const TOOLS: ToolItem[] = [
  {
    id: "tool-mujo-words",
    nameLines: ["無常の言葉"],
    category: "(Webアプリケーション)",
    href: "/tools/mujo-words",
    iconSrc: "/images/icons/mujo-words-icon.avif",
    mockupSrc: "/images/mockups/mujo-words-mockup.avif",
    mockupWidth: 6000,
    mockupHeight: 4500,
  },
  {
    id: "tool-social-flux",
    nameLines: ["社会の流転"],
    category: "(Webアプリケーション)",
    href: "/tools/social-flux",
    iconSrc: "/images/icons/social-flux-icon.avif",
    mockupSrc: "/images/mockups/social-flux-mockup.avif",
    mockupWidth: 6000,
    mockupHeight: 4500,
  },
  {
    id: "tool-shader-mandala",
    nameLines: ["シェーダー曼荼羅", "目標達成シート"],
    category: "(Webアプリケーション)",
    href: "/tools/shader-mandala",
    iconSrc: "/images/icons/shader-mandala-icon.avif",
    mockupSrc: "/images/mockups/shader-mandala-mockup.avif",
    mockupWidth: 6000,
    mockupHeight: 4500,
  },
  {
    id: "tool-yasashii-web-check",
    nameLines: ["やさしいWebチェック"],
    category: "(Webサービス)",
    href: "/tools/yasashii-web-check",
    iconSrc: "/images/icons/yasashii-web-check-icon.avif",
    mockupSrc: "/images/mockups/yasashii-web-check-mockup.avif",
    mockupWidth: 6000,
    mockupHeight: 4500,
  },
  {
    id: "tool-cookie-memo",
    nameLines: ["Cookieメモ"],
    category: "(Webアプリケーション)",
    href: "/tools/cookie-memo",
    iconSrc: "/images/icons/cookie-memo-icon.avif",
    mockupSrc: "/images/mockups/cookie-memo-mockup.avif",
    mockupWidth: 6000,
    mockupHeight: 4500,
  },
  {
    id: "tool-cursor-dashboard",
    nameLines: ["Cursor Dashboard"],
    category: "(Webアプリケーション)",
    href: "/tools/cursor-dashboard",
    iconSrc: "/images/icons/cursor-dashboard-icon.avif",
    mockupSrc: "/images/mockups/cursor-dashboard-mockup.avif",
    mockupWidth: 6000,
    mockupHeight: 4500,
  },
  {
    id: "tool-calculator",
    nameLines: ["JavaScript電卓"],
    category: "(Webアプリケーション)",
    href: "https://www.calculator.vegetworks.com/",
    iconSrc: "/images/icons/calculator-icon.avif",
    external: true,
  },
  {
    id: "tool-question-and-answer",
    nameLines: ["一問一答メーカー"],
    category: "(Webアプリケーション)",
    href: "https://www.question-and-answer.vegetworks.com/",
    iconSrc: "/images/icons/question-and-answer-icon.avif",
    external: true,
  },
  {
    id: "tool-sutememo",
    nameLines: ["ステメモ"],
    category: "(Webアプリケーション)",
    href: "https://www.sutememo.vegetworks.com/",
    iconSrc: "/images/icons/sutememo-icon.avif",
    external: true,
  },
];
