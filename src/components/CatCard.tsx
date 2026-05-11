'use client'

import { useI18n } from '@/lib/i18n'
import { formatAge, type Cat } from '@/lib/cats-types'

interface Props {
  cat: Cat
  index: number
  onOpen: () => void
}

export default function CatCard({ cat, index, onOpen }: Props) {
  const { lang } = useI18n()
  const age = formatAge(cat.ageMonths, lang)
  const firstPhoto = cat.photos?.[0]

  return (
    <div className="card-editorial" onClick={onOpen} role="button" tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onOpen()}>
      <div className="ph">
        {firstPhoto ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={firstPhoto} alt={cat.name[lang]} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-ink-mute/30 text-6xl">
            🐱
          </div>
        )}
      </div>
      <div className="meta">
        <h3>{cat.name[lang]}</h3>
        <div className="age">{String(index + 1).padStart(2, '0')} · {age}</div>
      </div>
      <p className="bio">{cat.bio[lang]}</p>
    </div>
  )
}
