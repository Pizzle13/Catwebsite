import { getAllCats } from '@/lib/cats'
import HomeContent from '@/components/HomeContent'

export default function HomePage() {
  const cats = getAllCats()
  return <HomeContent cats={cats} />
}
