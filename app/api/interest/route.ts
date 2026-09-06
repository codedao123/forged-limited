import { Redis } from '@upstash/redis'
import { NextResponse } from 'next/server'

function isValidKey(key: string) {
  return /^[a-z0-9-]+$/.test(key)
}

function getRedis() {
  const url = process.env.UPSTASH_REDIS_REST_URL
  const token = process.env.UPSTASH_REDIS_REST_TOKEN

  if (!url || !token) return null
  return new Redis({ url, token })
}

function unavailableResponse() {
  return NextResponse.json(
    { error: 'Vercel counter storage is not configured.' },
    { status: 503 },
  )
}

export async function GET(request: Request) {
  const key = new URL(request.url).searchParams.get('key') ?? ''
  const redis = getRedis()

  if (!redis) return unavailableResponse()
  if (!isValidKey(key)) {
    return NextResponse.json({ error: 'Invalid counter key.' }, { status: 400 })
  }

  const count = (await redis.get<number>(`interest:${key}`)) ?? 0
  return NextResponse.json({ count })
}

export async function POST(request: Request) {
  const { key } = (await request.json()) as { key?: string }
  const redis = getRedis()

  if (!redis) return unavailableResponse()
  if (!key || !isValidKey(key)) {
    return NextResponse.json({ error: 'Invalid counter key.' }, { status: 400 })
  }

  const count = await redis.incr(`interest:${key}`)
  return NextResponse.json({ count })
}
