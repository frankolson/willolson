// Vendor Assets
import React from 'react'
import styled from 'styled-components'

// Project Assets
import ContentRow from './ContentRow'
import DateRange from '../../elements/DateRange'

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

const DateBlock = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;

  @media (max-width: 500px) {
    justify-content: flex-start;
    margin-bottom: 1rem;
  }
`

export default ({ degree, school, startDate, endDate, present }) => (
  <ContentRow>
    <Content>
      <Title>
        <div><b>{degree}</b></div>
        <div>{school}</div>
      </Title>
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
  id: 1,
  degree: 'degree1',
  school: 'school 1',
  startDate: '1/1/1',
  endDate: '1/2/1',
  present: false,
},
*/
