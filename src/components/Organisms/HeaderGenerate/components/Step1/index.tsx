import React, { useEffect, useState } from 'react'

import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

import { Button } from '@components/Molecules/Button'
import { Dropdown } from '@components/Molecules/DropDown'
import Input from '@components/Molecules/Input'
import { RadioInput } from '@components/Molecules/InputRadio'
import { Label } from '@components/Molecules/InputRadio/styles'

import useMediaQuery from '@hooks/useMediaQuery'

import { calculateBMI } from '@utils/helpers/formatters'

import { InputsWrapper, InputsWrapperInline, RadioInputWrapper } from './styles'
import { Step1FormProps } from './types'
import { useForm } from '../../../../../contexts/FormContext'
import Tooltip from '../../../../Atoms/TooltipHelp'

const Step1Form: React.FC<Step1FormProps> = ({ handleChange, handleSelect, handleSubmit, isFormValid }) => {
  const { t } = useTranslation()
  const isSmallMobile = useMediaQuery('(max-width: 576px)')
  const isLargeMobile = useMediaQuery('(min-width: 577px) and (max-width: 767px)')
  const isTablet = useMediaQuery('(min-width: 768px) and (max-width: 1023px)')
  const isLaptop = useMediaQuery('(min-width: 1024px) and (max-width: 1440px)')
  const { formData, setFormData, muscleGroupOptions } = useForm()

  const [bmi, setBmi] = useState<string>('')

  useEffect(() => {
    const height = parseFloat(formData.height)
    const weight = parseFloat(formData.weight)
    if (!isNaN(height) && !isNaN(weight) && height > 0 && weight > 0) {
      const calculatedBmi = calculateBMI(height, weight)
      setBmi(calculatedBmi)

      // Atualize o formData com o IMC
      const updatedFormData = { ...formData, bmi: calculatedBmi }
      setFormData(updatedFormData)
      localStorage.setItem('formData', JSON.stringify(updatedFormData))
    } else {
      setBmi('')
    }
  }, [formData.height, formData.weight, setFormData])

  const isPelvicDysfunction = formData.goal === t('generate-page.radio-options.pelvic-dysfunction')

  return (
    <InputsWrapper>
      <RadioInputWrapper>
        <Label>{t('generate-page.inputs-title.personal-goal')}</Label>
        <RadioInput
          name='goal'
          options={[
            t('generate-page.radio-options.weight-loss'),
            t('generate-page.radio-options.muscle-mass'),
            t('generate-page.radio-options.physical-conditioning'),
            t('generate-page.radio-options.pelvic-dysfunction'),
          ]}
          selectedValue={formData.goal}
          onChange={value => handleSelect(value, 'goal')}
        />
      </RadioInputWrapper>
      <InputsWrapperInline>
        <Input
          name='name'
          id='name'
          label={String(t('generate-page.inputs-title.name'))}
          placeholder={
            isPelvicDysfunction
              ? String(t('generate-page.inputs-placeholder.name-pelvic-dysfunction'))
              : String(t('generate-page.inputs-placeholder.name'))
          }
          value={formData.name}
          width='100%'
          onChange={handleChange}
        />
      </InputsWrapperInline>
      <InputsWrapperInline>
        <Input
          name='age'
          id='age'
          label={String(t('generate-page.inputs-title.age'))}
          placeholder={String(t('generate-page.inputs-placeholder.age'))}
          type='number'
          maxLength={2}
          value={formData.age}
          width={isLaptop ? '48%' : isTablet || isSmallMobile || isLargeMobile ? '100%' : '48%'}
          onChange={handleChange}
        />
        <Dropdown
          placeholder={String(t('generate-page.inputs-placeholder.sex'))}
          options={[
            t('generate-page.radio-options.male'),
            t('generate-page.radio-options.female'),
            t('generate-page.radio-options.no-answer'),
          ]}
          value={formData.sex}
          onSelect={value => handleSelect(value, 'sex')}
          label={String(t('generate-page.inputs-title.sex'))}
          width={isLaptop ? '48%' : isTablet || isSmallMobile || isLargeMobile ? '100%' : '48%'}
        />
      </InputsWrapperInline>
      <InputsWrapperInline>
        <Input
          name='height'
          id='height'
          label={String(t('generate-page.inputs-title.height'))}
          placeholder={String(t('generate-page.inputs-placeholder.height'))}
          type='number'
          maxLength={3}
          value={formData.height}
          width={isLaptop ? '48%' : isTablet || isSmallMobile || isLargeMobile ? '100%' : '48%'}
          onChange={handleChange}
        />
        <div
          style={{
            position: 'relative',
            width: isLaptop ? '48%' : isTablet || isSmallMobile || isLargeMobile ? '100%' : '48%',
          }}
        >
          <Input
            name='weight'
            id='weight'
            label={String(t('generate-page.inputs-title.weight'))}
            placeholder={String(t('generate-page.inputs-placeholder.weight'))}
            type='number'
            maxLength={3}
            value={formData.weight}
            width='100%'
            onChange={handleChange}
          />
          {bmi && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              style={{
                display: 'flex',
                alignItems: 'center',
                position: 'absolute',
                bottom: '20%',
                right: '0',
                color: '#868AA5',
                padding: '10px',
                borderRadius: '4px',
                marginTop: '5px',
              }}
            >
              <span style={{ marginRight: '5px' }}>{`${t('generate-page.tooltip.title')} ${bmi}`}</span>
              <Tooltip iconSize={15} message={t('generate-page.tooltip.bmi')} />
            </motion.div>
          )}
        </div>
      </InputsWrapperInline>
      {!isPelvicDysfunction && (
        <>
          <RadioInputWrapper>
            <Label>{t('generate-page.inputs-title.training-days')}</Label>
            <RadioInput
              name='days'
              options={[
                t('generate-page.radio-options.one-day'),
                t('generate-page.radio-options.two-days'),
                t('generate-page.radio-options.three-days'),
                t('generate-page.radio-options.four-days'),
                t('generate-page.radio-options.five-days'),
                t('generate-page.radio-options.six-days'),
              ]}
              selectedValue={formData.days}
              onChange={value => handleSelect(value, 'days')}
            />
          </RadioInputWrapper>
        </>
      )}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: isLargeMobile || isTablet ? '0px' : '30px',
          marginBottom: isLargeMobile || isTablet ? '30px' : '0px',
        }}
      >
        <Button
          title={t('main.buttons.send-informations')}
          variant='primary'
          size={'medium'}
          align='center'
          onClick={handleSubmit}
          disabled={!isFormValid}
        />
      </div>
    </InputsWrapper>
  )
}

export default Step1Form
