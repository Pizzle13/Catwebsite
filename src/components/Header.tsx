'use client'

import { useI18n } from '@/lib/i18n'

function FlagGB() {
  return (
    <svg viewBox="0 0 60 36" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
      <rect width="60" height="36" fill="#00247d" />
      <path d="M0,0 L60,36 M60,0 L0,36" stroke="#fff" strokeWidth="8" />
      <path d="M0,0 L60,36 M60,0 L0,36" stroke="#cf142b" strokeWidth="4" />
      <path d="M30,0 V36 M0,18 H60" stroke="#fff" strokeWidth="12" />
      <path d="M30,0 V36 M0,18 H60" stroke="#cf142b" strokeWidth="6" />
    </svg>
  )
}

function FlagRU() {
  return (
    <svg viewBox="0 0 60 36" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
      <rect width="60" height="12" fill="#fff" />
      <rect y="12" width="60" height="12" fill="#0039a6" />
      <rect y="24" width="60" height="12" fill="#d52b1e" />
    </svg>
  )
}

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
          <button
            className={lang === 'en' ? 'on' : ''}
            onClick={() => setLang('en')}
            aria-label="English"
            title="English"
          >
            <FlagGB />
          </button>
          <button
            className={lang === 'ru' ? 'on' : ''}
            onClick={() => setLang('ru')}
            aria-label="Русский"
            title="Русский"
          >
            <FlagRU />
          </button>
        </div>
      </div>
    </nav>
  )
}
