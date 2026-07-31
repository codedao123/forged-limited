'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import type { Edition } from '@/lib/editions'

const ease = [0.22, 1, 0.36, 1] as const

function Section({
  delay = 0,
  className,
  children,
}: {
  delay?: number
  className?: string
  children: React.ReactNode
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function EditionDetail({ edition }: { edition: Edition }) {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto w-full max-w-5xl px-6 py-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease }}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Archive
          </Link>
        </motion.div>
      </div>

      <div className="mx-auto w-full max-w-5xl px-6 pb-28">
        {/* Hero */}
        <Section>
          <p className="font-mono text-xs uppercase tracking-[0.5em] text-muted-foreground">
            Edition №{edition.number}
          </p>
        </Section>

        <Section delay={0.1}>
          <h1 className="mt-6 text-balance text-3xl font-medium tracking-tight sm:text-5xl">
            {edition.vehicle}
          </h1>
          <p className="mt-4 font-mono text-sm tracking-wide text-muted-foreground">
            {edition.ownerInstagram}
          </p>
        </Section>

        <Section
          delay={0.25}
          className="relative mt-12 aspect-[16/10] overflow-hidden rounded-xl border border-border"
        >
          <Image
            src={edition.gallery[0] || `/editions/${edition.number}.png`}
            alt={edition.vehicle}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="object-cover"
          />
        </Section>

        {/* Specs */}
        <Section
          delay={0.4}
          className="mt-14 grid grid-cols-2 gap-x-6 gap-y-10 border-y border-border py-10 sm:grid-cols-4"
        >
          <Detail label="Vehicle" value={edition.vehicle} />
          <Detail label="Year" value={edition.year} />
          <Detail label="Power" value={edition.power} />
          <Detail label="Location" value={edition.location} />
          <Detail label="Owner" value={edition.ownerInstagram} />
          <Detail label="Date Featured" value={edition.featuredDate} />
        </Section>

        {/* Modifications */}
        <Section delay={0.5} className="mt-16">
          <h2 className="font-mono text-xs uppercase tracking-[0.4em] text-muted-foreground">
            Modifications
          </h2>
          <ul className="mt-8 divide-y divide-border border-y border-border">
            {edition.modifications.map((mod, i) => (
              <li
                key={mod}
                className="flex items-baseline gap-6 py-5 text-base tracking-wide sm:text-lg"
              >
                <span className="font-mono text-xs text-muted-foreground">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="text-pretty">{mod}</span>
              </li>
            ))}
          </ul>
        </Section>

        {/* Gallery */}
        <Section delay={0.55} className="mt-16">
          <h2 className="font-mono text-xs uppercase tracking-[0.4em] text-muted-foreground">
            Gallery
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {edition.gallery.map((src, i) => (
              <div
                key={src}
                className={`relative overflow-hidden rounded-xl border border-border ${
                  i === 0 ? 'aspect-[16/10] sm:col-span-2' : 'aspect-[4/3]'
                }`}
              >
                <Image
                  src={src || '/placeholder.svg'}
                  alt={`${edition.vehicle} — image ${i + 1}`}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </Section>

        {/* Story */}
        <Section delay={0.6}>
          <p className="mt-16 max-w-3xl text-pretty text-xl font-light leading-relaxed tracking-tight text-muted-foreground sm:text-2xl sm:leading-relaxed">
            {edition.story}
          </p>
        </Section>

        {/* Back to Archive */}
        <Section delay={0.65} className="mt-20">
          <Link
            href="/"
            className="group flex w-full items-center justify-center gap-4 rounded-xl bg-primary px-8 py-8 font-mono text-xs uppercase tracking-[0.4em] text-primary-foreground transition-opacity hover:opacity-90"
          >
            <ArrowLeft
              className="h-4 w-4 transition-transform group-hover:-translate-x-1"
              aria-hidden="true"
            />
            Back to Archive
          </Link>
        </Section>
      </div>
    </main>
  )
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
        {label}
      </dt>
      <dd className="mt-3 text-sm tracking-wide sm:text-base">{value}</dd>
    </div>
  )
}
