'use client'

import { useI18n } from '@/lib/i18n'

const EMAIL = 'jpbhikarry@gmail.com'
const WHATSAPP = '998900635726'
const TELEGRAM = 'MrBhikarry'

interface Props {
  catName?: string
}

export default function ContactButtons({ catName }: Props) {
  const { t } = useI18n()
  const subject = catName ? `Adopting ${catName}` : 'Cat Adoption Inquiry'
  const body = catName
    ? `Hi! I'm interested in adopting ${catName}. Could you tell me more?`
    : `Hi! I'm interested in adopting one of your cats. Could you tell me more?`

  return (
    <div className="flex flex-col sm:flex-row gap-3 justify-center">
      <a
        href={`mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`}
        className="btn-outline"
      >
        ✉️ {t.contact.email}
      </a>
      <a
        href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(body)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-primary"
      >
        📱 {t.contact.whatsapp}
      </a>
      <a
        href={`https://t.me/${TELEGRAM}`}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-outline"
      >
        ✈️ {t.contact.telegram}
      </a>
    </div>
  )
}
