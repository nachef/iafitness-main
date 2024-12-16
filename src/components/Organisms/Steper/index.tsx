import React from 'react'

interface StepperProps {
  steps: number
  currentStep: number
}

const Stepper: React.FC<StepperProps> = ({ steps, currentStep }) => {
  return (
    <div className='flex'>
      {Array.from({ length: steps }, (_, index) => (
        <div key={index} className='relative flex flex-col cursor-pointer'>
          <div className='absolute rounded-lg ml-[10px]'>
            {index >= currentStep && (
              <span className={`text-xs font-semibold ${index < currentStep ? 'text-green-500' : 'text-neutral-500'}`}>
                {index + 1}
              </span>
            )}
          </div>

          <div className='flex items-center justify-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='26'
              height='26'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className={`tabler-icon ${
                index < currentStep
                  ? 'tabler-icon-circle-check text-green-500'
                  : 'tabler-icon-circle-dashed text-neutral-500'
              }`}
            >
              {index < currentStep ? (
                <>
                  <path d='M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0'></path>
                  <path d='M9 12l2 2l4 -4'></path>
                </>
              ) : (
                <>
                  <path d='M8.56 3.69a9 9 0 0 0 -2.92 1.95'></path>
                  <path d='M3.69 8.56a9 9 0 0 0 -.69 3.44'></path>
                  <path d='M3.69 15.44a9 9 0 0 0 1.95 2.92'></path>
                  <path d='M8.56 20.31a9 9 0 0 0 3.44 .69'></path>
                  <path d='M15.44 20.31a9 9 0 0 0 2.92 -1.95'></path>
                  <path d='M20.31 15.44a9 9 0 0 0 .69 -3.44'></path>
                  <path d='M20.31 8.56a9 9 0 0 0 -1.95 -2.92'></path>
                  <path d='M15.44 3.69a9 9 0 0 0 -3.44 -.69'></path>
                </>
              )}
            </svg>
            {index < steps - 1 && (
              <div className='w-2 lg:w-14 lg:px-1 rounded-full block'>
                <div
                  className={`w-full h-0.5 ${index < currentStep ? 'bg-green-500' : 'bg-neutral-500'} rounded-full`}
                ></div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Stepper
