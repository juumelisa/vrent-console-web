import { apiClient } from "@/server/apiClient";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try{
    const headers = req.headers as HeadersInit
    const response = await apiClient("auth/info", {
      method: "GET",
      headers
    });

    const data = await response.json();
    return NextResponse.json(data);
  } catch {
    return NextResponse.json({
      code: 500,
      message: "internal server error",
      result: []
    });
  }
}
