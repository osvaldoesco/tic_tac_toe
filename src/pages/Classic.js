import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

class Classic extends Component {
  constructor(props){
    super(props);
    this.state = {
      page: 'Classic'
    }
  }

  render() {
    return (
      <fragment>
        <h1>Classic</h1>
      </fragment>
    );
  }
}

export default Classic;
