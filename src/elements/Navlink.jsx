// Vendor Assets
import React from 'react'
import styled from 'styled-components'

// Project Assets
import Link from './Link'
import { white } from '../../utils/colors'

const Navlink = styled(Link)`
  padding: 1rem;
  display: inline-block;
  color: ${white};
`

export default ({ children, ...rest }) => (
  <Navlink {...rest}>
    {children}
  </Navlink>
)
