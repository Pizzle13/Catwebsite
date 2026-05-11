'use client'

import { useState } from 'react'
import { useI18n } from '@/lib/i18n'

const SITE_URL = 'https://pinspots.co'

export default function ShareButtons() {
  const { t } = useI18n()
  const [copied, setCopied] = useState(false)

  const shareText =
    '4 rescue cats in Tashkent, Uzbekistan urgently need homes. Please share! 🐾'

  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(`${shareText}\n${SITE_URL}`)}`
  const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(SITE_URL)}&text=${encodeURIComponent(shareText)}`

  const copyLink = async () => {
    await navigator.clipboard.writeText(SITE_URL)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="flex flex-col sm:flex-row gap-3 justify-center">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-primary"
      >
        📱 {t.share.whatsapp}
      </a>
      <a
        href={telegramUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-outline"
      >
        ✈️ {t.share.telegram}
      </a>
      <button onClick={copyLink} className="btn-outline">
        {copied ? `✓ ${t.share.copied}` : `🔗 ${t.share.copy}`}
      </button>
    </div>
  )
}
