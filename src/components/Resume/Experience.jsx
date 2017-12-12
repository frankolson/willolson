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
  flex-direction: column;
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
    margin-bottom: 1rem;
  }
`

export default ({ position, company, description, startDate, endDate, present }) => (
  <ContentRow>
    <Content>
      <Title>
        <div><b>{position}</b></div>
        <div>{company}</div>
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
  id: 3,
  position: 'position3',
  company: 'company 3',
  description: 'job desciption 3',
  startDate: '3/1/1',
  endDate: null,
  present: true,
},
*/
