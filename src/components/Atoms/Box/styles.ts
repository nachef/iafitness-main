import styled from 'styled-components'

import { BorderStyle } from '@assets/styles/helpers/border'
import { BoxStyle } from '@assets/styles/helpers/box'
import { MarginStyle } from '@assets/styles/helpers/margin'
import { PaddingStyle } from '@assets/styles/helpers/padding'

import { IBox } from './types'

export const Container = styled.div<IBox>`
  background-color: ${({ background }) => (background ? background : 'transparent')};

  ${props => BoxStyle(props)}
  ${props => PaddingStyle(props)}
  ${props => MarginStyle(props)}
  ${props => BorderStyle(props)}
`
