// Vendor Assets
import React, { PureComponent } from 'react'
import styled from 'styled-components'
import marked from 'marked'
import moment from 'moment'

// Project Assets
import Card from '../elements/Card'

const Div = styled(Card)`
  margin-top: 2rem;
  margin-bottom: 2rem;
  padding: 2rem;
`

class Post extends PureComponent {
  rawMarkup = () => {
    const rawMarkup = marked(this.props.post.body, { sanitize: true })
    return { __html: rawMarkup }
  }

  render () {
    const { post } = this.props

    return (
      <Div key={post.slug}>
        <span dangerouslySetInnerHTML={this.rawMarkup()} />

        <br />
        <br />

        Created at: {moment(post.createdAt).format('MM/DD/YYYY')}
      </Div>
    )
  }
}

export default Post
