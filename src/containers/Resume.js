// Vendor Assets
import React from 'react'
import { getRouteProps } from 'react-static'
import styled from 'styled-components'

// Project Assets
import Education from '../components/Resume/Education'
import Experience from '../components/Resume/Experience'
import Project from '../components/Resume/Project'
import Section from '../components/Resume/Section'
import Skill from '../components/Resume/Skill'
import Card from '../elements/Card'
import Container from '../elements/Container'
import { white } from '../../utils/colors'

const ResumeHeader = styled.p`
  color: ${white};
  font-size: 2rem;
  text-align: center;
`

const Hr = styled.hr`
  margin-top: 1rem;
  margin-bottom: 1rem;
  border: 0.5px solid grey;
`

export default getRouteProps(({ educations, experiences, projects, skills }) => (
  <Container>
    <ResumeHeader>
      Want to check out my resume? Well, here you go:
    </ResumeHeader>

    <Card>
      <Section title="Skills">
        {skills.map(data => (
          <Skill key={data.id} {...data} />
        ))}
      </Section>

      <Hr />

      <Section title="Projects">
        {projects.map(data => (
          <Project key={data.id} {...data} />
        ))}
      </Section>

      <Hr />

      <Section title="Experiences">
        {experiences.map(data => (
          <Experience key={data.id} {...data} />
        ))}
      </Section>

      <Hr />

      <Section title="Education">
        {educations.map(data => (
          <Education key={data.id} {...data} />
        ))}
      </Section>
    </Card>
  </Container>
))
