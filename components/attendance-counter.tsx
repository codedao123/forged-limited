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

  useEffect(() => {
    const savedCount = Number(window.localStorage.getItem(storageKey) ?? 0)
    setCount(Number.isFinite(savedCount) ? savedCount : 0)
    setHasPressed(window.localStorage.getItem(`${storageKey}-pressed`) === 'true')
  }, [])

  function handlePress() {
    if (hasPressed) return

    const nextCount = count + 1
    setCount(nextCount)
    setHasPressed(true)
    window.localStorage.setItem(storageKey, String(nextCount))
    window.localStorage.setItem(`${storageKey}-pressed`, 'true')
  }

  return (
    <div className="flex flex-col items-start gap-3">
      <button
        type="button"
        onClick={handlePress}
        disabled={hasPressed}
        className="border border-border px-7 py-4 font-mono text-xs uppercase tracking-[0.3em] text-foreground transition-colors hover:border-foreground disabled:cursor-not-allowed disabled:opacity-60"
      >
        {hasPressed ? 'Counted' : actionLabel} · {count}
      </button>
      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
        If you press once, please do not press again.
      </p>
    </div>
  )
}
