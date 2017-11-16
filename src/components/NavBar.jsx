// Vendor Assets
import React from 'react'
import styled from 'styled-components'

// Project Assets
import Navlink from '../elements/Navlink'

const Nav = styled.nav`
  width: 100%;
  background: #108db8;
`

export default () => (
  <Nav>
    <Navlink to="/">Home</Navlink>
    <Navlink to="/about">About</Navlink>
    <Navlink to="/blog">Blog</Navlink>
  </Nav>
)
