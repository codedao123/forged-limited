'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { editions } from '@/lib/editions'
import { Reveal } from '@/components/reveal'

export function LatestEditions() {
  return (
    <section id="editions" className="mx-auto w-full max-w-6xl px-6 py-28 sm:py-36">
      <Reveal>
        <div className="flex items-end justify-between border-b border-border pb-6">
          <h2 className="text-2xl font-medium tracking-tight sm:text-3xl">
            Collection
          </h2>
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
            {editions.length} Archived
          </span>
        </div>
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {editions.map((edition, i) => (
          <Reveal key={edition.number} delay={(i % 3) * 0.08}>
            <Link href={`/${edition.number}`} className="group block">
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden rounded-lg border border-border bg-card"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={`/editions/${edition.number}.png`}
                    alt={edition.vehicle}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full border border-border bg-background/50 px-3 py-1 font-mono text-[11px] tracking-[0.25em] text-foreground backdrop-blur-md">
                    №{edition.number}
                  </span>
                </div>

                <div className="space-y-4 p-6">
                  <h3 className="text-pretty text-lg font-medium leading-snug tracking-tight">
                    {edition.vehicle}
                  </h3>
                  <div className="flex items-center justify-between border-t border-border pt-4 font-mono text-xs tracking-wide text-muted-foreground">
                    <span>{edition.ownerInstagram}</span>
                    <span>{edition.featuredDate}</span>
                  </div>
                </div>
              </motion.article>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
