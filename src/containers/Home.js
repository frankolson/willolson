// Vendor Assets
import React from 'react'
import { getSiteProps } from 'react-static'

// Project Assets
import logoImg from '../logo.png'

export default getSiteProps(() => (
  <div>
    <h1 style={{ textAlign: 'center' }}>Welcome to</h1>
    <img src={logoImg} alt="" />
  </div>
))
