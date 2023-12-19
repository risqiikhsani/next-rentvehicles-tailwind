import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { i18n } from "./i18n.config";

function getLocale(request: NextRequest): string | undefined {
  // Negotiator expects plain object so we need to transform headers
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  // @ts-ignore locales are readonly
  const locales: string[] = i18n.locales;

  // Use negotiator and intl-localematcher to get best locale
  let languages = new Negotiator({ headers: negotiatorHeaders }).languages(
    locales
  );

  const locale = matchLocale(languages, locales, i18n.defaultLocale);

  return locale;
}

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  //   if (request.nextUrl.pathname.startsWith("/about")) {
  //     return NextResponse.rewrite(new URL("/about-2", request.url));
  //   }

  //   if (request.nextUrl.pathname.startsWith("/dashboard")) {
  //     return NextResponse.rewrite(new URL("/dashboard/user", request.url));
  //   }

  //   https://nextjs.org/docs/app/building-your-application/routing/middleware
  // let cookie = request.cookies.get('nextjs')
  // console.log(cookie) // => { name: 'nextjs', value: 'fast', Path: '/' }

  // const allCookies = request.cookies.getAll();
  // console.log(allCookies); // => [{ name: 'nextjs', value: 'fast' }]



  // handle locale //

  const pathname = request.nextUrl.pathname
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request)

    // e.g. incoming request is /products
    // The new URL is now /en-US/products
    return NextResponse.redirect(new URL(`/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`,request.url))
  }

    // Redirect if there is no locale
    // if (pathnameIsMissingLocale) {
    //   const locale = getLocale(request)
  
    //   if (locale === i18n.defaultLocale) {
    //     return NextResponse.rewrite(
    //       new URL(
    //         `/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`,
    //         request.url
    //       )
    //     )
    //   }
  
    //   return NextResponse.redirect(
    //     new URL(
    //       `/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`,
    //       request.url
    //     )
    //   )
    // }

  // handle redirect for unauthorized user

  const path = request.nextUrl.pathname;

  const publicPath = ["/auth", "/homepage","/public"];
  let isPublicPath = false;

  for (const publicPathItem of publicPath) {
    if (path.includes(publicPathItem)) {
      isPublicPath = true;
      break;
    }
  }

  // if user is in restricted pages , but no token , redirect user to auth/login
  if (!isPublicPath && !request.cookies.has("accesstoken")) {
    return NextResponse.redirect(new URL("/homepage", request.url));
  }

  // if user is in public pages, but have token, redirect user to / (app)
  if (isPublicPath && request.cookies.has("accesstoken")) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  const response = NextResponse.next();
  return response;
}

// export function middleware(request: NextRequest) {
//   const hasAccessToken = request.cookies.has("accesstoken");
//   const path = request.nextUrl.pathname;
//   const publicPath = ["/auth", "/homepage"];

//   // Handle locale detection
//   const pathname = request.nextUrl.pathname;
//   const pathnameIsMissingLocale = i18n.locales.every(
//     (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
//   );

//   if (pathnameIsMissingLocale) {
//     const locale = getLocale(request);
//     return NextResponse.redirect(new URL(`/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`, request.url));
//   }

//   // Handle redirect for unauthorized user
//   if (!publicPath.includes(path) && !hasAccessToken) {
//     return NextResponse.redirect(new URL("/auth/login", request.url));
//   }

//   // Handle redirect for authorized user in public pages
//   if (publicPath.includes(path) && hasAccessToken) {
//     return NextResponse.redirect(new URL("/", request.url));
//   }

//   return NextResponse.next(); // Modify response based on middleware logic here
// }

// See "Matching Paths" below to learn more
// export const config = {
//   matcher: [
//     "/",
//     "/dashboard",
//     "/rents",
//     "/bookings",
//     "/favorite",
//     "/settings",
//     "/settings/:path*",
//     "/posts/:path*",
//     "/edit-post/:path*",
//     "/my-posts",
//     "/rents-order",
//     "/books-order",
//     "/locations",
//     "/create-post",
//     "/coba/:path*",
//     "/homepage",
//     "/auth/:path*",
//   ],
// };

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: [
    "/((?!api|_next/static|_next/image|logo.svg|next.svg|vercel.svg|homepage_pictures|loading|logo|others|reviews|specification|favicon.ico).*)",
  ],
};
