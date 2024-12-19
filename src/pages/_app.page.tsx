import { useEffect } from 'react'

import i18n from 'i18next'
import type { AppProps } from 'next/app'

import { FormProvider } from '../contexts/FormContext'
import { PaymentProvider } from '../contexts/PaymentContext'
import { TrainingSiteProvider } from '../contexts/TrainingSite/TrainingSiteContext'

import 'src/assets/styles/global.css'
import 'src/utils/helpers/i18n'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') || 'pt-BR'
    if (i18n.language !== savedLanguage) {
      i18n.changeLanguage(savedLanguage)
    }
  }, [])

  return (
    <TrainingSiteProvider>
      <FormProvider>
        <PaymentProvider>
          <Component {...pageProps} />
        </PaymentProvider>
      </FormProvider>
    </TrainingSiteProvider>
  )
}
