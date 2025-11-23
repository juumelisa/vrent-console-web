import { cookies } from "next/headers";

const apiUrl = process.env.API_URL
const apiKey = process.env.API_KEY || ''

export async function apiClient (path: string, options: RequestInit = {}) {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")
  const tokenValue = token?.value ?? ""

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    "x-api-key": apiKey,
    "token": tokenValue,
    ...(options.headers as Record<string, string>)
  }

  return fetch(`${apiUrl}${path}`, {
    ...options,
    headers,
  });
}