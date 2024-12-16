import React from 'react'

import { Input } from '../../../components/ui/input'
import { Label } from '../../../components/ui/label'
import { LabelInputContainer } from '../../../components/ui/label-input-container'

const Step3 = () => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, maxLength: number) => {
    if (e.target.value.length > maxLength) {
      e.target.value = e.target.value.slice(0, maxLength)
    }
  }

  return (
    <>
      <p className='text-base md:text-lg text-foreground/80 mb-2 text-center'>
        Agora precisamos de suas características
      </p>
      <LabelInputContainer>
        <Label htmlFor='age'>Idade</Label>
        <Input placeholder='Idade' type='number' name='age' max={2} onChange={e => handleInputChange(e, 2)} />
      </LabelInputContainer>
      <LabelInputContainer>
        <Label htmlFor='weigth'>Peso (kg)</Label>
        <Input placeholder='Peso' type='number' name='weigth' max={3} onChange={e => handleInputChange(e, 3)} />
      </LabelInputContainer>
      <LabelInputContainer>
        <Label htmlFor='height'>Altura (cm)</Label>
        <Input placeholder='Altura' type='number' name='height' max={3} onChange={e => handleInputChange(e, 3)} />
      </LabelInputContainer>
    </>
  )
}

export default Step3
