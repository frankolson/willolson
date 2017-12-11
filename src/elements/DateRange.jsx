// Vendor Assets
import React from 'react'
import moment from 'moment'

const formatDate = date => (
  moment(date).format('MMM YYYY')
)

export default ({ endDate, present, startDate }) => (
  <div>
    {`${formatDate(startDate)} - ${present ? 'Present' : formatDate(endDate)}`}
  </div>
)
