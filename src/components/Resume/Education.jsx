// Vendor Assets
import React from 'react'
import styled from 'styled-components'

// Project Assets
import DateRange from '../../elements/DateRange'

const Experience = styled.div`
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
  <Experience>
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
  </Experience>
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
