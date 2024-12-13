import styled from 'styled-components'

import { BorderStyle } from '@assets/styles/helpers/border'
import { FontStyle } from '@assets/styles/helpers/font'
import { MarginStyle } from '@assets/styles/helpers/margin'
import { PaddingStyle } from '@assets/styles/helpers/padding'

import { ITextButton } from './types'

export const Container = styled.a<ITextButton>`
  color: ${({ color }) => color};
  transition: all 0.6s;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    opacity: ${({ theme }) => theme.utilities.opacity.opaque};
  }

  ${props => FontStyle(props)}
  ${props => PaddingStyle(props)}
  ${props => MarginStyle(props)}
  ${props => BorderStyle(props)}
`
