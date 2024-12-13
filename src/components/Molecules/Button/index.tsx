import React from 'react'

import { useTheme } from 'styled-components'

import { Box } from '@components/Atoms/Box'
import { Text } from '@components/Atoms/Text'

import { Container } from './styles'
import { IButton } from './types'

export function Button({ title, variant, size, leftIcon, rightIcon, disabled, ...rest }: IButton) {
  const theme = useTheme()

  const returnColor = () => {
    switch (variant) {
      case 'primary':
        return theme.colors.background.primary
      case 'secondary':
        return theme.colors.basics.secondary
      default:
        return theme.colors.text.primary
    }
  }

  return (
    <Container
      title={title}
      variant={variant}
      size={size}
      leftIcon={leftIcon}
      rightIcon={rightIcon}
      disabled={disabled}
      {...rest}
    >
      {leftIcon && leftIcon}

      <Box display='flex' flexDirection='row' flexJustify='flex-start' flexAlign='center'>
        <Text font='bold' size='small' color={disabled ? '#CDCDCD' : returnColor()}>
          {title}
        </Text>
      </Box>

      {rightIcon && rightIcon}
    </Container>
  )
}
