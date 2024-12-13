import React from 'react'

import { Container } from './styles'
import { IBox } from './types'

export const Box = ({ children, ...rest }: IBox) => {
  return <Container {...rest}>{children}</Container>
}
