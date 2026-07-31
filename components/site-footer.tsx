export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-16 sm:flex-row sm:items-center sm:justify-between">
        <span className="text-lg font-medium tracking-tight">FORGED.LIMITED</span>

        <nav className="flex flex-col gap-4 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground sm:flex-row sm:gap-10">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground"
          >
            Instagram
          </a>
          <a
            href="mailto:hello@forged.limited"
            className="transition-colors hover:text-foreground"
          >
            Contact
          </a>
        </nav>

        <p className="font-mono text-[11px] tracking-[0.2em] text-muted-foreground">
          © {new Date().getFullYear()} FORGED.LIMITED
        </p>
      </div>
    </footer>
  )
}
