import React, { createContext, useContext, useEffect, useState } from 'react'

import { validateEmail } from '../utils/helpers/formatters'

interface FormData {
  name: string
  email: string
  age: string
  weight: string
  height: string
  sex: string
  goal: string
  days: number
}

interface FormContextProps {
  formData: FormData
  setFormData: React.Dispatch<React.SetStateAction<FormData>>
  currentStep: number
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>
  handleNextStep: () => void
  handlePreviousStep: () => void
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  isStepCompleted: (step: number) => boolean
}

const FormContext = createContext<FormContextProps | undefined>(undefined)

export const useFormContext = () => {
  const context = useContext(FormContext)
  if (!context) {
    throw new Error('useFormContext must be used within a FormProvider')
  }
  return context
}

export const FormProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    age: '',
    weight: '',
    height: '',
    sex: '',
    goal: '',
    days: 0,
  })

  const [currentStep, setCurrentStep] = useState(1)

  useEffect(() => {
    const savedFormData = localStorage.getItem('formData')
    if (savedFormData) {
      try {
        const parsedData = JSON.parse(savedFormData)
        setFormData(parsedData)
      } catch (error) {
        console.error('Erro ao carregar dados do Local Storage:', error)
        localStorage.removeItem('formData')
      }
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData))
  }, [formData])

  const handleNextStep = () => {
    if (isStepCompleted(currentStep)) {
      setCurrentStep(prevStep => Math.min(prevStep + 1, 4))
    }
  }

  const handlePreviousStep = () => {
    setCurrentStep(prevStep => Math.max(prevStep - 1, 1))
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prevData => ({ ...prevData, [name]: value }))
  }

  const isStepCompleted = (step: number) => {
    switch (step) {
      case 1:
        return formData.goal.trim() !== ''
      case 2:
        return formData.name.trim() !== '' && validateEmail(formData.email.trim())
      case 3:
        return (
          formData.age.trim() !== '' &&
          formData.weight.trim() !== '' &&
          formData.height.trim() !== '' &&
          formData.sex.trim() !== ''
        )
      case 4:
        return formData.days > 0
      default:
        return false
    }
  }

  return (
    <FormContext.Provider
      value={{
        formData,
        setFormData,
        currentStep,
        setCurrentStep,
        handleNextStep,
        handlePreviousStep,
        handleInputChange,
        isStepCompleted,
      }}
    >
      {children}
    </FormContext.Provider>
  )
}
