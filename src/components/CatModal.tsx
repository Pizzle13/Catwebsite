'use client'

import { useEffect } from 'react'
import { useI18n } from '@/lib/i18n'
import { formatAge, type Cat } from '@/lib/cats-types'
import CatGallery from './CatGallery'

interface Props {
  cat: Cat | null
  index: number
  total: number
  onClose: () => void
}

export default function CatModal({ cat, index, total, onClose }: Props) {
  const { lang, t } = useI18n()

  useEffect(() => {
    if (!cat) return
    const h = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', h)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', h)
      document.body.style.overflow = ''
    }
  }, [cat, onClose])

  const age = cat ? formatAge(cat.ageMonths, lang) : ''

  const applyHref = cat
    ? `https://t.me/MrBhikarry?text=${encodeURIComponent(`Hi, I'm interested in ${cat.name.en}`)}`
    : '#'

  return (
    <div className={`profile-panel ${cat ? 'open' : ''}`} onClick={onClose}>
      <div className="profile-modal" onClick={(e) => e.stopPropagation()}>
        {cat && (
          <>
            <div className="pm-photo">
              <button className="pm-close" onClick={onClose} aria-label="close">×</button>
              <CatGallery photos={cat.photos ?? []} name={cat.name[lang]} />
            </div>

            <div className="pm-body">
              <div className="mono text-[11px] tracking-[.14em] uppercase text-ink-mute">
                {t.profile.num} · {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
              </div>

              <h2 className="serif text-[64px] leading-none tracking-[-0.01em] mt-2 mb-1">
                {cat.name[lang]}
              </h2>

              <div className="italic text-accent font-serif text-[22px] mb-6" style={{ fontFamily: 'var(--font-instrument)' }}>
                &ldquo;{cat.tagline[lang]}&rdquo;
              </div>

              <dl className="grid gap-y-3 border-t border-line pt-5 mb-7"
                style={{ gridTemplateColumns: '120px 1fr', columnGap: '16px' }}>
                <dt className="mono text-[11px] tracking-[.1em] uppercase text-ink-mute pt-0.5">{t.profile.age}</dt>
                <dd className="text-[15px]">{age}</dd>
                <dt className="mono text-[11px] tracking-[.1em] uppercase text-ink-mute pt-0.5">{t.profile.sex}</dt>
                <dd className="text-[15px]">{cat.sex[lang]}</dd>
                <dt className="mono text-[11px] tracking-[.1em] uppercase text-ink-mute pt-0.5">{t.profile.health}</dt>
                <dd className="text-[15px]">{t.profile.healthVal}</dd>
                <dt className="mono text-[11px] tracking-[.1em] uppercase text-ink-mute pt-0.5">{t.profile.fee}</dt>
                <dd className="text-[15px]">{t.profile.feeVal}</dd>
              </dl>

              <p className="text-ink-soft text-[16px] leading-[1.6]">{cat.story[lang]}</p>
              <p className="text-ink-soft text-[16px] leading-[1.6] mt-4">{cat.bio[lang]}</p>

              <div className="flex gap-3 flex-wrap mt-7">
                <a href={applyHref} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  {t.profile.apply} <span style={{ transition: 'transform .2s ease', display: 'inline-block' }}>→</span>
                </a>
                <button className="btn btn-ghost" onClick={onClose}>{t.profile.close}</button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
