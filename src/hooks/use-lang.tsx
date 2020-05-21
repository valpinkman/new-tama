import React, { createContext, useState, useEffect, useContext } from 'react'
import { MaybeLang, Lang, Translations } from '../../types/lang'
import { getLang, saveLang } from '../utils/localStorage'
import { getLanguage } from '../utils/browser'
import en from './langs/en'
import fr from './langs/fr'
import it from './langs/it'

type KeysOfTranslations = keyof Translations

const langs = { en, fr, it }

const langContext = createContext<{
  lang: MaybeLang;
  changeLang: (lang: Lang) => void;
}>({
      lang: null,
      changeLang: () => {}, // eslint-disable-line @typescript-eslint/no-empty-function
    })

const useGetLang = () => {
  const [lang, setLang] = useState<MaybeLang>(null)

  const setLangWithPref = (lang: Lang) => {
    saveLang(lang)
    setLang(lang)
  }

  useEffect(() => {
    if (!lang) {
      const browserLang = getLang() || getLanguage()
      setLangWithPref(browserLang)
    }
  }, [lang, setLangWithPref])

  return { lang, changeLang: setLangWithPref }
}

export const useLang = () => {
  const { lang } = useContext(langContext)
  return lang
}

export const useChangeLang = () => {
  const { lang, changeLang } = useContext(langContext)

  return { lang, changeLang }
}

export const ProviderLang = ({ children }: { children: React.ReactNode }) => {
  const { lang, changeLang } = useGetLang()

  return (
    <langContext.Provider value={{ lang, changeLang }}>
      {children}
    </langContext.Provider>
  )
}

export const useTranslations = (lang: MaybeLang = 'fr') => {
  const [current, setCurrent] = useState<Translations>(() => langs[lang || 'fr'])

  useEffect(() => {
    if (lang) {
      setCurrent(langs[lang])
    }
  }, [lang])

  return current
}
