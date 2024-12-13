import styled from 'styled-components'

interface TooltipProps {
  showTooltip: boolean
}

export const TooltipContainer = styled.div<TooltipProps>`
  position: relative;
  display: inline-block;
  cursor: ${props => (props.showTooltip ? 'pointer' : 'default')};
`

export const TooltipText = styled.div<TooltipProps>`
  visibility: ${props => (props.showTooltip ? 'visible' : 'hidden')};
  opacity: ${props => (props.showTooltip ? 1 : 0)};
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  background-color: ${({ theme }) => theme.colors.text.primary};
  color: #fff;
  padding: 5px;
  border-radius: 5px;
  font-size: 0.75rem;
  white-space: normal;
  width: max-content;
  max-width: 200px;
  text-align: center;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  transition: opacity 0.2s ease-in-out;
  margin-bottom: 5px;
  z-index: 1;
`
