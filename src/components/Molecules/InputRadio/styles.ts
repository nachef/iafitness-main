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

export const Container = styled.div<{ value: any }>`
  display: flex;
  width: 100%;
  margin: ${({ value }) => (value ? '6px 0' : '0 0')};
`

export const InputField = styled.div<InputWrapperProps>`
  position: relative;
  display: flex;
  align-items: center;

  background-color: ${({ isFocus, theme }) =>
    isFocus ? theme.colors.background.primary : theme.colors.background.secondary};
  border-radius: 10px;

  &:focus-within {
    border: 3px solid
      ${({ isValid, isNotValid, theme }) =>
        isValid ? theme.colors.types.success : isNotValid ? theme.colors.types.error : theme.colors.basics.primary};
  }
`

export const Label = styled.label`
  position: absolute;
  left: 12px;
  background: 'transparent';

  padding: 0 10px;

  border-radius: 10px;

  font-family: 'SF Pro Display Regular';
  font-size: 12px;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.text.secondary};

  transition: all 0.2s ease-in-out;
`

export const CustomInput = styled.input<CustomInputProps>`
  height: 56px;
  width: 100%;
  background-color: ${({ isFocus, theme }) =>
    isFocus ? theme.colors.background.primary : theme.colors.background.primary};

  font-family: 'SF Pro Display Medium';
  font-size: 14px;
  line-height: 22px;
  color: ${({ theme }) => theme.colors.text.primary};

  display: flex;
  align-items: center;

  border: 0;
  border-radius: 10px;
  outline: 0;

  padding-left: ${({ iconLeft }) => (iconLeft ? '0' : '20px')};
  padding-right: ${({ iconRight }) => (iconRight ? '0' : '20px')};

  &::-webkit-autofill {
    -webkit-box-shadow: 0 0 0 30px white inset;
  }

  &::-webkit-input-placeholder {
    /* Chrome/Opera/Safari */
    font-family: 'SF Pro Display Regular';
    font-size: 14px;
    line-height: 22px;
  }
  &::-moz-placeholder {
    /* Firefox 19+ */
    font-family: 'SF Pro Display Regular';
    font-size: 14px;
    line-height: 22px;
  }
  &::-ms-input-placeholder {
    /* IE 10+ */
    font-family: 'SF Pro Display Regular';
    font-size: 14px;
    line-height: 22px;
  }
  &::-moz-placeholder {
    /* Firefox 18- */
    font-family: 'SF Pro Display Regular';
    font-size: 14px;
    line-height: 22px;
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
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 0 20px;

  & path {
    stroke: ${({ theme }) => theme.colors.text.primary};
  }
`

export const TextError = styled.p`
  font-family: 'SF Pro Display Regular';
  font-size: 12px;
  line-height: 20px;

  margin-left: 16px;

  color: ${({ theme }) => theme.colors.others.red};
`

export const RadioContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 20px;
  margin-top: 10px;

  @media (max-width: 1024px) {
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
  }
`

export const RadioLabel = styled.label<InputWrapperProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 100%;
  padding: 0 10px;
  border-radius: 10px;
  margin-top: 12px;
  background-color: ${({ theme }) => theme.colors.background.primary};
  cursor: pointer;
  font-family: 'SF Pro Display Regular';
  font-size: 14px;
  line-height: 22px;
  color: ${({ theme }) => theme.colors.text.primary};
  transition: background-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

  input {
    display: none;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.background.primary};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.basics.primary};
  }

  ${({ isFocus, theme }) =>
    isFocus &&
    `
    background-color: ${theme.colors.background.primary};
    box-shadow: 0 0 0 3px ${theme.colors.basics.primary};
  `}

  @media (max-width: 1024px) {
    width: calc(50% - 10px);
  }
  /* @media (max-width: 425px) {
    width: 100%;
  } */
`

export const RadioInput = styled.input.attrs({ type: 'radio' })`
  display: none;
`
