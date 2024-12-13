import { css } from 'styled-components'

export interface BorderProps {
  borderRadius?: string
  borderWidth?: string
  borderStyle?: 'solid' | 'dashed'
  borderColor?: string
}

export const BorderStyle = ({ borderWidth, borderStyle, borderRadius, borderColor }: BorderProps) => css`
  border-width: ${borderWidth ? borderWidth : '0px'};
  border-style: ${borderStyle ? borderStyle : 'solid'};
  border-radius: ${borderRadius ? borderRadius : '0px'};
  border-color: ${borderColor ? borderColor : '0px'};
`
