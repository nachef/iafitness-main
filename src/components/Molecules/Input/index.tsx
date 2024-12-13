import React, { InputHTMLAttributes, ReactNode, useState } from 'react'

import * as C from './styles'

export type InputProps = {
  label?: string
  error?: string
  secret?: boolean
  iconLeft?: ReactNode | null
  iconRight?: ReactNode | null
  isValid?: boolean
  isNotValid?: boolean
  onClickIconLeft?: () => void
  onClickIconRight?: () => void
  width?: string
} & InputHTMLAttributes<HTMLInputElement>

export default function Input({
  label,
  value,
  error,
  secret,
  iconLeft,
  iconRight,
  onFocus: componentOnFocus,
  onBlur: componentOnBlur,
  isValid,
  isNotValid,
  onClickIconLeft,
  onClickIconRight,
  width = 'auto',
  ...props
}: InputProps) {
  const [isFocus, setFocus] = useState(false)
  const [isSecret, setSecret] = useState(secret)

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > (props.maxLength || Infinity)) {
      e.target.value = e.target.value.slice(0, props.maxLength)
    }
  }

  return (
    <C.Container value={value} width={width}>
      <C.InputField isFocus={isFocus} isValid={!!isValid} isNotValid={!!isNotValid}>
        {label && (
          <C.Label isFocus={isFocus} isValid={!!isValid} isNotValid={!!isNotValid}>
            {label}
          </C.Label>
        )}
        {!!iconLeft && (
          <C.IconLeft isFocus={isFocus} isValid={!!isValid} isNotValid={!!isNotValid} onClick={onClickIconLeft}>
            {iconLeft}
          </C.IconLeft>
        )}
        <C.CustomInput
          {...props}
          value={value}
          iconLeft={!!iconLeft}
          iconRight={!!iconRight}
          isFocus={isFocus}
          onFocus={e => {
            setFocus(true)
            if (componentOnFocus) {
              componentOnFocus(e)
            }
          }}
          onBlur={e => {
            setFocus(false)
            if (componentOnBlur) {
              componentOnBlur(e)
            }
          }}
          onInput={handleInput}
          style={props.type === 'number' ? { MozAppearance: 'textfield' } : {}}
        />
        {!!iconRight && <C.IconRight onClick={onClickIconRight}>{iconRight}</C.IconRight>}
      </C.InputField>
      {error && <C.TextError>{error}</C.TextError>}
    </C.Container>
  )
}
