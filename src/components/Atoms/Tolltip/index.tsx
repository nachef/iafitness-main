import React, { useEffect, useRef, useState } from 'react'

import { TooltipContainer, TooltipText } from './styles'

interface TooltipComponentProps {
  children: React.ReactNode
  tooltipText?: string
}

const Tooltip: React.FC<TooltipComponentProps> = ({ children, tooltipText }) => {
  const textRef = useRef<HTMLSpanElement>(null)
  const [isOverflowed, setIsOverflowed] = useState(false)

  useEffect(() => {
    if (textRef.current) {
      setIsOverflowed(textRef.current.scrollWidth > textRef.current.clientWidth)
    }
  }, [children])

  return (
    <TooltipContainer showTooltip={isOverflowed}>
      <span ref={textRef}>{children}</span>
      <TooltipText showTooltip={isOverflowed}>{tooltipText || children}</TooltipText>
    </TooltipContainer>
  )
}

export default Tooltip
