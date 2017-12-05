// Vendor Assets
import React from 'react'
import styled from 'styled-components'

// Project Assets
import Section from '../components/Resume/Section'
import Skill from '../components/Resume/Skill'
import Card from '../elements/Card'
import Container from '../elements/Container'
import ProfilePicture from '../elements/ProfilePicture'
import { white } from '../../utils/colors'

const ResumeHeader = styled.p`
  font-size: 2rem;
  color: ${white};
`

const placeholderData = {
  skills: [
    { title: 'Languages', items: [1, 2, 3, 4, 5] },
    { title: 'Frameworks/Libraries', items: [1, 2, 3, 4, 5] },
    { title: 'Databases', items: [1, 2, 3, 4, 5] },
    { title: 'Other', items: [1, 2, 3, 4, 5] },
  ],
}

export default () => (
  <Container>
    <ProfilePicture />

    <ResumeHeader>
      Want to check out my resume? Well, here you go:
    </ResumeHeader>

    <Card>
      <Section title="Skills">
        {placeholderData.skills.map(data => (
          <Skill {...data} />
        ))}
      </Section>
    </Card>
  </Container>
)
