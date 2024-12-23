import React from 'react'

import { ArrowLeft, ArrowRight } from 'lucide-react'
import Head from 'next/head'

import Container from '@components/global/container'
import Preview from '@components/global/preview'
import Stepper from '@components/global/Steper'
import Wrapper from '@components/global/wrapper'
import Footer from '@components/home/navigation/footer'
import Navbar from '@components/home/navigation/navbar'
import { Button } from '@components/ui/button'

import { useFormContext } from '@contexts/FormContext'

import Step1 from './steps/Step1'
import Step2 from './steps/Step2'
import Step3 from './steps/Step3'
import Step4 from './steps/Step4'

const stepTitles = ['Objetivo', 'Nome e Email', 'Características', 'Dias de Treino']

const stepDescriptions = [
  'Escolha o que você tem como foco principal em seu corpo!',
  'Calma, não precisa por seu nome real se não quiser, porém o email precisa ser válido para enviarmos seu site!',
  'Coloque suas características físicas para que possamos montar um treino personalizado para você!',
  'Precisamos saber um pouco mais sobre sua rotina de treino para montar um planejamento que se encaixe nela!',
]

export default function Forms() {
  const { formData, currentStep, handleNextStep, handlePreviousStep, handleInputChange, isStepCompleted } =
    useFormContext()

  const renderStepContent = (step: number) => {
    switch (step) {
      case 1:
        return <Step1 formData={formData} handleInputChange={handleInputChange} />
      case 2:
        return <Step2 formData={formData} handleInputChange={handleInputChange} />
      case 3:
        return <Step3 formData={formData} handleInputChange={handleInputChange} />
      case 4:
        return <Step4 formData={formData} handleInputChange={handleInputChange} />
      default:
        return <Step1 formData={formData} handleInputChange={handleInputChange} />
    }
  }

  return (
    <div className='flex flex-col items-center w-full'>
      <Head>
        <title>Intelligence Fit</title>
      </Head>
      <Navbar />
      <section className='w-full relative flex items-center justify-center flex-col'>
        <Wrapper>
          <div className='absolute inset-0 -z-10 h-full' />
          <Container>
            <div className='flex flex-col lg:flex-row items-center lg:items-start justify-center py-10 h-full w-full lg:gap-24 gap-12'>
              <div className='flex flex-col items-center justify-start w-full md:w-2/3'>
                <Stepper steps={4} currentStep={currentStep - 1} />
                <div className='relative flex items-center flex-col py-10 md:py-20 w-full gap-5'>
                  <p className='text-3xl md:text-3xl font-bold text-neutral-100'>{stepTitles[currentStep - 1]}</p>
                  <p className='text-base md:text-lg text-foreground/80 mb-2 text-center'>
                    {stepDescriptions[currentStep - 1]}
                  </p>
                  {renderStepContent(currentStep)}
                  <div className='flex gap-4 mt-4'>
                    <Button variant={'outline'} size={'lg'} onClick={handlePreviousStep} disabled={currentStep === 1}>
                      <ArrowLeft className='w-4 h-4 mr-2' />
                      Anterior
                    </Button>
                    <Button
                      variant={'outline'}
                      size={'lg'}
                      onClick={handleNextStep}
                      disabled={!isStepCompleted(currentStep)}
                    >
                      Próximo
                      <ArrowRight className='w-4 h-4 ml-2' />
                    </Button>
                  </div>
                </div>
              </div>
              <div className='w-full lg:w-1/2 h-full'>
                <Preview />
              </div>
            </div>
          </Container>
        </Wrapper>
      </section>
      <Footer />
    </div>
  )
}
