import { AboutSection } from '@/components/about-section'
import { HeroSearch } from '@/components/hero-search'
import { LatestEditions } from '@/components/latest-editions'
import { SiteFooter } from '@/components/site-footer'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <HeroSearch />
      <LatestEditions />
      <AboutSection />
      <SiteFooter />
    </main>
  )
}
