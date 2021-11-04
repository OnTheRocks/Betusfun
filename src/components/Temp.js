import React, { Component } from 'react'

export default class Temp extends Component {

  state = {
    loading: true
  }

async componentDidMount() {
  const url = "https://api.sportsdata.io/v3/nfl/stats/json/BoxScores/2020REG/1?key=c6cb2c329eca411389181703e4302617";
  const response = await fetch(url);
  const data = await response.json();
  // this.setState({ schedule: data.GameKey, loading: false })
  console.log(data);
}

  render() {
    return (
      <div>
        
      </div>
    )
  }
}







// {this.state.loading || !this.state.data.week ? (
//           <div>loading...</div>
//          ) : (
//          <div>
//             <div>{this.state.data.week}</div>
//             <div>{this.state.person.name.last}</div>
//             <div>{this.state.person.login.password}</div>
//             <img src={this.state.person.picture.large}/>
//           </div>
//          )} 