import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-10 bg-background px-6 text-center text-foreground">
      <span
        aria-hidden="true"
        className="font-mono text-[6rem] font-medium leading-none tracking-tight text-muted-foreground/30 sm:text-[9rem]"
      >
        404
      </span>

      <div className="flex flex-col items-center gap-4">
        <p className="font-mono text-xs uppercase tracking-[0.5em] text-muted-foreground">
          Edition Not Found
        </p>
        <h1 className="text-balance text-3xl font-medium tracking-tight sm:text-4xl">
          This entry does not exist in the archive.
        </h1>
      </div>

      <Link
        href="/"
        className="rounded-md bg-primary px-8 py-4 font-mono text-xs uppercase tracking-[0.3em] text-primary-foreground transition-opacity hover:opacity-80"
      >
        Return to Archive
      </Link>
    </main>
  )
}
