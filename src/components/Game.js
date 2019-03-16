import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import TicItem from './TicItem';
import { value0, valueX, grid3 } from '../const/Game';

class Game extends Component {
  constructor(props){
    super(props);
    let n = props.n;
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
      <Container>
        <Row className="padding-20px">
          { (this.state.n === grid3) ?
            <Col xs={{offset: 1, size: 10}} md={{offset:4, size:4}}>
              <table>
                <tbody>
                {this.listTicItems()}
                </tbody>
              </table>
            </Col>
            :
            <Col xs="12" md={{offset:3, size:6}}>
              <table>
                <tbody>
                  {this.listTicItems()}
                </tbody>
              </table>
            </Col>
          }
        </Row>
        <Row className="padding-20px">
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
    );
  }
}

export default Game;
