import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
// import Confetti from 'react-confetti';
//Style
import 'bootstrap/dist/css/bootstrap.css';
import './App.sass';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <Container>
            <Row>
              <Col xs={{offset: 3, size: 6}} md={{ offset: 0, size: 3}}>
                <div className="brand-logo">
                  <a href="/">
                    <img
                      alt="logo"
                      title="logo"
                      src="/assets/img/game/0_purple.png"
                      width="100" />
                  </a>
                </div>
              </Col>
            </Row>
          </Container>
        </header>

        <div className="cotent">
          {this.props.children}
        </div>

        <footer>
          Osvaldo Escobar - Applaudo Studios
        </footer>
      </div>
    );
  }
}

export default App;
