import { DEFAULT_THEME } from '@assets/styles/theme'

import 'styled-components'

declare module 'styled-components' {
  type ThemeType = typeof DEFAULT_THEME
  export interface DefaultTheme extends ThemeType {}
}
