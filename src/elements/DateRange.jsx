// Vendor Assets
import React from 'react'
import styled from 'styled-components'
import moment from 'moment'

const DateRange = styled.div`
  color: grey;
  font-style: italic;
`

const formatDate = date => (
  moment(date).format('MMM YYYY')
)

export default ({ endDate, present, startDate }) => (
  <DateRange>
    {`${formatDate(startDate)} - ${present ? 'Present' : formatDate(endDate)}`}
  </DateRange>
)
