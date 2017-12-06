// Vendor Assets
import React from 'react'
import styled from 'styled-components'

// Project Assets
import Project from '../components/Resume/Project'
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

const Hr = styled.hr`
  margin-top: 1rem;
  margin-bottom: 1rem;
  border: 0.5px solid grey;
`

const placeholderData = {
  skills: [
    { id: 1, title: 'Languages', items: [1, 2, 3, 4, 5] },
    { id: 2, title: 'Frameworks/Libraries', items: [1, 2, 3, 4, 5] },
    { id: 3, title: 'Databases', items: [1, 2, 3, 4, 5] },
    { id: 4, title: 'Other', items: [1, 2, 3, 4, 5] },
  ],
  projects: [
    {
      id: 3,
      title: 'project3',
      link: 'https://example3.com',
      description: 'guess what? `Even more markdown!!!`',
      startDate: '3/1/1',
      endDate: null,
      present: true,
    },
    {
      id: 2,
      title: 'project2',
      link: 'https://example2.com',
      description: 'some more `markdown`',
      startDate: '2/1/1',
      endDate: '2/2/1',
      present: false,
    },
    {
      id: 1,
      title: 'project1',
      link: 'https://example1.com',
      description: 'some `markdown`',
      startDate: '1/1/1',
      endDate: '1/2/1',
      present: false,
    },
  ],
  experiences: [
    {
      id: 3,
      positon: 'position3',
      company: 'company 3',
      description: 'job desciption 3',
      startDate: '3/1/1',
      endDate: null,
      present: true,
    },
    {
      id: 2,
      positon: 'position2',
      company: 'company 2',
      description: 'job desciption 2',
      startDate: '2/1/1',
      endDate: '2/2/1',
      present: true,
    },
    {
      id: 1,
      positon: 'position1',
      company: 'company 1',
      description: 'job desciption 1',
      startDate: '1/1/1',
      endDate: '1/2/1',
      present: true,
    },
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
          <Skill key={data.id} {...data} />
        ))}
      </Section>

      <Hr />

      <Section title="Projects">
        {placeholderData.projects.map(data => (
          <Project key={data.id} {...data} />
        ))}
      </Section>
    </Card>
  </Container>
)
