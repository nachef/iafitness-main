export interface Step2OptionsProps {
  handleSubmit: (plan: { title: string; price: number }) => void

  setSelectedPrice: (price: number) => void
}
