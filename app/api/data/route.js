import { NextResponse } from "next/server";

export async function GET(request) {
  return NextResponse.json({
    success: true,
    message: 'hle!',
    data: {
      message: "Your email has been sent successfully! I'll get back to you soon.",
    }
  }, { status: 200 });
};