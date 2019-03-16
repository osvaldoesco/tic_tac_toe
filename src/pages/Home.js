import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
//Const
import { zeroGreenImg, xGreenImg  } from '../const/Game';

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      page: 'Home'
    }
  }

  render() {
    return (
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
            <a href="/classic">
              <img alt="classic" title="classic" src={xGreenImg} width="200"/>
            </a>
            <h4 className="title-inf"> CLASSIC </h4>
            <p className="text-inf">
              In this app we have two differents modes, one is the classic 3x3 grid,
              the second one is a customized grid, you can choose the grid dimensions.
            </p>
          </Col>
          <Col xs="12" md={{ size: 4 }} className="text-center">
            <a href="customized">
              <img alt="customized" title="customized" src={zeroGreenImg} width="200"/>
            </a>
            <h4 className="title-inf"> NxN Mode </h4>
            <p className="text-inf">
              In this app we have two differents modes, one is the classic 3x3 grid,
              the second one is a customized grid, you can choose the grid dimensions.
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
