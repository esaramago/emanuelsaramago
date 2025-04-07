import { globalPT, globalEN } from './content/global'
import { homePT, homeEN } from './content/home'
import { workPT, workEN } from './content/work'

export const languages = {
  pt: 'Português',
  en: 'English',
}

export const defaultLang = 'pt'

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