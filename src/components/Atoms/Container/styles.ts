import styled from 'styled-components'

import { BoxStyle } from '@assets/styles/helpers/box'

import { IContainer } from './types'

export const ContainerResponsive = styled.div<IContainer>`
  position: relative;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

  background-color: ${({ background }) => (background ? background : 'transparent')};

  @media (min-width: 768px) {
    width: 750px;
  }
  @media (min-width: 992px) {
    width: 970px;
  }
  @media (min-width: 1200px) {
    width: 1170px;
  }

  ${props => BoxStyle(props)}
`
