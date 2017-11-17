// Vendor Assets
import React from 'react'
import styled from 'styled-components'
import moment from 'moment'

// Project Assets
import Card from '../elements/Card'
import Markdown from '../elements/Markdown'

const Div = styled(Card)`
  margin-top: 2rem;
  margin-bottom: 2rem;
  padding: 2rem;
`

export default ({ post }) => (
  <Div>
    <Markdown content={post.body} />

    <br />
    <br />

    Created at: {moment(post.createdAt).format('MM/DD/YYYY')}
  </Div>
)
