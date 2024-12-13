import { useEffect } from 'react'

import * as S from './styles'
import { ModalProps } from './types'

const Modal = ({
  isOpen,
  onClose,
  closeOnClickOutsideModal = true,
  closeOnKeyEscape = true,
  padding = {
    default: '2.4rem 4rem',
    less768px: '2.4rem',
  },
  children,
}: ModalProps) => {
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        if (closeOnKeyEscape) onClose()
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'auto'
    }
  }, [onClose])

  const handleClickOverlay = () => {
    if (closeOnClickOutsideModal) onClose()
  }

  if (!isOpen) {
    return null
  }

  return (
    <S.Overlay onClick={() => handleClickOverlay()} isOpen={isOpen}>
      <S.Content padding={padding} onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}>
        {children}
      </S.Content>
    </S.Overlay>
  )
}

export default Modal
