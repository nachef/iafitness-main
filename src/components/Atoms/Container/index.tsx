import React from 'react'

import { ContainerResponsive } from './styles'
import { IContainer } from './types'

export const Container = ({ children, ...rest }: IContainer) => {
  return <ContainerResponsive {...rest}>{children}</ContainerResponsive>
}
