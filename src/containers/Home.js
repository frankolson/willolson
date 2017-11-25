// Vendor Assets
import React from 'react'
import { getSiteProps } from 'react-static'
import styled from 'styled-components'

// Project Assets
import Card from '../elements/Card'
import Container from '../elements/Container'
import ProfilePicture from '../elements/ProfilePicture'
import logoImg from '../logo.png'
import { white } from '../../utils/colors'

const HomeHeader = styled.h1`
  color: ${white};
`

const HomeDescription = styled.p`
  font-size: 24px;
  color: ${white};
  margin-bottom: 2rem;
`

export default getSiteProps(() => (
  <Container>
    <ProfilePicture />

    <HomeHeader>Hi, I'm Will</HomeHeader>

    <HomeDescription>
      I'm Full Stack Developer with a passion to improve the world on a grand
      scale through technological advancements. I have helped multiple start-ups
      and companies build out their products using Ruby on Rails and React. While
      my current expertise is in web development, I have a degree in electrical
      engineering and am interested in meshing those two interests together.
    </HomeDescription>

    <Card>
      <img src={logoImg} alt="" />
    </Card>
  </Container>
))
