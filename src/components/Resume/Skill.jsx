// Vendor Assets
import React from 'react'
import styled from 'styled-components'

const Skill = styled.div`
  display: flex;
  flex: 1;

  @media (max-width: 500px) {
    display: block;
  }
`

const Title = styled.div`
  display: flex;
  flex: 2;
`

const Content = styled.div`
  display: flex;
  flex: 3;
`

export default ({ items, title }) => (
  <Skill>
    <Title>
      <b>{title}:</b>
    </Title>

    <Content>
      {items.join(', ')}
    </Content>
  </Skill>
)
