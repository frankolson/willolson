// Vendor Assets
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  width: 100%;
  max-width: 900px;
`

export default ({ children, ...rest }) => (
  <Container {...rest}>
    {children}
  </Container>
)
