export type AppLocale = "en" | "vi";

type SeoContent = {
  title: string;
  description: string;
  ogAlt: string;
  locale: "en_US" | "vi_VN";
};

export const seoByLocale: Record<AppLocale, SeoContent> = {
  en: {
    title: "YiSuS | Nguyen Huy Hung - Software Engineer",
    description:
      "Software Engineer with 3+ years of experience specializing in educational technology and financial platforms. Expert in PHP/Laravel, Java/Spring Boot, DDD, and Clean Architecture.",
    ogAlt: "YiSuS - Software Engineer Portfolio",
    locale: "en_US",
  },
  vi: {
    title: "YiSuS | Nguyen Huy Hung - Ky su Phan mem",
    description:
      "Ky su phan mem voi hon 3 nam kinh nghiem trong cong nghe giao duc va nen tang tai chinh. Chuyen PHP/Laravel, Java/Spring Boot, DDD va Clean Architecture.",
    ogAlt: "YiSuS - Portfolio Ky su Phan mem",
    locale: "vi_VN",
  },
};

export function localeAlternates(path = "") {
  const normalized = path.startsWith("/") ? path : `/${path}`;

  return {
    canonical: `/en${normalized}`,
    languages: {
      "en-US": `/en${normalized}`,
      "vi-VN": `/vi${normalized}`,
      "x-default": `/en${normalized}`,
    },
  };
}
