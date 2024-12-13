import { createContext, useContext, useEffect, useState } from 'react'

export interface Exercise {
  id: string
  name: string
  name_br: string
  sets: string
  reps: string
  rest: string
  gifUrl: string
}

export interface ExerciseFieldProps {
  exercise: Exercise
  day: string
}

export interface TrainingDay {
  muscles: string
  exercises: Exercise[]
}

export interface Training {
  name: string
  trainingDays: { [key: string]: TrainingDay }
  dietContent?: DietSectionProps[]
  age: number
  height: number
  weight: number
  bmi: number
}

export interface DietSectionProps {
  objetivo: string
  descrição: string
  recomendações: string[]
  exemplo_refeição: {
    [key: string]: string
  }
  principais_alimentos: string[]
}

interface TrainingContextData {
  training: Training | null
  loadTraining: (slug: string) => void
  imageIndices: { [key: string]: number }
  setHoveredOption: (option: string | null) => void
  filterExercisesByMuscle: (muscle: string) => Exercise[]
  filterExercises: (searchTerm: string, selectedBodyPart: string) => { [day: string]: Exercise[] }
}

interface TrainingProviderProps {
  children: React.ReactNode
}

const TrainingSiteContext = createContext<TrainingContextData | null>(null)

export const TrainingSiteProvider: React.FC<TrainingProviderProps> = ({ children }) => {
  const [training, setTraining] = useState<Training | null>(null)
  const [imageIndices, setImageIndices] = useState<{ [key: string]: number }>({})
  const [hoveredOption, setHoveredOption] = useState<string | null>(null)

  const loadTraining = (slug: string) => {
    const storedTraining = localStorage.getItem(`training-${slug}`)
    const storedDate = localStorage.getItem(`training-${slug}-date`)
    const currentDate = new Date().toISOString().split('T')[0]

    const now = new Date()
    const centralTimeOffset = -6
    const centralTime = new Date(now.getTime() + centralTimeOffset * 60 * 60 * 1000)

    const expirationTime = new Date()
    expirationTime.setUTCHours(18, 0, 0, 0)

    if (storedTraining && storedDate === currentDate && centralTime < expirationTime) {
      setTraining(JSON.parse(storedTraining))
    } else {
      fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/training/${slug}`)
        .then(res => res.json())
        .then(data => {
          setTraining(data)
          localStorage.setItem(`training-${slug}`, JSON.stringify(data))
          localStorage.setItem(`training-${slug}-date`, currentDate)
        })
        .catch(err => console.error(err))
    }
  }

  const filterExercisesByMuscle = (muscle: string): Exercise[] => {
    if (!training) return []

    const filteredExercises: Exercise[] = []

    Object.keys(training.trainingDays).forEach(dayKey => {
      const day = training.trainingDays[dayKey]
      day.exercises.forEach(exercise => {
        if (day.muscles.includes(muscle)) {
          filteredExercises.push(exercise)
        }
      })
    })

    return filteredExercises
  }

  const filterExercises = (searchTerm: string, selectedBodyPart: string): { [day: string]: Exercise[] } => {
    if (!training) return {}

    const normalizeString = (str: string) =>
      str
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase()

    const normalizedSearchTerm = normalizeString(searchTerm)
    const normalizedSelectedBodyPart = normalizeString(selectedBodyPart)

    return Object.keys(training.trainingDays)
      .filter(key => key.startsWith('day'))
      .reduce((acc, dayKey) => {
        const exercises = (training.trainingDays[dayKey] as TrainingDay).exercises

        const filtered = exercises?.filter(
          exercise =>
            normalizeString(exercise.name_br).includes(normalizedSearchTerm) &&
            (!selectedBodyPart ||
              normalizeString((training.trainingDays[dayKey] as TrainingDay).muscles).includes(
                normalizedSelectedBodyPart,
              )),
        )

        if (filtered?.length > 0) {
          acc[dayKey] = filtered
        }

        return acc
      }, {} as { [day: string]: Exercise[] })
  }

  return (
    <TrainingSiteContext.Provider
      value={{
        training,
        loadTraining,
        imageIndices,
        setHoveredOption,
        filterExercisesByMuscle,
        filterExercises,
      }}
    >
      {children}
    </TrainingSiteContext.Provider>
  )
}

export const useTraining = () => {
  const context = useContext(TrainingSiteContext)
  if (!context) {
    throw new Error('useTraining must be used within a TrainingSiteProvider')
  }
  return context
}
