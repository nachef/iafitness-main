import React from 'react'

import Image from 'next/image'

import Navbar from '@components/home/navigation/navbar'

import { useFormContext } from '@contexts/FormContext'

import { hypertrophyExercises, sexualDysfunctionExercises, weightLossExercises } from '../../constants/index'

const Preview = () => {
  const { formData } = useFormContext()

  const getTitle = () => {
    switch (formData.goal) {
      case 'Hipertrofia':
        return 'Costas e bíceps'
      case 'Emagrecimento':
        return 'Cardio e abdome'
      case 'Disfunção sexual':
        return 'Músculos pélvicos e abdome'
      default:
        return ''
    }
  }

  const getExercises = () => {
    switch (formData.goal) {
      case 'Hipertrofia':
        return hypertrophyExercises
      case 'Emagrecimento':
        return weightLossExercises
      case 'Disfunção sexual':
        return sexualDysfunctionExercises
      default:
        return []
    }
  }

  const slug = formData.name?.toLowerCase().split(' ').slice(0, 2).join('-')

  return (
    <div className='relative no-scrollbar overflow-x-hidden w-full min-h-screen lg:min-h-[85vh] lg:h-[85vh] lg:max-h-[85vh] rounded-lg bg--primary shadow-black'>
      <div className='bg-transparent'></div>
      <div className='absolute z-10 w-full items-center justify-center lg:text-center text-right bg-white rounded-t-lg p-3'>
        <p className='text-xs text-neutral-900 mt-[1.5px]'>https://intelligencefit.com/training/{slug}</p>
        <div className='absolute top-4 left-4 w-3 h-3 rounded-full bg-red-500'></div>
        <div className='absolute top-4 left-8 w-3 h-3 rounded-full bg-yellow-500'></div>
        <div className='absolute top-4 left-12 w-3 h-3 rounded-full bg-green-500'></div>
      </div>
      <div className='relative container h-full mt-14 bg--primary lg:bg--primary z-40'>
        <div className='rounded-lg h-full'>
          <Navbar preview={true} name={formData.name?.split(' ').slice(0, 2).join(' ') || ''} />
          <div className='flex flex-col justify-center mt-4'>
            <p className='text-gray-300 text-lg font-bold text-left mt-2 ml-8'>Dia 1</p>
            {formData.goal && <p className='text-gray-300 text-md text-left ml-8'>{getTitle()}</p>}
            <div className='flex flex-col md:flex-row gap-6 items-center justify-center mt-4'>
              {formData.goal ? (
                getExercises().map((card, index) => (
                  <div
                    key={index}
                    className='flex flex-col items-center dark:bg-zinc-900 rounded-lg p-4 w-[200px]'
                    style={{
                      WebkitBoxShadow: '1px 1px 10px 0px rgba(0, 122, 223, 1)',
                      MozBoxShadow: '1px 1px 10px 0px rgba(0, 122, 223, 1)',
                      boxShadow: '1px 1px 10px 0px rgba(0, 122, 223, 1)',
                    }}
                  >
                    <Image
                      src={card.image}
                      alt={card.title}
                      width={100}
                      height={100}
                      className='object-cover rounded-lg'
                    />
                    <div className='text-center mt-4'>
                      <h2 className='text-md font-bold dark:text-neutral-100'>{card.title}</h2>
                      <div className='mt-4'>
                        <p className='text-sm text-neutral-600 dark:text-neutral-400'>Repetições</p>
                        <p className='text-sm dark:text-neutral-400'>{card.reps}</p>
                      </div>
                      <div className='mt-4'>
                        <p className='text-sm text-neutral-600 dark:text-neutral-400'>Séries</p>
                        <p className='text-sm dark:text-neutral-400'>{card.sets}</p>
                      </div>
                      <div className='mt-4'>
                        <p className='text-sm text-neutral-600 dark:text-neutral-400'>Descanso</p>
                        <p className='text-sm dark:text-neutral-400'>{card.rest}</p>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <>
                  <div className='flex flex-col items-center dark:bg-zinc-900 rounded-lg shadow-md p-4 w-[200px] h-[320px]'>
                    <div className='w-full h-full'></div>
                  </div>
                  <div className='flex flex-col items-center dark:bg-zinc-900 rounded-lg shadow-md p-4 w-[200px] h-[320px]'>
                    <div className='w-full h-full'></div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className='h-72'></div>
    </div>
  )
}

export default Preview
