import { HTMLAttributes } from 'react'

import { BoxProps } from '@assets/styles/helpers/box'

export interface IContainer extends HTMLAttributes<HTMLDivElement>, BoxProps {
  background?: string
}
