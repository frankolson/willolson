// Vendor Assets
import React from 'react'
import styled from 'styled-components'

// Project Assets
import Navlink from '../elements/Navlink'

const Nav = styled.nav`
  background-color: ${props => props.background};
  position: fixed;
  top: 0;
  transition: background-color 0.5s;
  width: 100%;
`

export default class NavBar extends React.Component {
  state = {
    background: null,
  }

  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = () => {
    this.setState({
      background: window.pageYOffset === 0 ? null : 'rgba(0,0,0,0.5)',
    })
  }

  render () {
    return (
      <Nav background={this.state.background}>
        <Navlink to="/" exact>Home</Navlink>
        <Navlink to="/resume">Resume</Navlink>
      </Nav>
    )
  }
}
