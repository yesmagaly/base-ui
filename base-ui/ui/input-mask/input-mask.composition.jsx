import React from 'react'
import { InputMask } from './input-mask'

export const BasicInputMask = () => (
  <InputMask
    placeholder='Cellphone'
    name='phone'
    format='+57 (###) ###-####'
    mask='_'
  />
)
