import React, { Component } from "react";
import Dice from "./Dice";

class RollDice extends Component {
  static defaultProps = {
    dieFace: ["one", "two", "three", "four", "five", "six"]
  };

  constructor(props) {
    super(props);
    this.state = {
      diceFace01: "fas fa-dice-one",
      diceFace02: "fas fa-dice-six"
    };
  }

  roll = e => {
    let faClass = "fas fa-dice-";
    let dieVal01 = Math.floor(Math.random() * this.props.dieFace.length);
    let dieVal02 = Math.floor(Math.random() * this.props.dieFace.length);
    let diceVal01 = faClass + this.props.dieFace[dieVal01];
    let diceVal02 = faClass + this.props.dieFace[dieVal02];
    this.setState({ diceFace01: diceVal01, diceFace02: diceVal02 });
  };
  render() {
    return (
      <div className="RollDice">
        <Dice die01={this.state.diceFace01} die02={this.state.diceFace02} />

        <button className="btn" onClick={this.roll}>
          Roll Dice
        </button>
      </div>
    );
  }
}

export default RollDice;
