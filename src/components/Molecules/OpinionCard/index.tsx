import React from 'react'

import { useTheme } from 'styled-components'

import { Box } from '@components/Atoms/Box'
import { Text } from '@components/Atoms/Text'

import { IOpinionCard } from './types'

export const OpinionCard = ({ description }: IOpinionCard) => {
  const theme = useTheme()

  return (
    <Box
      display='flex'
      flexDirection='column'
      flexJustify='center'
      borderRadius={theme.utilities.border.lg}
      borderWidth='2px'
      borderStyle='dashed'
      borderColor={theme.colors.background.primary}
      py={16}
      px={32}
    >
      <Text color={theme.colors.basics.primary} size='medium' font='bold' textAlign='left' ml={-10}>
        “
      </Text>
      <Text color={theme.colors.basics.secondary} size='small' font='medium' textAlign='justify'>
        {description}
      </Text>
      <Text
        color={theme.colors.basics.primary}
        style={{ width: '100%' }}
        size='medium'
        font='bold'
        textAlign='right'
        mr={-10}
      >
        ”
      </Text>
    </Box>
  )
}
