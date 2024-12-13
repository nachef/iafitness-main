import React from 'react'

import { Container } from './styles'
import { ISeparator } from './types'

export const Separator = ({ children, ...rest }: ISeparator) => {
  return <Container {...rest}>{children}</Container>
}
