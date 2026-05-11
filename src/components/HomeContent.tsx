'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CatCard from '@/components/CatCard'
import CatModal from '@/components/CatModal'
import GroupCarousel from '@/components/GroupCarousel'
import { useI18n } from '@/lib/i18n'
import type { Cat } from '@/lib/cats-types'

interface Props {
  cats: Cat[]
}

export default function HomeContent({ cats }: Props) {
  const { lang, t } = useI18n()
  const [open, setOpen] = useState<Cat | null>(null)
  const openIndex = open ? cats.findIndex((c) => c.slug === open.slug) : 0

  const applyHref = `https://t.me/MrBhikarry`

  return (
    <>
      <Header />

      {/* ===== HERO ===== */}
      <header className="max-w-site mx-auto px-10 pt-[70px] pb-[90px]">
        <div className="hero-split">
          <div>
            <div className="eyebrow mb-7">{t.hero.eyebrow}</div>
            <h1 className="serif m-0 mb-7 text-wrap-balance" style={{ fontSize: 'clamp(48px,7vw,96px)', lineHeight: .98, letterSpacing: '-.015em' }}>
              {t.hero.title_a}{' '}
              <em className="italic text-accent">{t.hero.title_b}</em>{' '}
              {t.hero.title_c}
            </h1>
            <p className="text-ink-soft text-[19px] leading-[1.55] max-w-[480px] mb-9 text-wrap-pretty">
              {t.hero.lede}
            </p>
            <div className="flex gap-[14px] flex-wrap">
              <a href="#cats" className="btn btn-primary">
                {t.hero.cta} <span>→</span>
              </a>
              <a href="#contact" className="btn btn-ghost">{t.hero.cta2}</a>
            </div>
            <div className="mt-[18px] flex gap-7 flex-wrap mono text-[12px] tracking-[.08em] uppercase text-ink-mute">
              {[t.hero.meta1, t.hero.meta2, t.hero.meta3].map((m) => (
                <span key={m} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" />
                  {m}
                </span>
              ))}
            </div>
          </div>

          <GroupCarousel />
        </div>
      </header>

      {/* ===== CATS GRID ===== */}
      <div className="max-w-site mx-auto px-10" id="cats">
        <div className="flex justify-between items-end gap-10 mb-10">
          <div>
            <span className="index-label">{t.section.catsIdx}</span>
            <h2 className="section-heading m-0">
              {t.section.catsTitle.replace('.', '')}
              <em className="italic text-accent">.</em>
            </h2>
          </div>
          <p className="text-ink-soft text-[15px] max-w-[360px] text-wrap-pretty hidden md:block">
            {t.section.catsSub}
          </p>
        </div>
      </div>

      <div className="max-w-site mx-auto px-10 pb-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
          {cats.map((cat, i) => (
            <CatCard key={cat.slug} cat={cat} index={i} onOpen={() => setOpen(cat)} />
          ))}
        </div>
      </div>

      {/* ===== STORY ===== */}
      <section className="story-section" id="story">
        <div className="inner">
          <div className="label mono text-[11px] tracking-[.14em] uppercase text-ink-mute pt-[14px]">
            {t.section.storyIdx}
          </div>
          <div>
            <p>{t.story.p1}</p>
            <p>{t.story.p2}</p>
            <p dangerouslySetInnerHTML={{ __html: t.story.p3 }} />
            <div className="sig">{t.story.sig}</div>
          </div>
        </div>
      </section>

      {/* ===== PROCESS ===== */}
      <section className="max-w-site mx-auto px-10 pt-[70px]" id="process">
        <div className="flex justify-between items-end gap-10 mb-10">
          <div>
            <span className="index-label">{t.section.processIdx}</span>
            <h2 className="section-heading m-0">
              {t.section.processTitle.replace('.', '')}
              <em className="italic text-accent">.</em>
            </h2>
          </div>
          <p className="text-ink-soft text-[15px] max-w-[360px] text-wrap-pretty hidden md:block">
            {t.section.processSub}
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
          {t.process.map((s, i) => (
            <div className="step" key={i}>
              <div className="num">{String(i + 1).padStart(2, '0')}</div>
              <h4>{s.title}</h4>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="warning-box mt-[60px]">
          <div className="ico">!</div>
          <div>
            <h4 className="serif text-[22px] m-0 mb-1.5">{t.warn.title}</h4>
            <p className="text-ink-soft text-[15px] m-0 text-wrap-pretty">{t.warn.body}</p>
          </div>
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <section className="max-w-site mx-auto px-10 border-t border-line mt-20 pt-[100px] pb-20" id="contact">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
          <div>
            <span className="index-label">{t.section.contactIdx}</span>
            <h2 className="section-heading m-0 mb-4">
              {t.section.contactTitle_a}{' '}
              <em className="italic text-accent">{t.section.contactTitle_b}</em>
            </h2>
            <p className="text-ink-soft text-[17px] max-w-[460px] text-wrap-pretty">{t.section.contactLede}</p>
          </div>

          <div className="contact-list">
            {t.contact.channels.map((ch, i) => (
              <a key={i} href={ch.href} target="_blank" rel="noopener noreferrer">
                <span className="ch-label">{ch.label}</span>
                <span className="ch-value">{ch.value}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      {/* ===== CAT MODAL ===== */}
      <CatModal
        cat={open}
        index={openIndex}
        total={cats.length}
        onClose={() => setOpen(null)}
      />
    </>
  )
}
