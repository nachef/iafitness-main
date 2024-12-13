import React from 'react'

import { Box } from '@components/Atoms/Box'
import { PaymentStep } from '@components/Organisms/PaymentStep'

import { Step3PaymentProps } from './types'

const Step3Payment: React.FC<Step3PaymentProps> = ({ price, setShowBackButton }) => {
  return (
    <Box style={{ display: 'flex', alignItems: 'center' }}>
      <PaymentStep price={price} setShowBackButton={setShowBackButton} />
    </Box>
  )
}

export default Step3Payment
