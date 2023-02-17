import i18n from "i18next";
import { initReactI18next } from "react-i18next"
import LanguageDetector from "i18next-browser-languagedetector"


import translationUA from './locales/ua/translation.json'
import translationEN from './locales/en/translation.json'

const resources = {
  en: {
    translation: translationEN
  },
  ua: {
    translation: translationUA
  }
}

export const languages = Object.entries(resources).map(([lang]) => lang)


export const removeLngPrefix = (pathname) => {

  for (let lang of languages){
    if(pathname.startsWith(`/${lang}/` || pathname === `/${lang}` || `/${lang}/ua`)){
      return pathname.replace(`/${lang}`, '')
    }
  }
  return pathname
}


i18n.use(LanguageDetector).use(initReactI18next).init({
  supportedLngs: ['ua', 'uk-UA', 'en', 'en-US'],
  fallbackLng: "ua",
  debug: false,
  interpolation: { escapeValue: false },
  resources,
  detection: {
    cache: ['cookie']
  },

})


export default i18n