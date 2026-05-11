import { getCatBySlug, getAllCats } from '@/lib/cats'
import { notFound } from 'next/navigation'
import CatProfileContent from '@/components/CatProfileContent'
import type { Metadata } from 'next'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const cats = getAllCats()
  return cats.map((cat) => ({ slug: cat.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const cat = getCatBySlug(slug)
  if (!cat) return {}
  return {
    title: `Meet ${cat.name.en} | Cat Adoption — Tashkent`,
    description: `${cat.name.en} is looking for a forever home in Tashkent, Uzbekistan. ${cat.bio.en}`,
    openGraph: {
      title: `Meet ${cat.name.en} — Looking for a Home`,
      description: cat.bio.en,
      images: cat.photos?.[0] ? [{ url: `https://pinspots.co${cat.photos[0]}` }] : [],
    },
  }
}

export default async function CatProfilePage({ params }: Props) {
  const { slug } = await params
  const cat = getCatBySlug(slug)
  if (!cat) notFound()
  const siblings = getAllCats().filter(c => c.slug !== slug)
  return <CatProfileContent cat={cat} siblings={siblings} />
}
