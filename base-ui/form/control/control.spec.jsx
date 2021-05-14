import React from 'react'
import { render } from '@testing-library/react'
import { BasicControl } from './control.composition'

it('should render with the correct text', () => {
  const { getByText } = render(<BasicControl />)
  const rendered = getByText('Label')
  expect(rendered).toBeTruthy()
})
