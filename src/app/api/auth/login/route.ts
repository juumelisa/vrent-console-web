import { apiClient } from "@/server/apiClient";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try{
    const body = await req.json();
    const response = await apiClient("auth", {
      method: "POST",
      body: JSON.stringify(body),
    });

    const data = await response.json();

    if (data.code === 200) {
      const result = data.result[0]
      const token = result.token;
      const userId = result.user.id
      const cookieStore = await cookies();
      cookieStore.set({
        name: "token",
        value: token,
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        path: "/",
      });

      return NextResponse.json({ code: 200, message: "logged in", result: [{user_id: userId}] });
    } else {
      return NextResponse.json(data);
    }
  } catch {
    return NextResponse.json({
      code: 500,
      message: "internal server error",
      result: []
    });
  }
}
