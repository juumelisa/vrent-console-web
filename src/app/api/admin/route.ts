import { apiClient } from '@/server/apiClient';
import { NextRequest, NextResponse } from 'next/server';

export async function GET (req: NextRequest) {
  try {
    let url = "admins"
    const query = req.url.split("?")
    if (query[1]) {
      url += `?${query[1]}`
    }
    const headers = req.headers as HeadersInit
    const response = await apiClient(url,
      {
        headers: headers,
        method: 'get'
      }
    );
    const data = await response.json();
    return NextResponse.json(data);
    
  } catch {
    return NextResponse.json({
      code: 500,
      status: "error",
      message: 'Internal server error',
      result: []
    });
  }
}

export async function POST (req: NextRequest) {
  try {
    const body = await req.json()
    const headers = req.headers as HeadersInit
    const response = await apiClient("admins",
      {
        headers: headers,
        method: 'POST',
        body: JSON.stringify(body)
      }
    );
    const data = await response.json();
    return NextResponse.json(data);
    
  } catch {
    return NextResponse.json({
      code: 500,
      status: "error",
      message: 'Internal server error',
      result: []
    });
  }
}
