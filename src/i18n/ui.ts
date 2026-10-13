import { globalPT, globalEN } from './content/global'
import { homePT, homeEN } from './content/home'
import { projectsPT, projectsEN } from './content/projects'

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
    projects: {
      ...projectsPT,
    },
  },
  en: {
    ...globalEN,
    home: {
      ...homeEN,
    },
    projects: {
      ...projectsEN,
    },
  },
} as const