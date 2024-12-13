import { HTMLAttributes } from 'react'

import { BorderProps } from '@assets/styles/helpers/border'
import { FontProps } from '@assets/styles/helpers/font'
import { MarginProps } from '@assets/styles/helpers/margin'
import { PaddingProps } from '@assets/styles/helpers/padding'

export interface ITextButton
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    FontProps,
    MarginProps,
    PaddingProps,
    BorderProps {
  color: string
}
