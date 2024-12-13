import React, { use, useEffect, useState } from 'react'

import { useTranslation } from 'react-i18next'
import { useTheme } from 'styled-components'

import { Box } from '@components/Atoms/Box'
import { Container } from '@components/Atoms/Container'
import { Navbar } from '@components/Molecules/Navbar'

import useMediaQuery from '@hooks/useMediaQuery'

import Background from '@assets/images/background.png'

import Step1Form from './components/Step1'
import Step2Options from './components/Step2'
import Step3Payment from './components/Step3'
import { useForm } from '../../../contexts/FormContext'
import { Stepper } from '../../Organisms/Steper'

export const HeaderGenerate = () => {
  const theme = useTheme()
  const { t } = useTranslation()
  const isSmallMobile = useMediaQuery('(max-width: 576px)')
  const isLargeMobile = useMediaQuery('(max-width: 767px)')
  const isLaptop = useMediaQuery('(min-width: 1024px)')
  const isDesktop = useMediaQuery('(min-width: 1441px)')
  const { formData, setFormData } = useForm()

  const [isFormValid, setIsFormValid] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)
  const [price, setPrice] = useState<number | null>(null)
  const [selectedPlan, setSelectedPlan] = useState<{ title: string; price: number } | null>(null)
  const [showBackButton, setShowBackButton] = useState(true) // Novo estado

  useEffect(() => {
    const isPelvicDysfunction = formData.goal === t('generate-page.radio-options.pelvic-dysfunction')
    const isValid = isPelvicDysfunction
      ? formData.name && formData.age && formData.weight && formData.height && formData.goal
      : formData.name &&
        formData.age &&
        formData.weight &&
        formData.height &&
        formData.sex &&
        formData.goal &&
        formData.days
    setIsFormValid(isValid)
  }, [formData, t])

  const { muscleGroupOptions } = useForm()

  const handleSelect = (value: string, field: string) => {
    let updatedValue = value

    if (field === 'weakPoint') {
      const selectedOption = muscleGroupOptions.find(option => option.label === value)
      if (selectedOption) {
        updatedValue = selectedOption.value
      }
    }

    const updatedFormData = { ...formData, [field]: updatedValue }

    if (field === 'goal' && value === t('generate-page.radio-options.pelvic-dysfunction')) {
      delete updatedFormData.sex
      delete updatedFormData.weakPoint
      delete updatedFormData.days
    }

    setFormData(updatedFormData)
    localStorage.setItem('formData', JSON.stringify(updatedFormData))
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    const updatedFormData = { ...formData, [name]: value }
    setFormData(updatedFormData)
    localStorage.setItem('formData', JSON.stringify(updatedFormData))
  }

  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
    }
  }

  const handleSubmit = (plan: { title: string; price: number }) => {
    try {
      if (currentStep === 1) {
        localStorage.setItem('formData', JSON.stringify(formData))
        setCurrentStep(currentStep + 1)
      } else if (currentStep === 2) {
        localStorage.setItem('planData', JSON.stringify(plan))
        setCurrentStep(currentStep + 1)
      }
      setSelectedPlan(plan)
      setCurrentStep(currentStep + 1)
      scrollToTop()
    } catch (error) {
      console.error('Erro ao enviar o formulário:', error)
    }
  }

  const setSelectedPrice = (price: number) => {
    setPrice(price)
  }

  const oneStepBack = () => {
    setCurrentStep(currentStep - 1)
    scrollToTop()
  }

  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return null
  }

  return (
    <Box display='flex' flexDirection='row' style={{ position: 'relative' }}>
      <Container>
        <Box px={isSmallMobile || isLargeMobile ? 0 : 100} pt={48}>
          <Navbar />
          <Box
            mt={isDesktop || isLaptop ? 100 : 80}
            mb={isDesktop || isLaptop ? 100 : 80}
            style={{ zIndex: 5, position: 'relative' }}
          >
            <Stepper currentStep={currentStep} totalSteps={3} onClick={oneStepBack} showBackButton={showBackButton} />
            {currentStep === 1 ? (
              <Step1Form
                handleChange={handleChange}
                handleSelect={handleSelect}
                handleSubmit={() => handleSubmit({ title: 'Simples', price: 1.0 })}
                isFormValid={isFormValid}
              />
            ) : currentStep === 2 ? (
              <Step2Options handleSubmit={handleSubmit} setSelectedPrice={setSelectedPrice} />
            ) : (
              <Step3Payment price={price} setShowBackButton={setShowBackButton} />
            )}
          </Box>
        </Box>
      </Container>
      {/* {isDesktop && (
        <Box
          style={{
            backgroundImage: `url(${Background.src})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            maxHeight: '100vh',
            minWidth: '700px',
            minHeight: '1123px',
          }}
        />
      )} */}
    </Box>
  )
}
