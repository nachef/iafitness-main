import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react'

import { useTranslation } from 'react-i18next'

import { createPayment, sendPaymentInfoToBackend } from '@services/api/Payment'

import { formatCpf, validateCPF, validateEmail } from '@utils/helpers/formatters'

import { saveUserForm } from '../services/api/FormSubmit'

declare global {
  interface Window {
    SumUpCard: any
  }
}

export interface PaymentContextType {
  email: string
  title: string
  cpf: string
  qrCode: string | null
  qrCodeBase64: string | null
  emailError: string | null
  cpfError: string | null
  isFormValid: boolean
  counter: number
  priceGlobal: number | null
  setPriceGlobal: (price: number) => void
  handleEmailChange: (newEmail: string) => void
  handleCpfChange: (newCpf: string) => void
  handleCardSubmit: (e?: React.FormEvent) => Promise<void>
  isButtonDisabled: boolean
  isConfirmed: boolean
  showSumUpCard: boolean
  sumUpScriptLoaded: boolean
  paymentType: 'pix' | 'card'
  paymentUrl: string | null
  setShowBackButton: (show: boolean) => void
}

const PaymentContext = createContext<PaymentContextType | null>(null)

export const PaymentProvider = ({ children }: { children: ReactNode }) => {
  const { i18n } = useTranslation()
  const [email, setEmail] = useState('')
  const [cpf, setCpf] = useState('')
  const [qrCode, setQrCode] = useState<string | null>(null)
  const [title, setTitle] = useState<string>('')
  const [qrCodeBase64, setQrCodeBase64] = useState<string | null>(null)
  const [isFormValid, setIsFormValid] = useState(false)
  const [emailError, setEmailError] = useState<string | null>(null)
  const [cpfError, setCpfError] = useState<string | null>(null)
  const [counter, setCounter] = useState(300)
  const [priceGlobal, setPriceGlobal] = useState<number | null>(null)
  const [isButtonDisabled, setIsButtonDisabled] = useState(false)
  const [isConfirmed, setIsConfirmed] = useState(false)
  const [checkoutId, setCheckoutId] = useState<string | null>(null)
  const [sumUpScriptLoaded, setSumUpScriptLoaded] = useState(false)
  const [showSumUpCard, setShowSumUpCard] = useState(false)
  const [paymentType, setPaymentType] = useState<'pix' | 'card'>('card')
  const [setShowBackButton] = useState<(show: boolean) => void>(() => () => {})
  const [paymentUrl, setPaymentUrl] = useState<string | null>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(prevCounter => {
        if (prevCounter <= 1) {
          localStorage.removeItem('email')
          localStorage.removeItem('cpf')
          localStorage.removeItem('qrCodeBase64')
          localStorage.removeItem('qrCode')
          clearInterval(interval)
          return 0
        }
        localStorage.setItem('counter', (prevCounter - 1).toString())
        return prevCounter - 1
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://gateway.sumup.com/gateway/ecom/card/v2/sdk.js'
    script.async = true
    script.onload = () => setSumUpScriptLoaded(true)
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  useEffect(() => {
    if (checkoutId && typeof window !== 'undefined' && window.SumUpCard) {
      const locale = i18n.language === 'en' ? 'en-US' : 'pt-BR'
      const country = i18n.language === 'en' ? 'US' : 'BR'

      window.SumUpCard.mount({
        id: 'sumup-card',
        checkoutId: checkoutId,
        locale: locale,
        country: country,
        onResponse: async function (type: string, body: any) {
          let currentPaymentType = paymentType
          if (body.pix) {
            currentPaymentType = 'pix'
            setPaymentType('pix')
          }
          const paymentData = {
            payment_type: currentPaymentType,
            id: body.id,
            amount: body.amount,
            currency: body.currency,
            status: body.status,
            date: body.date,
            description: body.description,
            merchant_code: body.merchant_code,
            merchant_name: body.merchant_name,
            merchant_country: body.merchant_country,
            pay_to_email: body.pay_to_email,
            return_url: body.return_url,
          }

          if (type === 'success') {
            const response = await sendPaymentInfoToBackend(paymentData)
            if (response && response.status === 'PAID') {
              setIsConfirmed(true)
              setShowSumUpCard(false)
              setPaymentUrl(response.url)
            }
          }
        },
      })
    }
  }, [checkoutId, paymentType, i18n.language])

  const handleEmailChange = (newEmail: string) => {
    setEmail(newEmail)
    validateEmailField(newEmail)

    const storedFormData = localStorage.getItem('formData')
    let formData = storedFormData ? JSON.parse(storedFormData) : {}

    formData.email = newEmail

    localStorage.setItem('formData', JSON.stringify(formData))
  }

  const handleCpfChange = (newCpf: string) => {
    const formattedCpf = newCpf.replace(/\D/g, '').slice(0, 11)
    setCpf(formatCpf(formattedCpf))
    validateCpfField(formattedCpf)
  }

  const validateEmailField = (email: string) => {
    const isEmailValid = validateEmail(email)
    setEmailError(isEmailValid ? null : 'Email inválido')
    setIsFormValid(isEmailValid && validateCPF(cpf))
  }

  const validateCpfField = (cpf: string) => {
    const isCpfValid = validateCPF(cpf)
    setCpfError(isCpfValid ? null : 'CPF inválido')
    setIsFormValid(validateEmail(email) && isCpfValid)
  }

  const handleCardSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault()
    setIsButtonDisabled(true)
    try {
      const storedFormData = localStorage.getItem('formData')
      const storedPlanData = localStorage.getItem('planData')

      if (storedFormData && storedPlanData) {
        const formData = JSON.parse(storedFormData)
        const planData = JSON.parse(storedPlanData)

        const purchaseId = Math.floor(Math.random() * 1000000)

        const updatedFormData = { ...formData, purchaseId }

        await saveUserForm(updatedFormData, planData)

        const data = await createPayment({
          email,
          cpf,
          title: planData.title,
          price: planData.price,
          purchaseId,
        })
        setCheckoutId(data.response.id)
        localStorage.setItem('payment_id', data.response.id)
        setShowSumUpCard(true)
        setShowBackButton(false)
      } else {
        console.error('Form data or plan data is null')
      }
    } catch (error) {
      console.error('Error creating payment:', error)
      setIsButtonDisabled(false)
    }
  }

  return (
    <PaymentContext.Provider
      value={{
        email,
        cpf,
        title,
        qrCode,
        qrCodeBase64,
        emailError,
        cpfError,
        isFormValid,
        counter,
        priceGlobal,
        setPriceGlobal,
        handleEmailChange,
        handleCpfChange,
        handleCardSubmit,
        isButtonDisabled,
        isConfirmed,
        showSumUpCard,
        sumUpScriptLoaded,
        paymentType,
        paymentUrl,
        setShowBackButton,
      }}
    >
      {children}
    </PaymentContext.Provider>
  )
}

export const usePayment = () => {
  const context = useContext(PaymentContext)
  if (!context) {
    throw new Error('usePayment must be used within a PaymentProvider')
  }
  return context
}
