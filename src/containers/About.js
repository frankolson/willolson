// Vendor Assets
import React from 'react'
import styled from 'styled-components'

// Project Assets
import ProfilePicture from '../elements/ProfilePicture'
import { white } from '../../utils/colors'

const AboutHeader = styled.h2`
  color: ${white};
`
const AboutDescription = styled.p`
  color: ${white};
`

export default () => (
  <div className="container">
    <ProfilePicture />

    <AboutHeader>This is what I'm all about.</AboutHeader>

    <AboutDescription>
      React, static sites, performance, speed. It's the stuff that makes us tick.
    </AboutDescription>
  </div>
)
