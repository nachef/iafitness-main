import React from 'react'

import { renderWithTheme } from '@utils/helpers/forTests'

import { Box } from '.'

describe('Components/Atoms/Box', () => {
  it('It works', () => {
    const { container } = renderWithTheme(<Box />)

    expect(container.firstChild).toMatchSnapshot()
  })

  it('Should have background color', () => {
    const { container } = renderWithTheme(<Box background='#000000' />)

    expect(container.firstChild).toHaveStyleRule('background-color', '#000000')
  })

  it('Should have display flex', () => {
    const { container } = renderWithTheme(
      <Box display='flex' flexDirection='row' flexAlign='center' flexJustify='center' />,
    )

    expect(container.firstChild).toHaveStyleRule('display', 'flex')
    expect(container.firstChild).toHaveStyleRule('flex-direction', 'row')
    expect(container.firstChild).toHaveStyleRule('align-items', 'center')
    expect(container.firstChild).toHaveStyleRule('justify-content', 'center')
  })

  it('Should have margin', () => {
    const { container } = renderWithTheme(<Box mt={5} mb={10} ml={15} mr={20} />)

    expect(container.firstChild).toHaveStyleRule('margin-top', '5px')
    expect(container.firstChild).toHaveStyleRule('margin-bottom', '10px')
    expect(container.firstChild).toHaveStyleRule('margin-left', '15px')
    expect(container.firstChild).toHaveStyleRule('margin-right', '20px')
  })

  it('Should have padding', () => {
    const { container } = renderWithTheme(<Box pt={5} pb={10} pl={15} pr={20} />)

    expect(container.firstChild).toHaveStyleRule('padding-top', '5px')
    expect(container.firstChild).toHaveStyleRule('padding-bottom', '10px')
    expect(container.firstChild).toHaveStyleRule('padding-left', '15px')
    expect(container.firstChild).toHaveStyleRule('padding-right', '20px')
  })

  it('Should have border radius', () => {
    const { container } = renderWithTheme(<Box borderRadius='10px' />)

    expect(container.firstChild).toHaveStyleRule('border-radius', '10px')
  })

  it('Should have width and height', () => {
    const { container } = renderWithTheme(<Box width='50px' height='50px' />)

    expect(container.firstChild).toHaveStyleRule('width', '50px')
    expect(container.firstChild).toHaveStyleRule('height', '50px')
  })
})
