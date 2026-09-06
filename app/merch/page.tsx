import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { AttendanceCounter } from '@/components/attendance-counter'
import { ProductGallery } from '@/components/product-gallery'
import { Reveal } from '@/components/reveal'

export const metadata: Metadata = {
  title: 'Forged JetTags — FORGED.LIMITED',
  description: 'Forged JetTags, the first product from FORGED.LIMITED.',
}

export default function MerchPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto w-full max-w-6xl px-6 pb-28 pt-32 sm:pt-40">
        <Reveal>
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Archive
          </Link>
        </Reveal>

        <div className="mt-16 grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-24">
          <Reveal delay={0.1}>
            <ProductGallery />
          </Reveal>

          <Reveal delay={0.2} className="max-w-xl">
            <p className="font-mono text-xs uppercase tracking-[0.5em] text-muted-foreground">
              Merch / 001
            </p>
            <h1 className="mt-6 text-balance text-4xl font-medium tracking-tight sm:text-6xl">
              Forged JetTags
            </h1>
            <p className="mt-6 max-w-md text-pretty text-lg leading-relaxed text-muted-foreground">
              The first product from FORGED.LIMITED. A limited-release identity tag for the people,
              places, and machines that keep moving.
            </p>

            <dl className="mt-12 grid grid-cols-2 gap-y-8 border-y border-border py-8">
              <div>
                <dt className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                  Release
                </dt>
                <dd className="mt-2 text-sm tracking-wide">Limited</dd>
              </div>
              <div>
                <dt className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                  Product
                </dt>
                <dd className="mt-2 text-sm tracking-wide">200 units</dd>
              </div>
            </dl>

            <div className="mt-10 flex flex-col items-start gap-6 sm:flex-row sm:items-start">
              <Link
                href="/event"
                className="inline-flex items-center gap-3 bg-primary px-7 py-4 font-mono text-xs uppercase tracking-[0.3em] text-primary-foreground transition-opacity hover:opacity-80"
              >
                Attend the event
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <AttendanceCounter
                storageKey="forged-jettags-interest-reset-2026-09-07"
                actionLabel="I want one"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </main>
  )
}
