import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const res = NextResponse.next();

  const cookie = request.cookies.get("sessionId");

  if (!cookie) {
    const sessionId = crypto.randomUUID();
    res.cookies.set("sessionId", sessionId, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
    });
  }

  return res;
}
