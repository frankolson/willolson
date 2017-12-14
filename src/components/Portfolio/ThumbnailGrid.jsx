// Vendor Assets
import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-static'

const Grid = styled.div`
  @media screen and (min-width: 600px) {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
  }
`

const Image = styled.img`
  max-width: 100%;
`

const Cell = styled(NavLink)`
  margin: 1rem;

  img {
    display: block;
  }

  @media screen and (min-width: 600px) {
    width: calc(50% - 2rem);
  }

  @media screen and (min-width: 1000px) {
    width: calc(33.3333% - 2rem);
  }
}
`

export default ({ items }) => (
  <Grid>
    {items.map(item => (
      <Cell key={item.id} to={`/portfolio/${item.id}`}>
        <Image src={item.thumbnail.fields.file.url} alt={item.title} />
      </Cell>
    ))}
  </Grid>
)
