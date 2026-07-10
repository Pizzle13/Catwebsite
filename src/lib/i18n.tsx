'use client'

import { createContext, useContext, useState, ReactNode } from 'react'
import { en, type Translations } from '@/messages/en'
import { ru } from '@/messages/ru'

export type Lang = 'en' | 'ru'

interface I18nContextType {
  lang: Lang
  t: Translations
  setLang: (l: Lang) => void
}

const I18nContext = createContext<I18nContextType>({
  lang: 'ru',
  t: ru,
  setLang: () => {},
})

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('ru')
  const t = lang === 'en' ? en : ru
  return (
    <I18nContext.Provider value={{ lang, t, setLang }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  return useContext(I18nContext)
}
