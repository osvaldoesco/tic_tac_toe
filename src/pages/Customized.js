import React, { Component } from 'react';
import Game from '../components/Game';

class Customized extends Component {
  constructor(props){
    super(props);
    let param = this.props.match.params.n;
    let n = (param == parseInt(param, 10)) ? parseInt(param, 10) : null;
    this.state = { page: 'Customized', n};
  }

  render() {
    if (this.state.n == null){
      return (
        <div className="error-message-container">
          <h2> Error !!! </h2>
          <p> It seems like N isn't an integer num, send a Integer num and try again </p>
        </div>
      );
    } else {
      return (
        <Game n={this.state.n} />
      );
    }
  }
}

export default Customized;
