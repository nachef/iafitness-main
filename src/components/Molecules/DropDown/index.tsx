import React, { use, useEffect, useRef, useState } from 'react'

import { LiaTimesSolid } from 'react-icons/lia'
import { useTheme } from 'styled-components'

import * as C from './styles'

export interface DropdownProps {
  label?: string
  value?: string
  placeholder: string
  options: string[]
  error?: string
  onSelect: (value: string) => void
  width?: string
}

export const Dropdown = ({ label, value, placeholder, options, error, onSelect, width = 'auto' }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const theme = useTheme()

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleClearSelection = (event: React.MouseEvent) => {
    event.stopPropagation()
    onSelect('')
  }

  const selectText = value ? value : placeholder

  return (
    <C.Container width={width} ref={dropdownRef}>
      <C.SelectField isFocus={isOpen} onClick={() => setIsOpen(!isOpen)}>
        {label && <C.Label isFocus={isOpen}>{label}</C.Label>}
        <C.SelectText>
          {isOpen || !value ? (
            <C.Options id='placeholder'>{placeholder}</C.Options>
          ) : (
            <C.Options>{selectText}</C.Options>
          )}
        </C.SelectText>
        {value ? (
          <LiaTimesSolid
            onClick={handleClearSelection}
            color={theme.colors.basics.primary}
            style={{ cursor: 'pointer', marginLeft: '10px' }}
          />
        ) : isOpen ? (
          <C.ChevronUp />
        ) : (
          <C.ChevronDown />
        )}
      </C.SelectField>
      {error && <C.TextError>{error}</C.TextError>}
      {isOpen && (
        <C.OptionsField>
          {options.map(option => (
            <C.Option
              key={option}
              onClick={() => {
                setIsOpen(false)
                onSelect(option)
              }}
            >
              <C.Options>{option}</C.Options>
            </C.Option>
          ))}
        </C.OptionsField>
      )}
    </C.Container>
  )
}
