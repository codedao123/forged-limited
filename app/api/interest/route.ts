import { NextResponse } from 'next/server'

const supabaseUrl = process.env.SUPABASE_URL
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY

function isValidKey(key: string) {
  return /^[a-z0-9-]+$/.test(key)
}

function getSupabaseHeaders() {
  return {
    apikey: supabaseServiceRoleKey as string,
    Authorization: `Bearer ${supabaseServiceRoleKey}`,
    'Content-Type': 'application/json',
  }
}

function unavailableResponse() {
  return NextResponse.json(
    { error: 'Shared counter storage is not configured.' },
    { status: 503 },
  )
}

export async function GET(request: Request) {
  const key = new URL(request.url).searchParams.get('key') ?? ''

  if (!supabaseUrl || !supabaseServiceRoleKey) return unavailableResponse()
  if (!isValidKey(key)) {
    return NextResponse.json({ error: 'Invalid counter key.' }, { status: 400 })
  }

  const response = await fetch(
    `${supabaseUrl}/rest/v1/interest_counts?counter_key=eq.${key}&select=count`,
    { headers: getSupabaseHeaders(), cache: 'no-store' },
  )

  if (!response.ok) {
    return NextResponse.json({ error: 'Unable to read counter.' }, { status: 502 })
  }

  const rows = (await response.json()) as Array<{ count: number }>
  return NextResponse.json({ count: rows[0]?.count ?? 0 })
}

export async function POST(request: Request) {
  const { key } = (await request.json()) as { key?: string }

  if (!supabaseUrl || !supabaseServiceRoleKey) return unavailableResponse()
  if (!key || !isValidKey(key)) {
    return NextResponse.json({ error: 'Invalid counter key.' }, { status: 400 })
  }

  const response = await fetch(`${supabaseUrl}/rest/v1/rpc/increment_interest_count`, {
    method: 'POST',
    headers: getSupabaseHeaders(),
    body: JSON.stringify({ counter_key: key }),
  })

  if (!response.ok) {
    return NextResponse.json({ error: 'Unable to update counter.' }, { status: 502 })
  }

  const count = (await response.json()) as number
  return NextResponse.json({ count })
}
