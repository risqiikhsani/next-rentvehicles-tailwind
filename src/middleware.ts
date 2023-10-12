import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

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
  const allCookies = request.cookies.getAll();
  console.log(allCookies); // => [{ name: 'nextjs', value: 'fast' }]

  const path = request.nextUrl.pathname

  const publicPath = ['/auth', '/homepage'];
  const isPublicPath = publicPath.includes(path);

  // if user is in restricted pages , but no token , redirect user to auth/login
  if (!isPublicPath && !request.cookies.has("accesstoken")) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  // if user is in public pages, but have token, redirect user to / (app)
  if(isPublicPath && request.cookies.has("accesstoken")){
    return NextResponse.redirect(new URL("/", request.url));
  }

  const response = NextResponse.next();
  return response;
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    "/",
    "/rents",
    "/bookings",
    "/favorite",
    "/settings",
    "/my-posts",
    "/rents-order",
    "/books-order",
    "/locations",
    "/create-post",
    "/coba/:path*",
    "/homepage",
    "/auth"
  ],
};
