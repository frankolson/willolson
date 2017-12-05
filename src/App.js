// Vendor Assets
import React from 'react'
import { Router } from 'react-static'
import Routes from 'react-static-routes'
import styled, { injectGlobal } from 'styled-components'

// Project Assets
import Navbar from './components/NavBar'
import { primary } from '../utils/colors'

injectGlobal`
  body {
    font-family: 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial,
      'Lucida Grande', sans-serif;
    font-weight: 300;
    font-size: 16px;
    margin: 0;
    padding: 0;
    background: ${primary};
  }
`

const AppStyles = styled.div`
  img {
    max-width: 100%;
  }

  .content {
    display: flex;
    flex: 1;
    justify-content: center;
    padding: 1rem;
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
