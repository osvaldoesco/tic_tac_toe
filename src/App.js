import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import TicItem from './components/TicItem';
import Confetti from 'react-confetti';
//Const
import { value0, valueX, zeroGreenImg, xGreenImg,  } from './const/Game';


import 'bootstrap/dist/css/bootstrap.css';
import './App.sass';

class App extends Component {

  constructor(props) {
    super(props);
    let n = 3;
    let matrix = [];
    let turn = 0;
    let live = true;
    for(let i=0; i<n; i++) {
      matrix[i] = [];
      for(let j=0; j<n; j++) {
        matrix[i][j] = null;
      }
    }
    this.state = { matrix, n, turn, live };
  }

  listTicItems = () => {
    let content, contentOuter;
    contentOuter = this.state.matrix.map((item, i) => {
      content = this.state.matrix[i].map((item, index) => {
        return (
          <td key={index} onClick={() => this.setValue(i, index) }>
            <TicItem value={item}/>
          </td>
        );
      });
      return (<tr key={i} className="tic-row">{content}</tr>)
    });
    return contentOuter;
  }

  isEven = (turn) => {
    let value = (turn % 2 === 0) ? true : false;
    return value;
  }

  setValue = (i, j) => {
    if(this.state.live === false) return 0;//Verify if the game still live
    let { matrix, turn, n } = this.state;
    //Validate if the space is available
    if(matrix[i][j] === null){
      let value = (this.isEven(turn)) ? valueX : value0; //Check the turn value
      matrix[i][j] = value; //
      this.setState({ matrix });
      let track = this.evaluateWinner(value);
      if(track === 1){
        this.setState({live: false});
        alert('Ganaste');
      }
      this.setState({turn: turn+1 });
      if(turn ===((n*n)-1) && (track===0)){
        this.setState({live: false});
        alert("Empate");
        return 0;
      }
    } else {
      if(this.state.live){
        alert("Seleccione otro espacio");
      }
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

  resetGame = () => {
    let live = true;
    let {matrix, n} = this.state;
    let turn = 0;
    for(let i=0; i<n; i++) {
      matrix[i] = [];
      for(let j=0; j<n; j++) {
        matrix[i][j] = null;
      }
    }
    this.setState({ live, matrix, turn });
  }
  render() {
    return (
      <div className="App">
        <header>
          <Container>
            <Row>
              <Col xs={{offset: 3, size: 6}} md={{ offset: 0, size: 3}}>
                <div className="brand-logo">
                  <img
                    alt="logo"
                    title="logo"
                    src="/assets/img/game/0_purple.png"
                    width="100" />
                </div>
              </Col>
            </Row>
          </Container>
        </header>

        <div className="cotent">
          <Container>
            <Row>
              <Col xs="12" md={{offset:2, size: 8}}>
                <h3 className="title-inf"> DESCRIPTION </h3>
                <p className="text-inf">
                  Tic-tac-toe (American English), noughts and crosses (British English)
                  or Xs and Os, is a paper-and-pencil game for two players, X and O, who
                  take turns marking the spaces in a 3×3 grid. The player who succeeds
                  in placing three of their marks in a horizontal, vertical, or diagonal
                  row wins the game.
                </p>
              </Col>
            </Row>
            <Row className="padding-40px">
              <Col xs="12" md={{offset:2, size: 8}}>
                <h3 className="title-inf"> GAME MODES </h3>
                <p className="text-inf">
                  In this app we have two differents modes, one is the classic 3x3 grid,
                  the second one is a customized grid, you can choose the grid dimensions.
                </p>
              </Col>
            </Row>
            <Row className="padding-40px">
              <Col xs="12" md={{offset:2, size:4}} className="text-center">
                <img alt="classic" title="classic" src={xGreenImg} width="200"/>
                <h4 className="title-inf"> CLASSIC </h4>
                <p className="text-inf">
                  In this app we have two differents modes, one is the classic 3x3 grid,
                  the second one is a customized grid, you can choose the grid dimensions.
                </p>
              </Col>
              <Col xs="12" md={{ size: 4 }} className="text-center">
                <img alt="customized" title="customized" src={zeroGreenImg} width="200"/>
                <h4 className="title-inf"> NxN Mode </h4>
                <p className="text-inf">
                  In this app we have two differents modes, one is the classic 3x3 grid,
                  the second one is a customized grid, you can choose the grid dimensions.
                </p>
              </Col>
            </Row>
            <Row className="padding-40px">
              <Col xs="12" md={{offset:2, size:8}}>
                <table>
                  {this.listTicItems()}
                </table>
              </Col>
            </Row>
            <Row className="padding-40px">
              <Col xs="6" md={{offset:3, size:3}}>
                <div className="player-div">
                  <button
                    className={`player-button ${ this.isEven(this.state.turn)? '' : 'opacity03' } `}>
                    Player 1
                  </button>
                </div>
              </Col>
              <Col xs="6" md={{ size:3 }}>
                <div className="player-div">
                  <button
                    className={`player-button__purple ${ this.isEven(this.state.turn)? 'opacity03' : '' } `}>
                    Player 2
                  </button>
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs="12" md={{offset:2, size:8}}>
                <button onClick={() => this.resetGame()} className="btn-reset">
                  Reset
                </button>
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
