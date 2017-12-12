// Vendor Assets
import React from 'react'
import { getSiteProps } from 'react-static'
import styled from 'styled-components'

// Project Assets
import Container from '../elements/Container'
import ProfilePicture from '../elements/ProfilePicture'
import PortfolioGrid from '../components/Portfolio/ThumbnailGrid'
import { white } from '../../utils/colors'

const HomeHeader = styled.p`
  font-size: 2rem;
  color: ${white};
  margin-bottom: 2rem;
`

const PortfolioHeader = styled.div`
  color: ${white};
  text-align: center;
`

const placeholderData = [
  { id: 1, thumbnail: 'http://placehold.it/500x500', title: 'project1' },
  { id: 2, thumbnail: 'http://placehold.it/500x500', title: 'project2' },
  { id: 3, thumbnail: 'http://placehold.it/500x500', title: 'project3' },
  { id: 4, thumbnail: 'http://placehold.it/500x500', title: 'project4' },
]

export default getSiteProps(() => (
  <Container>
    <ProfilePicture />

    <HomeHeader>
      {/* eslint-disable max-len */}
      Hi, I'm <b>Will Olson</b>, a Full Stack Developer with a passion to improve the world on a grand scale. I have helped multiple start-ups and companies build out their products using Ruby on Rails and React.
      {/* eslint-enable max-len */}
    </HomeHeader>

    <div>
      <PortfolioHeader>
        <h2>Check out some of my projects:</h2>
      </PortfolioHeader>

      <PortfolioGrid items={placeholderData} />
    </div>
  </Container>
))
