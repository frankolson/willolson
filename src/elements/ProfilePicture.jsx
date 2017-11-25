// Vendor Assets
import React from 'react'
import styled from 'styled-components'

// Project Assets
import profileImg from '../headshot.jpg'

const RoundImage = styled.img`
  border-radius: 50%;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  width: 200px;
  height: auto;
  margin-bottom: 30px;
`

export default () => (
  <RoundImage src={profileImg} alt="My pretty face." />
)
