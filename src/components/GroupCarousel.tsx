'use client'

import { useState, useEffect } from 'react'

const PHOTOS = [
  '/cats/group/group-1.jpeg',
  '/cats/group/group-2.jpeg',
  '/cats/group/group-3.jpeg',
  '/cats/group/group-4.jpeg',
  '/cats/group/group-5.jpeg',
  '/cats/group/group-6.jpeg',
  '/cats/group/group-7.jpeg',
  '/cats/group/group-8.jpeg',
  '/cats/group/group-9.jpeg',
  '/cats/group/group-10.jpeg',
]

export default function GroupCarousel() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const t = setInterval(() => {
      setCurrent((c) => (c + 1) % PHOTOS.length)
    }, 4000)
    return () => clearInterval(t)
  }, [])

  const prev = () => setCurrent((c) => (c === 0 ? PHOTOS.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c + 1) % PHOTOS.length)

  return (
    <div className="hero-photo" style={{ position: 'relative', overflow: 'hidden' }}>
      {PHOTOS.map((src, i) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={src}
          src={src}
          alt={`The four cats together ${i + 1}`}
          style={{
            position: 'absolute', inset: 0,
            width: '100%', height: '100%',
            objectFit: 'cover',
            opacity: i === current ? 1 : 0,
            transition: 'opacity 0.8s ease',
          }}
        />
      ))}

      <button onClick={prev} aria-label="previous photo"
        style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', zIndex: 2,
          width: 36, height: 36, borderRadius: '50%', border: 0, cursor: 'pointer',
          background: 'rgba(255,255,255,0.75)', backdropFilter: 'blur(4px)',
          fontSize: 20, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        ‹
      </button>
      <button onClick={next} aria-label="next photo"
        style={{ position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)', zIndex: 2,
          width: 36, height: 36, borderRadius: '50%', border: 0, cursor: 'pointer',
          background: 'rgba(255,255,255,0.75)', backdropFilter: 'blur(4px)',
          fontSize: 20, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        ›
      </button>

      <div style={{ position: 'absolute', bottom: 12, left: '50%', transform: 'translateX(-50%)',
        display: 'flex', gap: 6, zIndex: 2 }}>
        {PHOTOS.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)} aria-label={`photo ${i + 1}`}
            style={{ width: i === current ? 20 : 6, height: 6, borderRadius: 3, border: 0,
              background: i === current ? 'white' : 'rgba(255,255,255,0.5)',
              cursor: 'pointer', transition: 'all 0.3s ease', padding: 0 }} />
        ))}
      </div>
    </div>
  )
}
