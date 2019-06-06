import React, { Component } from 'react';

class Dice extends Component {
  static defaultProps = {
    dieFace : ['one', 'two', 'three', 'four', 'five', 'six']
  }

  constructor(props) {
    super(props);
    this.state = {
      diceFace01 : 'fas fa-dice-one',
      diceFace02 : 'fas fa-dice-six',
    }
  }

  roll = (e) => {
    let faClass = 'fas fa-dice-';
    let dieVal01 = Math.floor(Math.random() * this.props.dieFace.length);
    let dieVal02 = Math.floor(Math.random() * this.props.dieFace.length);
    let diceVal01 = faClass + this.props.dieFace[dieVal01];
    let diceVal02 = faClass + this.props.dieFace[dieVal02];
    this.setState({diceFace01 : diceVal01, diceFace02 : diceVal02});

  }

  render() {
    return (
      <div className="Dice">

        <h1><i className={this.state.diceFace01}></i><i className={this.state.diceFace02}></i></h1>

        <button className="btn" onClick={this.roll}>Roll Dice</button>
      </div>
    )
  }
}

export default Dice;