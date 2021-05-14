import React from 'react'
import { Box, Label } from 'theme-ui'
import PropTypes from 'prop-types'

export function Control({ children, label, required, ...props }) {
  const baseStyles = {
    mb: 'small',
  }

  return (
    <Box __css={baseStyles} {...props}>
      <Label>
        {label}
        {required && '*'}
      </Label>
      {children}
    </Box>
  )
}

Control.defaultProps = {
  children: null,
  label: '',
  required: false,
}

Control.propTypes = {
  children: PropTypes.node,
  label: PropTypes.string,
  required: PropTypes.bool,
}
