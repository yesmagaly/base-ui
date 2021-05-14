/** @jsx jsx */
import { jsx } from 'theme-ui'
import NumberFormat from 'react-number-format'

export function InputMask(props) {
  const baseInputStyles = {
    display: 'block',
    width: '100%',
    p: 2,
    appearance: 'none',
    fontSize: 'inherit',
    lineHeight: 'inherit',
    border: '1px solid',
    borderRadius: 4,
    color: 'inherit',
    bg: 'transparent',
  }

  return (
    <NumberFormat sx={{ ...baseInputStyles, variant: 'forms.input' }} {...props} />
  )
}
