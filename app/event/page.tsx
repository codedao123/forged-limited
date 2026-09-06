import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowDownRight,
  ArrowLeft,
  ArrowUpRight,
  CalendarDays,
  MapPin,
  Ticket,
  Zap,
} from 'lucide-react'
import { AttendanceCounter } from '@/components/attendance-counter'
import { Reveal } from '@/components/reveal'

export const metadata: Metadata = {
  title: 'FORGED Launch Meet × Slow Car Society SA',
  description: 'The FORGED Launch Meet at Castle Plaza.',
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

        <section className="relative mt-14 grid min-h-[600px] overflow-hidden border border-white/20 bg-black lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative flex flex-col justify-between p-7 sm:p-12 lg:p-14">
            <Reveal delay={0.1}>
              <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.28em] text-white/60">
                <span className="h-2 w-2 bg-white" /> Phase 01 / Official launch meet
              </div>
              <h1 className="mt-10 max-w-2xl text-balance text-6xl font-bold uppercase leading-[0.88] tracking-[-0.07em] sm:text-8xl">
                Pull up.
                <span className="block text-white/50">Stay late.</span>
              </h1>
              <p className="mt-8 max-w-md text-lg leading-7 text-muted-foreground">
                FORGED Launch Meet <span className="text-white">×</span> Slow Car Society SA.
                The launch meet for cars, culture, and the people behind it.
              </p>
            </Reveal>
            <Reveal delay={0.25}>
              <div className="mt-12 flex items-end justify-between border-t border-border pt-5">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Saturday</p>
                  <p className="mt-1 text-3xl font-bold uppercase tracking-[-0.05em]">10.10.26</p>
                </div>
                <ArrowDownRight className="h-10 w-10 text-white" aria-hidden="true" />
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.2} className="relative min-h-[340px] overflow-hidden border-t border-border lg:border-l lg:border-t-0">
            <Image
              src="/editions/0001.png"
              alt="Car from the FORGED archive"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover grayscale transition duration-700 hover:scale-105 hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-white/70">
              <span>Castle Plaza</span>
              <Zap className="h-5 w-5 text-white" aria-hidden="true" />
            </div>
          </Reveal>
        </section>

        <Reveal delay={0.3} className="mt-5 grid border-y border-border sm:grid-cols-3">
          <div className="flex items-center gap-4 border-b border-border py-6 sm:border-b-0 sm:border-r sm:pr-6">
            <CalendarDays className="h-5 w-5 text-white" aria-hidden="true" />
            <div><p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Time</p><p className="mt-1 font-medium">7:00 PM</p></div>
          </div>
          <div className="flex items-center gap-4 border-b border-border py-6 sm:border-b-0 sm:px-6 sm:border-r">
            <MapPin className="h-5 w-5 text-white" aria-hidden="true" />
            <div><p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Where</p><p className="mt-1 font-medium">Castle Plaza</p></div>
          </div>
          <div className="flex items-center gap-4 py-6 sm:pl-6">
            <Ticket className="h-5 w-5 text-white" aria-hidden="true" />
            <div><p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Entry</p><p className="mt-1 font-medium">Everyone welcome</p></div>
          </div>
        </Reveal>

        <section className="mt-24 grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.35em] text-white/60">The night in three moves</p>
            <h2 className="mt-5 text-4xl font-bold uppercase leading-[0.95] tracking-[-0.06em] sm:text-6xl">Three reasons to pull up.</h2>
            <p className="mt-6 max-w-sm leading-7 text-muted-foreground">A proper first chapter for the community. Come for the cars, the launch, and the story.</p>
          </Reveal>
          <div className="divide-y divide-border border-y border-border">
            {[
              ['01', 'Low Car Competition', 'Bring your lowest build and compete for a custom trophy.'],
              ['02', 'Jet Tags Launch', 'The first FORGED.LIMITED Jet Tags officially launch at the meet.'],
              ['03', 'Founder Speech', 'Sonny, founder of forged.limited, takes the mic for a special announcement.'],
            ].map(([number, title, text]) => (
              <Reveal key={number} className="grid grid-cols-[48px_1fr] gap-5 py-6 sm:grid-cols-[70px_1fr]">
                <span className="font-mono text-xs text-white/60">{number}</span>
                <div><h3 className="text-xl font-semibold uppercase tracking-tight">{title}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p></div>
              </Reveal>
            ))}
          </div>
        </section>

        <Reveal delay={0.2} className="mt-24 border border-white/20 bg-black p-7 sm:p-10">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.35em] text-white/60">Join the roll call</p>
              <h2 className="mt-4 text-3xl font-bold uppercase tracking-[-0.05em] sm:text-5xl">Are you pulling up?</h2>
              <p className="mt-4 max-w-lg leading-7 text-muted-foreground">Tap once so we know how many cars to make room for. Keep up with updates on both pages.</p>
            </div>
            <AttendanceCounter />
          </div>
          <div className="mt-10 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row">
            <a
              href="https://www.instagram.com/slowcarsociety_sa/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 border border-border px-5 py-4 font-mono text-xs uppercase tracking-[0.2em] transition-colors hover:border-foreground"
            >
              @slowcarsociety_sa
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="https://www.instagram.com/forged.limited/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 border border-border px-5 py-4 font-mono text-xs uppercase tracking-[0.2em] transition-colors hover:border-foreground"
            >
              @forged.limited
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </Reveal>
      </div>
    </main>
  )
}
