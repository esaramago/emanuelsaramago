import { globalPT, globalEN } from './content/global'
import { homePT, homeEN } from './content/home'
import { workPT, workEN } from './content/work'

export const languages = {
  pt: 'Português',
  en: 'English',
} as const

export const defaultLang = 'pt' as const

export type SupportedLanguage = keyof typeof languages
export type TranslationSchema = (typeof ui)[typeof defaultLang]

export const ui = {
  pt: {
    ...globalPT,
    home: {
      ...homePT,
    },
    work: {
      ...workPT,
    },
  },
  en: {
    ...globalEN,
    home: {
      ...homeEN,
    },
    work: {
      ...workEN,
    },
  },
} as const