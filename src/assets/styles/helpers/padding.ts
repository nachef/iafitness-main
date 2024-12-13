import { css } from 'styled-components'

export interface PaddingProps {
  pt?: number
  pb?: number
  pl?: number
  pr?: number
  py?: number
  px?: number
}

export const PaddingStyle = ({ pt, pb, pl, pr, py, px }: PaddingProps) => css<PaddingProps>`
  padding-top: ${pt ? pt : py ? py : 0}px;
  padding-bottom: ${pb ? pb : py ? py : 0}px;
  padding-left: ${pl ? pl : px ? px : 0}px;
  padding-right: ${pr ? pr : px ? px : 0}px;
`
