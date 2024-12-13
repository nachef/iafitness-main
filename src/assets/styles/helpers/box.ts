import { css } from 'styled-components'

export interface BoxProps {
  width?: string
  height?: string
  display?: 'flex' | 'none' | 'block'
  flexDirection?: 'row' | 'column'
  flexJustify?: 'flex-start' | 'flex-end' | 'center' | 'space-between'
  flexAlign?: 'flex-start' | 'flex-end' | 'center'
  flexWrap?: 'wrap' | 'nowrap'
  gap?: string
}

export const BoxStyle = ({
  width,
  height,
  display,
  flexDirection,
  flexJustify,
  flexAlign,
  flexWrap,
  gap,
}: BoxProps) => css<BoxProps>`
  ${width && `width: ${width};`}
  ${height && `height: ${height};`}

  display: ${display ? display : 'block'};
  flex-direction: ${flexDirection ? flexDirection : 'column'};
  align-items: ${flexAlign ? flexAlign : 'flex-start'};
  justify-content: ${flexJustify ? flexJustify : 'flex-start'};
  flex-wrap: ${flexWrap ? flexWrap : 'nowrap'};
  gap: ${gap ? gap : '0px'};
`
