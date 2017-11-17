// Vendor Assets
import React, { PureComponent } from 'react'
import styled from 'styled-components'
import moment from 'moment'

// Project Assets
import Card from '../elements/Card'

const Div = styled(Card)`
  margin-top: 2rem;
  margin-bottom: 2rem;
  padding: 2rem;
`

class Post extends PureComponent {
  render () {
    const { post } = this.props

    return (
      <Div key={post.slug}>
        {post.body}

        <br />
        <br />

        Created at: {moment(post.createdAt).format('MM/DD/YYYY')}
      </Div>
    )
  }
}

export default Post
