export const getWorkTitleTransitionName = (href: string) =>
  `work-title${href.replaceAll("/", "-")}`;

export const WORK_PHOTO_TRANSITION_NAME = "work-photo";
export const SITE_NAV_TRANSITION_NAME = "site-nav";
export const SITE_HAMBURGER_TRANSITION_NAME = "site-hamburger";
