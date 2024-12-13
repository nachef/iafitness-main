/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'

import Image from 'next/image'
import { useTranslation } from 'react-i18next'
import { Tooltip } from 'react-tooltip'
import { useTheme } from 'styled-components'

import { Box } from '@components/Atoms/Box'
import { Separator } from '@components/Atoms/Separator'
import { Text } from '@components/Atoms/Text'

import { abbreviateWord, FirstLetterUppercase } from '@utils/helpers/formatters'

import { ExerciseFieldProps } from '../../../../contexts/TrainingSite/TrainingSiteContext'

export const ExerciseField: React.FC<ExerciseFieldProps> = ({ exercise }) => {
  const theme = useTheme()
  const { t } = useTranslation()

  const [imageError, setImageError] = useState(false)

  if (!exercise) {
    return null
  }

  const handleImageError = () => {
    setImageError(true)
  }

  return (
    <Box
      display='flex'
      flexDirection='column'
      flexJustify='space-between'
      flexAlign='center'
      background={theme.colors.background.primary}
      borderRadius='10px'
      width='280px'
      mb={20}
      style={{
        minWidth: '280px',
        position: 'relative',
        padding: '20px',
        transition: 'box-shadow 0.3s ease-in-out',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.boxShadow = `0 0 0 3px ${theme.colors.basics.secondary}`
      }}
      onMouseLeave={e => {
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      <Box display='flex' flexJustify='center' flexAlign='center' mb={10} style={{ flexShrink: 0 }}>
        {exercise.gifUrl && !imageError ? (
          <Image
            src={exercise.gifUrl}
            alt='Exercise'
            width={200}
            height={200}
            loading='lazy'
            style={{ objectFit: 'cover', borderRadius: '10px' }}
            onError={handleImageError}
          />
        ) : (
          <Box display='flex' flexJustify='center' flexAlign='center' width='200px' height='200px' borderRadius='10px'>
            <Text size='medium' color={theme.colors.basics.quaternary} font={'bold'} textAlign='center'>
              {t('training-site.exercise.gifError')}
            </Text>
          </Box>
        )}
      </Box>
      <Text
        font='bold'
        size='small'
        color={theme.colors.basics.secondary}
        style={{ textAlign: 'center', height: '45px', overflow: 'hidden', textOverflow: 'ellipsis' }}
      >
        {FirstLetterUppercase(exercise.name_br)}
      </Text>

      <Separator width='80%' height='1px' color={theme.colors.basics.quaternary} my={15} />

      <Box display='flex' flexJustify='space-between' width='100%' flexDirection='column' flexWrap='wrap' gap='20px'>
        {/* Séries */}
        <Box
          display='flex'
          flexDirection='column'
          flexAlign='center'
          width='100%'
          style={{ flexShrink: 0, paddingInline: '20px' }}
          background={theme.colors.text.tertiary}
          borderRadius='10px'
        >
          <Text size='x-small' color={theme.colors.text.secondary} font='bold' mb={5}>
            {t('training-site.exercise.series')}
          </Text>
          <Box borderRadius='5px' display='flex' flexJustify='center' flexAlign='center' width='100%'>
            <Text size='small' color={theme.colors.text.primary} font='light'>
              {exercise.sets}
            </Text>
          </Box>
        </Box>

        {/* Reps */}
        <Box
          display='flex'
          flexDirection='column'
          flexAlign='center'
          width='100%'
          style={{ flexShrink: 0, paddingInline: '20px' }}
          background={theme.colors.text.tertiary}
          borderRadius='10px'
          data-tooltip-id={`tooltip-${exercise.id}`}
        >
          <Tooltip id={`tooltip-${exercise.id}`} place='top'>
            {exercise.reps}
          </Tooltip>
          <Text size='x-small' color={theme.colors.text.secondary} font='bold' mb={5}>
            {t('training-site.exercise.repetitions')}
          </Text>
          <Box borderRadius='5px' display='flex' flexJustify='center' flexAlign='center' width='100%'>
            <Text
              size='small'
              color={theme.colors.text.primary}
              font='light'
              style={{
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                maxWidth: '100%',
              }}
            >
              {exercise.reps}
            </Text>
          </Box>
        </Box>

        {/* Descanso */}
        <Box
          display='flex'
          flexDirection='column'
          flexAlign='center'
          width='100%'
          style={{ flexShrink: 0, paddingInline: '20px' }}
          background={theme.colors.text.tertiary}
          borderRadius='10px'
          data-tooltip-id={`tooltip-rest-${exercise.id}`}
        >
          <Tooltip id={`tooltip-rest-${exercise.id}`} place='top'>
            {exercise.rest}
          </Tooltip>
          <Text size='x-small' color={theme.colors.text.secondary} font='bold' mb={5}>
            {t('training-site.exercise.rest')}
          </Text>
          <Box borderRadius='5px' display='flex' flexJustify='center' flexAlign='center' width='100%'>
            <Text
              size='small'
              color={theme.colors.text.primary}
              font='light'
              style={{
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                maxWidth: '100%',
              }}
            >
              {exercise.rest}
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default ExerciseField
