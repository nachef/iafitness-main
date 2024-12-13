export function validateEmail(email: string): boolean {
  if (!email) return false // if not a string

  const pattern = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/
  return pattern.test(email)
}

export function validateCPF(cpf: string): boolean {
  if (!cpf) return false // if not a string

  cpf = cpf.replace(/[^\d]+/g, '')

  if (cpf === '') return false
  else if (
    cpf.length !== 11 ||
    cpf === '00000000000' ||
    cpf === '11111111111' ||
    cpf === '22222222222' ||
    cpf === '33333333333' ||
    cpf === '44444444444' ||
    cpf === '55555555555' ||
    cpf === '66666666666' ||
    cpf === '77777777777' ||
    cpf === '88888888888' ||
    cpf === '99999999999'
  )
    return false

  let add = 0
  let i = 0
  let rev

  for (i = 0; i < 9; i += 1) add += Number(cpf.charAt(i)) * (10 - i)
  rev = 11 - (add % 11)
  if (rev === 10 || rev === 11) rev = 0
  if (rev !== Number(cpf.charAt(9))) return false

  add = 0
  for (i = 0; i < 10; i += 1) add += Number(cpf.charAt(i)) * (11 - i)
  rev = 11 - (add % 11)
  if (rev === 10 || rev === 11) rev = 0

  if (rev !== Number(cpf.charAt(10))) return false
  else return true
}

export function formatCpf(cpf: string) {
  return cpf
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})$/, '$1-$2')
}

export function convertToSubcurrency(amount: number, factor = 100) {
  return Math.round(amount * factor)
}

export function abbreviateWord(text: string | number): string {
  return text
    .toString()
    .replace(/segundos/g, 'seg')
    .replace(/minutos/g, 'min')
    .replace(/minuto/g, 'min')
    .replace(/seg por lado/g, 'seg p/lado')
    .replace(/Máximo de repetições/g, 'Máx')
    .replace(/Máximo de Repetições/g, 'Máx')
}

export function nameFormatterOnePart(name: string): string {
  // Converte o nome para o formato de título
  const titleCaseName = name
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')

  // Divide o nome em partes
  const nameParts = titleCaseName.split(' ')

  // Retorna apenas os dois primeiros nomes
  return nameParts.slice(0, 1).join(' ')
}

export function nameFormatterTowParts(name: string): string {
  // Converte o nome para o formato de título
  const titleCaseName = name
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')

  // Divide o nome em partes
  const nameParts = titleCaseName.split(' ')

  // Retorna apenas os dois primeiros nomes
  return nameParts.slice(0, 2).join(' ')
}

export const calculateBMI = (height: number, weight: number): string => {
  if (height <= 0 || weight <= 0) return ''
  const heightInMeters = height / 100
  const bmi = weight / (heightInMeters * heightInMeters)
  return bmi.toFixed(2)
}

export const FirstLetterUppercase = (text: string): string => {
  return text.charAt(0).toUpperCase() + text.slice(1)
}
