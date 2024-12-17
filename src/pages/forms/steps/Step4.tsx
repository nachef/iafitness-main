import React, { useState } from 'react'

interface Step4Props {
  formData: { days: number }
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Step4: React.FC<Step4Props> = ({ formData, handleInputChange }) => {
  const [selectedDays, setSelectedDays] = useState<number>(formData.days || 0)

  const handleSelect = (days: number) => {
    setSelectedDays(days)
    handleInputChange({ target: { name: 'days', value: days } } as unknown as React.ChangeEvent<HTMLInputElement>)
  }

  return (
    <div className='flex flex-col items-center gap-6'>
      {[1, 2, 3, 4, 5, 6].map(days => (
        <button
          key={days}
          className={`relative inline-flex h-12 w-64 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 ${
            selectedDays === days ? 'border-2 border-purple-500' : ''
          }`}
          onClick={() => handleSelect(days)}
        >
          <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]' />
          <span className='inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl'>
            {days} dia{days > 1 ? 's' : ''}
          </span>
        </button>
      ))}
    </div>
  )
}

export default Step4
