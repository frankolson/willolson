// Vendor Assets
import React from 'react'
import { Router } from 'react-static'
import Routes from 'react-static-routes'

// Project Assets
import Navbar from './components/Navbar'
import './app.css'

export default () => (
  <Router>
    <div>
      <Navbar />
      <div className="content">
        <Routes />
      </div>
    </div>
  </Router>
)
