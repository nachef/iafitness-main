import React, { useEffect } from 'react'

import router from 'next/router'
import { useTranslation } from 'react-i18next'
import { FaCheckCircle } from 'react-icons/fa'
import { useTheme } from 'styled-components'

import { Text } from '@components/Atoms/Text'
import { Button } from '@components/Molecules/Button'
import Input from '@components/Molecules/Input'

import { InputsWrapper } from './styles'
import { usePayment } from '../../../contexts/PaymentContext'
import useMediaQuery from '../../../hooks/useMediaQuery'
import { Box } from '../../Atoms/Box'

import 'react-toastify/dist/ReactToastify.css'

interface PaymentStepProps {
  price: number | null
  setShowBackButton: (show: boolean) => void
}

export const PaymentStep: React.FC<PaymentStepProps> = ({ price, setShowBackButton }) => {
  const { t } = useTranslation()
  const theme = useTheme()
  const paymentContext = usePayment()
  const {
    email,
    cpf,
    emailError,
    cpfError,
    isFormValid,
    handleEmailChange,
    handleCpfChange,
    handleCardSubmit,
    isButtonDisabled,
    isConfirmed,
    showSumUpCard,
    sumUpScriptLoaded,
    paymentType,
    paymentUrl,
  } = paymentContext

  const isLargeMobile = useMediaQuery('(min-width: 577px) and (max-width: 767px)')
  const isTablet = useMediaQuery('(min-width: 768px) and (max-width: 1023px)')
  const isSmallMobile = useMediaQuery('(max-width: 576px)')

  useEffect(() => {
    if (showSumUpCard) {
      setShowBackButton(false)
    }
  }, [showSumUpCard, setShowBackButton])

  if (!paymentContext) {
    return null
  }

  const handleRedirect = () => {
    if (paymentUrl) {
      window.open(paymentUrl, '_blank', 'noopener,noreferrer')
      router.push('/')
    }
  }

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
      }}
    >
      {!showSumUpCard ? (
        isConfirmed ? (
          <Box
            display='flex'
            flexDirection='column'
            flexJustify='center'
            flexAlign='center'
            borderRadius='10px'
            gap='20px'
            style={{ marginTop: '40px' }}
          >
            <FaCheckCircle size={100} color={theme.colors.others.green} />
            <Text color={theme.colors.text.primary} font='bold' size='medium' style={{ textAlign: 'center' }}>
              {t('confirmed-screen.title')}
            </Text>
            <Text color={theme.colors.text.secondary} font='light' size='small' style={{ textAlign: 'center' }}>
              {t('confirmed-screen.email')}
            </Text>
            {paymentUrl ? (
              <Button
                onClick={handleRedirect}
                variant='primary'
                style={{ marginTop: '20px' }}
                title={t('confirmed-screen.visit-site')}
                size={'medium'}
                align={'center'}
              />
            ) : null}
          </Box>
        ) : (
          <form onSubmit={handleCardSubmit} style={{ marginTop: 50 }}>
            <InputsWrapper>
              <Input
                type='email'
                label={String(t('generate-page.inputs-title.email'))}
                placeholder={String(t('generate-page.inputs-placeholder.email'))}
                value={email || ''}
                onChange={e => handleEmailChange(e.target.value)}
                style={{ padding: '10px', width: '100%' }}
                error={emailError ?? ''}
                width='100%'
              />
              <Input
                label={String(t('generate-page.inputs-title.cpf'))}
                placeholder={String(t('generate-page.inputs-placeholder.cpf'))}
                value={cpf || ''}
                onChange={e => handleCpfChange(e.target.value)}
                style={{ padding: '10px', width: '100%' }}
                error={cpfError ?? ''}
                maxLength={14}
                width='100%'
              />
              <Text
                color={theme.colors.text.primary}
                font='light'
                size='small'
                textAlign={isSmallMobile || isLargeMobile ? 'center' : 'left'}
              >
                {t('payment-step.revise-infos')}
              </Text>
            </InputsWrapper>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: isSmallMobile || isLargeMobile || isTablet ? '15px' : '30px',
                marginBottom: isSmallMobile || isLargeMobile || isTablet ? '30px' : '0px',
              }}
            >
              <Button
                title={isButtonDisabled ? 'Gerando...' : 'Próximo'}
                variant='primary'
                type='submit'
                size='medium'
                align='center'
                disabled={!isFormValid || isButtonDisabled}
                style={{ marginTop: 40 }}
              />
            </div>
          </form>
        )
      ) : (
        <div style={{ marginTop: '20px', textAlign: 'center' }}>
          <Text color={theme.colors.basics.secondary} font='bold' size='small' textAlign='center' mb={40}>
            Após pagamento, tenha calma e não feche a página, a IA está gerando seu site todo, e um botão aparecerá para
            você!
          </Text>
          <div id='sumup-card'></div>
        </div>
      )}
    </div>
  )
}
