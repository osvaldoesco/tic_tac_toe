import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

library.add(faTimes);

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      page: 'Home',
      showCustomized: false,
      value: ''
    }
  }

  onCustomizedChange = (e) => {
    e.preventDefault();
    this.setState({
      showCustomized: !this.state.showCustomized
    });
  }

  onValueChange = (e) => {
    let value = e.target.value;
    this.setState({ value });
  }

  redirectToCustomized = () => {
    if(this.state.value == parseInt(this.state.value, 10)){
      this.props.history.push(`/customized/${parseInt(this.state.value, 10)}`);
    } else {
      console.log("Error");
    }
  }

  render() {
    return (
      <Container>
        <Row>
          <Col xs="12" md={{offset:2, size: 8}} >
            <div className="home-preview__cont">
              <img alt="preview" title="preview" src="/assets/img/preview.png" className="home-preview__img"/>
            </div>
          </Col>
        </Row>
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
              <img alt="classic" title="classic" src="/assets/img/classic.png" width="200"/>
            </a>
            <h4 className="title-inf"> CLASSIC </h4>
            <p className="text-inf">
              In this app we have two differents modes, one is the classic 3x3 grid,
              the second one is a customized grid, you can choose the grid dimensions.
            </p>
          </Col>
          <Col xs="12" md={{ size: 4 }} className="text-center">
            { (this.state.showCustomized) ?
              <div className="customized-value padding-100px">
                <a
                  href="/"
                  onClick={(e) => this.onCustomizedChange(e)}
                  className="close-customized">
                  <FontAwesomeIcon icon="times" />
                </a>
                <h4 className="title-inf">Insert N's value</h4>
                <input
                  name="value"
                  className="form-control"
                  placeholder="Insert"
                  type="number"
                  value={this.state.value}
                  onChange={(e) => this.onValueChange(e)} />
                <button
                  onClick={() => this.redirectToCustomized()}>
                  Play!
                </button>
              </div>
              :
              <div>
                <a href="/" onClick={(e) => this.onCustomizedChange(e)}>
                  <img alt="customized" title="customized" src="/assets/img/customized.png" width="200" />
                </a>
                <h4 className="title-inf"> NxN Mode </h4>
                <p className="text-inf">
                  In this app we have two differents modes, one is the classic 3x3 grid,
                  the second one is a customized grid, you can choose the grid dimensions.
                </p>
              </div>
            }
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
