import styled from 'styled-components'

import { FontStyle } from '@assets/styles/helpers/font'
import { MarginStyle } from '@assets/styles/helpers/margin'
import { PaddingStyle } from '@assets/styles/helpers/padding'

import { IText } from './types'

export const Container = styled.p<IText>`
  color: ${({ color }) => color};

  ${props => FontStyle(props)}
  ${props => PaddingStyle(props)}
  ${props => MarginStyle(props)}
`
