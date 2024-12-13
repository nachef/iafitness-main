import React from 'react'

import { t } from 'i18next'
import { useTheme } from 'styled-components'

import { Box } from '@components/Atoms/Box'
import { Text } from '@components/Atoms/Text'

import useMediaQuery from '../../../hooks/useMediaQuery'

const HowWorksSection = () => {
  const theme = useTheme()
  const isSmallMobile = useMediaQuery('(max-width: 576px)')
  const isLargeMobile = useMediaQuery('(min-width: 577px) and (max-width: 767px)')

  const cards = [
    {
      title: t('how-works-section.card1title'),
      content: t('how-works-section.card1'),
    },
    {
      title: t('how-works-section.card2title'),
      content: t('how-works-section.card2'),
    },
    {
      title: t('how-works-section.card3title'),
      content: t('how-works-section.card3'),
    },
    {
      title: t('how-works-section.card4title'),
      content: t('how-works-section.card4'),
    },
  ]

  return (
    <Box background={theme.colors.background.secondary}>
      <Box>
        <Text color={theme.colors.basics.tertiary} font='bold' size='large' textAlign='center' mb={32}>
          {t('how-works-section.title')}
        </Text>

        <Box
          display='flex'
          flexDirection={isSmallMobile || isLargeMobile ? 'column' : 'row'}
          flexWrap='wrap'
          flexJustify='center'
          gap='32px'
        >
          {cards.map((card, index) => (
            <Box
              key={index}
              display='flex'
              flexDirection='column'
              py={16}
              px={16}
              borderRadius='16px'
              width={isSmallMobile || isLargeMobile ? '100%' : '300px'}
              style={{
                borderRight:
                  isSmallMobile || isLargeMobile
                    ? 'none'
                    : index === 3
                    ? 'none'
                    : `1px solid ${theme.colors.basics.secondary}`,
                borderBottom: isSmallMobile || isLargeMobile ? `1px solid ${theme.colors.basics.secondary}` : 'none',
              }}
            >
              <Text color={theme.colors.basics.secondary} font='bold' size='medium' mb={8}>
                {card.title}
              </Text>
              <Text color={theme.colors.basics.tertiary} font='light' size='small'>
                {card.content}
              </Text>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  )
}

export default HowWorksSection
