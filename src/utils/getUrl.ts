import { defaultLang } from '../i18n/ui'

export default function getUrl(path: string, lang: string) {
  const langPath = lang === defaultLang ? '' : '/' + lang
  return `${langPath}/${path}`
}