// Vendor Assets
import React from 'react'
import { getRouteProps } from 'react-static'
import styled from 'styled-components'

// Project Assets
import Card from '../../elements/Card'
import Container from '../../elements/Container'
import Markdown from '../../elements/Markdown'
import { white } from '../../../utils/colors'

const Title = styled.div`
  text-align: center;
  color: ${white};
`

export default getRouteProps(({ body, title }) => (
  <Container>
    <Title>
      <h1>{title}</h1>
    </Title>

    <Card>
      <Markdown content={body} />
    </Card>
  </Container>
))
