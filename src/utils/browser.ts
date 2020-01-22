import { Lang } from '../../types/lang'

const availableLanguages = ['fr', 'en', 'it']
const browserLanguagePropertyKeys = [
  'languages',
  'language',
  'browserLanguage',
  'userLanguage',
  'systemLanguage',
]

export const getLanguage = (): Lang => {

  if (typeof window !== 'undefined') {
    const { navigator } = window
    const detectedLocale = browserLanguagePropertyKeys
      .filter(key => (navigator as any)[key])
      .map((key: string) => {
        return (navigator as any)[key]
      })
      .filter(val => {
        if (Array.isArray(val)) return val.filter(v => v)
        return val
      })
      .reduce((acc: string[], curr) => {
        if (Array.isArray(curr)) {
          return [...acc, ...curr]
        }

        return [...acc, curr]
      }, [])
      .find((lang: string) => availableLanguages.includes(lang))

    return detectedLocale || 'fr'
  }

  return 'fr'
}