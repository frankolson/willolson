// Vendor Assets
import React from 'react'
import styled from 'styled-components'

// Project Assets
import ProfilePicture from '../elements/ProfilePicture'
import { white } from '../../utils/colors'

const AboutHeader = styled.h1`
  color: ${white};
`
const AboutDescription = styled.p`
  font-size: 24px;
  color: ${white};
`

export default () => (
  <div className="container">
    <ProfilePicture />

    <AboutHeader>Hi, I'm Will.</AboutHeader>

    <AboutDescription>
      I am a Full-Stack Developer with a special love for startups.
      Want to check out my resume? Well, here you go:
    </AboutDescription>
  </div>
)
