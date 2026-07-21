export interface WorkItem {
  id: string;
  nameLines: string[];
  useNameSpans?: boolean;
  category: string;
  href: string;
  iconSrc: string;
  mockupSrc: string;
  mockupWidth: number;
  mockupHeight: number;
}

export const WORKS: WorkItem[] = [
  {
    id: "work-fukusho-unyu",
    nameLines: ["福昇運輸株式会社", "コーポレートサイト"],
    category: "(Webサイト)",
    href: "/works/fukusho-unyu",
    iconSrc: "/images/icons/fukusho-unyu-icon.avif",
    mockupSrc: "/images/mockups/fukusho-unyu-mockup.avif",
    mockupWidth: 6000,
    mockupHeight: 4500,
  },
  {
    id: "work-tomosho-unyu",
    nameLines: ["株式会社 智商運輸", "コーポレートサイト"],
    category: "(Webサイト)",
    href: "/works/tomosho-unyu",
    iconSrc: "/images/icons/tomosho-unyu-icon.avif",
    mockupSrc: "/images/mockups/tomosho-unyu-mockup.avif",
    mockupWidth: 4000,
    mockupHeight: 3000,
  },
  {
    id: "work-univearth",
    nameLines: ["株式会社Univearth", "コーポレートサイト"],
    category: "(Webサイト)",
    href: "/works/univearth",
    iconSrc: "/images/icons/univearth-icon.avif",
    mockupSrc: "/images/mockups/univearth-mockup.avif",
    mockupWidth: 4000,
    mockupHeight: 3000,
  },
];
