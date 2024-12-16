import React, { useState } from 'react'

import { t } from 'i18next'
import { ArrowLeft, ArrowRight, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import Footer from '@components/home/navigation/footer'
import Navbar from '@components/home/navigation/navbar'

import Step1 from './steps/Step1'
import Step2 from './steps/Step2'
import Step3 from './steps/Step3'
import Step4 from './steps/Step4'
import Container from '../../components/global/container'
import Wrapper from '../../components/global/wrapper'
import Stepper from '../../components/Organisms/Steper'
import { Button } from '../../components/ui/button'

export default function Forms() {
  const [currentStep, setCurrentStep] = useState(1)

  const handleNextStep = () => {
    setCurrentStep(prevStep => Math.min(prevStep + 1, 4))
  }

  const handlePreviousStep = () => {
    setCurrentStep(prevStep => Math.max(prevStep - 1, 1))
  }

  const renderStepContent = (step: number) => {
    switch (step) {
      case 1:
        return <Step1 />
      case 2:
        return <Step2 />
      case 3:
        return <Step3 />
      case 4:
        return <Step4 />
      default:
        return <Step1 />
    }
  }

  return (
    <div className='flex flex-col items-center w-full'>
      <Navbar />
      <section className='w-full relative flex items-center justify-center flex-col px-4 md:px-0 py-8'>
        <Wrapper>
          <div className='absolute inset-0 -z-10 h-full' />
          <Container>
            <div className='flex flex-col items-center justify-center py-10 h-full'>
              <button className='group relative grid overflow-hidden rounded-full px-4 py-1 shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-colors duration-200'>
                <span>
                  <span className="spark mask-gradient absolute inset-0 h-[100%] w-[100%] animate-flip overflow-hidden rounded-full [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:animate-rotate before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
                </span>
                <span className='backdrop absolute inset-[1px] rounded-full bg-neutral-950 transition-colors duration-200 group-hover:bg-neutral-900' />
                <span className='h-full w-full blur-md absolute bottom-0 inset-x-0 bg-gradient-to-tr from-primary/40'></span>
                <span className='z-10 py-0.5 text-sm text-neutral-100 flex items-center justify-center gap-1.5'>
                  <Image src='/icons/sparkles-dark.svg' alt='✨' width={24} height={24} className='w-4 h-4' />
                  Bem-vindo a Intelligence Fit
                  <ChevronRight className='w-4 h-4' />
                </span>
              </button>

              <div className='relative flex items-center flex-col py-10 md:py-20 w-full gap-5'>
                <Stepper steps={4} currentStep={currentStep} />
                {renderStepContent(currentStep)}
                <div className='flex gap-4 mt-4'>
                  <Button variant={'outline'} size={'lg'} onClick={handlePreviousStep} disabled={currentStep === 1}>
                    <ArrowLeft className='w-4 h-4 mr-2' />
                    Anterior
                  </Button>
                  <Button variant={'outline'} size={'lg'} onClick={handleNextStep} disabled={currentStep === 4}>
                    Próximo
                    <ArrowRight className='w-4 h-4 ml-2' />
                  </Button>
                </div>
              </div>
            </div>
          </Container>
        </Wrapper>
      </section>
      <Footer />
    </div>
  )
}
