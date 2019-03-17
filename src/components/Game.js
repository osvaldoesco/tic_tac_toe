import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Confetti from 'react-confetti';
import TicItem from './TicItem';
//Const
import { value0, valueX, grid3,
  zeroGreenImg, xGreenImg, valueXWinner, value0Winner  } from '../const/Game';

//puttting confetti in all the page :D
const heightW = window.innerHeight + 'px';
const widthW = window.innerWidth + 'px';


class Game extends Component {
  constructor(props){
    super(props);
    let n = props.n;
    let matrix = [];
    let turn = 0;
    let live = true;
    let winner = null;
    let chooseSpace = false;
    let tie = false;
    let confetti = false;
    for(let i=0; i<n; i++) {
      matrix[i] = [];
      for(let j=0; j<n; j++) {
        matrix[i][j] = null;
      }
    }
    this.state = { matrix, n, turn, live, winner, chooseSpace, confetti };
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
    this.setState({chooseSpace: false});
    if(this.state.live === false) return 0;//Verify if the game still live
    let { matrix, turn, n } = this.state;
    //Validate if the space is available
    if(matrix[i][j] === null){
      let value = (this.isEven(turn)) ? valueX : value0; //Check the turn value
      matrix[i][j] = value; //
      this.setState({ matrix });
      let track = this.evaluateWinner(value);
      if(track === 1){
        this.setState({live: false, winner: value, confetti: true});//Select the winner
        setTimeout(() => {
          let matrix2 = this.state.matrix;
          let valueW = (value=== valueX ) ? valueXWinner : value0Winner;
          this.state.winnerCom.forEach((cor) => {
            matrix[cor.i][cor.j] = valueW;
          });
          this.setState({matrix: matrix2});
        },200);
        setTimeout(() => {this.setState({confetti: false});},4000);
      }
      this.setState({turn: turn+1 });
      if(turn ===((n*n)-1) && (track===0)){
        this.setState({live: false, tie: true});//TIE in the game

        return 0;
      }
    } else {
      if(this.state.live){
        this.setState({chooseSpace: true});
      }
    }
  }

  evaluateWinner = (value) => {
    //varaible Counter for posible winner
    let optionsCounter = 0;
    let { matrix, n } = this.state;
    let winnerCom = [];
    //Counter for horizontal options
    for(let i = 0; i<n; i++ ){
      for(let j = 0; j<n; j++ ){
        if(matrix[i][j] === value){
          optionsCounter++;
          winnerCom.push({i, j});
        }
      }
      if(optionsCounter===n){
        this.setState({winnerCom});
        return 1;
      }
      optionsCounter = 0;
    }
    optionsCounter = 0;
    winnerCom =[];
    //Counter for vertical options
    for(let j = 0; j<n; j++ ){
      for(let i = 0; i<n; i++ ){
        if(matrix[i][j] === value){
          optionsCounter++;
          winnerCom.push({i, j});
        }
      }
      if(optionsCounter===n){
        this.setState({winnerCom});
        return 1;
      }
      optionsCounter = 0;
    }
    optionsCounter = 0;
    winnerCom =[];
    //Fisrt diagonal option
    for(let i = 0; i<n; i++ ){
      if(matrix[i][i] === value){
        optionsCounter++;
        winnerCom.push({i, j:i});
      }

    }
    if(optionsCounter===n){
      this.setState({winnerCom});
      return 1;
    }
    optionsCounter = 0;
    winnerCom =[];
    //Second vertical option
    for(let i = 0; i<n; i++ ){
      if(matrix[i][n-i-1] === value){
        console.log("cord", "Entro");
        optionsCounter++;
        winnerCom.push({i, j:n-i-1});
      }

    }
    if(optionsCounter===n){
      this.setState({winnerCom});
      return 1;
    }
    optionsCounter = 0;
    return 0;
  }

  resetGame = () => {
    let live = true;
    let {matrix, n} = this.state;
    let turn = 0;
    let winner = null;
    let tie = false;
    for(let i=0; i<n; i++) {
      matrix[i] = [];
      for(let j=0; j<n; j++) {
        matrix[i][j] = null;
      }
    }

    this.setState({ live, matrix, turn, winner, tie });
  }

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <div className="messages-cont padding-20px">
              { (this.state.winner !== null) ?
                <div className="win-message">
                  You won
                  <img
                    alt="winner"
                    title="winner"
                    src={(this.state.winner === valueX) ? xGreenImg : zeroGreenImg}
                    className="winner-img"/>
                    <Confetti
                       width={widthW}
                       height={heightW}
                       numberOfPieces={300}
                       recycle={false}
                       className={`confe ${(this.state.confetti) ? '' : 'display-none'}`}
                     />
                </div>
                :
                ''
              }
              { (this.state.tie) ?
                <div className="tie-message">
                  TIE <span>TIE</span>
                </div>
                :
                ''
              }
              { (this.state.chooseSpace) ?
                <div className="select-message">
                  Select another space
                </div>
                :
                ''
              }
            </div>
          </Col>
        </Row>
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
                className={`player-button ${ (!this.isEven(this.state.turn) && this.state.live) ? 'opacity03' : '' } `}>
                Player 1
              </button>
            </div>
          </Col>
          <Col xs="6" md={{ size:3 }}>
            <div className="player-div">
              <button
                className={`player-button__purple ${ (this.isEven(this.state.turn) && this.state.live) ? 'opacity03' : '' } `}>
                Player 2
              </button>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs="12" md={{offset:4, size:4}}>
            <div className="reset-cont">
              <button onClick={() => this.resetGame()} className="btn-reset">
                Reset
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Game;
