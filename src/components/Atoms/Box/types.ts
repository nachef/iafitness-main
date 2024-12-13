import { HTMLAttributes } from 'react'

import { BorderProps } from '@assets/styles/helpers/border'
import { BoxProps } from '@assets/styles/helpers/box'
import { MarginProps } from '@assets/styles/helpers/margin'
import { PaddingProps } from '@assets/styles/helpers/padding'

export interface IBox extends HTMLAttributes<HTMLDivElement>, BoxProps, BorderProps, PaddingProps, MarginProps {
  background?: string
}
