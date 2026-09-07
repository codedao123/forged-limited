'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { ArrowUpRight, CalendarDays, Tag } from 'lucide-react'

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

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mt-6 grid w-full max-w-md grid-cols-2 gap-3"
      >
        <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.35 }}>
          <motion.div
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, repeatDelay: 1.5, ease: 'easeInOut' }}
          >
            <Link
              href="/merch"
              aria-label="Explore Forged JetTags merch"
              className="group relative block aspect-[1.18] overflow-hidden rounded-md border border-white/20 bg-white text-left text-black shadow-2xl shadow-black/30"
            >
            <Image
              src="/editions/product-001.png"
              alt=""
              fill
              sizes="(max-width: 640px) 50vw, 250px"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
            <div className="absolute inset-x-3 bottom-3 text-white sm:inset-x-4 sm:bottom-4">
              <div className="flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.25em] text-white/70">
                <span className="inline-flex items-center gap-1.5"><Tag className="h-3 w-3" aria-hidden="true" /> 001</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
              </div>
              <p className="mt-2 text-sm font-medium tracking-tight">Forged JetTags</p>
              <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.2em] text-white/70">Limited release</p>
            </div>
            </Link>
          </motion.div>
        </motion.div>
        <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.35, delay: 0.03 }}>
          <motion.div
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, repeatDelay: 1.5, delay: 0.35, ease: 'easeInOut' }}
          >
            <Link
              href="/event"
              aria-label="Join the FORGED Launch Meet"
              className="car-meet-card group relative block aspect-[1.18] overflow-hidden rounded-md border border-white/20 bg-black text-left text-white shadow-2xl shadow-black/30"
            >
            <Image
              src="/editions/meet.png"
              alt="FORGED Launch Car Meet poster"
              fill
              sizes="(max-width: 640px) 50vw, 250px"
              className="bg-black object-contain p-3 opacity-95 transition-transform duration-700 ease-out group-hover:scale-[1.03] sm:p-4"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/10" />
            <span className="car-meet-callout" aria-hidden="true">CAR MEET</span>
            <div className="absolute inset-x-3 bottom-3 sm:inset-x-4 sm:bottom-4">
              <div className="flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.25em] text-white/70">
                <span className="inline-flex items-center gap-1.5"><CalendarDays className="h-3 w-3" aria-hidden="true" /> 10.10.26</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
              </div>
              <p className="mt-2 text-sm font-medium tracking-tight">FORGED Launch Meet</p>
              <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.2em] text-white/70">Count me in</p>
            </div>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
