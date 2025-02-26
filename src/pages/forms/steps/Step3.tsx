import React, { useEffect, useState } from 'react'

import { motion } from 'framer-motion'
import { GoQuestion } from 'react-icons/go'

import { Input } from '../../../components/ui/input'
import { Label } from '../../../components/ui/label'
import { LabelInputContainer } from '../../../components/ui/label-input-container'

interface Step3Props {
  formData: { age: string; weight: string; height: string; sex: string }
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const handleInputChangeWithLimit = (
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  maxLength: number,
) => {
  return (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > maxLength) {
      e.target.value = e.target.value.slice(0, maxLength)
    }
    handleInputChange(e)
  }
}

const Step3: React.FC<Step3Props> = ({ formData, handleInputChange }) => {
  const [selectedSex, setSelectedSex] = useState(formData?.sex || '')
  const [bmi, setBmi] = useState<string | null>(null)
  const [tooltipVisible, setTooltipVisible] = useState(false)

  const handleMouseEnter = () => {
    setTooltipVisible(true)
  }

  const handleMouseLeave = () => {
    setTooltipVisible(false)
  }

  useEffect(() => {
    if (formData.weight && formData.height) {
      const heightInMeters = parseFloat(formData.height) / 100
      const bmiValue = (parseFloat(formData.weight) / (heightInMeters * heightInMeters)).toFixed(2)
      setBmi(bmiValue)
    } else {
      setBmi(null)
    }
  }, [formData.weight, formData.height])

  const handleSelectSex = (sex: string) => {
    setSelectedSex(sex)
    handleInputChange({ target: { name: 'sex', value: sex } } as unknown as React.ChangeEvent<HTMLInputElement>)
  }

  return (
    <>
      <LabelInputContainer>
        <Label htmlFor='age'>Idade</Label>
        <Input
          placeholder='Idade'
          type='number'
          name='age'
          value={formData?.age}
          onChange={handleInputChangeWithLimit(handleInputChange, 2)}
        />
      </LabelInputContainer>
      <LabelInputContainer>
        <Label htmlFor='weight'>Peso (kg)</Label>
        <Input
          placeholder='Peso'
          type='number'
          name='weight'
          value={formData?.weight}
          onChange={handleInputChangeWithLimit(handleInputChange, 3)}
        />
      </LabelInputContainer>
      <LabelInputContainer>
        <Label htmlFor='height'>Altura (cm)</Label>
        <Input
          placeholder='Altura'
          type='number'
          name='height'
          value={formData?.height}
          onChange={handleInputChangeWithLimit(handleInputChange, 3)}
        />
        {bmi && (
          <div className='flex flex-row items-center gap-2'>
            <motion.span
              className='ml-4'
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Seu IMC é: {bmi}
            </motion.span>
            <div className='relative inline-block'>
              <GoQuestion onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='cursor-pointer' />
              {tooltipVisible && (
                <div
                  role='tooltip'
                  className='w-60 absolute z-10 inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-100 dark:bg-gray-700'
                  style={{ top: '30px', left: '50%', transform: 'translateX(-50%)' }}
                >
                  O IMC (Índice de Massa Corporal) é uma medida usada para avaliar se uma pessoa está em um peso
                  saudável em relação à sua altura. É calculado dividindo o peso (em kg) pela altura ao quadrado (em
                  metros).
                  <div className='tooltip-arrow' data-popper-arrow></div>
                </div>
              )}
            </div>
          </div>
        )}
      </LabelInputContainer>
      <div className='flex flex-col items-center gap-6'>
        <p className='text-base md:text-lg text-foreground/80 mb-2 text-center'>Selecione seu sexo</p>
        <div className='flex flex-col lg:flex-row items-center gap-6'>
          {['Masculino', 'Feminino'].map(sex => (
            <button
              key={sex}
              className={`relative inline-flex h-12 w-64 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 ${
                selectedSex === sex ? 'border-2 border-purple-500' : ''
              }`}
              onClick={() => handleSelectSex(sex)}
            >
              <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]' />
              <span className='inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl'>
                {sex}
              </span>
            </button>
          ))}
        </div>
      </div>
    </>
  )
}

export default Step3
