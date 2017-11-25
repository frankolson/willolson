// Vendor Assets
import React from 'react'
import { getRouteProps } from 'react-static'
import styled from 'styled-components'

// Project Assets
import ProfilePicture from '../elements/ProfilePicture'
import Post from './Post'
import { white } from '../../utils/colors'

const BlogHeader = styled.h1`
  color: ${white};
`

export default getRouteProps(({ posts }) => (
  <div className="container">
    <ProfilePicture />

    <BlogHeader>It's blog time.</BlogHeader>

    {posts.map(post => (
      <Post key={post.slug} post={post} />
    ))}
  </div>
))
