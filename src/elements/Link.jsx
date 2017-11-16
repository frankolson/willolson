// Vendor Assets
import React from 'react'
import { Link } from 'react-static'
import styled from 'styled-components'

const NewLink = styled(Link)`
  text-decoration: none;
  color: #108db8;
  font-weight: bold;
`

export default ({ children, ...rest }) => (
  <NewLink {...rest}>
    {children}
  </NewLink>
)
