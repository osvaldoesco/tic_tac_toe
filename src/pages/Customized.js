import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

class Customized extends Component {
  constructor(props){
    super(props);
    this.state = {
      page: 'Customized'
    }
  }

  render() {
    return (
      <fragment>
        <h1>Customizedc</h1>
      </fragment>
    );
  }
}

export default Customized;
