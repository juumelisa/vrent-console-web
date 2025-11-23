import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export default function proxy (req: NextRequest) {
  const token = req.cookies.get("token")
  const tokenValue = token?.value
  const path = req.nextUrl.pathname

  if (!tokenValue && path.startsWith("/console")) {
    return NextResponse.redirect(new URL("/", req.url));
  } else if (tokenValue && !path.startsWith("/console")) {
    return NextResponse.redirect(new URL("/console", req.url))
  } else {
    return NextResponse.next()
  }
}

export const config = {
  matcher: [
    "/",
    "/console/:path*"
  ]
};