// Vendor Assets
import React from 'react'
import styled from 'styled-components'

// Project Assets
import { white } from '../../utils/colors'

const Card = styled.div`
  background: ${white};
  border-radius: 0.25rem;
  padding: 1rem;
`

export default ({ children, ...rest }) => (
  <Card {...rest}>
    {children}
  </Card>
)
