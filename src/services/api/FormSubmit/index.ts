import { BASE_URL } from '../../../constants'

export const saveUserForm = async (formData: any, plan: any) => {
  try {
    const response = await fetch(`${BASE_URL}/api/save-form`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...formData, plan }),
    })

    if (!response.ok) {
      throw new Error('Erro ao salvar formulário e plano')
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error('Erro ao salvar formulário e plano:', error)
    throw error
  }
}

export const handleSubmitForm = async () => {
  try {
    const formData = localStorage.getItem('formData')
    const getEmail = localStorage.getItem('email')

    if (!formData) {
      throw new Error('No form data found in localStorage')
    }

    const { name, age, sex, trainingType, weakPoint, goal, days } = JSON.parse(formData)
    const email = getEmail

    const res = await fetch(`${BASE_URL}/api/generate-content`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, age, sex, trainingType, weakPoint, goal, days, email }),
    })
    const data = await res.json()
    return data
  } catch (error) {
    console.error('Error fetching content:', error)
  }
}
