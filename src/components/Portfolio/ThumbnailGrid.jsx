// Vendor Assets
import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-static'

// Project Assets
import { white } from '../../../utils/colors'

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
  background: ${white};
  border-radius: 0.25rem;
  padding: 1.5rem;
  box-sizing: border-box;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);

  &:hover {
    transform: scale(1.0125);
  }

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
