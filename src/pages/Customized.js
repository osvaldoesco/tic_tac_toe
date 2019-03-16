import React, { Component } from 'react';
import Game from '../components/Game';

class Customized extends Component {
  constructor(props){
    super(props);
    this.state = { page: 'Customized'};
  }

  render() {
    return (
      <Game n={10} />
    );
  }
}

export default Customized;
