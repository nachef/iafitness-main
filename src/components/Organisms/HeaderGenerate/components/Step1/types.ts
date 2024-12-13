export interface Step1FormProps {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleSelect: (value: string, field: string) => void
  handleSubmit: () => void
  isFormValid: boolean
}
