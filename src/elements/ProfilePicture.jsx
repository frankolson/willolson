// Vendor Assets
import React from 'react'
import styled from 'styled-components'

// Project Assets
import profileImg from '../headshot.jpg'
import { white } from '../../utils/colors'

const RoundImage = styled.img`
  border: 10px solid ${white};
  border-radius: 50%;
  width: 250px;
  height: auto;
`

export default () => (
  <RoundImage src={profileImg} alt="My pretty face." />
)
