// Vendor Assets
import React from 'react'
import styled from 'styled-components'

// Project Assets
import ContentRow from './ContentRow'
import DateRange from '../../elements/DateRange'
import Markdown from '../../elements/Markdown'

const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2;
`

const Title = styled.div`
  display: flex;
  flex: 1;
`

const Description = styled.div`
  margin-top: .5rem;
  margin-bottom: .5rem;
`

const DateBlock = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;

  @media (max-width: 500px) {
    justify-content: flex-start;
  }
`

export default ({ title, github, description, startDate, endDate, present }) => (
  <ContentRow>
    <Content>
      <Title>
        <b>{title}</b> ~ <a href={github}>GitHub</a>
      </Title>

      <Description>
        <Markdown color={'grey'} content={description} />
      </Description>
    </Content>

    <DateBlock>
      <DateRange
        endDate={endDate}
        present={present}
        startDate={startDate}
      />
    </DateBlock>
  </ContentRow>
)


/*
{
  title: 'project3',
  github: 'https://example3.com',
  description: 'guess what? `Even more markdown!!!`',
  startDate: '3/1/1',
  endDate: null,
  present: true,
},
*/
