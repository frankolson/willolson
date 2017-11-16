// Vendor Assets
import React from 'react'
import { Router } from 'react-static'
import Routes from 'react-static-routes'
import styled, { injectGlobal } from 'styled-components'

// Project Assets
import Navbar from './components/Navbar'

injectGlobal`
  body {
    font-family: 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial,
      'Lucida Grande', sans-serif;
    font-weight: 300;
    font-size: 16px;
    margin: 0;
    padding: 0;
  }
`

const AppStyles = styled.div`
  a {
    text-decoration: none;
    color: #108db8;
    font-weight: bold;
  }
  nav {
    width: 100%;
    background: #108db8;
    a {
      color: white;
      padding: 1rem;
      display: inline-block;
    }
  }
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
