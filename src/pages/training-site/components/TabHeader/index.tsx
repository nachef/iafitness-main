import { MdArrowBackIos } from 'react-icons/md'
import { useTheme } from 'styled-components'

import { Box } from '../../../../components/Atoms/Box'
import { Text } from '../../../../components/Atoms/Text'

interface TabHeaderProps {
  title: string
  onBack: () => void
}

export const TabHeader = ({ title, onBack }: TabHeaderProps) => {
  const theme = useTheme()
  return (
    <Box display='flex' flexAlign='center' flexDirection='row' mb={20}>
      <MdArrowBackIos size={20} color={theme.colors.basics.tertiary} cursor={'pointer'} onClick={onBack} />
      <Text font='bold' size='large' color={theme.colors.basics.secondary} ml={10}>
        {title}
      </Text>
    </Box>
  )
}

export default TabHeader
