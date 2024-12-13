import { css } from 'styled-components'

export interface FontProps {
  font: 'light' | 'medium' | 'semibold' | 'bold'
  size: 'xx-small' | 'x-small' | 'small' | 'regular' | 'normal' | 'medium' | 'large' | 'x-large' | 'xx-large'
  textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify'
}

export const switchFont = (value: string) => {
  switch (value) {
    case 'light':
      return 'SF Pro Display Regular'
    case 'medium':
      return 'SF Pro Display Medium'
    case 'semibold':
      return 'SF Pro Display Semibold'
    case 'bold':
      return 'SF Pro Display Bold'
  }
}

export const FontStyle = ({ font, size, textAlign }: FontProps) => css`
  font-family: ${switchFont(font)};
  font-size: ${({ theme }) => theme.utilities.sizes[size]}px;
  line-height: ${({ theme }) => theme.utilities.sizes[size] + 8}px;
  text-align: ${textAlign ? textAlign : 'left'};
`
