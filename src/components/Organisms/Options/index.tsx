import React from 'react'

import { useTranslation } from 'react-i18next'
import { FaRegCheckCircle, FaRegTimesCircle, FaStar } from 'react-icons/fa'
import { useTheme } from 'styled-components'

import useMediaQuery from '@hooks/useMediaQuery'

import { Box } from '../../Atoms/Box'
import { Text } from '../../Atoms/Text'
import { Button } from '../../Molecules/Button'

export interface OptionsProps {
  title: string
  price?: string
  description: string
  isPremium?: boolean
  isRecommended?: boolean
  newFeature?: boolean
  onSelect: () => void
  isPelvicDysfunction?: boolean
}

export const Options = ({
  title,
  price,
  description,
  isPremium,
  isRecommended,
  newFeature,
  onSelect,
  isPelvicDysfunction,
}: OptionsProps) => {
  const theme = useTheme()
  const { t } = useTranslation()
  const isLargeMobile = useMediaQuery('(min-width: 577px) and (max-width: 767px)')
  const isTablet = useMediaQuery('(min-width: 768px) and (max-width: 1023px)')

  const handleSelect = () => {
    onSelect()
  }

  // Define número de exercícios conforme o tipo de plano
  const exercisesCount = isRecommended
    ? t('options.moreThan18Exercises')
    : isPremium
    ? t('options.moreThan28Exercises')
    : t('options.moreThan12Exercises')

  return (
    <Box
      style={{
        width: isLargeMobile ? '250px' : isTablet ? '350px' : '250px',
        maxHeight: '480px',
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        borderRadius: '10px',
        padding: '20px',
        border: isRecommended ? `1px solid gold` : `1px solid ${theme.colors.basics.primary}`,
        marginBottom: isTablet ? '20px' : '0',
        position: 'relative',
      }}
    >
      {isRecommended && (
        <div
          style={{
            position: 'absolute',
            top: '-15px',
            right: '10px',
            backgroundColor: 'rgba(0, 0, 0, 1)',
            borderRadius: '9999px',
            padding: '5px 10px',
          }}
        >
          <Text color={'gold'} font={'bold'} size={'small'}>
            {t('options.recommended')}
            <FaStar style={{ marginLeft: '5px' }} />
          </Text>
        </div>
      )}
      <div style={{ marginBottom: '10px' }}>
        <Text color={theme.colors.basics.tertiary} font={'bold'} size={'medium'}>
          {title}
        </Text>
      </div>

      <Text
        color={theme.colors.basics.quaternary}
        font={'light'}
        size={'x-small'}
        style={{ marginBottom: '20px', flexGrow: 1 }}
      >
        {description}
      </Text>
      <div
        style={{
          flex: 1,
          display: 'flex',
          width: '100%',
          marginBottom: '20px',
        }}
      >
        <Text color={theme.colors.basics.secondary} font={'bold'} size={'large'}>
          {price}
        </Text>
      </div>
      <Button
        title={newFeature ? t('options.comingSoon') : t('options.choose')}
        variant='primary'
        disabled={newFeature ? true : false}
        size='large'
        style={{ alignSelf: 'center', marginBottom: '20px', height: '50px' }}
        align={'center'}
        onClick={handleSelect}
      />
      <div style={{ textAlign: 'center', width: '100%' }}>
        <Text
          color={theme.colors.basics.quaternary}
          font={'light'}
          size={'x-small'}
          style={{ marginBottom: '5px', display: 'flex', alignItems: 'center' }}
        >
          <FaRegCheckCircle style={{ marginRight: '5px' }} />
          {t('options.exclusiveSite')}
        </Text>

        {!isPelvicDysfunction && (
          <>
            <Text
              color={theme.colors.basics.quaternary}
              font={'light'}
              size={'x-small'}
              style={{ display: 'flex', alignItems: 'center' }}
            >
              {isPremium ? (
                <>
                  <FaRegCheckCircle style={{ marginRight: '5px' }} /> {t('options.specializedDiet')}
                </>
              ) : (
                <>
                  <FaRegTimesCircle style={{ marginRight: '5px' }} /> {t('options.specializedDiet')}
                </>
              )}
            </Text>

            <Text
              color={theme.colors.basics.quaternary}
              font={'light'}
              size={'x-small'}
              style={{ display: 'flex', alignItems: 'center', marginTop: '5px' }}
            >
              {title === 'Pro' ? (
                <>
                  <FaRegCheckCircle style={{ marginRight: '5px' }} /> {t('options.weeklyAutomaticDelivery')}
                </>
              ) : (
                <>
                  <FaRegTimesCircle style={{ marginRight: '5px' }} /> {t('options.weeklyAutomaticDelivery')}
                </>
              )}
            </Text>
          </>
        )}

        <Text
          color={theme.colors.basics.quaternary}
          font={'light'}
          size={'x-small'}
          style={{ display: 'flex', alignItems: 'center', marginTop: '5px' }}
        >
          <FaRegCheckCircle style={{ marginRight: '5px' }} /> {t('options.executionGIFs')}
        </Text>

        {isPelvicDysfunction && (
          <Text
            color={theme.colors.basics.quaternary}
            font={'light'}
            size={'x-small'}
            style={{ display: 'flex', alignItems: 'center', marginTop: '5px' }}
          >
            <FaRegCheckCircle style={{ marginRight: '5px' }} /> {exercisesCount}
          </Text>
        )}
      </div>
    </Box>
  )
}
