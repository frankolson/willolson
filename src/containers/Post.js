import React from 'react'
import { getRouteProps, Link } from 'react-static'
//

export default getRouteProps(({ post }) => (
  <div>
    <Link to="/blog/">{'<'} Back</Link>
    <br />
    <p>{post.body}</p>
  </div>
))
