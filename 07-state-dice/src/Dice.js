import React, { Component } from "react";
import './Dice.css'

class Dice extends Component {

  render() {
    return (
      <div className="Dice">
        <h1>
          <i className={`${this.props.die01} ${this.props.shake && 'shake'} `} />
          <i className={`${this.props.die02} ${this.props.shake && 'shake'} `} />

        </h1>
      </div>
    );
  }
}

export default Dice;
