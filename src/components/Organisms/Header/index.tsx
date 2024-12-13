'use client'
import React, { useEffect, useState } from 'react'

import { t } from 'i18next'
import { Fade } from 'react-awesome-reveal'
import { useTheme } from 'styled-components'

import { Box } from '@components/Atoms/Box'
import { Container } from '@components/Atoms/Container'
import { Text } from '@components/Atoms/Text'
import { Button } from '@components/Molecules/Button'
import { Navbar } from '@components/Molecules/Navbar'

import useMediaQuery from '@hooks/useMediaQuery'

import Background from '@assets/images/preview.mp4'

import { CircleEffect, CircleWithLineEffect, LinearGradientEffect } from './style'

export const Header = () => {
  const theme = useTheme()

  const isSmallMobile = useMediaQuery('(max-width: 576px)')
  const isLargeMobile = useMediaQuery('(min-width: 577px) and (max-width: 767px)')
  const isTablet = useMediaQuery('(min-width: 768px) and (max-width: 1023px)')
  const isLaptop = useMediaQuery('(min-width: 1024px) and (max-width: 1440px)')
  const isDesktop = useMediaQuery('(min-width: 1441px)')
  const [isClient, setIsClient] = useState(false)

  const generateTraining = () => {
    window.location.href = '/generate'
  }

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <Box display='flex' flexDirection='row' style={{ position: 'relative' }}>
      <Container>
        <Box px={isSmallMobile || isLargeMobile || isTablet ? 0 : isDesktop || isLaptop ? 48 : 100} pt={48}>
          <Navbar />

          <Box
            display='flex'
            flexJustify='space-between'
            flexDirection={isSmallMobile || isLargeMobile || isTablet ? 'column' : 'row'}
            my={isDesktop || isLaptop ? 140 : 100}
            style={{ zIndex: 5, position: 'relative' }}
          >
            <Box>
              <Fade triggerOnce direction='left' delay={200}>
                <Box>
                  <Text
                    color={theme.colors.basics.primary}
                    font='light'
                    size='xx-large'
                    style={{
                      fontSize: isSmallMobile || isLargeMobile || isTablet ? '40px' : '72px',
                      lineHeight: isSmallMobile || isLargeMobile || isTablet ? '56px' : '80px',
                    }}
                  >
                    {t('main.title-1')}
                  </Text>
                  <Text
                    color={theme.colors.basics.primary}
                    font='bold'
                    size='xx-large'
                    style={{
                      fontSize: isSmallMobile || isLargeMobile || isTablet ? '50px' : '88px',
                      lineHeight: isSmallMobile || isLargeMobile || isTablet ? '72px' : '96px',
                    }}
                  >
                    {t('main.title-2')}
                  </Text>{' '}
                  <Text
                    color={theme.colors.basics.primary}
                    font='light'
                    size='xx-large'
                    style={{
                      fontSize: isSmallMobile || isLargeMobile || isTablet ? '40px' : '72px',
                      lineHeight: isSmallMobile || isLargeMobile || isTablet ? '56px' : '80px',
                    }}
                  >
                    {t('main.title-3')}
                  </Text>
                </Box>

                <Text
                  style={{ maxWidth: isSmallMobile || isLargeMobile || isTablet ? '300px' : '460px' }}
                  color={theme.colors.basics.secondary}
                  font='light'
                  size='regular'
                  textAlign='justify'
                  mt={32}
                >
                  {t('main.description')}
                </Text>
              </Fade>

              <Fade triggerOnce direction='up' delay={300} duration={1000}>
                <Box
                  display='flex'
                  flexDirection='row'
                  flexAlign='center'
                  flexJustify={isDesktop || isLaptop ? 'flex-start' : 'center'}
                  gap='32px'
                  mt={100}
                >
                  <Button
                    title={t('main.buttons.generate-button')}
                    variant='secondary'
                    size={isSmallMobile || isLargeMobile || isTablet ? 'medium' : 'small'}
                    align='center'
                    onClick={generateTraining}
                  />
                </Box>
              </Fade>
            </Box>

            <Box display='flex' flexJustify='center' flexAlign='center'>
              <video
                autoPlay
                loop
                muted
                style={{
                  width: '250px',
                  height: '500px',
                  objectFit: 'cover',
                }}
              >
                <source src={Background} type='video/mp4' />
              </video>
            </Box>
          </Box>

          <LinearGradientEffect />
        </Box>
      </Container>
    </Box>
  )
}
