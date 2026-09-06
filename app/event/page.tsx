import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, CalendarDays, MapPin } from 'lucide-react'
import { AttendanceCounter } from '@/components/attendance-counter'
import { Reveal } from '@/components/reveal'

export const metadata: Metadata = {
  title: 'FORGED Car Meet — FORGED.LIMITED',
  description: 'Join the launch event for the first FORGED.LIMITED product.',
}

export default function EventPage() {
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

        <div className="mt-20 max-w-4xl">
          <Reveal delay={0.1}>
            <p className="font-mono text-xs uppercase tracking-[0.5em] text-muted-foreground">
              FORGED.LIMITED / Launch Event
            </p>
            <h1 className="mt-6 text-balance text-5xl font-medium tracking-tight sm:text-8xl">
              FORGED Car Meet
            </h1>
            <p className="mt-8 max-w-2xl text-pretty text-xl leading-relaxed text-muted-foreground sm:text-2xl">
              Join us for the launch of Forged JetTags: a gathering for the cars, builders, and
              people behind the archive.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="mt-16 border-y border-border">
          <div className="grid sm:grid-cols-2">
            <div className="flex items-start gap-4 border-b border-border py-8 sm:border-b-0 sm:border-r sm:pr-10">
              <CalendarDays className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" aria-hidden="true" />
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
                  Date
                </p>
                <p className="mt-3 text-lg">Details announced soon</p>
              </div>
            </div>
            <div className="flex items-start gap-4 py-8 sm:pl-10">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" aria-hidden="true" />
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
                  Location
                </p>
                <p className="mt-3 text-lg">Details announced soon</p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.3} className="mt-16 max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.4em] text-muted-foreground">
            First release
          </p>
          <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
            Forged JetTags are limited to 200 units. Register your interest for the launch event and
            be there when Product 001 enters the archive.
          </p>
          <div className="mt-10 flex flex-col items-start gap-6 sm:flex-row sm:items-start">
            <AttendanceCounter />
          </div>
        </Reveal>
      </div>
    </main>
  )
}
