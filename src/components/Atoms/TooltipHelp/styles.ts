import styled from 'styled-components'

export const TooltipWrapper = styled.div`
  position: relative;
  display: inline-block;
`

export const IconWrapper = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.basics.primary};
`

export const TooltipBox = styled.div<{ visible: boolean }>`
  visibility: ${({ visible }) => (visible ? 'visible' : 'hidden')};
  background-color: ${({ theme }) => theme.colors.background.primary};
  color: ${({ theme }) => theme.colors.text.primary};
  text-align: center;
  padding: 8px;
  border-radius: 6px;
  position: absolute;
  bottom: 180%;
  right: -10px;
  z-index: 999999;
  width: 200px;
  border: 1px solid ${({ theme }) => theme.colors.basics.primary};
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);

  &::after {
    content: '';
    position: absolute;
    top: -6px;
    right: 50px;
    border-width: 6px;
    border-style: solid;
    border-color: transparent transparent ${({ theme }) => theme.colors.background.primary} transparent;
  }
`
