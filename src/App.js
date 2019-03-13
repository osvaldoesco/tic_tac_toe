import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import TicItem from './components/TicItem';

import 'bootstrap/dist/css/bootstrap.css';
import './App.sass';

class App extends Component {

  constructor(props) {
    super(props);
    let n = 5;
    let matrix = [];
    for(let i=0; i<n; i++) {
      matrix[i] = [];
      for(let j=0; j<n; j++) {
        matrix[i][j] = null;
      }
    }
    this.state = { matrix };
  }

  listTicItems = () => {
    let content, contentOuter;
    contentOuter = this.state.matrix.map((item, i) => {
      content = this.state.matrix[i].map((item, index) => {
        return (
          <button key={index} onClick={() => this.setValue(i, index, "0") }>
            <TicItem value={item}/>
          </button>
        );
      });
      return (<div className="tic-row">{content}</div>)
    });
    return contentOuter;
  }

  setValue = (i, j, value) => {
    let { matrix } = this.state;
    if(matrix[i][j] === null){
      matrix[i][j] = value;
      this.setState({ matrix });
    } else {
      alert("Seleccione otro espacio");
    }
  }

  render() {
    return (
      <div className="App">
        <h1 className="title">
          <span>Tic </span>
          <span>Tac </span>
          <span>Toe </span>
        </h1>
        {this.listTicItems()}
        <div className="game-container">
          <Container>
            <Row>
              <Col xs="4" md={{size: 2, offset: 3}}>
                <div className="tic-item">
                  hola
                </div>
              </Col>
              <Col xs="4" md={{size: 2}}>
                <div className="tic-item">
                  hola
                </div>
              </Col>
              <Col xs="4" md={{size: 2}}>
                <div className="tic-item">
                  hola
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs="4" md={{size: 2, offset: 3}}>
                <div className="tic-item">
                  hola
                </div>
              </Col>
              <Col xs="4" md={{size: 2}}>
                <div className="tic-item">
                  hola
                </div>
              </Col>
              <Col xs="4" md={{size: 2}}>
                <div className="tic-item">
                  hola
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs="4" md={{size: 2, offset: 3}}>
                <div className="tic-item">
                  hola
                </div>
              </Col>
              <Col xs="4" md={{size: 2}}>
                <div className="tic-item">
                  hola
                </div>
              </Col>
              <Col xs="4" md={{size: 2}}>
                <div className="tic-item">
                  hola
                </div>
              </Col>
            </Row>

            <Row>
              <Col xs="4" md={{size: 2, offset: 3}}>
                <Button
                  onClick={() => this.setValue(0,0,"X")}
                  color="primary"
                  className="btn-reset">
                  Reset
                </Button>
              </Col>
            </Row>
          </Container>
        </div>
        <footer>
          Osvaldo Escobar - Applaudo Studios
        </footer>
      </div>
    );
  }
}

export default App;
