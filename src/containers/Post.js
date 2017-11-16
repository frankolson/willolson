// Vendor Assets
import React from 'react'
import { getRouteProps } from 'react-static'

// Project Assets
import Link from '../elements/Link'

export default getRouteProps(({ post }) => (
  <div>
    <Link to="/blog/">{'<'} Back</Link>
    <br />
    <p>{post.body}</p>
  </div>
))
