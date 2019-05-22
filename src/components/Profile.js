import React, { Component } from "react"

class Profile extends Component {
  render() {
    const userData = this.props.userdata
    const followers = `${userData.homeURL}/followers`
    const following = `${userData.homeURL}/following`
    const repos = `${userData.homeURL}/repositories`

    if (userData.notFound === "Not Found") {
      return (
        <div className="notfound">
          <h2>HEY</h2>
          <p>User with that username not found!</p>
        </div>
      )
    } else {
      return (
        <section className="github-profile">
          <div className="github-profile-info">
            <a
              href={userData.homeUrl}
              target="_blank"
              title={userData.name || userData.username}
            >
              <img src={userData.avatar} />
            </a>
            <h2>
              <a
                href={userData.homeUrl}
                title={userData.username}
                target="_blank"
              >
                {userData.name || userData.username}
              </a>
            </h2>
            <h3>{userData.location}</h3>
          </div>
          <div className="github-profile-state">
            <ul>
              <li>
                <a href={followers} target="_blank" title="Number Of Followers">
                  <i>{userData.followers}</i>
                  <span>Followers</span>
                </a>
              </li>
              <li>
                <a href={repos} target="_blank" title="Number Of Repositoriy">
                  <i>{userData.repos}</i>
                  <span>Repositoriy</span>
                </a>
              </li>
              <li>
                <a href={following} target="_blank" title="Number Of Following">
                  <i>{userData.following}</i>
                  <span>Following</span>
                </a>
              </li>
            </ul>
          </div>
        </section>
      )
    }
  }
}
export default Profile
