// Vendor Assets
import React from 'react'
import { getSiteProps } from 'react-static'
import styled from 'styled-components'

// Project Assets
import Card from '../elements/Card'
import logoImg from '../logo.png'
import { black } from '../../utils/colors'

const CardHeader = styled.h1`
  color: ${black}
  text-align: center;
`

export default getSiteProps(() => (
  <div className="container">
    <Card>
      <CardHeader>Welcome to</CardHeader>
      <img src={logoImg} alt="" />
    </Card>
  </div>
))
