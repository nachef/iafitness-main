import styled from 'styled-components'

type InputWrapperProps = {
  isValid: boolean
  isNotValid: boolean
  isFocus: boolean
}

type CustomInputProps = {
  iconLeft: boolean
  iconRight: boolean
  isFocus: boolean
}

type IconLeftProps = {
  isValid: boolean
  isNotValid: boolean
  isFocus: boolean
}

export const Container = styled.div<{ value: any; width: string }>`
  margin: ${({ value }) => (value ? '6px 0' : '0 0')};
  width: ${({ width }) => width || 'auto'};
`

export const InputField = styled.div<InputWrapperProps>`
  position: relative;
  display: flex;
  align-items: center;

  background-color: ${({ isFocus, theme }) =>
    isFocus ? theme.colors.background.primary : theme.colors.background.secondary};
  border-radius: 10px;

  &:focus-within {
    box-shadow: 0 0 0 3px
      ${({ isValid, isNotValid, theme }) =>
        isValid ? theme.colors.types.success : isNotValid ? theme.colors.types.error : theme.colors.basics.primary};
  }
`

export const Label = styled.label<InputWrapperProps>`
  position: absolute;
  top: ${({ isFocus }) => (isFocus ? -8 : -20)}px;
  left: 12px;
  background: ${({ theme, isFocus }) => (isFocus ? theme.colors.background.primary : 'transparent')};

  padding: 0 10px;

  border-radius: 10px;

  font-family: 'SF Pro Display Regular';
  font-size: 12px;
  line-height: 20px;
  color: ${({ theme, isFocus }) => (isFocus ? theme.colors.basics.primary : theme.colors.text.secondary)};

  transition: all 0.2s ease-in-out;
`

export const CustomInput = styled.input<CustomInputProps>`
  height: 56px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background.primary};
  font-family: 'SF Pro Display Medium';
  font-size: 14px;
  line-height: 22px;
  color: ${({ theme }) => theme.colors.text.primary};
  display: flex;
  align-items: center;
  border: 0;
  border-radius: 10px;
  outline: 0;

  padding-left: ${({ iconLeft }) => (iconLeft ? '40px' : '20px')};
  padding-right: ${({ iconRight }) => (iconRight ? '60px' : '20px')};

  ${({ type }) =>
    type === 'number' &&
    `
    -moz-appearance: textfield;
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  `}

  &::-webkit-autofill {
    -webkit-box-shadow: 0 0 0 30px white inset;
  }
`

export const IconLeft = styled.div<IconLeftProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 0 20px;

  & path {
    stroke: ${({ isFocus, isValid, isNotValid, theme }) =>
      isValid
        ? theme.colors.others.green
        : isNotValid
        ? theme.colors.others.red
        : isFocus
        ? theme.colors.text.primary
        : theme.colors.text.secondary};
  }
`

export const IconRight = styled.div`
  position: absolute;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 0 16px;
  border-radius: 0 10px 10px 0;

  background-color: ${({ theme }) => theme.colors.background.primary};

  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.basics.primary}; /* Cor ao passar o mouse */
    & path {
      stroke: ${({ theme }) => theme.colors.text.secondary}; /* Muda a cor do ícone no hover */
    }
  }
`

export const TextError = styled.p`
  font-family: 'SF Pro Display Regular';
  font-size: 12px;
  line-height: 20px;

  margin-left: 16px;

  color: ${({ theme }) => theme.colors.others.red};
`
