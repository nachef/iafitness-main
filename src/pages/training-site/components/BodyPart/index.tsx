import React, { useEffect, useMemo, useState } from 'react'

import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'
import { FaSearch, FaSyncAlt } from 'react-icons/fa'
import { useTheme } from 'styled-components'

import { Box } from '@components/Atoms/Box'
import { Dropdown } from '@components/Molecules/DropDown'
import Input from '@components/Molecules/Input'

import useMediaQuery from '@hooks/useMediaQuery'

import {
  DietSectionProps,
  Exercise,
  TrainingDay,
  useTraining,
} from '../../../../contexts/TrainingSite/TrainingSiteContext'

interface BodyPartProps {
  training: { name: string; trainingDays: { [key: string]: TrainingDay }; dietContent?: DietSectionProps[] }
  onFilter: (exercises: { [day: string]: Exercise[] }) => void
}

export const BodyPart: React.FC<BodyPartProps> = ({ training, onFilter }) => {
  const theme = useTheme()
  const { t } = useTranslation()
  const [selectedBodyPart, setSelectedBodyPart] = useState<string>('')
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [isRotating, setIsRotating] = useState(false)
  const router = useRouter()
  const { loadTraining } = useTraining()
  const { filterExercises } = useTraining()
  const isSmallMobile = useMediaQuery('(max-width: 576px)')
  const isLargeMobile = useMediaQuery('(min-width: 577px) and (max-width: 767px)')

  if (!training) {
    return null
  }

  const handleBodyPartChange = (value: string) => {
    setSelectedBodyPart(value)
  }

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
  }

  const handleReloadGIFs = () => {
    setIsRotating(true)
    if (typeof window !== 'undefined') {
      localStorage.removeItem(`training-${router.query.slug}`)
      localStorage.removeItem(`training-${router.query.slug}-date`)
    }
    loadTraining(router.query.slug as string)
    router.reload()
    setTimeout(() => {
      setIsRotating(false)
    }, 1000)
  }

  const uniqueBodyParts = useMemo(
    () =>
      Array.from(
        new Set(
          Object.keys(training.trainingDays)
            .filter(key => key.startsWith('day'))
            .flatMap(dayKey => (training.trainingDays[dayKey] as TrainingDay)?.muscles?.split(', '))
            .filter(Boolean),
        ),
      ),
    [training],
  )

  useEffect(() => {
    const filteredExercises = filterExercises(searchTerm, selectedBodyPart)
    onFilter(filteredExercises)
  }, [searchTerm, selectedBodyPart, filterExercises, onFilter])

  return (
    <Box display='flex' flexDirection={isSmallMobile || isLargeMobile ? 'column' : 'row'} flexAlign='center' gap='20px'>
      <Input
        placeholder={String(t('training-site.filters.exerciseFilter'))}
        width={isSmallMobile || isLargeMobile ? '100%' : '70%'}
        iconRight={<FaSearch color={theme.colors.basics.quaternary} />}
        onChange={handleSearchChange}
      />
      {uniqueBodyParts.length > 0 && (
        <Dropdown
          width={isSmallMobile || isLargeMobile ? '100%' : '30%'}
          options={uniqueBodyParts}
          value={selectedBodyPart}
          onSelect={handleBodyPartChange}
          placeholder={String(t('training-site.filters.muscleFilter'))}
        />
      )}
      <a
        onClick={handleReloadGIFs}
        style={{
          color: '#ff8c00',
          display: 'flex',
          alignItems: 'center',
          cursor: 'pointer',
        }}
      >
        <FaSyncAlt
          style={{
            marginRight: '8px',
            transition: 'transform 1s',
            transform: isRotating ? 'rotate(360deg)' : 'rotate(0deg)',
            cursor: 'pointer',
          }}
        />
        {t('training-site.buttons.reload-button')}
      </a>
    </Box>
  )
}

export default BodyPart
