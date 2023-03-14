import type { SocialObjects } from "./types";

export const SITE = {
  website: "https://astro-paper.pages.dev/",
  author: "Yousaf Wazir",
  desc: "Yousaf Wazirs blog",
  title: "Blog",
  ogImage: "home-og.png",
  lightAndDarkMode: true,
  postPerPage: 3,
};

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/UmbrellaCrow612",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:umbrellaman612@gmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: false,
  },
];
