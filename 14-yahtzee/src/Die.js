import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  static defaultProps = {
    numWords: ["one", "two", "three", "four", "five", "six"],
    val: Math.floor(Math.random() * 6)
  }
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.props.handleClick(this.props.idx)
  }
  render() {

    let classes = `Die fas fa-dice-${this.props.numWords[this.props.val - 1]} fa-4x`;
    if(this.props.locked) classes += ' Die-locked';
    if(this.props.rolling) classes += ' Die-rolling'
    return (
      <i
        className={classes}
        onClick={this.handleClick}
      >
      </i>
    );
  }
}

export default Die;
