import { getRelativeLocaleUrl } from 'astro:i18n'
import { defaultLang } from '../i18n/ui'
import { pagePath } from '@/pages'

export default function getUrl(path: keyof typeof pagePath | string, lang: string = defaultLang): string {
  const localizedPath = (pagePath as Record<string, Record<string, string>>)[path]?.[lang] ?? path
  return getRelativeLocaleUrl(lang, localizedPath)
}