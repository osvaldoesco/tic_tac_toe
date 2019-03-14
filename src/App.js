import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import TicItem from './components/TicItem';

import 'bootstrap/dist/css/bootstrap.css';
import './App.sass';

class App extends Component {

  constructor(props) {
    super(props);
    let n = 3;
    let matrix = [];
    let turn = 0;
    for(let i=0; i<n; i++) {
      matrix[i] = [];
      for(let j=0; j<n; j++) {
        matrix[i][j] = null;
      }
    }
    this.state = { matrix, n, turn };
  }

  listTicItems = () => {
    let content, contentOuter;
    contentOuter = this.state.matrix.map((item, i) => {
      content = this.state.matrix[i].map((item, index) => {
        return (
          <button key={index} onClick={() => this.setValue(i, index) }>
            <TicItem value={item}/>
          </button>
        );
      });
      return (<div key={i} className="tic-row">{content}</div>)
    });
    return contentOuter;
  }

   isEven = (turn) => {
    let value = (turn % 2 === 0) ? true : false;
   return value;
  }

  setValue = (i, j) => {
    let { matrix, turn, n } = this.state;
    if(matrix[i][j] === null){
      let value = (this.isEven(turn)) ? "X" : "0";
      matrix[i][j] = value;
      this.setState({ matrix });
      let track = this.evaluateWinner(value);
      if(track === 1){
        alert('Ganaste');
      }
      this.setState({turn: turn+1 });
      if(turn ===((n*n)-1) && (track===0)){
        alert("Empate");
        return 0;
      }
    } else {
      alert("Seleccione otro espacio");
    }
  }

  evaluateWinner = (value) => {
    //varaible Counter for posible winner
    let optionsCounter = 0;
    let { matrix, n } = this.state;
    //Counter for horizontal options
    for(let i = 0; i<n; i++ ){
      for(let j = 0; j<n; j++ ){
        if(matrix[i][j] === value){
          optionsCounter++;
        }
      }
      if(optionsCounter===n){
        return 1;
      }
      optionsCounter = 0;
    }
    optionsCounter = 0;
    //Counter for vertical options
    for(let j = 0; j<n; j++ ){
      for(let i = 0; i<n; i++ ){
        if(matrix[i][j] === value){
          optionsCounter++;
        }
      }
      if(optionsCounter===n){
        return 1;
      }
      optionsCounter = 0;
    }
    optionsCounter = 0;
    //Fisrt diagonal option
    for(let i = 0; i<n; i++ ){
      if(matrix[i][i] === value){
        optionsCounter++;
      }

    }
    if(optionsCounter===n){
      return 1;
    }
    optionsCounter = 0;
    //Second vertical option
    for(let i = 0; i<n; i++ ){
      if(matrix[i][n-i-1] === value){
        console.log("cord", "Entro");
        optionsCounter++;
      }

    }
    if(optionsCounter===n){
      return 1;
    }
    optionsCounter = 0;
    return 0;
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
