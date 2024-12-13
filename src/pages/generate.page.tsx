import React from 'react'

import Head from 'next/head'
import { ToastContainer } from 'react-toastify'
import { useTheme } from 'styled-components'

import { Box } from '@components/Atoms/Box'
import { Footer } from '@components/Organisms/Footer'

import { HeaderGenerate } from '../components/Organisms/HeaderGenerate'

export default function GeneretePage() {
  const theme = useTheme()

  return (
    <>
      <Head>
        <title>Intelligence Fit</title>
      </Head>

      <HeaderGenerate />
      <ToastContainer />

      <Box background={theme.colors.background.secondary}></Box>
      <Footer />
    </>
  )
}
