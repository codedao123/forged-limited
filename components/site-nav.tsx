'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'Archive', href: '/#editions' },
  { label: 'Wallpapers', href: '/wallpapers' },
  { label: 'Merch', href: '/merch' },
  { label: 'Event', href: '/event' },
  { label: 'About', href: '/#about' },
  {
    label: 'Instagram',
    href: 'https://instagram.com/forged.limited',
    external: true,
  },
]

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

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

        <div className="hidden items-center gap-6 font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground md:flex md:gap-10 md:text-xs">
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

        <button
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setMenuOpen((open) => !open)}
          className="inline-flex h-10 w-10 items-center justify-center text-foreground md:hidden"
        >
          {menuOpen ? (
            <X className="h-5 w-5" aria-hidden="true" />
          ) : (
            <Menu className="h-5 w-5" aria-hidden="true" />
          )}
        </button>
      </nav>

      <div className="overflow-hidden border-t border-border py-2" aria-label="Launch announcements">
        <div className="flex w-max animate-marquee gap-10 font-mono text-[10px] uppercase tracking-[0.35em] text-muted-foreground">
          <span aria-hidden="true">
            PRODUCT 001 LAUNCHING SOON · FORGED CAR MEET · EVENT LAUNCH SOON ·
          </span>
          <span aria-hidden="true">
            PRODUCT 001 LAUNCHING SOON · FORGED CAR MEET · EVENT LAUNCH SOON ·
          </span>
        </div>
      </div>

      <div
        id="mobile-navigation"
        className={`border-t border-border bg-background/95 px-6 backdrop-blur-md transition-[max-height,opacity] duration-300 md:hidden ${
          menuOpen ? 'max-h-96 opacity-100' : 'pointer-events-none max-h-0 overflow-hidden opacity-0'
        }`}
      >
        <div className="mx-auto flex w-full max-w-6xl flex-col py-4 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
          {links.map((link) =>
            link.external ? (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="border-b border-border py-4 transition-colors last:border-b-0 hover:text-foreground"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="border-b border-border py-4 transition-colors last:border-b-0 hover:text-foreground"
              >
                {link.label}
              </Link>
            ),
          )}
        </div>
      </div>
    </header>
  )
}
