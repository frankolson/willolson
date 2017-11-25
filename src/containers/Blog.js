// Vendor Assets
import React from 'react'
import { getRouteProps } from 'react-static'
import styled from 'styled-components'

// Project Assets
import Container from '../elements/Container'
import ProfilePicture from '../elements/ProfilePicture'
import Post from '../components/Post'
import { white } from '../../utils/colors'

const BlogHeader = styled.h1`
  color: ${white};
`

export default getRouteProps(({ posts }) => (
  <Container>
    <ProfilePicture />

    <BlogHeader>It's blog time.</BlogHeader>

    {posts.map(post => (
      <Post key={post.slug} post={post} />
    ))}
  </Container>
))
