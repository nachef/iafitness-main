import React, { useState } from 'react'

import { Input } from '../../../components/ui/input'
import { Label } from '../../../components/ui/label'
import { LabelInputContainer } from '../../../components/ui/label-input-container'
import { validateEmail } from '../../../utils/helpers/formatters'

interface Step2Props {
  formData: { name: string; email: string }
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Step2: React.FC<Step2Props> = ({ formData, handleInputChange }) => {
  const [emailError, setEmailError] = useState('')

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleInputChange(e)
    const email = e.target.value
    if (!validateEmail(email)) {
      setEmailError('Email inválido')
    } else {
      setEmailError('')
    }
  }

  return (
    <>
      <LabelInputContainer>
        <Label htmlFor='name'>Nome</Label>
        <Input placeholder='Nome' type='text' name='name' value={formData?.name} onChange={handleInputChange} />
      </LabelInputContainer>
      <LabelInputContainer>
        <Label htmlFor='email'>Email</Label>
        <Input placeholder='Email' type='text' name='email' value={formData?.email} onChange={handleEmailChange} />
        {emailError && <p className='text-red-500 text-sm'>{emailError}</p>}
      </LabelInputContainer>
    </>
  )
}

export default Step2
