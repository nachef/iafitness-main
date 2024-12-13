import { useEffect, useState } from 'react'

import Head from 'next/head'
import { useRouter } from 'next/router'
import { Fade } from 'react-awesome-reveal'
import { useTranslation } from 'react-i18next'
import { useTheme } from 'styled-components'

import { Box } from '@components/Atoms/Box'
import { Container } from '@components/Atoms/Container'
import { Text } from '@components/Atoms/Text'
import { Navbar } from '@components/Molecules/Navbar'
import { Footer } from '@components/Organisms/Footer'

import useMediaQuery from '@hooks/useMediaQuery'

import { ExercisesGrid } from '@assets/styles/ExercisesStyles/styles'

import { BodyPart } from './components/BodyPart'
import { DietSection } from './components/DietSection'
import { ExerciseField } from './components/ExerciseField'
import { TabHeader } from './components/TabHeader'
import { Button } from '../../components/Molecules/Button'
import { DietSectionProps, Exercise, TrainingDay, useTraining } from '../../contexts/TrainingSite/TrainingSiteContext'
import { nameFormatterOnePart } from '../../utils/helpers/formatters'

const TrainingPage = () => {
  const theme = useTheme()
  const { t } = useTranslation()
  const router = useRouter()
  const { slug } = router.query

  const { training, loadTraining } = useTraining()
  const [filteredExercises, setFilteredExercises] = useState<{ [day: string]: Exercise[] }>({})
  const isSmallMobile = useMediaQuery('(max-width: 576px)')
  const isLargeMobile = useMediaQuery('(min-width: 577px) and (max-width: 767px)')
  const isTablet = useMediaQuery('(min-width: 768px) and (max-width: 1023px)')
  const isLaptop = useMediaQuery('(min-width: 1024px)')
  const isDesktop = useMediaQuery('(min-width: 1441px)')
  const [selectedTab, setSelectedTab] = useState<'exercises' | 'diet' | 'my-info'>('exercises')
  const [dietContent, setDietContent] = useState<DietSectionProps[] | null>(null)
  const [showInitialCards, setShowInitialCards] = useState(true)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    if (slug) {
      loadTraining(slug as string)
    }
  }, [slug])

  useEffect(() => {
    if (training) {
      const exercisesByDay: { [day: string]: Exercise[] } = {}
      Object.keys(training.trainingDays).forEach(dayKey => {
        const day = training.trainingDays[dayKey]
        exercisesByDay[dayKey] = day.exercises
      })
      setFilteredExercises(exercisesByDay)
    }
  }, [training])

  useEffect(() => {
    if (training) {
      setDietContent(training.dietContent || null)
    }
  }, [training])

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!training) {
    return <div>{t('loading')}</div>
  }

  const infoFields = [
    { label: t('training-site.name'), value: training.name },
    { label: t('training-site.age'), value: training.age },
    { label: t('training-site.height'), value: training.height },
    { label: t('training-site.weight'), value: training.weight },
    { label: t('training-site.bmi'), value: training.bmi },
  ]

  return (
    <>
      <Head>
        <title>Intelligence Fit</title>
      </Head>

      <Box display='flex' flexDirection='row' style={{ position: 'relative' }}>
        <Container>
          <Box px={isSmallMobile || isLargeMobile ? 0 : 100} pt={48}>
            <Navbar name={training.name as string} />
            <Fade triggerOnce direction='up' delay={200}>
              <Box
                mt={isSmallMobile || isLargeMobile || isTablet ? 80 : 100}
                mb={100}
                style={{ zIndex: 5, position: 'relative' }}
              >
                {showInitialCards ? (
                  <>
                    <Text
                      font='bold'
                      size='large'
                      color={theme.colors.basics.secondary}
                      mb={40}
                      textAlign={isDesktop || isLaptop ? 'left' : 'center'}
                    >
                      {t('training-site.hello')}, {nameFormatterOnePart(training.name)}!
                    </Text>
                    <Box display='flex' flexDirection='column' flexAlign='center' flexJustify='center' gap='40px'>
                      <Button
                        onClick={() => {
                          setSelectedTab('exercises')
                          setShowInitialCards(false)
                        }}
                        title={t('training-site.myExercises')}
                        variant={'primary'}
                        size={'medium'}
                        align={'center'}
                      />

                      {dietContent && (
                        <Button
                          onClick={() => {
                            setSelectedTab('diet')
                            setShowInitialCards(false)
                          }}
                          title={t('training-site.myDiet')}
                          variant={'primary'}
                          size={'medium'}
                          align={'center'}
                        />
                      )}
                      <Button
                        onClick={() => {
                          setSelectedTab('my-info')
                          setShowInitialCards(false)
                        }}
                        title={t('training-site.myInfo')}
                        variant={'primary'}
                        size={'medium'}
                        align={'center'}
                      />
                    </Box>
                  </>
                ) : (
                  <>
                    <TabHeader
                      title={
                        selectedTab === 'exercises'
                          ? t('training-site.exercises')
                          : selectedTab === 'diet'
                          ? t('training-site.diet')
                          : t('training-site.info')
                      }
                      onBack={() => setShowInitialCards(true)}
                    />
                    <Box px={isSmallMobile || isLargeMobile ? 0 : 100}>
                      {selectedTab === 'exercises' ? (
                        <>
                          <BodyPart
                            training={{ ...training, ...training.trainingDays }}
                            onFilter={setFilteredExercises}
                          />
                          {Object.keys(filteredExercises).map(dayKey => {
                            const day = training.trainingDays[dayKey]
                            return (
                              <Box key={dayKey} mt={50} mb={4}>
                                <Text
                                  font='bold'
                                  size='large'
                                  color={theme.colors.basics.secondary}
                                  style={{ textAlign: isSmallMobile || isLargeMobile ? 'center' : 'left' }}
                                >
                                  {`${t('training-site.day')} ${dayKey.match(/\d+/)?.[0]}`}
                                </Text>
                                <Text
                                  font='light'
                                  size='medium'
                                  color={theme.colors.basics.quaternary}
                                  style={{ textAlign: isSmallMobile || isLargeMobile ? 'center' : 'left' }}
                                >
                                  {day.muscles}
                                </Text>
                                <ExercisesGrid
                                  style={{
                                    gridTemplateColumns: isSmallMobile
                                      ? '1fr'
                                      : `repeat(auto-fill, minmax(300px, 1fr))`,
                                  }}
                                >
                                  {filteredExercises[dayKey].map((exercise, index) => (
                                    <ExerciseField key={index} exercise={exercise} day={dayKey} />
                                  ))}
                                </ExercisesGrid>
                              </Box>
                            )
                          })}
                        </>
                      ) : selectedTab === 'diet' ? (
                        <Box mt={50} mb={4}>
                          <Box mb={4} px={isSmallMobile || isLargeMobile ? 0 : 100}>
                            {dietContent ? (
                              <DietSection
                                objetivo={''}
                                descrição={''}
                                recomendações={[]}
                                exemplo_refeição={{}}
                                principais_alimentos={[]}
                                {...dietContent}
                              />
                            ) : (
                              <div>{t('training-site.noDietContent')}</div>
                            )}
                          </Box>
                        </Box>
                      ) : (
                        <Box mt={50} mb={4}>
                          {infoFields.map((field, index) => (
                            <Box key={index} mb={4}>
                              <Box
                                onClick={() => {
                                  setSelectedTab('my-info')
                                  setShowInitialCards(false)
                                }}
                                mb={20}
                                style={{
                                  padding: 20,
                                  borderRadius: 10,
                                  boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.9)',
                                  backgroundPosition: 'center',
                                }}
                              >
                                <Text
                                  font='bold'
                                  size='medium'
                                  color={theme.colors.basics.secondary}
                                  style={{ textAlign: isSmallMobile || isLargeMobile ? 'center' : 'left' }}
                                >
                                  {field.label}
                                </Text>

                                <Text
                                  font='light'
                                  size='medium'
                                  color={theme.colors.basics.quaternary}
                                  style={{ textAlign: isSmallMobile || isLargeMobile ? 'center' : 'left' }}
                                >
                                  {field.value}
                                </Text>
                              </Box>
                            </Box>
                          ))}
                        </Box>
                      )}
                    </Box>
                  </>
                )}
              </Box>
            </Fade>
          </Box>
        </Container>
      </Box>
      <Footer />
    </>
  )
}

export default TrainingPage
