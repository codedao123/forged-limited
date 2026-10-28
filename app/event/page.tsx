import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import Image from 'next/image'
import { Reveal } from '@/components/reveal'

export const metadata: Metadata = {
  title: 'Car Meet — 7 November — FORGED.LIMITED',
  description: 'Kids & Families car meet featuring Slower Society, CARMEEETS.AU and Downshift Street.',
}

export default function EventPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto w-full max-w-5xl px-6 pb-28 pt-28 sm:pt-36">
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
          <div className="mt-16 overflow-hidden rounded-xl border border-border bg-card">
            <Image
              src="/editions/carmeet.png"
              alt="Kids & Families Car Meet — 07 November, 6:30 PM"
              width={1080}
              height={1350}
              priority
              className="h-auto w-full object-contain"
              sizes="(max-width: 1024px) 100vw, 1024px"
            />
          </div>
        </Reveal>
      </div>
    </main>
  )
}