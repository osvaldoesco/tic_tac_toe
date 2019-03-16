import React, { Component } from 'react';
import Game from '../components/Game';

class Classic extends Component {
  constructor(props){
    super(props);
    this.state = { page: 'Classic'};
  }

  render() {
    return (
      <Game n={3} />
    );
  }
}

export default Classic;
