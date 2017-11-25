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

    <AboutHeader>Want to check out my resume?</AboutHeader>

    <AboutDescription>
      Well, here you go:
    </AboutDescription>
  </div>
)
