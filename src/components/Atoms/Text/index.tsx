import React from 'react'

import { Container } from './styles'
import { IText } from './types'

export const Text = ({ children, ...rest }: IText) => {
  return <Container {...rest}>{children}</Container>
}
