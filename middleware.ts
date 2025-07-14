import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Create next-intl middleware
const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Match /en/... or /he/... but not just /en or /he
  const match = pathname.match(/^\/(en|he)\/(.+)/);

  if (match) {
    const locale = match[1];
    // Rewrite to the home page of that locale
    const url = request.nextUrl.clone();
    url.pathname = `/${locale}`;
    return NextResponse.rewrite(url);
  }

  // Fallback to next-intl for normal locale detection
  return intlMiddleware(request);
}

export const config = {
  matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
};
