'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

const links = [
  { label: 'Archive', href: '/#editions' },
  { label: 'Events', href: '/#events' },
  { label: 'Wallpapers', href: '/wallpapers' },
  { label: 'About', href: '/#about' },
  {
    label: 'Instagram',
    href: 'https://instagram.com/forged.limited',
    external: true,
  },
]

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-out ${
        scrolled
          ? 'border-b border-border bg-background/95 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5">
        <Link
          href="/"
          className="text-sm font-medium tracking-tight text-foreground transition-opacity hover:opacity-70 sm:text-base"
        >
          FORGED.LIMITED
        </Link>

        <div className="flex items-center gap-6 font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground sm:gap-10 sm:text-xs">
          {links.map((link) =>
            link.external ? (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className="transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ),
          )}
        </div>
      </nav>
    </header>
  )
}
