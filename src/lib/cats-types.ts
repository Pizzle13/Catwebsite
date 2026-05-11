export interface BilingualString {
  en: string
  ru: string
}

export interface Cat {
  slug: string
  name: BilingualString
  ageMonths: number
  sex: BilingualString
  tagline: BilingualString
  bio: BilingualString
  story: BilingualString
  adopted: boolean
  photos: string[]
  video_url?: string
}

export function formatAge(months: number, lang: 'en' | 'ru'): string {
  const years = Math.floor(months / 12)
  const rem = months % 12
  if (lang === 'en') {
    if (years > 0 && rem > 0) return `${years} yr ${rem} mo`
    if (years > 0) return `${years} yr`
    return `${rem} mo`
  } else {
    if (years > 0 && rem > 0) return `${years} год ${rem} мес`
    if (years > 0) return `${years} год`
    return `${rem} мес`
  }
}

export function getVideoEmbed(url: string): { type: 'youtube' | 'drive' | 'link'; src: string } {
  if (url.includes('youtube.com') || url.includes('youtu.be')) {
    const id = url.match(/(?:v=|youtu\.be\/)([^&\n?#]+)/)?.[1]
    return { type: 'youtube', src: `https://www.youtube.com/embed/${id}` }
  }
  if (url.includes('drive.google.com')) {
    const id = url.match(/\/d\/([^/]+)/)?.[1]
    return { type: 'drive', src: `https://drive.google.com/file/d/${id}/preview` }
  }
  return { type: 'link', src: url }
}
