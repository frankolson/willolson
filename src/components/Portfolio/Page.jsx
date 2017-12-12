// Vendor Assets
import React from 'react'
import { getSiteProps } from 'react-static'
import styled from 'styled-components'

// Project Assets
import Container from '../../elements/Container'
import { white } from '../../../utils/colors'

const Title = styled.div`
  text-align: center;
  color: ${white};
`

export default getSiteProps(({ name }) => (
  <Container>
    <Title>
      <h1>{name}</h1>
    </Title>
  </Container>
))
