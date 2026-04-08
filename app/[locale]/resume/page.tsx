import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { routing } from "@/i18n/routing";
import { localeAlternates, seoByLocale } from "@/i18n/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const resolvedLocale = hasLocale(routing.locales, locale) ? locale : routing.defaultLocale;
  const seo = seoByLocale[resolvedLocale];

  return {
    title: resolvedLocale === "vi" ? "Ho so | YiSuS" : "Resume | YiSuS",
    description: seo.description,
    alternates: localeAlternates("/resume"),
    openGraph: {
      title: resolvedLocale === "vi" ? "Ho so | YiSuS" : "Resume | YiSuS",
      description: seo.description,
      locale: seo.locale,
      url: `https://yisus.dev/${resolvedLocale}/resume`,
      images: [
        {
          url: `/${resolvedLocale}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: seo.ogAlt,
        },
      ],
    },
  };
}

export { default } from "../../resume/page";
