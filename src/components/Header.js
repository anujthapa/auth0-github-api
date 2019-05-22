import React, { Component } from "react"
import { Navbar, Nav, NavItem } from "react-bootstrap"

class Header extends Component {
  onLogin = () => {
    this.props.onLogin()
  }
  onLogout = () => {
    this.props.onLogout()
  }
  render() {
    return (
      <React.Fragment>
        <Navbar>
          <Navbar.Brand>Github Searcher</Navbar.Brand>
          <Nav>
            <NavItem>
              {this.props.accessToken ? (
                <a href="#" onClick={this.onLogout}>
                  Logout
                </a>
              ) : (
                <a href="#" onClick={this.onLogin}>
                  Login
                </a>
              )}
            </NavItem>
          </Nav>
        </Navbar>
      </React.Fragment>
    )
  }
}

export default Header
