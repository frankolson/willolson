// Vendor Assets
import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
  display: flex;
  flex: 1;

  @media (max-width: 500px) {
    display: block;
  }
`

const Title = styled.div`
  display: flex;
  flex: 1;
`

const Children = styled.div`
  display: flex;
  flex: 3;
`

export default ({ children, title }) => (
  <Section>
    <Title>
      Title: {title}
    </Title>

    <Children>
      {children}
    </Children>
  </Section>
)
