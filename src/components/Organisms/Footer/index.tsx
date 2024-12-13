import React from 'react'

import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import { FaInstagram, FaTiktok } from 'react-icons/fa'
import { useTheme } from 'styled-components'

import { Box } from '@components/Atoms/Box'
import { Container } from '@components/Atoms/Container'
import { Text } from '@components/Atoms/Text'

import useMediaQuery from '@hooks/useMediaQuery'

import { URI_INSTAGRAM, URI_TIKTOK } from '@utils/constants'

export const Footer = () => {
  const { t } = useTranslation()
  const theme = useTheme()
  const isSmallMobile = useMediaQuery('(max-width: 576px)')
  const isLargeMobile = useMediaQuery('(min-width: 577px) and (max-width: 767px)')

  return (
    <Box background={theme.colors.background.secondary} py={48} style={{ marginTop: 'auto' }}>
      <Container
        display='flex'
        flexDirection={isSmallMobile || isLargeMobile ? 'column' : 'row'}
        flexAlign='center'
        flexWrap='wrap'
        flexJustify='space-between'
        gap={isSmallMobile || isLargeMobile ? '20px' : '0'}
      >
        <Box
          display='flex'
          flexDirection='column'
          flexAlign={isSmallMobile || isLargeMobile ? 'center' : 'flex-start'}
          mb={isSmallMobile ? 14 : 0}
        >
          <Text color={theme.colors.basics.primary} font='light' size='x-small' mb={10}>
            {t('footer.copyrights')}
          </Text>
          <Text color={theme.colors.basics.tertiary} font='light' textAlign='center' size='x-small' mb={5}>
            <Link href='/terms'>{t('plans.termsAndConditions')}</Link>
          </Text>
          <Text color={theme.colors.basics.tertiary} font='light' textAlign='center' size='x-small'>
            <a href='mailto:support@intelligencefit.com'>{t('footer.support')}</a>
          </Text>
        </Box>
        <Box display='flex' flexDirection='row' flexAlign='center' gap='1rem'>
          <Link href={URI_INSTAGRAM}>
            <FaInstagram color={theme.colors.basics.primary} fontSize='1.25rem' />
          </Link>
          <Link href={URI_TIKTOK}>
            <FaTiktok color={theme.colors.basics.primary} fontSize='1.25rem' />
          </Link>
        </Box>
      </Container>
    </Box>
  )
}
