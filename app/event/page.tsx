import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Reveal } from '@/components/reveal'

export const metadata: Metadata = {
  title: 'Event To Be Announced — FORGED.LIMITED',
  description: 'FORGED.LIMITED event details to be announced.',
}

export default function EventPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <div className="mx-auto w-full max-w-6xl px-6 pb-28 pt-28 sm:pt-36">
        <Reveal>
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to archive
          </Link>
        </Reveal>

        <Reveal delay={0.1}>
          <section className="mt-14 flex min-h-[60vh] flex-col items-center justify-center border-y border-border py-24 text-center">
            <p className="font-mono text-xs uppercase tracking-[0.5em] text-muted-foreground">
              Event update
            </p>
            <h1 className="mt-6 text-balance text-4xl font-medium tracking-tight sm:text-6xl">
              To Be Announced
            </h1>
          </section>
        </Reveal>

      </div>
    </main>
  )
}
