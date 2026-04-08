"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useTransition } from "react";
import { useTranslations } from "next-intl";

const SUPPORTED_LOCALES = ["en", "vi"] as const;
type SupportedLocale = (typeof SUPPORTED_LOCALES)[number];
const DEFAULT_LOCALE: SupportedLocale = "en";

function asSupportedLocale(value: string | undefined): SupportedLocale | null {
  if (!value) {
    return null;
  }

  const normalized = value.toLowerCase();
  if (SUPPORTED_LOCALES.includes(normalized as SupportedLocale)) {
    return normalized as SupportedLocale;
  }

  return null;
}

function stripLeadingLocale(pathname: string): string {
  const parts = pathname.split("/");
  const maybeLocale = asSupportedLocale(parts[1]);

  if (!maybeLocale) {
    return pathname || "/";
  }

  const rest = parts.slice(2).join("/");
  return rest ? `/${rest}` : "/";
}

export function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();
  const t = useTranslations("common");
  const tAria = useTranslations("common.aria");

  const currentLocale = asSupportedLocale(pathname.split("/")[1]) ?? DEFAULT_LOCALE;
  const pathWithoutLocale = stripLeadingLocale(pathname);

  const switchLocale = (nextLocale: SupportedLocale) => {
    if (nextLocale === currentLocale) {
      return;
    }

    const targetPath = pathWithoutLocale === "/" ? `/${nextLocale}` : `/${nextLocale}${pathWithoutLocale}`;
    const query = searchParams.toString();
    const targetUrl = query ? `${targetPath}?${query}` : targetPath;

    document.cookie = `NEXT_LOCALE=${nextLocale}; path=/; max-age=31536000; samesite=lax`;

    startTransition(() => {
      router.replace(targetUrl);
    });
  };

  return (
    <div
      className="inline-flex items-center rounded-lg border border-gray-200 dark:border-navy-700 bg-white/80 dark:bg-navy-900/70 p-1"
      aria-label={t("aria.languageSwitcher")}
      role="group"
    >
      {SUPPORTED_LOCALES.map((locale) => {
        const isActive = locale === currentLocale;

        return (
          <button
            key={locale}
            type="button"
            disabled={isPending}
            onClick={() => switchLocale(locale)}
            aria-label={locale === "en" ? tAria("switchToEnglish") : tAria("switchToVietnamese")}
            aria-pressed={isActive}
            className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-colors ${
              isActive
                ? "bg-primary-500 text-white"
                : "text-navy-600 dark:text-navy-300 hover:text-primary-600 dark:hover:text-primary-400"
            }`}
          >
            {locale.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
}
