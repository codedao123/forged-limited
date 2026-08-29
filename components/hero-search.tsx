'use client'

import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export function HeroSearch() {
  const router = useRouter()
  const [value, setValue] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const trimmed = value.trim()
    if (!trimmed) return
    const normalized = trimmed.replace(/\D/g, '').padStart(4, '0').slice(-4)
    router.push(`/${normalized}`)
  }

  return (
    <section className="flex min-h-[100svh] flex-col items-center justify-center px-6 text-center">
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="font-mono text-xs uppercase tracking-[0.5em] text-muted-foreground"
      >
        The Automotive Archive
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="mt-8 text-balance text-4xl font-medium tracking-tight sm:text-6xl md:text-7xl"
      >
        FORGED.LIMITED
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        className="mt-6 text-lg font-light tracking-wide text-muted-foreground sm:text-xl"
      >
        Check out the archive of forged.limited, each with its own story and history.
      </motion.p>

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="mt-16 flex w-full max-w-md flex-col gap-3 sm:mt-20"
      >
        <label htmlFor="edition" className="sr-only">
          Enter Edition Number
        </label>
        <input
          id="edition"
          name="edition"
          inputMode="numeric"
          autoComplete="off"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Enter Edition Number (e.g. 0001)"
          className="w-full rounded-md border border-border bg-card/40 px-5 py-4 text-center text-base tracking-widest text-foreground backdrop-blur-md outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-foreground/40"
        />
        <button
          type="submit"
          className="w-full rounded-md bg-primary px-5 py-4 font-mono text-xs uppercase tracking-[0.35em] text-primary-foreground transition-opacity hover:opacity-80"
        >
          Access Archive
        </button>
      </motion.form>
    </section>
  )
}
