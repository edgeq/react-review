import React, { Component } from "react";
import './Coin.css'

class Coin extends Component {
  render() {
    return (
      <div className="Coin">
        <img src={this.props.face} alt={this.props.side} />
        <h2>Total flips: {this.props.flips}</h2>
        <p> heads = {this.props.heads} </p>
        <p> tails = {this.props.tails} </p>
      </div>
    );
  }
}

export default Coin;
