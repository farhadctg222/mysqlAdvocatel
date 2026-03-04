import { NextResponse } from "next/server";

export function middleware(req) {
  const p = req.nextUrl.pathname;

  // শুধু /api রুট প্রটেক্ট
  if (!p.startsWith("/api")) return NextResponse.next();

  // session route allow (trailing slash হলেও allow)
  if (p.startsWith("/api/auth/session")) return NextResponse.next();

  const host = req.headers.get("host") || "";
  const cookie = req.headers.get("cookie") || "";

  const allowedHost = process.env.ALLOWED_HOST || "";
  const token = process.env.SITE_SESSION_TOKEN || "";

  if (!allowedHost || !token) {
    return NextResponse.json({ message: "Forbidden" }, { status: 403 });
  }

  // dev helper: allow 127.0.0.1
  const okHost =
    host === allowedHost ||
    (allowedHost === "localhost:3000" && host === "127.0.0.1:3000");

  if (!okHost) {
    return NextResponse.json({ message: "Forbidden" }, { status: 403 });
  }

  if (!cookie.includes(`site_session=${token}`)) {
    return NextResponse.json({ message: "Forbidden" }, { status: 403 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/api/:path*"],
};