import { BsChevronDown, BsChevronUp } from 'react-icons/bs'
import styled from 'styled-components'

interface SelectWrapperProps {
  isFocus: boolean
}

export const Container = styled.div<{ width: string }>`
  width: ${({ width }) => width || 'auto'};
  position: relative;

  & svg {
    margin-right: 20px;
  }

  & path {
    stroke: ${({ theme }) => theme.colors.text.secondary};
  }
`

export const SelectField = styled.div<SelectWrapperProps>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 56px;
  width: 100%;

  background-color: ${({ isFocus, theme }) =>
    isFocus ? theme.colors.background.primary : theme.colors.background.primary};
  border: ${({ isFocus, theme }) => (isFocus ? `3px solid ${theme.colors.basics.secondary}` : '0')};
  border-radius: 10px;

  outline: 0;
  cursor: pointer;
`

export const Label = styled.label<SelectWrapperProps>`
  position: absolute;
  top: ${({ isFocus }) => (isFocus ? -8 : -20)}px;
  left: 12px;

  background: ${({ theme, isFocus }) => (isFocus ? theme.colors.background.primary : 'transparent')};
  padding: 0 10px;

  border-radius: 10px;

  font-family: 'SF Pro Display Medium';
  font-size: 12px;
  line-height: 20px;
  color: ${({ theme, isFocus }) => (isFocus ? theme.colors.basics.primary : theme.colors.text.secondary)};

  transition: all 0.2s ease-in-out;
`

export const SelectText = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-family: 'SF Pro Display Medium';
  font-size: 14px;
  line-height: 22px;
  color: ${({ theme }) => theme.colors.text.primary};

  margin: 0 20px;

  #placeholder {
    color: ${({ theme }) => theme.colors.text.secondary};
    font-family: 'SF Pro Display Regular';
    font-size: 14px;
    line-height: 22px;
  }
`

export const OptionsField = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 10;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  overflow-y: auto;
  max-height: 250px;

  width: 100%;

  margin-top: 8px;
  padding: 16px 20px;
  outline: 0;
  gap: 16px;

  color: ${({ theme }) => theme.colors.text.primary};
  background: ${({ theme }) => theme.colors.background.primary};

  border: 1px solid ${({ theme }) => theme.colors.utils.border};
  border-radius: 10px;
`

export const Option = styled.div`
  display: flex;
  width: 100%;
  cursor: pointer;

  span {
    font-family: 'SF Pro Display Regular';
    font-size: 14px;
    line-height: 22px;
    margin-top: 10px;
  }

  & + & {
    border-top: 1px solid ${({ theme }) => theme.colors.utils.border};
  }
`

export const TextError = styled.p`
  font-family: 'SF Pro Display Regular';
  font-size: 12px;
  line-height: 20px;

  margin-left: 16px;

  color: ${({ theme }) => theme.colors.others.red};
`

export const ChevronUp = styled(BsChevronUp)`
  color: ${({ theme }) => theme.colors.basics.primary};
`

export const ChevronDown = styled(BsChevronDown)`
  color: ${({ theme }) => theme.colors.basics.primary};
`

export const Options = styled.span``
