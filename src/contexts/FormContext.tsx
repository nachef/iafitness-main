import React, { createContext, useContext, useState } from 'react'

import { t } from 'i18next'

import { runGenerativeAI } from '../services/api/RunGemini'
import i18n from '../utils/helpers/i18n'

interface FormContextProps {
  formData: any
  setFormData: (data: any) => void
  muscleGroupOptions: { label: string; value: string }[]
}

const FormContext = createContext<FormContextProps | undefined>(undefined)

export const FormProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [formData, setFormData] = useState<any>({})
  let muscleGroupOptions = []
  if (formData.goal === t('generate-page.radio-options.pain-relief')) {
    muscleGroupOptions = [
      { label: t('generate-page.pain-relief-options.back'), value: 'back' },
      { label: t('generate-page.pain-relief-options.chest'), value: 'chest' },
      { label: t('generate-page.pain-relief-options.lower-arms'), value: 'lower arms' },
      { label: t('generate-page.pain-relief-options.lower-legs'), value: 'lower legs' },
      { label: t('generate-page.pain-relief-options.shoulders'), value: 'shoulders' },
      { label: t('generate-page.pain-relief-options.upper-arms'), value: 'upper arms' },
      { label: t('generate-page.pain-relief-options.upper-legs'), value: 'upper legs' },
      { label: t('generate-page.pain-relief-options.waist'), value: 'waist' },
    ]
  } else {
    muscleGroupOptions = [
      { label: t('generate-page.radio-options.abductors'), value: 'abductors' },
      { label: t('generate-page.radio-options.abs'), value: 'abs' },
      { label: t('generate-page.radio-options.adductors'), value: 'adductors' },
      { label: t('generate-page.radio-options.biceps'), value: 'biceps' },
      { label: t('generate-page.radio-options.calves'), value: 'calves' },
      { label: t('generate-page.radio-options.cardiovascular-system'), value: 'cardiovascular system' },
      { label: t('generate-page.radio-options.delts'), value: 'delts' },
      { label: t('generate-page.radio-options.forearms'), value: 'forearms' },
      { label: t('generate-page.radio-options.glutes'), value: 'glutes' },
      { label: t('generate-page.radio-options.hamstrings'), value: 'hamstrings' },
      { label: t('generate-page.radio-options.lats'), value: 'lats' },
      { label: t('generate-page.radio-options.levator-scapulae'), value: 'levator scapulae' },
      { label: t('generate-page.radio-options.pectorals'), value: 'pectorals' },
      { label: t('generate-page.radio-options.quads'), value: 'quads' },
      { label: t('generate-page.radio-options.serratus-anterior'), value: 'serratus anterior' },
      { label: t('generate-page.radio-options.spine'), value: 'spine' },
      { label: t('generate-page.radio-options.traps'), value: 'traps' },
      { label: t('generate-page.radio-options.triceps'), value: 'triceps' },
      { label: t('generate-page.radio-options.upper-back'), value: 'upper back' },
    ]
  }

  return <FormContext.Provider value={{ formData, setFormData, muscleGroupOptions }}>{children}</FormContext.Provider>
}

export const useForm = () => {
  const context = useContext(FormContext)
  if (!context) {
    throw new Error('useForm must be used within a FormProvider')
  }
  return context
}
