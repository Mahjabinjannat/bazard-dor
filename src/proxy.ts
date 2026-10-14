// import { NextResponse, type NextRequest } from "next/server";
// import { getSessionCookie } from "better-auth/cookies";

// export function proxy(request: NextRequest) {
//   const sessionCookie = getSessionCookie(request);

//   if (!sessionCookie) {
//     return NextResponse.redirect(new URL("/signIn", request.url));
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: ["/profile/:path*", "/product/:path*", "/signIn", "/signUp"],
// };

import { NextResponse, type NextRequest } from "next/server";
import { getSessionCookie } from "better-auth/cookies";

export function proxy(request: NextRequest) {
  const sessionCookie = getSessionCookie(request);
  const { pathname } = request.nextUrl;

  const isLoggedIn = Boolean(sessionCookie);

  const isProtectedRoute =
    pathname === "/profile" ||
    pathname.startsWith("/profile/") ||
    pathname.startsWith("/product/");

  const isAuthRoute = pathname === "/signIn" || pathname === "/signUp";

  if (isProtectedRoute && !isLoggedIn) {
    return NextResponse.redirect(new URL("/signIn", request.url));
  }

  if (isAuthRoute && isLoggedIn) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/profile/:path*", "/product/:path*", "/signIn", "/signUp"],
};
