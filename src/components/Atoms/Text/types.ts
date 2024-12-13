import { HTMLAttributes } from 'react'

import { FontProps } from '@assets/styles/helpers/font'
import { MarginProps } from '@assets/styles/helpers/margin'
import { PaddingProps } from '@assets/styles/helpers/padding'

export interface IText extends HTMLAttributes<HTMLParagraphElement>, FontProps, MarginProps, PaddingProps {
  color: string
}
