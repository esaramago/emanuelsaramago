import { ui, defaultLang, type SupportedLanguage, type TranslationSchema } from './ui'

type Primitive = string | number | boolean | null | undefined

/**
 * Generates all recursive dot-notation paths for an object type.
 * Primitives and arrays are endpoints.
 */
export type DotNestedKeys<T> = T extends Primitive | Array<any>
  ? never
  : {
      [K in keyof T & string]: T[K] extends Primitive | Array<any>
        ? `${K}`
        : `${K}` | `${K}.${DotNestedKeys<T[K]>}`
    }[keyof T & string]

/**
 * Extracts the value type located at a given dot-notation path.
 */
export type GetValueByPath<T, Path extends string> = Path extends `${infer Key}.${infer Rest}`
  ? Key extends keyof T
    ? GetValueByPath<T[Key], Rest>
    : never
  : Path extends keyof T
    ? T[Path]
    : never

export type TranslationKey = DotNestedKeys<TranslationSchema>

/**
 * Safely traverses an object following a dot-notation path.
 */
function getNestedValue(obj: unknown, path: string): unknown {
  return path.split('.').reduce<unknown>((acc, part) => {
    if (acc != null && typeof acc === 'object' && part in acc) {
      return (acc as Record<string, unknown>)[part]
    }
    return undefined
  }, obj)
}

/**
 * Returns the language from a URL pathname.
 * Useful when outside of Astro component templates.
 */
export function getLangFromUrl(url: URL): SupportedLanguage {
  const [, lang] = url.pathname.split('/')
  if (lang && lang in ui) return lang as SupportedLanguage
  return defaultLang
}

/**
 * Provides type-safe translations for the given language.
 *
 * Supports dot-notation: `t('home.hero.heading1')`
 * Supports parent objects: `t('home').hero.heading1` or `t('email').subject`
 * Supports parameter interpolation: `t('key', { name: 'value' })`
 */
export function useTranslations(lang?: string | null) {
  const currentLang: SupportedLanguage =
    lang && lang in ui ? (lang as SupportedLanguage) : defaultLang

  const translations = ui[currentLang]
  const defaultTranslations = ui[defaultLang]

  function t<K extends TranslationKey>(
    key: K,
    params?: Record<string, string | number>
  ): GetValueByPath<TranslationSchema, K>
  function t(
    key: string,
    params?: Record<string, string | number>
  ): unknown
  function t(
    key: string,
    params?: Record<string, string | number>
  ): unknown {
    const value =
      getNestedValue(translations, key) ??
      getNestedValue(defaultTranslations, key) ??
      key

    if (typeof value === 'string' && params) {
      return Object.entries(params).reduce(
        (str, [k, v]) => str.replaceAll(`{${k}}`, String(v)),
        value
      )
    }

    return value
  }

  t.lang = currentLang
  return t
}