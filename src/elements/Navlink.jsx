// Vendor Assets
import React from 'react'
import { NavLink } from 'react-static'
import styled from 'styled-components'

// Project Assets
import { white } from '../../utils/colors'

const NewLink = styled(NavLink)`
  text-decoration: none;
  font-weight: bold;
  padding: 1rem;
  display: inline-block;
  color: ${white};
  opacity: 0.5;

  &:hover {
    opacity: 0.8;
  }

  &.active {
    opacity: 1;
  }
`

export default ({ children, ...rest }) => (
  <NewLink activeClassName="active" {...rest}>
    {children}
  </NewLink>
)
