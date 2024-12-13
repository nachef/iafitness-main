import React, { useState } from 'react'

import Image from 'next/image'

import * as C from './styles'
import { Label } from './styles'
import { useTraining } from '../../../contexts/TrainingSite/TrainingSiteContext'

export interface RadioInputProps {
  label?: string
  name: string
  options: string[]
  selectedValue?: string
  onChange: (value: string) => void
}

export const RadioInput = ({ label, name, options, selectedValue, onChange }: RadioInputProps) => {
  const { setHoveredOption } = useTraining()
  const [internalSelectedValue, setInternalSelectedValue] = useState(selectedValue || '')
  const isTraningSite = typeof window !== 'undefined' && window.location.pathname.includes('training-site')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInternalSelectedValue(event.target.value)
    onChange(event.target.value)
  }

  const handleMouseEnter = (option: string) => {
    setHoveredOption(option)
  }

  const handleMouseLeave = () => {
    setHoveredOption(null)
  }

  return (
    <C.Container value={internalSelectedValue}>
      {label && <Label>{label}</Label>}
      <C.RadioContainer>
        {options.map(option => (
          <C.RadioLabel
            style={{ height: isTraningSite ? 'auto' : '50px', padding: isTraningSite ? '10px' : '0 10px' }}
            key={option}
            isFocus={internalSelectedValue === option}
            isValid={false}
            isNotValid={false}
            onMouseEnter={() => handleMouseEnter(option)}
            onMouseLeave={handleMouseLeave}
          >
            <C.RadioInput
              name={name}
              value={option}
              checked={internalSelectedValue === option}
              onChange={handleChange}
            />
            {option}
          </C.RadioLabel>
        ))}
      </C.RadioContainer>
    </C.Container>
  )
}
