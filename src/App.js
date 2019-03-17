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
                      src="/assets/img/logo1.png"
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
        <Container>
          <Row>
            <Col xs={{offset: 2, size: 8}} md={{ offset: 0, size: 6}}>
              <div className="footer-section1">
                <img
                  alt="logo-footer"
                  title="logo-footer"
                  src="/assets/img/logo-footer.png"
                  width="100" />
                <p>Copyrights all reserved. Designed and developed in March 15th 2019</p>
              </div>
            </Col>
            <Col xs={{offset: 2, size: 8}} md={{ offset: 0, size: 6}}>
              <div className="footer-section2">
                <p> Name: Osvaldo Escobar. </p>
                <p> Phone: +(503)72606072 </p>
                <p> Email: eoeg1410@gmail.com </p>
              </div>
            </Col>
          </Row>
        </Container>
        </footer>
      </div>
    );
  }
}

export default App;
