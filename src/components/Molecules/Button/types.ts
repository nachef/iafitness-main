import { ButtonHTMLAttributes } from 'react'

import { MarginProps } from '@assets/styles/helpers/margin'

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement>, MarginProps {
  title: string
  variant: 'primary' | 'secondary'
  size: 'small' | 'medium' | 'large'
  align: 'center' | 'space-between'

  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode

  disabled?: boolean
}
