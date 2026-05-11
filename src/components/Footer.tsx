'use client'

import Link from 'next/link'
import { useI18n } from '@/lib/i18n'

export default function Footer() {
  const { t } = useI18n()

  return (
    <footer className="site-footer">
      <span>{t.footer.text} <span className="heart">♡</span> {t.footer.text2}</span>
      <span className="mx-4 opacity-30">·</span>
      <Link href="/admin" className="hover:text-accent transition-colors">Admin</Link>
    </footer>
  )
}
