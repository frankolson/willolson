// Vendor Assets
import React from 'react'
import { getSiteProps } from 'react-static'
import styled from 'styled-components'

// Project Assets
import Container from '../elements/Container'
import ProfilePicture from '../elements/ProfilePicture'
import { white } from '../../utils/colors'

const HomeContainer = styled(Container)`
  max-width: 900px;
`

const HomeHeader = styled.p`
  font-size: 2rem;
  color: ${white};
  margin-bottom: 2rem;
`

export default getSiteProps(() => (
  <HomeContainer>
    <ProfilePicture />

    <HomeHeader>
      {/* eslint-disable max-len */}
      Hi, I'm <b>Will Olson</b>, a Full Stack Developer with a passion to improve the world on a grand scale. I have helped multiple start-ups and companies build out their products using Ruby on Rails and React.
      {/* eslint-enable max-len */}
    </HomeHeader>
  </HomeContainer>
))
