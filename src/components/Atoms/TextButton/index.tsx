import React from 'react'

import { Container } from './styles'
import { ITextButton } from './types'

export const TextButton = ({ children, ...rest }: ITextButton) => {
  return <Container {...rest}>{children}</Container>
}
