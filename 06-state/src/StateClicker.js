import React, { Component } from 'react';

class StateClicker extends Component {
  static defaultProps = {
    animals : [ '\u{1F407}', '\u{1F9B9}\u{200D}\u{2642}\u{FE0F}', '\u{1F404}', '\u{1F42E}', '\u{1F426}', '\u{1F43A}', '\u{1F41F}', '\u{1F419}', '\u{1F407}', '\u{1F42A}' ]
  }
  // tried doing the shorthand. Just to see how it feels. 
  state = {
    num: 8
  }

  handleClick = (e) => {
    let currentNum = this.state.num;
    currentNum = Math.floor(Math.random() * this.props.animals.length);
    console.log(currentNum);
    this.setState({num: currentNum})
  }

  render() {
    return (
      <div className="StateClicker">
       <h1 className="StateClicker-h1" style={{fontSize: '5em'}}>{this.props.animals[this.state.num]}</h1>
       {this.state.num === 7 
        ? <h2>YOU WIN!!</h2>
        : <button onClick={this.handleClick}>Change num</button>
       }
      </div>
    )
  }
}

export default StateClicker;