// Vendor Assets
import React from 'react'
import { getSiteProps } from 'react-static'
import styled from 'styled-components'

// Project Assets
import Card from '../elements/Card'
import ProfilePicture from '../elements/ProfilePicture'
import logoImg from '../logo.png'

const HomeHeader = styled.div`
  text-align: center;
`

export default getSiteProps(() => (
  <div className="container">
    <ProfilePicture />

    <Card>
      <HomeHeader>
        <h1>Welcome to</h1>
      </HomeHeader>
      <img src={logoImg} alt="" />
    </Card>
  </div>
))
