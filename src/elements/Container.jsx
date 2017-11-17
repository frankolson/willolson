// Vendor Assets
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  padding: 1.25rem:
`

export default ({ children, ...rest }) => (
  <Container {...rest}>
    {children}
  </Container>
)
