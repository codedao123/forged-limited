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
  const isMintLancer = edition.number === '0014'

  return (
    <main className="min-h-screen bg-background text-foreground">
      {edition.number === '0013' && (
        <div className="cherry-blossoms" aria-hidden="true">
          <span className="cherry-blossom cherry-blossom-1" />
          <span className="cherry-blossom cherry-blossom-2" />
          <span className="cherry-blossom cherry-blossom-3" />
          <span className="cherry-blossom cherry-blossom-4" />
          <span className="cherry-blossom cherry-blossom-5" />
          <span className="cherry-blossom cherry-blossom-6" />
        </div>
      )}
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
          <p className={`font-mono text-xs uppercase tracking-[0.5em] ${isMintLancer ? 'text-[#39d6c0]' : 'text-muted-foreground'}`}>
            Edition №{edition.number}
          </p>
        </Section>

        <Section delay={0.1}>
          <h1 className="mt-6 text-balance text-3xl font-medium tracking-tight sm:text-5xl">
            {edition.vehicle}
          </h1>
          {isMintLancer ? (
            <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-xs uppercase tracking-[0.18em]">
              <span className="h-3 w-3 rounded-full bg-[#39d6c0] ring-4 ring-[#39d6c0]/15" aria-hidden="true" />
              <span className="text-muted-foreground">Porsche Mint Green</span>
              <span className="text-border" aria-hidden="true">/</span>
              <a
                href={`https://www.instagram.com/${edition.ownerInstagram.replace('@', '')}/`}
                target="_blank"
                rel="noreferrer"
                className="text-[#39d6c0] transition-opacity hover:opacity-75"
              >
                {edition.ownerInstagram}
              </a>
            </div>
          ) : (
            <p className="mt-4 font-mono text-sm tracking-wide text-muted-foreground">
              {edition.ownerInstagram}
            </p>
          )}
        </Section>

        <Section
          delay={0.25}
          className={`relative mx-auto mt-12 overflow-hidden rounded-xl border ${isMintLancer ? 'border-[#39d6c0]/50 shadow-[0_0_36px_rgba(57,214,192,0.12)]' : 'border-border'} ${
            edition.video ? 'aspect-[9/16] max-w-md bg-black' : 'aspect-[16/10] w-full'
          }`}
        >
          {edition.video ? (
            <video
              src={edition.video}
              autoPlay
              controls
              muted
              playsInline
              preload="metadata"
              poster="/editions/0013.png"
              className="h-full w-full object-contain"
            />
          ) : (
            <Image
              src={edition.gallery[0] || `/editions/${edition.number}.png`}
              alt={edition.vehicle}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="object-cover"
            />
          )}
        </Section>

        {/* Specs */}
        <Section
          delay={0.4}
          className={`mt-14 grid grid-cols-2 gap-x-6 gap-y-10 border-y py-10 sm:grid-cols-4 ${isMintLancer ? 'border-[#39d6c0]/35' : 'border-border'}`}
        >
          <Detail label="Vehicle" value={edition.vehicle} accent={isMintLancer} />
          <Detail label="Year" value={edition.year} accent={isMintLancer} />
          <Detail label="Power" value={edition.power} accent={isMintLancer} />
          <Detail label="Location" value={edition.location} accent={isMintLancer} />
          <Detail label="Owner" value={edition.ownerInstagram} accent={isMintLancer} />
          <Detail label="Date Featured" value={edition.featuredDate} accent={isMintLancer} />
        </Section>

        {/* Modifications */}
        <Section delay={0.5} className="mt-16">
          <h2 className={`font-mono text-xs uppercase tracking-[0.4em] ${isMintLancer ? 'text-[#39d6c0]' : 'text-muted-foreground'}`}>
            Modifications
          </h2>
          <ul className={`mt-8 divide-y border-y ${isMintLancer ? 'divide-[#39d6c0]/20 border-[#39d6c0]/35' : 'divide-border border-border'}`}>
            {edition.modifications.map((mod, i) => (
              <li
                key={mod}
                className="flex items-baseline gap-6 py-5 text-base tracking-wide sm:text-lg"
              >
                <span className={`font-mono text-xs ${isMintLancer ? 'text-[#39d6c0]' : 'text-muted-foreground'}`}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="text-pretty">{mod}</span>
              </li>
            ))}
          </ul>
        </Section>

        {/* Gallery */}
        {edition.gallery.length > 0 && (
          <Section delay={0.55} className="mt-16">
            <h2 className={`font-mono text-xs uppercase tracking-[0.4em] ${isMintLancer ? 'text-[#39d6c0]' : 'text-muted-foreground'}`}>
              Gallery
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {edition.gallery.map((src, i) => (
                <div
                  key={src}
                  className={`relative overflow-hidden rounded-xl border ${isMintLancer ? 'border-[#39d6c0]/35' : 'border-border'} ${
                    i === 0 ? 'aspect-[16/10] sm:col-span-2' : 'aspect-[4/3]'
                  }`}
                >
                  <Image
                    src={src || '/placeholder.svg'}
                    alt={`${edition.vehicle} — image ${i + 1}`}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className={`object-cover ${
                      src.endsWith('-a.png') || src.endsWith('-c.png')
                        ? 'object-[center_72%]'
                        : ''
                    }`}
                  />
                </div>
              ))}
            </div>
          </Section>
        )}

        {/* Story */}
        <Section delay={0.6}>
          <p className={`mt-16 max-w-3xl border-l-2 pl-6 text-pretty text-xl font-light leading-relaxed tracking-tight text-muted-foreground sm:text-2xl sm:leading-relaxed ${isMintLancer ? 'border-[#39d6c0]' : 'border-transparent pl-0'}`}>
            {edition.story}
          </p>
        </Section>

        {/* Back to Archive */}
        <Section delay={0.65} className="mt-20">
          <Link
            href="/"
            className={`group flex w-full items-center justify-center gap-4 rounded-xl px-8 py-8 font-mono text-xs uppercase tracking-[0.4em] transition-opacity hover:opacity-90 ${isMintLancer ? 'bg-[#39d6c0] text-black' : 'bg-primary text-primary-foreground'}`}
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

function Detail({ label, value, accent = false }: { label: string; value: string; accent?: boolean }) {
  return (
    <div>
      <dt className={`font-mono text-[11px] uppercase tracking-[0.25em] ${accent ? 'text-[#39d6c0]' : 'text-muted-foreground'}`}>
        {label}
      </dt>
      <dd className="mt-3 text-sm tracking-wide sm:text-base">{value}</dd>
    </div>
  )
}
