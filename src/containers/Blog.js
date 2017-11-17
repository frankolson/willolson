// Vendor Assets
import React from 'react'
import { getRouteProps } from 'react-static'
import styled from 'styled-components'

// Project Assets
import Card from '../elements/Card'
import { white } from '../../utils/colors'

const BlogHeader = styled.div`
  color: ${white};
  text-align: center;
`

const Post = styled(Card)`
  margin-top: 2rem;
  margin-bottom: 2rem;
  padding: 2rem;
`

export default getRouteProps(({ posts }) => (
  <div className="container">
    <BlogHeader>
      <h1>It's blog time.</h1>
    </BlogHeader>

    {posts.map(post => (
      <Post key={post.slug}>
        {post.body}
      </Post>
    ))}
  </div>
))
