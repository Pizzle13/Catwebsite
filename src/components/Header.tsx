'use client'

import { useI18n } from '@/lib/i18n'

export default function Header() {
  const { lang, setLang, t } = useI18n()

  return (
    <nav className="top">
      <div className="brand">
        <div className="mark">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path
              d="M5 9 C5 5, 8 4, 10 6 L 12 8 L 14 6 C 16 4, 19 5, 19 9 C 19 14, 14 18, 12 18 C 10 18, 5 14, 5 9 Z"
              fill="currentColor"
            />
          </svg>
        </div>
        <div className="name">{t.nav.siteName}</div>
      </div>

      <div className="links">
        <div className="nav-links flex gap-7">
          <a href="/#cats">{t.nav.meet}</a>
          <a href="/#story">{t.nav.story}</a>
          <a href="/#process">{t.nav.process}</a>
          <a href="/#contact">{t.nav.contact}</a>
        </div>
        <div className="lang-toggle">
          <button className={lang === 'en' ? 'on' : ''} onClick={() => setLang('en')}>EN</button>
          <button className={lang === 'ru' ? 'on' : ''} onClick={() => setLang('ru')}>RU</button>
        </div>
      </div>
    </nav>
  )
}
