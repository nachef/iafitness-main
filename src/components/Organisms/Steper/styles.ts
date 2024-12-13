import styled from 'styled-components'

export const StepperContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
  position: relative; /* Permite o posicionamento absoluto do texto */
`

export const StepLine = styled.div<{ isActive: boolean; width: string }>`
  width: ${({ width }) => width};
  height: 2px;
  background-color: ${({ theme, isActive }) => (isActive ? theme.colors.basics.primary : 'transparent')};
  border: 1px solid ${({ theme, isActive }) => (isActive ? theme.colors.basics.primary : 'gray')};
  margin: 0 10px;
`

export const StepText = styled.span`
  position: absolute;
  top: 20px;
  text-align: center;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text.primary};
  white-space: nowrap;
`
