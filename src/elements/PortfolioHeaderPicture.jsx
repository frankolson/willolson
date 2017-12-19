// Vendor Assets
import React from 'react'
import styled from 'styled-components'

const HeaderImage = styled.img`
  border-radius: 0.25rem;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  width: 100%;
`

export default ({ alt, url }) => (
  <HeaderImage src={url} alt={alt} />
)
