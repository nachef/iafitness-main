import styled, { css } from 'styled-components'

import { MarginStyle } from '@assets/styles/helpers/margin'

import { IButton } from './types'

export const Container = styled.button<IButton>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: ${({ align }) => (align ? align : 'center')};

  width: ${({ size }) => (size === 'small' ? '30%' : size === 'medium' ? '60%' : '100%')};
  height: 56px;
  padding: 0 16px;

  border: 0;
  border-radius: ${({ theme }) => theme.utilities.border.md};

  opacity: ${({ theme, disabled }) => (disabled ? theme.utilities.opacity.opaque : '1')};
  transition: all 0.5s;
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  outline: none;

  &:hover {
    opacity: ${({ theme }) => theme.utilities.opacity.opaque};
  }

  ${props => MarginStyle(props)}
  ${props => props.variant === 'primary' && primary}
  ${props => props.variant === 'secondary' && secondary}

  &:disabled {
    background: ${({ theme }) => theme.colors.background.primary};
    box-shadow: none;
    cursor: not-allowed;
  }
`

const primary = css`
  background: linear-gradient(265.65deg, #ff8c00 0%, #ff4500 100%);
  box-shadow: inset -4px -4px 8px rgba(255, 69, 0, 0.5), inset 4px 4px 8px rgba(255, 140, 0, 0.5);
`

const secondary = css`
  background-color: transparent;
  border: 2px solid #ff8c00;
`
