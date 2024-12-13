import { css } from 'styled-components'

export interface MarginProps {
  mt?: number
  mb?: number
  ml?: number
  mr?: number
  my?: number
  mx?: number
}

export const MarginStyle = ({ mt, mb, ml, mr, my, mx }: MarginProps) => css`
  margin-top: ${mt ? mt : my ? my : 0}px;
  margin-bottom: ${mb ? mb : my ? my : 0}px;
  margin-left: ${ml ? ml : mx ? mx : 0}px;
  margin-right: ${mr ? mr : mx ? mx : 0}px;
`
