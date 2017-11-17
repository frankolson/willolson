// Vendor Assets
import React from 'react'
import { Router } from 'react-static'
import Routes from 'react-static-routes'
import styled, { injectGlobal } from 'styled-components'

// Project Assets
import Navbar from './components/Navbar'
import { primaryDark } from '../utils/colors'

injectGlobal`
  body {
    font-family: 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial,
      'Lucida Grande', sans-serif;
    font-weight: 300;
    font-size: 16px;
    margin: 0;
    padding: 0;
    background: ${primaryDark};
  }
`

const AppStyles = styled.div`
  img {
    max-width: 100%;
  }

  .content {
    padding: 16px;
    display: flex;
    flex: 1;
  }

  .container {
    width: 100%;
  }

  @media only screen and (min-width: 900px) {
    .content {
      justify-content: center;
    }

    .container {
      width: 868px;
    }
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
