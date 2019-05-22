import React, { Component } from "react"
import Profile from "./Profile"
import Search from "./Search"
import axios from "axios"
const API = "https://api.github.com/users"

class Githubapi extends Component {
  state = {
    username: "anujthapa",
    name: "",
    avatar: "",
    repos: "",
    homeURL: "",
    followers: "",
    following: "",
    notFound: ""
  }

  getProfile = username => {
    const finalURL = `${API}/${username}`
    axios
      .get(finalURL)
      .then(data => {
        this.setState({
          username: data.data.login,
          name: data.data.name,
          avatar: data.data.avatar_url,
          repos: data.data.public_repos,
          homeURL: data.data.html_url,
          followers: data.data.followers,
          following: data.data.following,
          notFound: data.data.message
        })
      })
      .catch(err => console.log(err))
    console.log("clicked")
  }
  componentDidMount() {
    this.getProfile(this.state.username)
  }
  render() {
    return (
      <div>
        <section id="card">
          {console.log(this.state)}
          <Search searchProfile={this.getProfile} />
          <Profile userdata={this.state} />
        </section>
      </div>
    )
  }
}

export default Githubapi
