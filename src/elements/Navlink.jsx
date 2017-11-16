// Vendor Assets
import React from 'react'
import styled from 'styled-components'

// Project Assets
import Link from './Link'

const Navlink = styled(Link)`
  color: white;
  padding: 1rem;
  display: inline-block;
`

export default ({ children, ...rest }) => (
  <Navlink {...rest}>
    {children}
  </Navlink>
)
