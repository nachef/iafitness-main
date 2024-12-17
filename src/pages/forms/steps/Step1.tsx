import React, { useState } from 'react'

interface Step1Props {
  formData: { goal: string }
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Step1: React.FC<Step1Props> = ({ formData, handleInputChange }) => {
  const [selectedGoal, setSelectedGoal] = useState(formData.goal || '')

  const handleSelect = (goal: string) => {
    setSelectedGoal(goal)
    handleInputChange({
      target: { name: 'goal', value: goal },
    } as unknown as React.ChangeEvent<HTMLInputElement>)
  }

  return (
    <div className='flex flex-col items-center gap-6'>
      {['Hipertrofia', 'Emagrecimento', 'Disfunção sexual'].map(goal => (
        <button
          key={goal}
          className={`relative inline-flex h-12 w-64 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 ${
            selectedGoal === goal ? 'border-2 border-purple-500' : ''
          }`}
          onClick={() => handleSelect(goal)}
        >
          <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]' />
          <span className='inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl'>
            {goal}
          </span>
        </button>
      ))}
    </div>
  )
}

export default Step1
