// Vendor Assets
import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
  display: flex;

  @media (max-width: 500px) {
    display: block;
  }
`

const Title = styled.div`
  flex: 1;
`

const Children = styled.div`
  flex-direction: column;
  flex: 3;
`

export default ({ children, title }) => (
  <Section>
    <Title>{title}</Title>

    <Children>
      {children}
    </Children>
  </Section>
)
