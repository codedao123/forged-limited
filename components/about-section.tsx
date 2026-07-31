import { Reveal } from '@/components/reveal'

export function AboutSection() {
  return (
    <section id="about" className="border-t border-border">
      <div className="mx-auto w-full max-w-4xl px-6 py-28 sm:py-40">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.4em] text-muted-foreground">
            About
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-10 text-balance text-2xl font-light leading-relaxed tracking-tight sm:text-3xl md:text-4xl md:leading-[1.4]">
            FORGED.LIMITED is an automotive archive preserving builds, stories
            and culture through photography and collectible member cards.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
