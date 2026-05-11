'use client'

import { useState } from 'react'

interface Props {
  photos: string[]
  name: string
  fill?: boolean
}

export default function CatGallery({ photos, name, fill }: Props) {
  const [current, setCurrent] = useState(0)

  if (!photos || photos.length === 0) {
    return (
      <div className={`flex items-center justify-center text-ink-mute/20 text-7xl bg-tint ${fill ? 'w-full h-full' : 'aspect-[4/5] rounded-lg'}`}>
        🐱
      </div>
    )
  }

  const prev = () => setCurrent((c) => (c === 0 ? photos.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === photos.length - 1 ? 0 : c + 1))

  return (
    <div className={`relative ${fill ? 'w-full h-full' : 'aspect-[4/5]'} overflow-hidden bg-tint`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        key={current}
        src={photos[current]}
        alt={`${name} ${current + 1}`}
        className="w-full h-full object-cover"
      />
      {photos.length > 1 && (
        <>
          <button onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 backdrop-blur-sm text-ink flex items-center justify-center text-xl"
            aria-label="previous">‹</button>
          <button onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 backdrop-blur-sm text-ink flex items-center justify-center text-xl"
            aria-label="next">›</button>
          <div className="absolute bottom-3 right-3 mono text-[10px] text-white bg-black/40 px-2 py-1 rounded-full tracking-wider">
            {current + 1}/{photos.length}
          </div>
        </>
      )}
    </div>
  )
}
