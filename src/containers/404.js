// Vendor Assets
import React from 'react'
import styled from 'styled-components'

// Project Assets
import Container from '../elements/Container'
import { white } from '../../utils/colors'

const MissingHeader = styled.p`
  font-size: 2rem;
  color: ${white};
`

export default () => (
  <Container>
    <MissingHeader>
      404 - Oh no's! We couldn't find that page :(
    </MissingHeader>
  </Container>
)
