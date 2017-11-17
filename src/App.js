// Vendor Assets
import React from 'react'
import { Router } from 'react-static'
import Routes from 'react-static-routes'
import styled, { injectGlobal } from 'styled-components'

// Project Assets
import Navbar from './components/Navbar'
import { primaryDark, white } from '../utils/colors'

injectGlobal`
  body {
    font-family: 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial,
      'Lucida Grande', sans-serif;
    font-weight: 300;
    font-size: 16px;
    margin: 0;
    padding: 0;
    background: ${primaryDark};
    color: ${white}
  }
`

const AppStyles = styled.div`
  .content {
    padding: 1rem;
  }
  img {
    max-width: 100%;
  }
`

export default () => (
  <Router>
    <AppStyles>
      <Navbar />
      <div className="content">
        <Routes />
      </div>
    </AppStyles>
  </Router>
)
