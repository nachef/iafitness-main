import React from 'react'

import { useTranslation } from 'react-i18next'
import { FaAnglesLeft } from 'react-icons/fa6'
import { useTheme } from 'styled-components'

import { Text } from '@components/Atoms/Text'

import { StepLine, StepperContainer, StepText } from './styles'
import { StepperProps } from './types'
import useMediaQuery from '../../../hooks/useMediaQuery'

export const Stepper: React.FC<StepperProps> = ({ currentStep, totalSteps, onClick, showBackButton }) => {
  const theme = useTheme()
  const { t } = useTranslation()
  const isLargePhone = useMediaQuery('(max-width: 570px)')
  const lineWidth = isLargePhone ? '66px' : '100px'

  return (
    <StepperContainer>
      {showBackButton && currentStep > 1 && (
        <FaAnglesLeft color={theme.colors.basics.tertiary} cursor={'pointer'} onClick={onClick} />
      )}

      <StepLine width={lineWidth} isActive={currentStep >= 1} />
      <StepLine width={lineWidth} isActive={currentStep >= 2} />
      <StepLine width={lineWidth} isActive={currentStep >= 3} />
      <StepText>
        <Text color={''} font={'bold'} size={'small'}>
          {currentStep === 2 ? t('generate-page.steps.step2') : currentStep === 3 ? t('generate-page.steps.step3') : ''}
        </Text>
      </StepText>
    </StepperContainer>
  )
}
