// Vendor Assets
import React from 'react'
import { Link } from 'react-static'
import styled from 'styled-components'

// Project Assets
import { primaryLight } from '../../utils/colors'

const NewLink = styled(Link)`
  text-decoration: none;
  color: ${primaryLight};
  font-weight: bold;
`

export default ({ children, ...rest }) => (
  <NewLink {...rest}>
    {children}
  </NewLink>
)
