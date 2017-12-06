// Vendor Assets
import React from 'react'
import styled from 'styled-components'

// Project Assets
import Markdown from '../../elements/Markdown'

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

export default ({ positon, company, description, startDate, endDate, present }) => (
  <Experience>
    <Content>
      <Title>
        <div><b>{positon}</b></div>
        <div>{company}</div>
      </Title>

      <Markdown content={description} />
    </Content>

    <DateBlock>
      {`${startDate} - ${present ? 'Present' : endDate}`}
    </DateBlock>
  </Experience>
)


/*
{
  id: 3,
  positon: 'position3',
  company: 'company 3',
  description: 'job desciption 3',
  startDate: '3/1/1',
  endDate: null,
  present: true,
},
*/
