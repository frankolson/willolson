// Vendor Assets
import React from 'react'
import styled from 'styled-components'

// Project Assets
import { white } from '../../utils/colors'

const Card = styled.div`
  background: ${white};
  border-radius: 0.25rem;
  padding: 1rem;
  width: 100%;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
`

export default ({ children, ...rest }) => (
  <Card {...rest}>
    {children}
  </Card>
)
