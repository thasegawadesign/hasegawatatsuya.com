export type ToolItem = {
  id: string;
  name: string;
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
    id: "tool-shader-mandala",
    name: "シェーダー曼荼羅 目標達成シート",
    category: "(Webアプリケーション)",
    href: "/tools/shader-mandala",
    iconSrc: "/images/icons/shader-mandala-icon.avif",
    mockupSrc: "/images/mockups/shader-mandala-mockup.avif",
    mockupWidth: 6000,
    mockupHeight: 4500,
  },
  {
    id: "tool-yasashii-web-check",
    name: "やさしいWebチェック",
    category: "(Webサービス)",
    href: "/tools/yasashii-web-check",
    iconSrc: "/images/icons/yasashii-web-check-icon.avif",
    mockupSrc: "/images/mockups/yasashii-web-check-mockup.avif",
    mockupWidth: 6000,
    mockupHeight: 4500,
  },
  {
    id: "tool-cookie-memo",
    name: "Cookieメモ",
    category: "(Webアプリケーション)",
    href: "/tools/cookie-memo",
    iconSrc: "/images/icons/cookie-memo-icon.avif",
    mockupSrc: "/images/mockups/cookie-memo-mockup.avif",
    mockupWidth: 6000,
    mockupHeight: 4500,
  },
  {
    id: "tool-cursor-dashboard",
    name: "Cursor Dashboard",
    category: "(Webアプリケーション)",
    href: "/tools/cursor-dashboard",
    iconSrc: "/images/icons/cursor-dashboard-icon.avif",
    mockupSrc: "/images/mockups/cursor-dashboard-mockup.avif",
    mockupWidth: 6000,
    mockupHeight: 4500,
  },
  {
    id: "tool-calculator",
    name: "JavaScript電卓",
    category: "(Webアプリケーション)",
    href: "https://www.calculator.vegetworks.com/",
    iconSrc: "/images/icons/calculator-icon.avif",
    external: true,
  },
  {
    id: "tool-question-and-answer",
    name: "一問一答メーカー",
    category: "(Webアプリケーション)",
    href: "https://www.question-and-answer.vegetworks.com/",
    iconSrc: "/images/icons/question-and-answer-icon.avif",
    external: true,
  },
  {
    id: "tool-sutememo",
    name: "ステメモ",
    category: "(Webアプリケーション)",
    href: "https://www.sutememo.vegetworks.com/",
    iconSrc: "/images/icons/sutememo-icon.avif",
    external: true,
  },
];
