// Vendor Assets
import React from 'react'
import styled from 'styled-components'

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

const Cell = styled.div`
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
      <Cell key={item.id}>
        <Image src={item.thumbnail} alt={item.name} />
      </Cell>
    ))}
  </Grid>
)
