import { apiClient } from '@/server/apiClient';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  let url = 'admins?'
  if (req.url) {
    const protocol = req.headers["x-forwarded-proto"]?.toString() || "http";
    const { searchParams } = new URL(req.url!, `${protocol}://${req.headers.host}`)
    url += searchParams
  }
  try {
    const headers = req.headers as HeadersInit
    const response = await apiClient(url,
      {
        headers: headers,
        method: 'get'
      }
    );
    const data = await response.json();
    res.status(200).json(data);
  } catch {
    res.status(500).json({
      code: 500,
      status: "error",
      message: 'Internal server error',
      result: []
    });
  }
}