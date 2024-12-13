export interface StepperProps {
  currentStep: number
  totalSteps: number
  onClick: () => void
  showBackButton?: boolean
}
