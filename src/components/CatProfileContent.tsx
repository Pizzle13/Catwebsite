'use client'

import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useI18n } from '@/lib/i18n'
import { getVideoEmbed, formatAge, type Cat } from '@/lib/cats-types'

interface Props {
  cat: Cat
  siblings: Cat[]
}

const GALLERY_LAYOUT = [
  { cls: 'feature', key: 'g1' },
  { cls: 'tall',    key: 'g2' },
  { cls: '',        key: 'g3' },
  { cls: '',        key: 'g4' },
  { cls: 'wide',    key: 'g5' },
  { cls: '',        key: 'g6' },
  { cls: '',        key: 'g7' },
]

export default function CatProfileContent({ cat, siblings }: Props) {
  const { lang, t } = useI18n()

  const age = formatAge(cat.ageMonths, lang)
  const video = cat.video_url ? getVideoEmbed(cat.video_url) : null
  const applyHref = `https://t.me/MrBhikarry?text=${encodeURIComponent(`Hi, I'm interested in ${cat.name.en}`)}`

  return (
    <>
      <Header />

      {/* back link */}
      <div className="cp-wrap">
        <Link href="/#cats" className="back-link">
          <span className="arr">←</span> {t.nav.back}
        </Link>
      </div>

      {/* hero */}
      <section className="cp-hero">
        <div className="cp-hero-grid">
          <div>
            <div className="cp-hero" style={{ padding: 0 }}>
              <div className="num">{t.profile.num} · {String(siblings.length > 0 ? 1 : 1).padStart(2, '0')} / 04</div>
            </div>
            <h1>{cat.name[lang]}</h1>
            <div className="tagline">&ldquo;{cat.tagline[lang]}&rdquo;</div>
            <dl>
              <dt>{t.profile.age}</dt><dd>{age}</dd>
              <dt>{t.profile.sex}</dt><dd>{cat.sex[lang]}</dd>
              <dt>{t.profile.health}</dt><dd>{t.profile.healthVal}</dd>
              <dt>{t.profile.fee}</dt><dd>{t.profile.feeVal}</dd>
            </dl>
            <div className="hero-cta" style={{ marginTop: 28 }}>
              <a href={applyHref} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                {t.profile.apply} <span style={{ transition: 'transform .2s ease', display: 'inline-block' }}>→</span>
              </a>
            </div>
          </div>
          <div className="ph">
            {cat.photos?.[0] ? (
              <Image src={cat.photos[0]} alt={cat.name[lang]} fill style={{ objectFit: 'cover' }} />
            ) : null}
          </div>
        </div>
      </section>

      {/* bio */}
      <section className="cp-bio">
        <div className="label">{t.profile.bioLabel}</div>
        <p>{cat.story[lang]}</p>
        <p>{cat.bio[lang]}</p>
      </section>

      {/* gallery */}
      <section className="cp-gallery">
        <div className="cp-gallery" style={{ padding: 0, margin: '0 0 20px', maxWidth: '100%' }}>
          <div className="section-header-row">
            <div className="index-label">{t.profile.galleryLabel}</div>
            <div className="hint">{t.profile.galleryHint}</div>
          </div>
        </div>
        <div className="cp-gal-grid">
          {GALLERY_LAYOUT.map((slot, i) => {
            const photo = cat.photos?.[i]
            return (
              <div key={slot.key} className={`cp-gal-slot ${slot.cls}`}>
                {photo ? (
                  <Image src={photo} alt={`${cat.name[lang]} photo ${i + 1}`} fill style={{ objectFit: 'cover' }} />
                ) : null}
              </div>
            )
          })}
        </div>
      </section>

      {/* video */}
      <section className="cp-video">
        <div className="section-header-row">
          <div className="index-label">{t.profile.videoLabel}</div>
          <div className="hint" style={{ color: '#5a4f43', fontSize: 15 }}>{t.profile.videoHint}</div>
        </div>
        <div className="cp-video-frame">
          {video ? (
            video.type === 'link' ? (
              <a href={video.src} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                ▶ Watch video
              </a>
            ) : (
              <iframe src={video.src} allowFullScreen title={`${cat.name[lang]} video`} />
            )
          ) : (
            <div className="lbl">
              <div className="play" />
              <div>{lang === 'en' ? `Video of ${cat.name.en}` : `Видео ${cat.name.ru}`}</div>
            </div>
          )}
        </div>
      </section>

      {/* siblings */}
      {siblings.length > 0 && (
        <section className="cp-siblings">
          <div className="index-label">{t.profile.siblingsLabel}</div>
          <div className="cp-sib-grid">
            {siblings.map(sib => (
              <Link key={sib.slug} href={`/cats/${sib.slug}`} className="cp-sib">
                <div className="ph">
                  {sib.photos?.[0] ? (
                    <Image src={sib.photos[0]} alt={sib.name[lang]} fill style={{ objectFit: 'cover' }} />
                  ) : null}
                </div>
                <div className="meta">
                  <h4>{sib.name[lang]}</h4>
                  <div className="more">{t.profile.seeMore} →</div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* contact */}
      <section className="cp-contact">
        <div className="cp-contact-grid">
          <div>
            <div className="cp-contact" style={{ padding: 0, border: 0, margin: 0 }}>
              <div className="interested-label">
                {t.profile.interested} {cat.name[lang]}?
              </div>
            </div>
            <h2>
              {t.section.contactTitle_a} <em>{t.section.contactTitle_b}</em>
            </h2>
            <p className="lede">{t.section.contactLede}</p>
          </div>
          <div className="contact-list">
            {t.contact.channels.map((c, i) => (
              <a key={i} href={c.href} target="_blank" rel="noopener noreferrer">
                <span className="ch-label">{c.label}</span>
                <span className="ch-value">{c.value}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
