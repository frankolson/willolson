// Vendor Assets
import React from 'react'
import styled from 'styled-components'

// Project Assets
import profileImg from '../headshot.jpg'
import { white } from '../../utils/colors'

const RoundImage = styled.img`
  border: 7px solid ${white};
  border-radius: 50%;
  width: 200px;
  height: auto;
  margin-bottom: 30px;
`

export default () => (
  <RoundImage src={profileImg} alt="My pretty face." />
)
