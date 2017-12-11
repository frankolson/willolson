// Vendor Assets
import React from 'react'
import styled from 'styled-components'

const ContentRow = styled.div`
  display: flex;
  flex: 1;
  margin-bottom: 1.2rem;

  @media (max-width: 500px) {
    display: block;
    margin-bottom: 2rem;
  }
`

export default ({ children, ...props }) => (
  <ContentRow {...props}>
    {children}
  </ContentRow>
)
