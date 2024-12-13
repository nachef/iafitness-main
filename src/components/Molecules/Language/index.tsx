/* eslint-disable simple-import-sort/imports */
import React from 'react'

import Image from 'next/image'
import { HiTranslate } from 'react-icons/hi'
import i18n from 'src/utils/helpers/i18n'
import { useTheme } from 'styled-components'

import { Box } from '@components/Atoms/Box'
import { Text } from '@components/Atoms/Text'

import useMediaQuery from '@hooks/useMediaQuery'

import BrazilIcon from '@assets/icons/brazil.png'
import USAIcon from '@assets/icons/usa.png'

export const Language = () => {
  const theme = useTheme()

  const [LanguageDrop, setLanguageDrop] = React.useState(false)
  const isPhone = useMediaQuery('(max-width: 500px)')

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
    localStorage.setItem('language', lng)
    setLanguageDrop(false)
  }

  return (
    <Box
      style={
        !isPhone
          ? {
              position: 'absolute',
              top: 5,
              right: -175,
              width: 110,
              zIndex: 999,
              marginRight: 20,
            }
          : {
              zIndex: 999,
            }
      }
      display='flex'
      flexDirection='column'
    >
      <Box
        style={{ cursor: 'pointer' }}
        width='50px'
        height='30px'
        display='flex'
        flexDirection='row'
        flexAlign='center'
        flexJustify='center'
        gap='12px'
        borderWidth='1px'
        borderStyle='solid'
        borderColor={theme.colors.background.primary}
        borderRadius={theme.utilities.border.full}
        onClick={() => setLanguageDrop(!LanguageDrop)}
      >
        <HiTranslate color={theme.colors.basics.primary} fontSize='1.0rem' />
      </Box>

      {LanguageDrop && (
        <Box display='flex' flexDirection='column' flexAlign='flex-start' gap='4px' mt={4}>
          <Box
            style={{ cursor: 'pointer' }}
            display='flex'
            flexDirection='row'
            flexAlign='center'
            flexJustify='center'
            width='50px'
            height='30px'
            borderWidth='1px'
            borderStyle='solid'
            borderColor={theme.colors.background.primary}
            borderRadius={theme.utilities.border.full}
            onClick={() => changeLanguage('pt')}
          >
            <Text color={theme.colors.basics.secondary} font='light' size='xx-small'>
              PT
            </Text>
            <Image src={BrazilIcon} alt={''} width={15} style={{ marginLeft: 5 }} quality={100} />
          </Box>
          <Box
            style={{ cursor: 'pointer' }}
            display='flex'
            flexDirection='row'
            flexAlign='center'
            flexJustify='center'
            width='50px'
            height='30px'
            borderWidth='1px'
            borderStyle='solid'
            borderColor={theme.colors.background.primary}
            borderRadius={theme.utilities.border.full}
            onClick={() => changeLanguage('en')}
          >
            <Text color={theme.colors.basics.secondary} font='light' size='xx-small'>
              EN
            </Text>
            <Image src={USAIcon} alt={''} width={15} style={{ marginLeft: 5 }} quality={100} />
          </Box>
        </Box>
      )}
    </Box>
  )
}
