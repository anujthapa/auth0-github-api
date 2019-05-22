import React, { Component } from "react"
//getProfile
class Search extends Component {
  submitHandaler = e => {
    e.preventDefault()
    const value = this.refs.username.value
    this.props.searchProfile(value)
  }
  render() {
    return (
      <div className="search-box">
        <form onSubmit={this.submitHandaler}>
          <label>
            <input
              typeof="search"
              ref="username"
              placeholder="Type User Name and Hit Enter"
            />
          </label>
        </form>
      </div>
    )
  }
}
export default Search
