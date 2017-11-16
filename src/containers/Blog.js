// Vendor Assets
import React from 'react'
import { getRouteProps } from 'react-static'

// Project Assets
import Link from '../elements/Link'

export default getRouteProps(({ posts }) => (
  <div>
    <h1>It's blog time.</h1>
    <br />
    All Posts:
    <ul>
      {posts.map(post => (
        <li key={post.slug}>
          <Link to={`/blog/post/${post.slug}/`}>{post.body}</Link>
        </li>
      ))}
    </ul>
  </div>
))
