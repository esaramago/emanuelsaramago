import { defaultLang } from '../i18n/ui'
import { pagePath } from '@/pages'

export default function getUrl(path: string, lang: string) {
  const langPath = lang === defaultLang ? '' : '/' + lang
  return `${langPath}/${pagePath[path][lang]}`
}