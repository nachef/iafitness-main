import styled, { css, keyframes } from 'styled-components'

import { PaddingProps } from './types'

type ContentProps = {
  width?: string
  padding?: PaddingProps
}

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`

export const Overlay = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;

  ${({ isOpen }) =>
    isOpen
      ? css`
          animation: ${fadeIn} 0.3s forwards;
        `
      : css`
          animation: ${fadeOut} 0.3s forwards;
        `};

  @media (max-width: 768px) {
    padding: 0 16px;
  }
`

export const Content = styled.div<ContentProps>`
  position: relative;
  z-index: 1000;

  background-color: ${({ theme }) => theme.colors.background.primary};
  border-radius: 8px;

  width: ${({ width }) => width};
  height: auto;
  max-width: 64rem;

  padding: ${({ padding }) => padding?.default};

  @media (max-width: 768px) {
    padding: ${({ padding }) => padding?.less768px || padding?.default};
    width: 100%;
  }
`
