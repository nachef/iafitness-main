import React from 'react'

import { Input } from '../../../components/ui/input'
import { Label } from '../../../components/ui/label'
import { LabelInputContainer } from '../../../components/ui/label-input-container'

const Step2 = () => (
  <>
    <p className='text-base md:text-lg text-foreground/80 mb-2 text-center'>Nos informe seu nome e Email.</p>
    <LabelInputContainer>
      <Label htmlFor='name'>Nome</Label>
      <Input placeholder='Nome' type='text' name='name' />
    </LabelInputContainer>
    <LabelInputContainer>
      <Label htmlFor='email'>Email</Label>
      <Input placeholder='Email' type='text' name='email' />
    </LabelInputContainer>
  </>
)

export default Step2
