import React, { Component } from "react";

class Dice extends Component {

  render() {
    return (
      <div className="Dice">
        <h1>
          <i className={this.props.die01} />
          <i className={this.props.die02} />
        </h1>
      </div>
    );
  }
}

export default Dice;
