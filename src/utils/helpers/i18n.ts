import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import enTranslations from '@langs/en-US.json'
import ptTranslations from '@langs/pt-BR.json'

i18n.use(initReactI18next).init({
  resources: {
    en: {
      ...enTranslations,
    },
    pt: {
      ...ptTranslations,
    },
  },
  lng: 'pt',
})

export default i18n
