import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { EditionDetail } from '@/components/edition-detail'
import { editions, getEdition } from '@/lib/editions'

export function generateStaticParams() {
  return editions.map((edition) => ({ edition: edition.number }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ edition: string }>
}): Promise<Metadata> {
  const { edition } = await params
  const found = getEdition(edition)
  if (!found) return { title: 'Edition Not Found — FORGED.LIMITED' }
  return {
    title: `№${found.number} · ${found.vehicle} — FORGED.LIMITED`,
    description: found.story,
  }
}

export default async function EditionPage({
  params,
}: {
  params: Promise<{ edition: string }>
}) {
  const { edition } = await params
  const found = getEdition(edition)

  if (!found) {
    notFound()
  }

  return <EditionDetail edition={found} />
}
