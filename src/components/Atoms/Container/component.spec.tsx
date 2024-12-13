import React from 'react'

import { renderWithTheme } from '@utils/helpers/forTests'

import { Container } from '.'

describe('Components/Atoms/Container', () => {
  it('It works', () => {
    const { container } = renderWithTheme(<Container />)

    expect(container.firstChild).toMatchSnapshot()
  })

  it('Should have responsive style', () => {
    const { container } = renderWithTheme(<Container />)

    expect(container.firstChild).toHaveStyleRule('position', 'relative')
    expect(container.firstChild).toHaveStyleRule('padding-right', '15px')
    expect(container.firstChild).toHaveStyleRule('padding-left', '15px')
    expect(container.firstChild).toHaveStyleRule('margin-right', 'auto')
    expect(container.firstChild).toHaveStyleRule('margin-left', 'auto')
  })

  it('Should have background color', () => {
    const { container } = renderWithTheme(<Container background='#000000' />)

    expect(container.firstChild).toHaveStyleRule('background-color', '#000000')
  })

  it('Should have display flex', () => {
    const { container } = renderWithTheme(
      <Container display='flex' flexDirection='row' flexAlign='center' flexJustify='center' />,
    )

    expect(container.firstChild).toHaveStyleRule('display', 'flex')
    expect(container.firstChild).toHaveStyleRule('flex-direction', 'row')
    expect(container.firstChild).toHaveStyleRule('align-items', 'center')
    expect(container.firstChild).toHaveStyleRule('justify-content', 'center')
  })

  it('Should have width and height', () => {
    const { container } = renderWithTheme(<Container width='50px' height='50px' />)

    expect(container.firstChild).toHaveStyleRule('width', '50px')
    expect(container.firstChild).toHaveStyleRule('height', '50px')
  })
})
