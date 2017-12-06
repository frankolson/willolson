// Vendor Assets
import React from 'react'
import styled from 'styled-components'

// Project Assets
import Markdown from '../../elements/Markdown'

const Project = styled.div`
  display: flex;
  flex: 1;

  @media (max-width: 500px) {
    display: block;
  }
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2;
`

const Title = styled.div`
  display: flex;
  flex: 1;
`

const DateBlock = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;

  @media (max-width: 500px) {
    justify-content: flex-start;
    margin-bottom: 1rem;
  }
`

export default ({ title, link, description, startDate, endDate, present }) => (
  <Project>
    <Content>
      <Title>
        <b>{title}</b> ~ <a href={link}>GitHub</a>
      </Title>

      <Markdown content={description} />
    </Content>

    <DateBlock>
      {`${startDate} - ${present ? 'Present' : endDate}`}
    </DateBlock>
  </Project>
)


/*
{
  title: 'project3',
  link: 'https://example3.com',
  description: 'guess what? `Even more markdown!!!`',
  startDate: '3/1/1',
  endDate: null,
  present: true,
},
*/
