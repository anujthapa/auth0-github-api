import React, { Component } from "react"
import Nav from "./components/Header"
import Githubapi from "./components/Githubapi"
import Auth0Lock from "auth0-lock"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./App.css"

class App extends Component {
  state = {
    accessToken: "",
    profile: {}
  }

  static defaultProps = {
    clientID: "E1VARj7Ed2hzOa1IIyo8D7X8HjLWDQXg",
    domain: "anujthapa.eu.auth0.com"
  }

  componentWillMount() {
    this.lock = new Auth0Lock(this.props.clientID, this.props.domain)
    this.lock.on("authenticated", authResult => {
      this.lock.getProfile(authResult.accessToken, (error, profile) => {
        if (error) {
          console.log(error)
          return
        }
        this.setProfile(authResult.accessToken, profile)
      })
    })
    this.getProfile()
  }

  setProfile = (id, profile) => {
    localStorage.setItem("accessToken", id)
    localStorage.setItem("profile", JSON.stringify(profile))

    this.setState({
      accessToken: localStorage.getItem("accessToken"),
      profile: JSON.parse(localStorage.getItem("profile"))
    })
  }

  getProfile = () => {
    if (localStorage.getItem("accessToken") != null) {
      this.setState(
        {
          accessToken: localStorage.getItem("accessToken"),
          profile: JSON.parse(localStorage.getItem("profile"))
        },
        () => {
          console.log(this.state)
        }
      )
    }
  }

  onLogout = () => {
    localStorage.removeItem("accessToken", "")
    localStorage.removeItem("profile", "")
    this.setState({
      accessToken: "",
      profile: ""
    })
  }
  showLock = () => {
    this.lock.show()
  }
  render() {
    let gitty = ""
    if (this.state.accessToken) {
      gitty = <Githubapi />
    } else {
      gitty = "Please click login to login"
    }
    return (
      <div className="App">
        <Nav
          onLogin={this.showLock}
          onLogout={this.onLogout}
          accessToken={this.state.accessToken}
        />
        {gitty}
      </div>
    )
  }
}

export default App
