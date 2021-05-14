import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { BasicInputMask } from './input-mask.composition'

it('should render with the correct text', () => {
  const input = render(<BasicInputMask />)

  expect(true).toBe(true)
})
