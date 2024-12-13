import { ReactNode } from 'react'

export type PaddingProps = {
  default: string
  less768px?: string
}
export interface ModalProps {
  isOpen: boolean
  onClose: () => void
  closeOnClickOutsideModal?: boolean
  closeOnKeyEscape?: boolean
  children: ReactNode
  width?: string
  padding?: PaddingProps
}
