import React from 'react'

import { useTranslation } from 'react-i18next'
import { useTheme } from 'styled-components'

import { Box } from '../../../../components/Atoms/Box'
import { Text } from '../../../../components/Atoms/Text'
import { DietSectionProps } from '../../../../contexts/TrainingSite/TrainingSiteContext'
import useMediaQuery from '../../../../hooks/useMediaQuery'

const formatWord = (word: string) => {
  return word.replace(/_/g, ' ')
}

export const DietSection: React.FC<DietSectionProps> = ({
  objetivo,
  descrição,
  recomendações,
  exemplo_refeição,
  principais_alimentos,
}) => {
  const theme = useTheme()
  const { t } = useTranslation()
  const isLaptop = useMediaQuery('(min-width: 1024px)')
  const isDesktop = useMediaQuery('(min-width: 1441px)')

  if (!objetivo && !descrição && !recomendações && !exemplo_refeição && !principais_alimentos) {
    return null
  }

  return (
    <Box width={isDesktop || isLaptop ? '100%' : '280px'}>
      <Text font='bold' size='medium' mb={16} color={theme.colors.basics.secondary}>
        {objetivo}
      </Text>
      <Text font='light' size='small' mb={24} color={theme.colors.text.primary}>
        {descrição}
      </Text>
      <Text font='bold' size='medium' mb={16} color={theme.colors.basics.secondary}>
        {t('training-site.dietSection.recommended')}
      </Text>
      <ul style={{ marginBottom: '40px', listStyleType: 'disc', color: theme.colors.text.primary }}>
        {recomendações && recomendações.length > 0 ? (
          recomendações.map((recomendacao, index) => (
            <li key={index} style={{ color: theme.colors.text.primary }}>
              <Text font='light' size='small' mb={8} color={theme.colors.text.primary}>
                {recomendacao}
              </Text>
            </li>
          ))
        ) : (
          <Text font='light' size='small' mb={8} color={theme.colors.text.primary}>
            {t('training-site.dietSection.noRecommended')}
          </Text>
        )}
      </ul>
      <Text font='bold' size='medium' mb={16} color={theme.colors.basics.secondary}>
        {t('training-site.dietSection.mealExample')}
      </Text>
      <ul style={{ marginBottom: '40px', listStyleType: 'disc', color: theme.colors.text.primary }}>
        {Object.entries(exemplo_refeição).length > 0 ? (
          Object.entries(exemplo_refeição).map(([refeicao, descricao], index) => (
            <li key={index} style={{ color: theme.colors.text.primary }}>
              <Text font='light' size='small' mb={8} color={theme.colors.text.primary}>
                {`${formatWord(refeicao.charAt(0).toUpperCase() + refeicao.slice(1))}: ${descricao}`}
              </Text>
            </li>
          ))
        ) : (
          <Text font='light' size='small' mb={8} color={theme.colors.text.primary}>
            {t('training-site.dietSection.noMealExample')}
          </Text>
        )}
      </ul>
      <Text font='bold' size='medium' mb={16} color={theme.colors.basics.secondary}>
        {t('training-site.dietSection.mainDish')}
      </Text>
      <ul style={{ marginBottom: '40px', listStyleType: 'disc', color: theme.colors.text.primary }}>
        {principais_alimentos.length > 0 ? (
          principais_alimentos.map((alimento, index) => (
            <li key={index} style={{ color: theme.colors.text.primary }}>
              <Text font='light' size='small' mb={8} color={theme.colors.text.primary}>
                {alimento}
              </Text>
            </li>
          ))
        ) : (
          <Text font='light' size='small' mb={8} color={theme.colors.text.primary}>
            {t('training-site.dietSection.noMainDish')}
          </Text>
        )}
      </ul>
    </Box>
  )
}

export default DietSection
