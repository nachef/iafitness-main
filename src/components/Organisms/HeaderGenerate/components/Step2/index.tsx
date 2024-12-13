import React from 'react'

import { useTranslation } from 'react-i18next'
import { useTheme } from 'styled-components'

import { Box } from '@components/Atoms/Box'
import { Text } from '@components/Atoms/Text'
import { Options } from '@components/Organisms/Options'

import { Step2OptionsProps } from './types'
import { useForm } from '../../../../../contexts/FormContext'
import useMediaQuery from '../../../../../hooks/useMediaQuery'

const Step2Options: React.FC<Step2OptionsProps> = ({ handleSubmit, setSelectedPrice }) => {
  const { t } = useTranslation()
  const theme = useTheme()
  const isSmallMobile = useMediaQuery('(max-width: 576px)')
  const isLargeMobile = useMediaQuery('(min-width: 577px) and (max-width: 767px)')
  const isTablet = useMediaQuery('(min-width: 768px) and (max-width: 1023px)')
  const { formData } = useForm()

  const isPelvicDysfunction = formData.goal === t('generate-page.radio-options.pelvic-dysfunction')

  const formatPrice = (price: number, currency: 'BRL' | 'USD') => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: currency,
    }).format(price)
  }

  const currency = 'BRL'

  return (
    <>
      <Box
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '20px',
          gap: '20px',
        }}
      >
        <Box
          style={{
            display: 'flex',
            flexDirection: isSmallMobile || isLargeMobile || isTablet ? 'column' : 'row',
            justifyContent: isSmallMobile || isLargeMobile || isTablet ? 'center' : 'space-between',
            alignItems: isSmallMobile || isLargeMobile || isTablet ? 'center' : '',
            gap: '20px',
          }}
        >
          {isPelvicDysfunction ? (
            <>
              {(isSmallMobile || isLargeMobile) && (
                <Options
                  title={t('plans.performance')}
                  description={t('plans.performanceDescription')}
                  price={formatPrice(27.0, currency)}
                  isPelvicDysfunction={true}
                  isRecommended={true}
                  isPremium={true}
                  onSelect={() => {
                    handleSubmit({ title: 'Performance', price: 27.0 })
                    setSelectedPrice(27.0)
                  }}
                />
              )}
              <Options
                title={t('plans.base')}
                description={t('plans.baseDescription')}
                price={formatPrice(17.0, currency)}
                isPelvicDysfunction={true}
                onSelect={() => {
                  handleSubmit({ title: 'Base', price: 17.0 })
                  setSelectedPrice(17.0)
                }}
              />
              {!(isSmallMobile || isLargeMobile) && (
                <Options
                  title={t('plans.performance')}
                  description={t('plans.performanceDescription')}
                  price={formatPrice(27.0, currency)}
                  isPelvicDysfunction={true}
                  isRecommended={true}
                  isPremium={true}
                  onSelect={() => {
                    handleSubmit({ title: 'Performance', price: 27.0 })
                    setSelectedPrice(27.0)
                  }}
                />
              )}
              <Options
                title={t('plans.master')}
                description={t('plans.masterDescription')}
                price={formatPrice(37.0, currency)}
                isPelvicDysfunction={true}
                isPremium={true}
                onSelect={() => {
                  handleSubmit({ title: 'Master', price: 37.0 })
                  setSelectedPrice(37.0)
                }}
              />
            </>
          ) : (
            <>
              <Options
                title={t('plans.simple')}
                description={t('plans.simpleDescription')}
                price={formatPrice(17.0, currency)}
                onSelect={() => {
                  handleSubmit({ title: 'Simples', price: 17.0 })
                  setSelectedPrice(17.0)
                }}
              />
              <Options
                title={t('plans.athlete')}
                description={t('plans.athleteDescription')}
                price={formatPrice(27.0, currency)}
                isPremium={true}
                isRecommended={true}
                onSelect={() => {
                  handleSubmit({ title: 'Atleta', price: 27.0 })
                  setSelectedPrice(27.0)
                }}
              />
              <Options
                title={t('plans.pro')}
                description={t('plans.proDescription')}
                price={formatPrice(37.0, currency)}
                isPremium={true}
                newFeature={true}
                onSelect={() => handleSubmit({ title: 'Pro', price: 37.0 })}
              />
            </>
          )}
        </Box>
        <div style={{ width: '100%', padding: '20px' }}>
          <Text color={theme.colors.basics.secondary} font='light' textAlign='center' size='small'>
            <a href='/terms'>{t('plans.termsAndConditions')}</a>
          </Text>
        </div>
      </Box>
    </>
  )
}

export default Step2Options
