import React, { useEffect, useRef, useState } from 'react'

import { AiOutlineInfoCircle } from 'react-icons/ai'
import { useTheme } from 'styled-components'

import { Text } from '@components/Atoms/Text'

import { IconWrapper, TooltipBox, TooltipWrapper } from './styles'
import { TooltipProps } from './types'

const Tooltip: React.FC<TooltipProps> = ({ message, iconSize = 20 }) => {
  const theme = useTheme()
  const [tooltipVisible, setTooltipVisible] = useState(false)
  const tooltipRef = useRef<HTMLDivElement>(null)

  const handleTooltipToggle = () => {
    setTooltipVisible(!tooltipVisible)
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (tooltipRef.current && !tooltipRef.current.contains(event.target as Node)) {
      setTooltipVisible(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <TooltipWrapper ref={tooltipRef}>
      <IconWrapper onClick={handleTooltipToggle}>
        <AiOutlineInfoCircle size={iconSize} />
      </IconWrapper>
      <TooltipBox visible={tooltipVisible}>
        <Text font={'bold'} size={'small'} color={theme.colors.basics.tertiary}>
          {message}
        </Text>
      </TooltipBox>
    </TooltipWrapper>
  )
}

export default Tooltip
