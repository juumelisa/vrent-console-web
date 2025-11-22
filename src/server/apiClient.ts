const apiUrl = process.env.API_URL
const apiKey = process.env.API_KEY || ''

export async function apiClient (path: string, options: RequestInit = {}) {
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    "x-api-key": apiKey,
    ...(options.headers as Record<string, string>)
  }

  return fetch(`${apiUrl}${path}`, {
    ...options,
    headers,
  });
}