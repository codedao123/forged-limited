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

  useEffect(() => {
    setHasPressed(window.localStorage.getItem(`${storageKey}-pressed`) === 'true')

    async function loadCount() {
      const response = await fetch(`/api/interest?key=${encodeURIComponent(storageKey)}`)
      if (!response.ok) return

      const data = (await response.json()) as { count: number }
      setCount(data.count)
    }

    void loadCount()
  }, [])

  async function handlePress() {
    if (hasPressed || pending) return

    setPending(true)
    const response = await fetch('/api/interest', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ key: storageKey }),
    })

    if (response.ok) {
      const data = (await response.json()) as { count: number }
      setCount(data.count)
      setHasPressed(true)
      window.localStorage.setItem(`${storageKey}-pressed`, 'true')
    }

    setPending(false)
  }

  return (
    <div className="flex flex-col items-start gap-3">
      <button
        type="button"
        onClick={handlePress}
        disabled={hasPressed || pending}
        className="border border-border px-7 py-4 font-mono text-xs uppercase tracking-[0.3em] text-foreground transition-colors hover:border-foreground disabled:cursor-not-allowed disabled:opacity-60"
      >
        {pending ? 'Saving' : hasPressed ? 'Counted' : actionLabel} · {count}
      </button>
      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
        If you press once, please do not press again.
      </p>
    </div>
  )
}
