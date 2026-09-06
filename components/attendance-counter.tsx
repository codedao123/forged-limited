'use client'

import { useEffect, useState } from 'react'

type InterestCounterProps = {
  storageKey?: string
  actionLabel?: string
}

export function AttendanceCounter({
  storageKey = 'forged-car-meet-attendance-reset-2026-09-06',
  actionLabel = 'Count me in',
}: InterestCounterProps) {
  const [count, setCount] = useState(0)
  const [hasPressed, setHasPressed] = useState(false)
  const [pending, setPending] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    setHasPressed(window.localStorage.getItem(`${storageKey}-pressed`) === 'true')

    async function loadCount() {
      try {
        const response = await fetch(`/api/interest?key=${encodeURIComponent(storageKey)}`)
        if (!response.ok) {
          setError('Connect Redis in Vercel to enable shared counting.')
          return
        }

        const data = (await response.json()) as { count: number }
        setCount(data.count)
      } catch {
        setError('The shared counter is currently unavailable.')
      }
    }

    void loadCount()
  }, [])

  async function handlePress() {
    if (hasPressed || pending) return

    setPending(true)
    setError('')

    try {
      const response = await fetch('/api/interest', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ key: storageKey }),
      })

      if (!response.ok) {
        setError('Connect Redis in Vercel to enable shared counting.')
        return
      }

      const data = (await response.json()) as { count: number }
      setCount(data.count)
      setHasPressed(true)
      window.localStorage.setItem(`${storageKey}-pressed`, 'true')
    } catch {
      setError('The shared counter is currently unavailable. Try again.')
    } finally {
      setPending(false)
    }
  }

  return (
    <div className="flex flex-col items-start gap-3">
      <button
        type="button"
        onClick={handlePress}
        disabled={hasPressed || pending}
        className="border border-white bg-white px-7 py-4 font-mono text-xs uppercase tracking-[0.3em] text-black transition-opacity hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {pending ? 'Saving' : hasPressed ? 'Counted' : actionLabel} · {count}
      </button>
      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
        If you press once, please do not press again.
      </p>
      {error && (
        <p className="max-w-xs font-mono text-[10px] uppercase tracking-[0.15em] text-red-400">
          {error}
        </p>
      )}
    </div>
  )
}
