import Backend from 'i18next-http-backend'
import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'

i18next
  .use(Backend)
  .use(initReactI18next)
  .init({
    lng: localStorage.getItem('lng')?.toString() ?? 'en',
    backend: {
      loadPath: `/locales/{{lng}}.json`
    },
    fallbackLng: 'en',
    defaultNS: 'translations'
  })

export default i18next
