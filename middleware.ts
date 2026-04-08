import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";
import { routing } from "@/i18n/routing";

const intlMiddleware = createMiddleware(routing);
const PUBLIC_FILE = /\.(.*)$/;
const LOCALE_SEGMENT_PATTERN = /^[A-Za-z]{2}(?:-[A-Za-z]{2})?$/;
const LOCALE_COOKIE = "NEXT_LOCALE";
const OVERRIDE_QUERY_KEYS = ["locale", "lang"] as const;

type SupportedLocale = (typeof routing.locales)[number];

function hasLocalePrefix(pathname: string): boolean {
  return routing.locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );
}

function asSupportedLocale(value: string | null | undefined): SupportedLocale | null {
  if (!value) {
    return null;
  }

  const normalized = value.toLowerCase();
  if (routing.locales.includes(normalized as SupportedLocale)) {
    return normalized as SupportedLocale;
  }

  const primaryTag = normalized.split("-")[0];
  if (routing.locales.includes(primaryTag as SupportedLocale)) {
    return primaryTag as SupportedLocale;
  }

  return null;
}

function getExplicitLocale(request: NextRequest): SupportedLocale | null {
  for (const key of OVERRIDE_QUERY_KEYS) {
    const locale = asSupportedLocale(request.nextUrl.searchParams.get(key));
    if (locale) {
      return locale;
    }
  }

  return null;
}

function getCookieLocale(request: NextRequest): SupportedLocale | null {
  return asSupportedLocale(request.cookies.get(LOCALE_COOKIE)?.value);
}

function getHeaderLocale(request: NextRequest): SupportedLocale | null {
  const header = request.headers.get("accept-language");
  if (!header) {
    return null;
  }

  const candidates = header
    .split(",")
    .map((entry) => entry.split(";")[0]?.trim())
    .filter(Boolean);

  for (const candidate of candidates) {
    const locale = asSupportedLocale(candidate);
    if (locale) {
      return locale;
    }
  }

  return null;
}

function resolveNegotiatedLocale(request: NextRequest): SupportedLocale {
  return (
    getExplicitLocale(request) ||
    getCookieLocale(request) ||
    getHeaderLocale(request) ||
    routing.defaultLocale
  );
}

function clearOverrideQueryParams(url: URL): void {
  for (const key of OVERRIDE_QUERY_KEYS) {
    url.searchParams.delete(key);
  }
}

function shouldSkip(pathname: string): boolean {
  return (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/_vercel") ||
    PUBLIC_FILE.test(pathname)
  );
}

function normalizePath(pathname: string): string {
  const firstSegment = pathname.split("/")[1] ?? "";

  if (!LOCALE_SEGMENT_PATTERN.test(firstSegment)) {
    return pathname;
  }

  if (routing.locales.includes(firstSegment as (typeof routing.locales)[number])) {
    return pathname;
  }

  const rest = pathname.split("/").slice(2).join("/");
  return rest ? `/${rest}` : "/";
}

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const explicitLocale = getExplicitLocale(request);

  if (shouldSkip(pathname)) {
    return NextResponse.next();
  }

  const normalizedPath = normalizePath(pathname);
  const currentLocale = asSupportedLocale(pathname.split("/")[1]);

  if (currentLocale && explicitLocale && currentLocale !== explicitLocale) {
    const rest = pathname.split("/").slice(2).join("/");
    const url = request.nextUrl.clone();
    url.pathname = rest ? `/${explicitLocale}/${rest}` : `/${explicitLocale}`;
    clearOverrideQueryParams(url);

    const response = NextResponse.redirect(url);
    response.cookies.set(LOCALE_COOKIE, explicitLocale, { path: "/" });
    return response;
  }

  if (!hasLocalePrefix(normalizedPath)) {
    const negotiatedLocale = resolveNegotiatedLocale(request);
    const url = request.nextUrl.clone();
    url.pathname =
      normalizedPath === "/"
        ? `/${negotiatedLocale}`
        : `/${negotiatedLocale}${normalizedPath}`;
    clearOverrideQueryParams(url);

    const response = NextResponse.redirect(url);
    response.cookies.set(LOCALE_COOKIE, negotiatedLocale, { path: "/" });
    return response;
  }

  if (normalizedPath !== pathname) {
    const url = request.nextUrl.clone();
    url.pathname = normalizedPath;
    return NextResponse.redirect(url);
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: ["/((?!_next|api|_vercel|.*\\..*).*)"],
};
