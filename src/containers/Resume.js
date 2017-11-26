// Vendor Assets
import React from 'react'
import styled from 'styled-components'

// Project Assets
import Container from '../elements/Container'
import ProfilePicture from '../elements/ProfilePicture'
import { white } from '../../utils/colors'

const ResumeHeader = styled.p`
  font-size: 2rem;
  color: ${white};
`

export default () => (
  <Container>
    <ProfilePicture />

    <ResumeHeader>
      Want to check out my resume? Well, here you go:
    </ResumeHeader>
  </Container>
)
