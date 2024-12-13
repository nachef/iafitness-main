import React from 'react'

import { renderWithTheme } from '@utils/helpers/forTests'

import { TextButton } from '.'

describe('Components/Atoms/TextButton', () => {
  it('It works', () => {
    const { container } = renderWithTheme(
      <TextButton color='#000000' font='bold' size='small'>
        Test text component
      </TextButton>,
    )

    expect(container.firstChild).toMatchSnapshot()
    expect(container.firstChild).toHaveTextContent('Test text component')
  })

  it('Should have text color', () => {
    const { container } = renderWithTheme(
      <TextButton color='#000000' font='bold' size='small'>
        Test text color
      </TextButton>,
    )

    expect(container.firstChild).toHaveStyleRule('color', '#000000')
  })

  it('Should have margin', () => {
    const { container } = renderWithTheme(
      <TextButton color='#000000' font='bold' size='small' mt={5} mb={10} ml={15} mr={20}>
        Test text color
      </TextButton>,
    )

    expect(container.firstChild).toHaveStyleRule('margin-top', '5px')
    expect(container.firstChild).toHaveStyleRule('margin-bottom', '10px')
    expect(container.firstChild).toHaveStyleRule('margin-left', '15px')
    expect(container.firstChild).toHaveStyleRule('margin-right', '20px')
  })

  it('Should have padding', () => {
    const { container } = renderWithTheme(
      <TextButton color='#000000' font='bold' size='small' pt={5} pb={10} pl={15} pr={20}>
        Test text color
      </TextButton>,
    )

    expect(container.firstChild).toHaveStyleRule('padding-top', '5px')
    expect(container.firstChild).toHaveStyleRule('padding-bottom', '10px')
    expect(container.firstChild).toHaveStyleRule('padding-left', '15px')
    expect(container.firstChild).toHaveStyleRule('padding-right', '20px')
  })

  it('Should have border', () => {
    const { container } = renderWithTheme(
      <TextButton color='#000000' font='bold' size='small' borderStyle='dashed' borderWidth='2px' borderRadius='10px'>
        Test text color
      </TextButton>,
    )

    expect(container.firstChild).toHaveStyleRule('border-radius', '10px')
    expect(container.firstChild).toHaveStyleRule('border-width', '2px')
    expect(container.firstChild).toHaveStyleRule('border-style', 'dashed')
  })
})
