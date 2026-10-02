export const getWorkTitleTransitionName = (href: string) =>
  `work-title${href.replaceAll("/", "-")}`;

export const WORK_PHOTO_TRANSITION_NAME = "work-photo";
