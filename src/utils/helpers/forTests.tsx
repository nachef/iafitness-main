import React from 'react'

import { ThemeProvider } from 'styled-components'
import { render, RenderResult } from '@testing-library/react'

import { DEFAULT_THEME } from '@assets/styles/theme'

import '@testing-library/jest-dom'
import 'jest-styled-components'
import 'regenerator-runtime/runtime'

export const renderWithTheme = (children: React.ReactNode): RenderResult =>
  render(<ThemeProvider theme={DEFAULT_THEME}>{children}</ThemeProvider>)
