import React, { Component } from 'react'

export default class Temp extends Component {

  state = {
    loading: true
  }

async componentDidMount() {
  const url = "https://randomuser.me/api";
  const response = await fetch(url);
  const data = await response.json();
  this.setState({ person: data.results[0], loading: false })
  console.log(data.results[0]);
}

  render() {
    return (
      <div>
        {this.state.loading || !this.state.person ? (
          <div>loading...</div>
         ) : (
          <div>
            <div>{this.state.person.name.last}, {this.state.person.name.first}</div>
            <div>{this.state.person.name.last}</div>
            <div>{this.state.person.login.password}</div>
            <img src={this.state.person.picture.large}/>
          </div>
         )}
      </div>
    )
  }
}
