import 'server-only'
import fs from 'fs'
import path from 'path'
import type { Cat } from './cats-types'

export type { Cat, BilingualString } from './cats-types'
export { formatAge, getVideoEmbed } from './cats-types'

const catsDir = path.join(process.cwd(), 'content/cats')

export function getAllCats(): Cat[] {
  const files = fs.readdirSync(catsDir)
  return files
    .filter((f) => f.endsWith('.json'))
    .map((f) => {
      const raw = fs.readFileSync(path.join(catsDir, f), 'utf-8')
      const data = JSON.parse(raw)
      return { ...data, slug: f.replace('.json', '') } as Cat
    })
    .sort((a, b) => b.ageMonths - a.ageMonths)
}

export function getCatBySlug(slug: string): Cat | null {
  const filePath = path.join(catsDir, `${slug}.json`)
  if (!fs.existsSync(filePath)) return null
  const raw = fs.readFileSync(filePath, 'utf-8')
  const data = JSON.parse(raw)
  return { ...data, slug } as Cat
}
