import { cookies } from "next/headers";

export async function GET() {
  const cookieStore = await cookies(); // ✅ IMPORTANT

  cookieStore.set("site_session", process.env.SITE_SESSION_TOKEN || "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: 60 * 60 * 24,
  });

  return Response.json({ ok: true });
}