import styled from 'styled-components'

import { BorderStyle } from '@assets/styles/helpers/border'
import { BoxStyle } from '@assets/styles/helpers/box'
import { MarginStyle } from '@assets/styles/helpers/margin'
import { PaddingStyle } from '@assets/styles/helpers/padding'

import { ISeparator } from './types'

export const Container = styled.div<ISeparator>`
  background-color: ${({ color }) => (color ? color : 'transparent')};

  ${props => BoxStyle(props)}
  ${props => PaddingStyle(props)}
  ${props => MarginStyle(props)}
  ${props => BorderStyle(props)}
`
