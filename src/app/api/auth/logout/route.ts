import { apiClient } from "@/server/apiClient";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST() {
  try{
    const response = await apiClient("auth/logout", {
      method: "POST"
    });

    const data = await response.json();

    const cookieStore = await cookies();
    cookieStore.delete({
      name: "token",
      path: "/",
    });
    if (data.code === 200) {
      return NextResponse.json({ code: 200, message: "logged out", result: [] });
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
