interface PaymentDetails {
  email: string
  cpf: string
  title: string
  price: number
  purchaseId: number
}

export const createPayment = async ({ email, cpf, title, price, purchaseId }: PaymentDetails) => {
  try {
    const cleanedCpf = cpf.replace(/\D/g, '')
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/create-payment`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        cpf: cleanedCpf,
        transaction_amount: price,
        title,
        purchaseId,
      }),
    })
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error creating payment:', error)
    throw error
  }
}

export const sendPaymentInfoToBackend = async (paymentData: any) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/webhook`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(paymentData),
    })
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error saving payment info:', error)
    return null
  }
}
