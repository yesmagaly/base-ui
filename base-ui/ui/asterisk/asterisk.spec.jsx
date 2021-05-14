import React from 'react'
import { render } from '@testing-library/react'
import { BasicAsterisk } from './asterisk.composition'

it('should render with the correct text', () => {
  const { getByText } = render(<BasicAsterisk />)
  const rendered = getByText('*')
  expect(rendered).toBeTruthy()
})
