import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { LOCALE_COOKIE, defaultLocale, hasLocale, locales, type Locale } from "@/i18n/config";

// Priority: the language the visitor picked with the FR/EN toggle (cookie),
// then the browser's Accept-Language header, then the default (French).
function getLocale(request: NextRequest): Locale {
  const saved = request.cookies.get(LOCALE_COOKIE)?.value;
  if (saved && hasLocale(saved)) return saved;

  const requested = (request.headers.get("accept-language") ?? "")
    .split(",")
    .map((part) => {
      const [tag, quality] = part.trim().split(";q=");
      return { lang: tag.toLowerCase().split("-")[0], q: quality ? parseFloat(quality) : 1 };
    })
    .filter((entry) => !Number.isNaN(entry.q))
    .sort((a, b) => b.q - a.q);

  for (const { lang } of requested) {
    if (hasLocale(lang)) return lang;
  }
  return defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const hasLocalePrefix = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );
  if (hasLocalePrefix) return;

  const locale = getLocale(request);
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  // Search engines send neither a cookie nor a language: they get a permanent redirect to the
  // French site (one URL per page). Visitors who picked or were detected as English keep the
  // temporary one, because that answer depends on the visitor and must not be cached.
  const permanent = locale === defaultLocale && !request.cookies.has(LOCALE_COOKIE);
  return NextResponse.redirect(url, permanent ? 308 : 307);
}

export const config = {
  // Skip Next internals, API routes and any path with a file extension (images, icons, etc.).
  // [.] is a literal dot.
  matcher: ["/((?!_next|api|assets|.*[.].*).*)"],
};
