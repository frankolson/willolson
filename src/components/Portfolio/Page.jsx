// Vendor Assets
import React from 'react'
import { getRouteProps } from 'react-static'
import styled from 'styled-components'

// Project Assets
import Container from '../../elements/Container'
import { white } from '../../../utils/colors'

const Title = styled.div`
  text-align: center;
  color: ${white};
`

export default getRouteProps(({ title }) => (
  <Container>
    <Title>
      <h1>{title}</h1>
    </Title>
  </Container>
))
