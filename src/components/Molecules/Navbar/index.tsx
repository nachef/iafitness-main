import React, { useEffect, useState } from 'react'

import { t } from 'i18next'
import { Fade } from 'react-awesome-reveal'
import { HiMenu, HiOutlineX } from 'react-icons/hi'
import { useTheme } from 'styled-components'

import { Box } from '@components/Atoms/Box'
import { Separator } from '@components/Atoms/Separator'
import { TextButton } from '@components/Atoms/TextButton'

import useMediaQuery from '@hooks/useMediaQuery'

import { nameFormatterTowParts } from '@utils/helpers/formatters'

import { Language } from '../Language'
// import { Language } from '../Language'

interface NavbarProps {
  name?: string
}

export const Navbar: React.FC<NavbarProps> = ({ name }) => {
  const theme = useTheme()
  const [isGenerate, setIsGenerate] = useState(false)

  useEffect(() => {
    const path = window?.location.pathname
    setIsGenerate(path === '/generate')
  }, [])

  const isTablet = useMediaQuery('(max-width: 900px)')
  const isPhone = useMediaQuery('(max-width: 500px)')

  const [OpenNav, setOpenNav] = useState(false)

  return (
    <>
      {!isTablet ? (
        <Fade triggerOnce direction='down' delay={100}>
          <Box
            display='flex'
            flexDirection='row'
            flexAlign='center'
            flexJustify='space-between'
            width='100%' // Adiciona esta linha para garantir que a Navbar ocupe toda a largura da tela
            px={isPhone ? 16 : 32} // Adiciona padding horizontal para espaçamento
          >
            <Box style={{ position: 'relative' }}>
              <TextButton
                href='https://intelligencefit.com'
                color={theme.colors.basics.secondary}
                font='bold'
                size='large'
              >
                {window.location.pathname.startsWith('/training-site')
                  ? nameFormatterTowParts(name || 'Intelligence Fit')
                  : 'Intelligence Fit'}
              </TextButton>
              <Language />
            </Box>
            <Box display='flex' flexDirection='row' flexAlign='center' gap='2rem'>
              <TextButton
                href='https://intelligencefit.com'
                color={theme.colors.basics.primary}
                font='semibold'
                size='regular'
              >
                {t('header.home')}
              </TextButton>
              <Box style={{ position: 'relative' }}>
                <Separator
                  color={theme.colors.basics.primary}
                  height='1.5px'
                  width='30px'
                  style={{ position: 'absolute', top: '-5px' }}
                />
                <TextButton href='#about-us' color={theme.colors.basics.primary} font='light' size='regular'>
                  {t('header.about-us')}
                </TextButton>
              </Box>
              <TextButton href='#services' color={theme.colors.basics.primary} font='light' size='regular'>
                {t('header.services')}
              </TextButton>
              <TextButton href='#contact' color={theme.colors.basics.primary} font='light' size='regular'>
                {t('header.contacts')}
              </TextButton>
              {/* <Language /> */}
            </Box>
          </Box>
        </Fade>
      ) : (
        <Fade triggerOnce direction='down' delay={100}>
          <Box
            display='flex'
            flexDirection='row'
            flexAlign='center'
            flexJustify='space-between'
            width='100%'
            px={isPhone ? 16 : 32}
          >
            <Box style={{ position: 'relative' }}>
              <TextButton
                href='https://intelligencefit.com'
                color={theme.colors.basics.secondary}
                font='bold'
                size='large'
              >
                {window.location.pathname.startsWith('/training-site')
                  ? nameFormatterTowParts(name || 'Intelligence Fit')
                  : 'Intelligence Fit'}
              </TextButton>
              {!isPhone && <Language />}
            </Box>
            <HiMenu
              color={theme.colors.basics.primary}
              fontSize='2rem'
              style={{ cursor: 'pointer', zIndex: 9999999, marginLeft: '10px' }}
              onClick={() => setOpenNav(!OpenNav)}
            />
          </Box>
        </Fade>
      )}

      {isTablet && OpenNav && (
        <Box
          pt={48}
          px={38}
          width='100vw'
          height='100vh'
          background={theme.colors.background.secondary}
          style={{ position: 'fixed', zIndex: 999, top: 0, left: 0, bottom: 0, right: 0 }}
        >
          <Box display='flex' flexDirection='row' flexAlign='center' flexJustify='space-between'>
            <Box style={{ position: 'relative' }}>
              <TextButton
                href='https://intelligencefit.com'
                color={theme.colors.basics.secondary}
                font='bold'
                size='large'
              >
                {window.location.pathname.startsWith('/training-site')
                  ? nameFormatterTowParts(name || 'Intelligence Fit')
                  : 'Intelligence Fit'}
              </TextButton>
              {!isPhone && <Language />}
            </Box>
            <HiOutlineX
              color={theme.colors.basics.primary}
              fontSize='2rem'
              style={{ cursor: 'pointer', zIndex: 9999999, marginTop: -4 }}
              onClick={() => setOpenNav(!OpenNav)}
            />
          </Box>
          <Box display='flex' flexDirection='column' flexAlign='center' flexJustify='center' gap='2rem' mt={80}>
            <Language />
            <TextButton
              href='https://intelligencefit.com'
              onClick={() => setOpenNav(false)}
              color={theme.colors.basics.primary}
              font='semibold'
              size='normal'
            >
              {t('header.home')}
            </TextButton>
            <TextButton
              href='#about-us'
              onClick={() => setOpenNav(false)}
              color={theme.colors.basics.primary}
              font='light'
              size='normal'
            >
              {t('header.about-us')}
            </TextButton>
            <TextButton
              href='#services'
              onClick={() => setOpenNav(false)}
              color={theme.colors.basics.primary}
              font='light'
              size='normal'
            >
              {t('header.services')}
            </TextButton>
            <TextButton
              href='#contact'
              onClick={() => setOpenNav(false)}
              color={theme.colors.basics.primary}
              font='light'
              size='normal'
            >
              {t('header.contacts')}
            </TextButton>
          </Box>
        </Box>
      )}
    </>
  )
}
